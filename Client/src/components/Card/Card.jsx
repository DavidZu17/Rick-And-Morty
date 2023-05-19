import style from './Card.module.css';
import { Link } from 'react-router-dom';
import {addFav , removeFav} from '../../redux/actions';
import { connect } from 'react-redux';
import React from 'react';
import { useState, useEffect } from 'react';

 function Card({id, name , species, gender, image, status,origin,onClose, addFav , removeFav,myFavorites}) {
   // const {id, name , species, gender, image, status,origin,onClose, addFav , removeFav,myFavorites} = props ;
   
   const [isFav , setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({id, name , species, gender, image, status, origin, onClose})
      }
   }


   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>         
         <div className={style.containerCard}>
            <div className={style.cardFront}>
               <img src={image} alt={name} className={style.image} />               
            </div>
            <div className={style.cardBack}>
               <button onClick={()=> onClose(id)} className={style.boton}>X</button>
               <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
               <Link to={`/detail/${id}`}><p>Name:{name}</p></Link>
               <p>Species:{species}</p>
               <p>Gender:{gender}</p>
               <p>Status:{status}</p>
               <p>Origen:{origin.name}</p>
            </div>
         </div >         
      </div>
   );
}




export const mapStateToProps = (state) => {

   return{
      myFavorites : state.myFavorites ,

   }
}

export default connect(mapStateToProps,{addFav, removeFav})(Card);

