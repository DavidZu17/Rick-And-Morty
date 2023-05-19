import Card from "../Card/Card";
import styled from './Cards.module.css';

export default function Cards(props) {
   const {characters , onClose} = props;
      return(
         <div className={styled.container}>
         {
         characters.map( (character) =>{
            return (
            <Card  
               id = {character.id}
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               origin = {character.origin}
               status = {character.status}
               image={character.image}
               onClose={ () => onClose(character.id)}
            />
          );
      })}
      </div>
   );  
}
