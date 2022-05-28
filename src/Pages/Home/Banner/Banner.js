import './Banner.css'
import bannerImg from '../../../Images/banner1.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="hero min-h-fit" style={{backgroundImage: `url(${bannerImg})`}}>
      <div className="hero-overlay bg-black opacity-50"></div>
      <div className="hero-content text-center text-white p-20">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Get The best Tools and Hardware in Town</p>
          <button className="btn btn-primary text-white font-bold"><Link to="/signup">Get Started</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;