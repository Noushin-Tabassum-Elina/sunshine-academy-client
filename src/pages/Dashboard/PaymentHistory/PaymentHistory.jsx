import { Helmet } from "react-helmet-async";
import useEnrolledClass from "../../../hooks/useEnrolledClass";


const PaymentHistory = () => {
    
    const [enrolledClasses] = useEnrolledClass();

    return (
        <div>
            <Helmet>
                <title>Sunshine Academy | Payment History</title>
            </Helmet>
            <h2 className="text-4xl font-bold my-5 text-blue-400 w-full text-center ">Your <span className="text-violet-500">Payment</span><span className="text-orange-600"> History</span></h2>
            <div className="overflow-x-auto w-full   mt-10 mx-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            enrolledClasses.map((cls, indx) => <tr key={cls._id}>
                                <th>{indx + 1}</th>
                                <td>{cls.className}</td>
                                <td>{cls.transactionId}</td>
                                <td>${cls.price}</td>
                                <td>{cls.date}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;