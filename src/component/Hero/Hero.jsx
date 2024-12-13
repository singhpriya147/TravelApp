
import './Hero.css';
import SearchComp from './SearchComp';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
const Hero = () => {


  return (
    <div className='hero-container'>
      <div style={{ display: 'flex' }}>
        <header className='hero-header'>
          <nav className='hero-nav'>
            <ul>
              <li>
                <a href='#'>Tour</a>
              </li>
              <li>
                <a href='#'>Documents</a>
              </li>
              <li>
                <a href='#'>Insurance</a>
              </li>
              <li>
                <a href='#'>About Us</a>
              </li>
            </ul>
          </nav>
          <div>
            <div className='circle'></div>
            <div className='circle1'></div>
          </div>

          <div className='header-right'>
            <div className='hero-logo'>ZOROTIN</div>
            <div className='hero-actions'>
              <div className='hero-language'>
                <img
                  src='https://flagcdn.com/us.svg'
                  alt='USA Flag'
                  className='flag-icon'
                />
                <span>USD</span>
              </div>
              <div className='hero-cart'>
                <HiOutlineShoppingCart  style={{height:'20px',width:'20px', color:'grey'}}/>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className='hero-text'>
        <span>europe</span>
      </div>
      <div className='hero-content'>
        {/* <h1 className='hero-title'>europe</h1>
        <div className='hero-search'>
          <input
            type='text'
            placeholder='Location, Address, or Destination'
            className='hero-search-input'
          />
          <button className='hero-search-btn'>→</button>
        </div> */}

        <img
          src='https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
        <div className='search-box'>
          <div>
            <SearchComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
