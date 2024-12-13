import img1 from '../../assets/pexels-gaetanthurin-1536029.jpg';

import { IoIosArrowRoundForward } from 'react-icons/io';
import './Blog.css';
const Blog = () => {
  return (
    <section className='blog-wrapper'>
      <div className='blog-header'>
        <span>BLOG</span>
        <h4>
          Although a picture describes a thousand words, some story and
          experience are better described in detail
        </h4>
      </div>
      <div className='blog-list'>
        <div className='blog-img-container'>
          <div className='triangle2'></div>
          <img src={img1} alt='' />
          <div className='triangle3'></div>

          <div className='leftBox'>
            <div className='title'>Must Visit Destination</div>
            <div className='para'>
              Vivid Sydney is an annual festival of light ,music and ideas, held
              in
            </div>
          </div>
        </div>
        <div className='arrow-btn'>
          <div className='arrow1'>
            <IoIosArrowRoundForward style={{ fontSize: '30px' }} />
          </div>
          <div className='arrow2'>
            <IoIosArrowRoundForward style={{ fontSize: '30px' }} />
          </div>
        </div>
        <div className='blog-img-container'>
          <div className='triangle'></div>
          <img src={img1} alt='' />
          <div className='triangle1'></div>
          <div className='rightBox'>
            <div className='title'>The Best of France</div>
            <div className='para'>
              In the best imagination of ,French is often use as euphemism
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
