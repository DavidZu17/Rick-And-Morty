import { useParams } from "react-router-dom";
import axios from "axios";
import { useState , useEffect } from "react";
import style from "./Detail.module.css";

const Detail =()=>{
    
    const [character , setCharac] = useState({});
    const{id} = useParams();
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
            setCharac(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharac({});
     }, [id]);


    return (
    <>
        {
            character? ( 
                <div>
                        <h2 className={style.h2}>Name:</h2><span><p className={style.p}>{character.name}</p></span>
                        <h2 className={style.h2}>Status:</h2> <span><p className={style.p}> {character.status}</p></span>
                        <h2 className={style.h2}>Species: </h2> <span><p className={style.p}>{character.species}</p></span>
                        <h2 className={style.h2}>gender:</h2> <span><p className={style.p}> {character.gender}</p></span>
                        <h2 className={style.h2}>Origin: </h2> <span><p className={style.p}>{character.origin?.name}</p></span>
                        <img src={character.image} alt ={character.name}/> 
                    </div>
            ):('No hay Personaje')
        }   
    </>
    );
}
export default Detail;