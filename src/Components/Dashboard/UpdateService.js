import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const UpdateService = () => {
    const {id} = useParams();
    const [updateService, setUpdateService] = useState({});
    useEffect(()=>{
        const url = `https://walid-server.vercel.app/dashboard/updateservice/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdateService(data))
    },[]);
    // console.log(updateService);
    const handleUpdateService = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const budget = event.target.budget.value;
        const description = event.target.description.value;
        const serviceUpdateInfo = {name, image, budget, description};
        console.log(serviceUpdateInfo);
        event.target.reset();
        const url = `https://walid-server.vercel.app/dashboard/updateservice/${id}`
        fetch(url, {
            method: 'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(serviceUpdateInfo)
        })
        .then(res => res.json())
        .then( data => {
            toast('Update success', data);
            
            event.target.reset();
        })
    };
    return (
        <div>
        <h2 className='text-2xl my-6' > Update : {updateService.name}</h2>
        <form onSubmit={handleUpdateService} className='flex flex-col' >
        <input type="text" name='name' placeholder={updateService.name} class="input input-bordered w-full max-w-xs mb-2" /> 
        <input type="text" name='image' placeholder="image link" class="input input-bordered w-full max-w-xs mb-2" /> 
        <input type="number" name='budget' placeholder="Your Budget" class="input input-bordered w-full max-w-xs mb-2" /> 
        <textarea type='text' name='description' placeholder="short description" class="textarea textarea-bordered w-full max-w-xs mb-2"></textarea>
        <input type='submit' value='submit' class="btn w-full max-w-xs btn-primary font-bold" />
        </form>
        <ToastContainer/>
    </div>
    );
};

export default UpdateService;