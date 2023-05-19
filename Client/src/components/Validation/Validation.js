const validation =(userData)=>{
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /.*\d+.*/;

    if(!userData.email){
         errors.email ='Debe ingresar un email'
    }else if(userData.email.length > 35){
         errors.email = 'El usuario no debe de tener mas de 35 caracteres';
    }else if(!regexEmail.test(userData.email)){
             errors.email='Ingresar un email valido!';
    }else if(userData.password.length === 0){
         errors.password = 'La contraseña debe de tener caracteres';
    }else{
        if(!regexPassword.test(userData.password))
             errors.password = 'la Contraseña debe de tener al menos un NUMERO';
        if(userData.password.length <= 6 || userData.password.length > 10)
                 errors.password = 'La contraseña debe de tener entre 6 y 10 caracteres';        
        }

    return errors;
        
}
export default validation;