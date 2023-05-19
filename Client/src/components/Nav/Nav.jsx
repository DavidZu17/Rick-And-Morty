import style from "./Nav.module.css";
import	SearchBar from "../SearchBar/SearchBar";
import { Link  } from 'react-router-dom';
import image from '../../image/logo.png';


export default function Nav (props){
    const {onSearch ,setAccess } = props ;
     
    const handleLogOut =() => {
        setAccess(false);
    }
    return(
        <div className={style.container}>
            
            <img src={image} alt='logo Rick and Morty' className={style.logo}/>        
            <Link className={style.linkNav} to='/about'> About</Link>
            <Link className={style.linkNav} to='/home'> Home</Link>
            <Link className={style.linkNav} to='/favorites'> Favorites</Link>

            
            
            <button className={style.botonLogout} onClick={handleLogOut} >Log Out</button>
            <SearchBar  onSearch = {onSearch} />
            
        </div>
    );
} 