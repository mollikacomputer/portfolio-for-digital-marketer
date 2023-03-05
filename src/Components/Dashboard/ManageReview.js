import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Rating from '../Home/RatingStar';
const ManageReview = () => {
    const handleAddReview = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const rating = event.target.description.value;
        const commentInfo = {name, image, description, rating};
        console.log(commentInfo);
        event.target.reset();
        fetch('http://localhost:5000/comment', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(commentInfo)
        })
        .then(res => res.json())
        .then( data => {
            toast('comment added', data);
            event.target.reset();
        })
    }
    return (
        <div>
            <h2 className='text-3xl'> Manage Review</h2>
            <form onSubmit={handleAddReview} className='flex flex-col' >
            <input type="text" name='name' placeholder="Client Name" class="input input-bordered w-full max-w-xs mb-2" /> 
            <input type="text" name='image' placeholder="image link" class="input input-bordered w-full max-w-xs mb-2" /> 
            <input type="text" name='location' placeholder="Address" class="input input-bordered w-full max-w-xs mb-2" /> 
            <textarea type='text' name='description' placeholder="comment description" class="textarea textarea-bordered w-full max-w-xs mb-2"></textarea>
            
            <input type="number" name='rating' placeholder="Please 1-5 Stare Rating" class="input input-bordered w-full max-w-xs mb-2" /> 
            {/* <Rating/> */}
            <input type='submit' value='submit' class="btn w-full max-w-xs" />
            
            </form>
            <ToastContainer/>
        </div>
    );
};

export default ManageReview;