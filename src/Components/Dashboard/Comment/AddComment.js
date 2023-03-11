import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AddComment = () => {
    const handleAddComment = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const location = event.target.location.value;
        const description = event.target.description.value;
        const rating = event.target.rating.value;
        const commentInfo = {name, image, location, rating, description};
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
            toast('success', data);
            
            event.target.reset();
        })
    }
    return (
        <div>
            <h2 className='text-3xl my-6' > Add Your Comment</h2>
            <form onSubmit={handleAddComment} className='flex flex-col' >
            <input type="text" name='name' placeholder="Service Name" class="input input-bordered w-full max-w-xs mb-2" /> 
            <input type="text" name='image' placeholder="image link" class="input input-bordered w-full max-w-xs mb-2" /> 
            <input type="text" name='location' placeholder="Your Location" class="input input-bordered w-full max-w-xs mb-2" /> 
            <input type="number" name='rating' placeholder="Rate us 1-5" class="input input-bordered w-full max-w-xs mb-2" /> 
            <textarea type='text' name='description' placeholder="short description" class="textarea textarea-bordered w-full max-w-xs mb-2"></textarea>
            <input type='submit' value='submit' class="btn w-full max-w-xs" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default AddComment;