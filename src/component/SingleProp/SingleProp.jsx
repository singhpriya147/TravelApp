
import './SingleProp.css';
import { CiLocationOn } from 'react-icons/ci';


import defaultImg from '../../assets/pexels-pierre-blache-651604-2901212.jpg';
import { CiStar } from 'react-icons/ci';


const SingleProp = ({ property }) => {




  return (
    <div>
      <div className='single-property'>
        <div>
          <img
            src={
              property?.images[0]?.original ||
              property.images[0] || { defaultImg }
            }
            height={200}
            width={200}
            className='image-div'
            alt=''
          />

          <h2>{property.name}</h2>
          <span>
            <CiLocationOn />
            {property.location}
          </span>
          <p style={{margin:0}}>
            <CiStar /> {property.starRating}
          </p>
          <div className='bookmark'>
            <b>
              ${property.price}
              <b />
              <span className='person'>/person</span>
            </b>
         
          </div>
          <div>
            <div className='feature-container'>
              {Object.keys(property.features)
                .filter((feature) => property.features[feature])
                .map((feature) => {
                  const featureMapping = {
                    freeWifi: 'WiFi',
                    pool: 'Pool',
                    gym: 'Gym',
                    breakfastIncluded: 'BreakFast',
                    petsAllowed: 'Pets',
                  };

                  const displayFeature = featureMapping[feature] || feature;
                 
                  return (
                    <span className='list' key={feature}>
                      {displayFeature}
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProp;
