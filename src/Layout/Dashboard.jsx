import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { FaHome } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { FaStickyNote } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaPeopleArrows } from 'react-icons/fa';

const Dashboard = () => {

    // const isAdmin = true;
    // const isInstructor = false;

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    console.log(isAdmin)
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-full flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Show Options</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 h-full bg-pink-200 text-pink-800">
                    {

                        isAdmin

                            ?
                            <>
                                <li>
                                    <Link to="/"><FaHome></FaHome> Home </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/manageUsers"><FaUserAlt></FaUserAlt> Manage Users </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/manageClasses"><FaBook></FaBook> Manage Classes </Link>
                                </li>
                            </>
                            :
                            <>
                                {
                                    isInstructor
                                        ?
                                        <>
                                            <li>
                                                <Link to="/"><FaHome></FaHome> Home </Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/addClass"><FaBook></FaBook>  Add A Class </Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/myClass"> <FaPeopleArrows></FaPeopleArrows>  My Classes </Link>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <Link to="/"><FaHome></FaHome> Home </Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/mySelectedClass"><FaBookOpen></FaBookOpen>  My Selected Class </Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/myEnrolledClass"> <FaStickyNote></FaStickyNote>  My Enrolled Class </Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/paymentHistory"> <FaShoppingBag></FaShoppingBag> Payment History </Link>
                                            </li>
                                        </>
                                }
                            </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;