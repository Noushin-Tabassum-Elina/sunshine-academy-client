import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newClass = {
            image: data.image,
            name: data.name,
            instructorName: user.displayName,
            instructorEmail: user.email,
            availableSeats: parseInt(data.availableSeats),
            price: parseInt(data.price),
            totalStudents: 0,
            status: "pending"
        }
        console.log(newClass);
        axiosSecure.post("/classes", newClass)
            .then(dt => {
                if (dt.data.insertedId) {
                    reset();
                    Swal.fire({
                        icon: 'success',
                        title: 'Class added successfully',
                        showConfirmButton: true,
                    })
                }
            })
        reset();


    }
    return (
        <div>
            <Helmet>
                <title>Sunshine Academy | Add Class</title>
            </Helmet>

            <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 p-2">
            <div className="max-w-lg order-1 md:order-1">
                    <img className="w-full" src="https://img.freepik.com/free-vector/student-classroom-template_1308-26333.jpg?w=2000" alt="login image" />
                </div>
                <div className="card w-full max-w-2xl shadow-lg  bg-base-100 order-2 md:order-1">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className="text-3xl font-bold text-center text-violet-600">Add Class</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600 ">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="text" name="image" {...register("image", { required: true })} placeholder="photo" className="input input-bordered" />
                                {errors.image && <span className="text-red-600 ">Class image is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input type="text" readOnly defaultValue={user.displayName} name="instructorName" className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="email" readOnly defaultValue={user.email} name="instructorEmail" className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Sits</span>
                                </label>
                                <input type="number" name="availableSeats" {...register("availableSeats", { required: true })} placeholder="sits" className="input input-bordered" />
                                {errors.availableSeats && <span className="text-red-600 ">AvailableSeats is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" {...register("price", { required: true })} placeholder="price" className="input input-bordered" />
                                {errors.price && <span className="text-red-600 ">price is required</span>}
                            </div>

                        </div>

                        <input type="submit" value="Add Class" className="btn btn-outline btn-secondary mt-2 text-white font-semibold" />
                    </form>
                </div>
                
            </div>


        </div>
    );
};

export default AddClass;