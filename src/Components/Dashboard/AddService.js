import React from 'react';

const AddService = () => {
    return (
        <div>
            <h2 className='text-5xl my-6' > Add Service</h2>
            <form className='flex flex-col' >
            <input type="text" placeholder="Service Name" class="input input-bordered w-full max-w-xs mb-2" /> 
            <input type="text" placeholder="image link" class="input input-bordered w-full max-w-xs mb-2" /> 
            <input type="number" placeholder="Your Budget" class="input input-bordered w-full max-w-xs mb-2" /> 
            <textarea placeholder="short description" class="textarea textarea-bordered w-full max-w-xs mb-2"></textarea>
            <input type='submit' value='submit' class="btn w-full max-w-xs" />
            </form>

        </div>
    );
};

export default AddService;