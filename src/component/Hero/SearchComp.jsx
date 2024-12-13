import { properties } from '../../data/data';
import { useContext ,useState} from 'react';
import { AppContext } from '../../Context';
import { IoIosArrowRoundForward } from 'react-icons/io';
const SearchComp = () => {

const [search, setSearch] = useState('');
const { dispatch } = useContext(AppContext);
const submitHandler = (e) => {
  e.preventDefault();
  console.log('Search submitted: ', search);

  const prevData = properties;
  const filteredData = prevData.filter((item) =>
    item?.location?.toLowerCase().includes(search.toLowerCase())
  );
  dispatch({
    type: 'APPLY_FILTER',
    payload: filteredData,
  });
};
const handleChange = (e) => {
  setSearch(e.target.value);
};



  return (
    <div>
      <form
        action='
'
        onSubmit={submitHandler}
        style={{
          display: 'flex',
          gap: '2rem',

          width: '25rem',
          position: 'absolute',
          left: '0',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <input
          type='text'
          placeholder='Type your destiniation'
          onChange={handleChange}
          value={search}
          style={{
            height: '2rem',
            width: '100%',
            borderRadius: '5px',
            border: 'none',
          }}
        />

        <button
          type='submit'
          style={{
            position: 'absolute',
            right: '0.2rem',
            backgroundColor: '#11a176',
            height: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IoIosArrowRoundForward
            style={{ fontSize: '25px', color: 'white' }}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchComp;
