import React from 'react';
import 'animate.css';

const WhyUs = () => {
    return (
        <div className='my-10'>
            <h2  className='animate__animated animate__jackInTheBox text-center font-bold text-purple-700 my-4 text-4xl font-serif'><i>WHY US?</i></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className="card border border-teal-400 w-96 bg-base-100 shadow-xl btn-outline btn-accent">
                    <div className="avatar px-36 pt-10">
                        <div className="w-24 rounded-xl">
                            <img src="https://i.ibb.co/fYXyd3x/Presentation.png" alt="Shoes" className="rounded-xl" />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Self Reliant Individuals</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae cupiditate in quae ut maxime, quis saepe provident natus deleniti libero?</p>
                    </div>
                </div>

                <div className="card border border-pink-600 w-96 bg-base-100 shadow-xl btn-outline btn-secondary">
                    <div className="avatar px-36 pt-10">
                        <div className="w-24 rounded-xl">
                            <img src="https://i.ibb.co/YTjymRn/Arts.jpg" alt="Shoes" className="rounded-xl" />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Talent Search Methods</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, ratione! Voluptatum esse eaque tempore mollitia, quam officiis ut eius rerum.</p>
                    </div>
                </div>

                <div className="card border border-blue-500 w-96 bg-base-100 shadow-xl btn-outline  btn-info">
                    <div className="avatar px-36 pt-10">
                        <div className="w-24 rounded-xl">
                            <img src="https://i.ibb.co/QKgZg0G/Certificate.png" alt="Shoes" className="rounded-xl" />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Value Based Education</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deserunt pariatur veniam dolor mollitia in repellendus amet voluptatum delectus eum?</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WhyUs;