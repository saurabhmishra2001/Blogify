import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"
import { useNavigate } from "react-router-dom";


function LogoutBtn(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate('/'); // Added this
        })
    }


    return(
        <button    className='px-4 py-2 text-sm font-medium text-white transition-all duration-200 
        rounded-lg hover:bg-white/20 border border-transparent
        hover:border-white/40 focus:outline-none focus:ring-2 
        focus:ring-white/50'
        onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn;