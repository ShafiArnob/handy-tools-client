import './Banner.css'
import bannerImg from '../../../Images/banner1.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div class="hero min-h-fit" style={{backgroundImage: `url(${bannerImg})`}}>
      <div class="hero-overlay bg-black opacity-50"></div>
      <div class="hero-content text-center text-white p-20">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">Get The best Tools and Hardware in Town</p>
          <button class="btn btn-primary text-white font-bold"><Link to="/signup">Get Started</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;