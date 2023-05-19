import { useState } from 'react';
import style from './Form.modules.css';
import validation from '../Validation/Validation';
import image from '../../image/login.png'
const Form =({login})=>{

    const [userData , setUserData] = useState({email:'',password:''});
    const [errors , setErrors ] = useState({email:'',password:''});
    
    const handleChange =(evento)=>{
        setUserData({...userData,[evento.target.name]:evento.target.value});
        setErrors(validation({...userData,[evento.target.name]:evento.target.value}));
    }
    const handleSubmit =(evento)=>{
    const array = Object.entries(errors);
    if(array.length === 0){
        login(userData);
       
    }else{
      alert('Debe de llenar todos los campos para ingresar');
    }
    evento.preventDefault();
 }
 return (
        <div className='contenedor'>
            <div className='contenedorForm' >
                <img src={image} className='imageLogo'/>
                <h1 className='titulo' > LOGIN </h1>                 
                <form onSubmit={handleSubmit}>
                    <div className='inputContenedor' >                  
                        <label  className='labelText'>Email:</label><br/>
                        <input className='inputText' placeholder="Email..." name='email' onChange={handleChange} type='text' value={userData.email}/><br/>
                        {errors.email && <p style={{color:'red'}}>{errors.email}</p>}               
                    </div>
                    <div className='inputContenedor'>
                        <label className='labelText' >Password:</label><br/>
                        <input className='inputText' placeholder="Password..." name='password' onChange={handleChange} type='password' value={userData.password}/>
                        {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
                    </div>
                    <br/>
                    <button  className='botonSubmit'>Log In</button>
                </form>
            </div>
        </div>   
    );
}

export default Form;