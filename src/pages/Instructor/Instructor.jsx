import React from 'react';
import useInstructor from '../../hooks/useInstructor';
import { Helmet } from 'react-helmet-async';


const Instructor = () => {
    const [instructors, loading] = useInstructor();

    if (loading) {
        return <p>Loading instructors...</p>;
    }

    return (
        <div className='mt -24'>
            <Helmet>
                <title>Sunshine Academy || Instructors</title>
            </Helmet>
           <div className=''>
           <h2 className=' text-4xl text-center font-bold p-5 text-green-600 '><i>Our All Instructors</i></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
             
            {instructors.map((instructor, index) => (
                <div key={index} className="card w-96 bg-slate-500  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={instructor.image} alt="Instructor" className="rounded-xl w-52 h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{instructor.name}</h2>
                        <p>{instructor.email}</p>
                    </div>
                </div>
            ))}
        </div>
           </div>
        </div>
    );
};

export default Instructor;
