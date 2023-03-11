import useComment from './useComment';

const useDeleteComment = () => {
    const [comments, setComments] = useComment([]);
    const handleDeleteComment = (id) =>{
        const proceed = window.confirm("Are you sure you want to delete?");
        if(proceed){
          // console.log("deleting service data with id", id);
          const url = `http://localhost:5000/comment/${id}`;
          fetch(url, {
            method: 'DELETE'
          })
          .then(res=> res.json())
          .then(data => {
            if(data.deletedCount>0){
              console.log('deleted');
              const remaining = comments.filter(comment => comment?._id !== id );
              setComments(remaining);
            }
            console.log(data);
          })
        }
      };
    return {handleDeleteComment, comments, setComments};
};

export default useDeleteComment;