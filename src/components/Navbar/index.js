import React , {useState, useEffect} from 'react'
import { auth, provider } from '../../firebase'
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS , animateScroll as scroll } from 'react-scroll'

import { FaBars } from 'react-icons/fa'
import { selectUserName, selectUserPhoto , setuserLoginDetails, setSignOutState } from '../../features/user/userSlice';

const  Navbar =  ({ toggle }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const userphoto = useSelector(selectUserPhoto);

    const [scrolNav, setScrollNav] = useState(false);

    const changeNav = () =>{
        if (window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false)
        }
        
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav);
        
    }, []);
    useEffect(() => {
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user);
                history.push("/home");
            }
        })
    },[username])
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

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
       
        <Nav scrolNav={scrolNav}>
            
                <NavContaner>
                    <NavbarLogo to="/" onClick={toggleHome}>
                    Soukrine GYM
                    </NavbarLogo>
                    {!username ? ( 
                        console.log("Log")
                    ) : (  
                        <>
                    <MobileIcon onClick={ toggle} >
                        <FaBars />
                    </MobileIcon>
                    
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="Main" 
                            smooth={true}
                             duration={500} 
                             spy={true} 
                             exact='true' 
                             offset={-80}
                             activeClass="active" >Accuil</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Home"
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                activeClass="active" >Nos Espaces</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Services"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active" >Activites</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Trafis"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active" >Trafis</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Planning"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active" >Planning</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Contact"
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active" >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <SignOut>
                <imgUser src={userphoto} alt={username} />
                <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
                </SignOut>
               </>
            )}
                </NavContaner>      
                       
            </Nav>
        
    )
}

export default Navbar


const Nav = styled.nav`
    background: #000;
    height: 80px;
    margin-top: -80px ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 2;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
const NavContaner = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

const NavbarLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 4px;
    font-weight: bold;
    text-decoration: none;
`
const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
const NavItem = styled.li`
    height: 80px;
`

const NavLinks = styled(LinkS)`
     color: #fff;
     display: flex;
     align-items: center;
     text-decoration: none;
     padding: 0 1rem;
     height: 100%;
     cursor: pointer;

     &.active{
        border-bottom: 5px solid #01bf71 ;
     }
`
const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor:  pointer;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 768px){
        display: none;
    }

`

const imgUser = styled.img`
    border-radius: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10px;
    border: 1px solid rgba(151, 151, 151, 0.34);
    right: 0px;
    
`

const DropDown = styled.div`
    position:absolute ;
    top: 10px;
    color: white;
    left: 140px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 10px 0px ;
    padding: 10px;
    font-size: 15px;
    letter-spacing: 3px;
    width: 150px;
    opacity: 1;

    &:hover{
        color:rgb(19, 19, 19) ;
        background: white;
        opacity: 1;
        transition-duration: 1s;
    }
`
