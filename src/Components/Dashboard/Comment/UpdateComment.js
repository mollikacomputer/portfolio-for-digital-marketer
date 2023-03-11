import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const UpdateComment = () => {
    const {id} = useParams();
    const [updateComment, setUpdateComment] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/dashboard/updatecomment/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdateComment(data))
    },[]);
    // console.log(updateComment);
    const handleUpdateComment = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const rating = event.target.rating.value;
        const location = event.target.location.value;
        const description = event.target.description.value;
        const commentUpdateInfo = {name, image, rating, location, description};
        console.log(commentUpdateInfo);
        event.target.reset();
        const url = `http://localhost:5000/dashboard/updatecomment/${id}`
        fetch(url, {
            method: 'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(commentUpdateInfo)
        })
        .then(res => res.json())
        .then( data => {
            toast('Comment Update success', data);
            
            event.target.reset();
        })
    };
    return (
        <div>
        <h2 className='text-2xl my-6' > Update : {updateComment.name}</h2>
        <form onSubmit={handleUpdateComment} className='flex flex-col' >
        <input type="text" name='name' placeholder={updateComment.name} class="input input-bordered w-full max-w-xs mb-2" /> 
        <input type="text" name='image' placeholder="image link" class="input input-bordered w-full max-w-xs mb-2" /> 
        <input type="text" name='location' placeholder="Your Location" class="input input-bordered w-full max-w-xs mb-2" /> 
        <input type="number" name='rating' placeholder="Your Rating" class="input input-bordered w-full max-w-xs mb-2" /> 
        <textarea type='text' name='description' placeholder="short description" class="textarea textarea-bordered w-full max-w-xs mb-2"></textarea>
        <input type='submit' value='submit' class="btn w-full max-w-xs btn-primary font-bold" />
        </form>
        <ToastContainer/>
    </div>
    );
};

export default UpdateComment;