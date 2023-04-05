import React, { useState, useEffect } from 'react';

const useComment = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://portfolio-walid-server-mollikacomputer.vercel.app/comment")
        .then(res => res.json())
        .then( data => setComments(data))
    },[]);

    return [comments, setComments];
};

export default useComment;