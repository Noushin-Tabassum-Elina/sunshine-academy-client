import React from 'react';
import useClasses from '../../../hooks/useClasses';


const PopularClass = () => {
    const [classes] = useClasses();
    const approvedClass = classes.filter(cls => cls.status === "approved");
    return (
        <div>
             <h2 className=' text-4xl text-center font-bold p-5 font-serif text-green-600'><i>Our Popular Classes</i></h2>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
           
            {
                approvedClass.slice(0, 6).map((sir, index)=>(
                    <div>
                        <div key={index} className="card w-96 bg-red-300  shadow-xl text-white">
                    <figure className="px-10 pt-10">
                        <img src={sir.image} alt="Instructor" className="rounded-xl w-52 h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-blue-800 text-2xl font-serif">{sir.name}</h2>
                        <p className='text-xl font-semibold text-rose-700'>Instructor name : {sir.instructorName}</p>
                        <p><span className='font-semibold text-pink-800'>Available Seats : </span>{sir.availableSeats}</p>
                    </div>
                </div>     
                    </div>
                ))
            }
        </div>
        </div>
       
    );
};

export default PopularClass;