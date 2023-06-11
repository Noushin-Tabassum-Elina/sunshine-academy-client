import React from 'react';
import useInstructor from '../../../hooks/useInstructor';
import 'animate.css';

const PopularInstructor = () => {
    const [instructors] = useInstructor();
    
    return (
        <div className='my-10'>
             <h2 className=' text-4xl text-center font-bold p-5 font-serif text-green-600'><i>Our Instructors</i></h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate__animated animate__fadeInUp ">
            {instructors.slice(0, 6).map((instructor, index) => (
                <div key={index} className="card w-96 bg-slate-500 shadow-xl text-white">
                    <figure className="px-10 pt-10">
                        <img src={instructor.image} alt="Instructor" className="rounded-xl w-52 h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{instructor.name}</h2>
                        <p><span className='font-semibold text-pink-800'>Email : </span>{instructor.email}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
       
    );
};

export default PopularInstructor;
