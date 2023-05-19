import style from './SearchBar.module.css';
import image from '../../image/logo.png';
import { useState } from 'react';

export default function SearchBar(props) {
  
   let [id, setId] = useState('');

   const handleChange =(evento)=>{
      setId(evento.target.value);
   }

   const handleEnter =(event) =>{
      if(event.key === 'Enter'){
         props.onSearch(id);
      }
   }
   return (
      <div className={style.containerInput}>
         <input type='search' onChange={handleChange} value={id}  placeholder='Search...' onKeyUp={handleEnter} className={style.searchInput}/>                   
         <button onClick={()=>props.onSearch(id)} className={style.searchBoton}></button>
      </div>
   );
}

