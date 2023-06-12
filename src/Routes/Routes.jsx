import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error.jsx";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import path from "path";
import ManageUsers from "../pages/Dashboard/manageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";
import SendFeedBack from "../components/SendFeedBack";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import InstructorRoute from "./InstructorRoute";
import UpdateMyClass from "../components/UpdateMyClass";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import MyEnrolledClass from "../pages/Dashboard/MyEnrollClass/MyEnrolledClass";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/instructor',
        element: <Instructor></Instructor>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },

    ]
  },

  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: 'manageUsers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'manageClasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: "manageClasses/classes/:id",
        element: <AdminRoute><SendFeedBack></SendFeedBack></AdminRoute>,
      },
      {
        path: 'addClass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>,
      },
      {
        path: 'myClass',
        element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
      },
      {
        path: "myClass/singleClass/:id",
        element: <InstructorRoute><UpdateMyClass></UpdateMyClass></InstructorRoute>
      },
      {
        path: "mySelectedClass",
        element: <PrivateRoute><MySelectedClass></MySelectedClass></PrivateRoute>
      },
      {
        path: "myEnrolledClass",
        element: <PrivateRoute><MyEnrolledClass></MyEnrolledClass></PrivateRoute>
      },
      {
        path: "mySelectedClass/:id",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
        loader: ({ params }) => fetch(`https://sunshine-academy-server.vercel.app/selectedClass/${params.id}`)
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      }
    ]
  }
]);