import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AddService = () => {
    const handleAddService = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const budget = event.target.budget.value;
        const description = event.target.description.value;
        const serviceInfo = {name, image, budget, description};
        console.log(serviceInfo);
        event.target.reset();
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
        .then(res => res.json())
        .then( data => {
            toast('success', data);
            
            event.target.reset();
        })
    }
    return (
        <div>
            <h2 className='text-3xl my-6' > Add New Service</h2>
            <form onSubmit={handleAddService} className='flex flex-col' >
            <input type="text" name='name' placeholder="Service Name" class="input input-bordered w-full max-w-xs mb-2" /> 
            <input type="text" name='image' placeholder="image link" class="input input-bordered w-full max-w-xs mb-2" /> 
            <input type="number" name='budget' placeholder="Your Budget" class="input input-bordered w-full max-w-xs mb-2" /> 
            <textarea type='text' name='description' placeholder="short description" class="textarea textarea-bordered w-full max-w-xs mb-2"></textarea>
            <input type='submit' value='submit' class="btn w-full max-w-xs" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default AddService;