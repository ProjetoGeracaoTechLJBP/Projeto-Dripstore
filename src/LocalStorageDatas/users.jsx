import { useState, useEffect } from 'react';

const infoUser = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return user;
};

export default infoUser;
