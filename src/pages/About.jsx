import React from 'react';

const About = () => {
    return (
        <div className='py-0 px-32 min-h-2/3'>
             <div id="about" className="mx-10 mb-10">
          <div className="text-center pt-8 mb-20">
          <h1 className="text-3xl italic font-semibold text-blue-600">About Developer</h1>
        </div>
      <div className="flex items-stretch">
        {/* Text Section */}
        <div className="w-3/5 flex flex-col mr-5">
        <h1 className='text-center text-3xl font-bold'>Mohiuddin Bhuiyan</h1>
        <h3 className='text-center text-2xl font-semibold'>React Developer</h3>
          <p className="pt-10 text-justify">
          Experienced React Developer with a strong background in Android development. I have 4.5 years of experience as an Android developer in a software company from February 2, 2015, to June 18, 2019. Due to family reasons, I left my job on June 19, 2019, and moved to my hometown, where I pursued entrepreneurship and started a local business.
          On November 20, 2023, I resumed my career as a React developer. Since then, I have developed 10+ web applications using the React platform.

          </p>
          <div className='flex mt-5'> 
            <h1 className='font-semibold'>Degree: </h1>
            <p className='ml-2'>B.Sc(Engineering) in Computer Science & Engineering from Shahjalal University of Science & Technology(SUST)</p>
          </div>
          <div className='flex mt-5'> 
            <h1 className='font-semibold'>Email: </h1>
            <p className='ml-2'>muhin08t@gmail.com</p>
          </div>
        </div>
    
        {/* Image Section */}
        <div className="w-2/5 ml-10 flex justify-end">
          <img src="profile.jpg" alt="About Image" className="w-[250px] h-[280px] md:w-[320px] md:h-[370px] rounded-lg" />
        </div>
      </div>
    </div>
        </div>
    );
};

export default About;