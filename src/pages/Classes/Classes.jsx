import React, { useContext } from 'react';
import useClasses from '../../hooks/useClasses';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useInstructor from '../../hooks/useInstructor';
import useAdmin from '../../hooks/useAdmin';


const Classes = () => {
    const [classes, loading] = useClasses();

    if (loading) {
        return <p>Loading instructors...</p>;
    }

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const approvedClass = classes.filter(cls => cls.status === "approved");

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToSelectedClass = (cls) => {

        if (user && user?.email) {

            const { _id, name, image, instructorEmail, instructorName, availableSeats, price, totalStudents } = cls;
            const addedClass = {
                classId: _id,
                name,
                image,
                instructorEmail,
                instructorName,
                price: parseFloat(price),
                studentName: user.displayName,
                studentEmail: user.email
            }

            fetch("https://sunshine-academy-server.vercel.app/selectedClass", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Succussfully Done',
                            text: `Class Selected Successfully!`,
                        })
                    }
                })
                .catch(er => console.log(er.message))
        }
        else {
            Swal.fire({
                title: 'Please Log in To Select Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            })
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
             
            {approvedClass.map((classItem, index) => (
                <div key={index} className={`card w-96 shadow-xl ${
                    classItem.availableSeats === 0 ? 'bg-red-500' : ''
                  }`}>
                    <figure className="px-10 pt-10">
                        <img src={classItem.image} alt="Instructor" className="rounded-xl w-52 h-44" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{classItem.name}</h2>
                        <p><b>Instructor Name : </b>{classItem.instructorName}</p>
                        <p>Available seats : {classItem.availableSeats}</p>
                        <p>Price : {classItem.price}</p>
                        <button className="btn btn-outline btn-info"  disabled={classItem.availableSeats === 0 || isAdmin || isInstructor}
                  onClick={() => handleAddToSelectedClass(classItem)}>Select Class</button>
                    </div>
                </div>
            ))}
        </div>
           </div>
        </div>
    );
};

export default Classes;