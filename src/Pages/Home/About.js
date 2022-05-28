import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="hero min-h-16">
  <div className="hero-content text-center py-32  w-full">
    <div className="max-w-100">
      <h1 className="text-5xl font-bold text-primary">About</h1>
      <p className="py-6 w-100">
        since 1999, we've been the web's leading free resource for business software help. We connect you to insights and software to help you do better work. We aim to list every product on the market, regardless of whether they pay us, so that you have a full view of all your options.
        It's crucial for us to think and act ethically, no matter what. We connect you with tools to help you succeed. Count on us to point you in the right direction. We always want to hear how we can better help you. Feel free to get in touch here.
      </p>
      <Link className='className="btn btn-primary p-5 rounded-2xl text-white font-extrabold bg-slate-700' to='login'>Get Started</Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default About;