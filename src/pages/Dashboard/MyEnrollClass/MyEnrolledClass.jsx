import { Helmet } from "react-helmet-async";
import useEnrolledClass from "../../../hooks/useEnrolledClass";


const MyEnrolledClass = () => {

    const [enrolledClasses] = useEnrolledClass();

    return (

        <div>
            
            <Helmet>
                <title>Sunshine Academy | My Enrolled Class</title>
            </Helmet>
            <h2 className="text-4xl text-blue-400 font-bold my-5 text-center">Your <span className="text-violet-600">Enrolled</span> <span className="text-orange-600">Classes</span></h2>
            <hr /> 
            <div className="overflow-x-auto w-full  mt-10 mx-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Class Image</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            enrolledClasses.map((cls, indx) => <tr key={cls._id}>
                                <th>{indx + 1}</th>
                                <td>{cls.className}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cls.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{cls.instructorName}</td>
                                <td>{cls.instructorEmail}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>          
        </div>
    );
};

export default MyEnrolledClass;