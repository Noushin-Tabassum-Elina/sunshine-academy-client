import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";

const useClasses = () => {

    const { user, loading} = useContext(AuthContext);
    

    const {refetch, data : classes=[] } = useQuery({

        queryKey: ['classes', user?.email],
        queryFn: async ()=>{
            const response = await fetch(`https://sunshine-academy-server.vercel.app/classes`);
            return response.json();
        },
    })


    return [classes, loading, refetch];
};

export default useClasses;