import React, { useState, useEffect } from 'react';

const useComment = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/comment")
        .then(res => res.json())
        .then( data => setComments(data))
    },[]);

    return [comments, setComments];
};

export default useComment;