import React from 'react';
import useClasses from '../../hooks/useClasses';
import { Helmet } from 'react-helmet';

const Classes = () => {
    const [classes, loading] = useClasses();

    if (loading) {
        return <p>Loading instructors...</p>;
    }

    const handleSelectClass = (className) => {
        if (!isLoggedIn) {
          alert('Please log in before selecting the course.');
          return;
        }
    
        if (className.availableSeats === 0 || isAdmin) {
          return;
        }
    }

    return (
        <div>
            <Helmet>
                <title>Sunshine Academy || All Classes</title>
            </Helmet>

            <div className=''>
           <h2 className=' text-4xl text-center font-bold p-5 text-green-600 '><i>Our All Instructors</i></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
             
            {classes.map((classes, index) => (
                <div key={index} className="card w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={classes.image} alt="Instructor" className="rounded-xl w-52 h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{classes.name}</h2>
                        <p><b>Instructor Name : </b>{classes.instructorName}</p>
                        <p>Available seats : {classes.availableSeats}</p>
                        <p>Price : {classes.price}</p>
                        <button className="btn btn-outline btn-info"  disabled={classes.availableSeats === 0}
                  onClick={() => handleSelectClass(classes)}>Select Class</button>
                    </div>
                </div>
            ))}
        </div>
           </div>
        </div>
    );
};

export default Classes;