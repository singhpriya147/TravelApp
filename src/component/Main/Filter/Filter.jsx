import './Filter.css';
import { useContext, useState } from 'react';
import { properties } from '../../../data/data';
import { AppContext } from '../../../Context';
import { CiLocationOn } from 'react-icons/ci';

const Filter = () => {
  const { dispatch } = useContext(AppContext);
  const [place, setPlace] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const [star, setStar] = useState('');

  const handlePlaceFilter = (e) => {
    setPlace(e.target.value);
    const prevData = properties;
    const filteredData = prevData.filter((item) =>
      item?.location?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    dispatch({
      type: 'APPLY_FILTER',
      payload: filteredData,
    });
  };

  const handleRatingFilter = (e) => {
    setStar(parseInt(e.target.value));
    const selectedRating = e.target.value;

    const filteredData = properties.filter(
      (item) => item?.starRating === parseInt(selectedRating)
    );

    dispatch({
      type: 'APPLY_FILTER',
      payload: filteredData,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    console.log(name);
    const newFilter = selectedFilter === name ? '' : name;
    console.log(newFilter);
    setSelectedFilter(newFilter);

    const prevData = properties;
    const filteredData = prevData.filter((item) => {
      if (newFilter && item.features[newFilter] !== true) {
        return false;
      }
      return true;
    });

    dispatch({
      type: 'APPLY_FILTER',
      payload: filteredData,
    });
  };

  return (
    <div className='filter-wrapper'>
      <h3>Filters</h3>
      <div className='filter-categories'>
        <select
          name=''
          id=''
          value={place}
          onChange={handlePlaceFilter}
          className='options'
        >
          <option value='' disabled selected hidden>
            <CiLocationOn /> Select place
          </option>
          <option value='France'>France</option>
          <option value='England'>England</option>
          <option value='Germany'>Germany</option>
        </select>
      </div>
      <div className='filter-categories'>
        <h3>Popular Filters</h3>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className='filter'>
            <div>Free Wifi </div>
            <input
              type='checkbox'
              name='freeWifi'
              id='freeWifi'
              checked={selectedFilter === 'freeWifi'}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className='filter'>
            <div>Pool</div>
            <input
              type='checkbox'
              name='pool'
              id='pool'
              checked={selectedFilter === 'pool'}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className='filter'>
            <div>Gym </div>
            <input
              type='checkbox'
              name='gym'
              id='gym'
              checked={selectedFilter === 'gym'}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className='filter'>
            <div>Breakfast</div>
            <input
              type='checkbox'
              name='breakfastIncluded'
              id='breakfast'
              checked={selectedFilter === 'breakfastIncluded'}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className='filter'>
            <div>Pets Allowed </div>
            <input
              type='checkbox'
              name='petsAllowed'
              id='petsAllowed'
              checked={selectedFilter === 'petsAllowed'}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
      </div>
      <div className='filter-categories'>
        <h3>Star Ratings</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className='filter'>
            <div>5 stars </div>
            <input
              type='checkbox'
              name='starRating'
              id='5stars'
              value={5}
              checked={star === 5} // Check if the value matches the selected star
              onChange={handleRatingFilter}
            />
          </div>
          <div className='filter'>
            <div>4 stars</div>
            <input
              type='checkbox'
              name='starRating'
              id='4stars'
              value={4}
              checked={star === 4}
              onChange={handleRatingFilter}
            />
          </div>
          <div className='filter'>
            <div>3 stars </div>
            <input
              type='checkbox'
              name='starRating'
              id='3stars'
              value={3}
              checked={star === 3}
              onChange={handleRatingFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
