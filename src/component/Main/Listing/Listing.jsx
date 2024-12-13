import { useContext } from 'react';
import {AppContext} from '../../../Context.jsx'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoIosArrowRoundBack } from 'react-icons/io';
import SingleProp from '../../SingleProp/SingleProp'
import './Listing.css'
const Listing = () => {
const { state,dispatch} = useContext(AppContext);
console.log(state)
const { data,page } = state;

console.log('data in property-listing', state);

if (!data || data.length === 0) {
  return <div>Loading properties...</div>;
}

const selectPageHandler=(newPage)=>{
dispatch({ type: 'SET_PAGE', payload: newPage });

}

return (
  <div>
    <div className='property-listing'>
      {data.slice(page * 9 - 9, page * 9).map((property) => (
        <>
          <SingleProp property={property} key={property.id} />
        </>
      ))}
    </div>
    <div>
      {data.length > 0 && (
        <div className='pagination'>
          <span>
            {' '}
            <IoIosArrowRoundBack />
          </span>

          {[...Array(Math.ceil(data.length / 9))].map((_, i) => {
            return (
              <span
                onClick={() => selectPageHandler(i + 1)}
                key={i}
                style={{
                  height: '100px',
                  width: '100px',
                  borderRadius: '50%',
                  backgroundColor: '#17a379',
                }}
              >
                {i + 1}
              </span>
            );
          })}

          <span>
           
            <IoIosArrowRoundForward />
          </span>
        </div>
      )}
    </div>
  </div>
);
}

export default Listing