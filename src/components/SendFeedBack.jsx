import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const SendFeedBack = () => {

    const params = useParams();
    const [cls, setCls] = useState(null);

    useEffect(() => {
        fetch(`https://sunshine-academy-server.vercel.app/classes/${params.id}`)
            .then(res => res.json())
            .then(data => setCls(data))
    }, [params])


    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        console.log(text);
        const token = localStorage.getItem('access-token');

        fetch(`https://sunshine-academy-server.vercel.app/classes/feedback/${cls?._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ feedback: text })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Succussfully Done',
                        text: `FeedBack Send To ${cls.instructorName}!!`,
                    })
                    e.target.reset();
                }
            })
            .catch(err => console.log(err.message))

    }

    return (
        <div className="">
            <Helmet>
                <title>Music Scholling | Send FeedBack</title>
            </Helmet>

            {
                cls
                    ?
                    <>
                        <h2 className="text-4xl font-bold my-5 text-center">Send Feedback To Instructor: <span className="text-violet-600">{cls.instructorName}</span> Classes</h2>
                        <hr />

                        <div className="card mx-auto my-5 max-w-4xl bg-base-100 shadow-2xl">
                            <form onSubmit={handleSubmit} className="card-body">
                                <h2 className="text-2xl text-center font-bold">Send Feedback!!</h2>
                                <p className="text-xl font-semibold">FeedBack on: {cls.name}</p>

                                <textarea name="text" required className="textarea textarea-info w-full" placeholder="Feedback"></textarea>

                                <div className="">
                                    <input className="btn btn-info" type="submit" value="Send" />
                                </div>

                            </form>
                        </div>
                    </>
                    :
                    <div className="h-60 w-full flex justify-center items-center">
                        <progress className="progress w-56"></progress>
                    </div>
            }
        </div>
    );
};

export default SendFeedBack;