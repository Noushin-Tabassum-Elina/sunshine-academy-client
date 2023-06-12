import React, { useEffect, useState } from 'react';

const useTeacher = () => {
    const [teacher, setTeacher] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://sunshine-academy-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => 
               { 
                setTeacher(data)
                setLoading(false)
            })
    }, [])
    return [teacher, loading]
};

export default useTeacher;