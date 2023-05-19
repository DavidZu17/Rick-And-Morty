import Card from '../Card/Card';
import { connect , useDispatch, useSelector} from 'react-redux';
import style from './Favorites.module.css';
import { filterCards,orderCards } from '../../redux/actions';
import { useState } from 'react';

function  Favorites (props) {
    const dispatch = useDispatch();

    const [aux , setAux] = useState(false);

    const handleOrder = (evento) =>{
        dispatch(orderCards(evento.target.value));
        setAux(true);
    }

    const handleFilter = (evento) =>{
        dispatch( filterCards(evento.target.value))
    }

    return(
        <div className={style.container}>
            <div className={style.containerSelector}>
                <select onChange={handleOrder}>
                    <option value='A'>Ascendente</option>
                    <option value='D'>Descendente</option>

                </select>
                <select onChange={handleFilter}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>Unknown</option>
                    <option value='allCharacters' >All Characters</option>
                </select>
            </div>
            <div className={style.containerCards}>
                {
                    props.myFavorites?.map( (fav) =>{
                        return(
                            <Card
                                key={fav.id}
                                id={fav.id}
                                name={fav.name}
                                species={fav.species}
                                gender={fav.geder}
                                image={fav.image}
                                status={fav.status}
                                origin={fav.origin}
                                onClose={fav.onClose}
                            />
                        )})
                }
            </div>
            
        </div>
    );
}
export function mapStateToProps(state) {
    return{
        myFavorites : state.myFavorites,
    }
}

export default connect(mapStateToProps,null)(Favorites);