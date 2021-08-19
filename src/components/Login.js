import React , { useEffect} from 'react'
import { auth, provider } from '../firebase'
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './Login.css'
import videoS from '../videos/vid2.mp4'
import { selectUserName , setuserLoginDetails, setSignOutState } from '../features/user/userSlice';


const Login = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user);
                history.push("/home");
            }
        })
    }, [username]);

    const handleAuth = () => {
        if(!username){
        auth.signInWithPopup(provider).then((result) => {
            setUser(result.user);
        }).catch((error) => {
            alert(error.message)
        })
        }else if(username){
            auth.signOut().then(()=>{
                dispatch(setSignOutState())
                history.push('/')
            }).catch((err)=> alert(err.message))
        }
    }
    const setUser = (user) => {
        dispatch( 
            setuserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <section className='Container'>
             
                    <div className='HeroBg'>
                        <video autoPlay loop muted src={videoS} type='video/mp4'  className='vidBg'/>
                    </div>
                
            <div className='Content'>
                <div className="CTA">
                    <div className='SignUp' onClick={handleAuth}>Get All There</div>
                    <p className='Description'>
                        Signin to Get Premier Access to this WebSite👌
                    </p>
                </div>
               
            </div>
        </section>
    )
}

export default Login
