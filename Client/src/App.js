import Cards from './components/Cards/Cards';
import { useState, useEffect } from 'react';
import style from './App.module.css'
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Routes, Route , useLocation, useNavigate} from 'react-router-dom';
import Detail from './components/Detail/Detail';
import About from './components/About/About'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
import { removeFav } from './redux/actions';

// const email= 'David_zu.17@hotmail.com';
// const password = '1234567';

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();   
   const navigate = useNavigate();
   const [access ,setAccess] = useState(false);

   const dispatch = useDispatch();
   
    async function onSearch(id) {
   //    const ver = characters.some( (character) => Number(character.id) === Number(id));
   //   if((ver === false)){
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //    .then(response => response.data)
   //    .then(( data ) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   //   } 
      try {
         
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
          if (data.name) 
             setCharacters((oldChars) => [...oldChars, data])

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }

   }

   const onClose =  (id) =>{
      setCharacters(
         characters.filter((characters) => characters.id !== id)
      );

      dispatch(removeFav(id));
   }

   const login = async (userData) => {
      
         // const { email, password } = userData;
         // const URL = 'http://localhost:3001/rickandmorty/login/';
         // axios(URL + `?email=${email}&password=${password}`)
         // .then(({ data }) => {
         //    const { access } = data;
         //    setAccess(access);
         //    access && navigate('/home');
         // });
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)

         const { access } = data;
            setAccess(access);
            access && navigate('/home');

      } catch (error) {
         
      }
         
   }

   useEffect(()=>{
      !access && navigate('/');
   },[access]);


   return (
         <div className={style.container} > 
      
         {
            location.pathname !== '/' &&  <Nav onSearch={onSearch} setAccess={setAccess}/>
         }
      
         <div>
            <Routes>
               <Route path='/home' element={<Cards characters = {characters} onClose={onClose}/>} />
               <Route path='/about' element={<About/>} />
               <Route path='/detail/:id' element={<Detail/>} />
               <Route path='/' element={<Form login={login}/>}/>
               <Route path='/favorites' element={<Favorites />}/>
            </Routes>
            </div>
     
            </div>
      
   );
}

export default App;
