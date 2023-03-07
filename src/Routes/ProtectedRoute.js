const { useLocation, Navigate } = require("react-router-dom")

const ProtectedRoute = ({children})=>{
    // const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    let user = false;
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace />
    }else{
        return children;
    }
};

export default ProtectedRoute;