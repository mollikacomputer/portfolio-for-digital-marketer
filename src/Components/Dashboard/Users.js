import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Common/Loading';

const Users = () => {
    // const [user, setUser] = useState('');
    const {data:users, isLoading} = useQuery('user', ()=>
    fetch('http://localhost:5000/users')
    .then(res=>res.json()
    ))

    // useEffect(()=>{
    //     fetch('http://localhost:5000/users')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         setUser(data)
    //         console.log(data);
    //     })
    // },[])
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users {users?.length}  </h2>

        </div>
    );
};

export default Users;