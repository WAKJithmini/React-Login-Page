const Validation = (details) => {
    let errors={};

    if(!details.email){
        errors.email= 'Email cannot be empty';
    }
    /* if(details.email !== ""){
        errors.email= 'Username is incorrect';
    }*/
    if(!details.password){
        errors.password='Password cannot be empty';
    }
    /*  if(details.password !== ""){
        errors.password= 'Password is incorrect';
    }*/
    else if (details.password.length < 5){
        errors.password="password must be more than 5 characters";
    }
  return errors;
};

export default Validation;
