import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useClasses from '../../../hooks/useClasses';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ManageClasses = () => {

    const [classes, ,refetch] = useClasses();
    const [axiosSecure] = useAxiosSecure();

    const handleApprovedClass = (cls) => {
        axiosSecure.patch(`/classes/approved/${cls._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Succussfully Done',
                        text: `${cls.name} is Approved!!`,
                    })
                }
            })
            .catch(er => console.log(er.message))

    }

    const handleDenyClass = (cls) => {
        axiosSecure.patch(`/classes/deny/${cls._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'warning',
                        title: 'Succussfully Done',
                        text: `${cls.name} is Deny!!`,
                    })
                }
            })
            .catch(err => console.log(err.message))
    }



    return (
        
        <div className="w-full">

            <Helmet>
                <title>Sunshine Academy | Manage Classes</title>
            </Helmet>

            <h2 className="text-4xl font-bold my-5 text-orange-600 text-center">Manage  <span className="text-violet-600">Classes</span></h2>
            <hr />
            <h2 className="text-4xl font-bold text-red-400 my-5 text-center"></h2>

            <div className="overflow-x-auto w-full mx-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Ins. Name</th>
                            <th>Ins. Email</th>
                            <th>Available Sit</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            classes.map((cls, indx) => <tr key={cls._id}>
                                <th>{indx + 1}</th>
                                <td>{cls.name}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{cls.instructorName}</td>
                                <td>{cls.instructorEmail}</td>
                                <td>{cls.availableSeats}</td>
                                <td>${cls.price}</td>
                                <td className={`${cls.status==="approved" && "text-green-600"} ${cls.status==="pending" && "text-warning"} ${cls.status==="deny" && "text-error"}`}>{cls.status}</td>
                                <td className="space-x-2 space-y-2 text-center">
                                    <button onClick={() => handleApprovedClass(cls)} className="btn btn-success btn-sm" disabled={cls.status == "approved" || cls.status == "deny"}>Approve</button>
                                    <button onClick={() => handleDenyClass(cls)} className="btn btn-error btn-sm" disabled={cls.status == "approved" || cls.status == "deny"}>Deny</button>
                                    <Link to={`classes/${cls._id}`} className="btn btn-warning btn-sm">Feedback</Link>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};
export default ManageClasses;