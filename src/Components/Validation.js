const Validation = (details) => {
    let errors={};

    if(!details.name){
        errors.name="Username is required";
    }
    if(!details.password){
        errors.password="password is required";
    }else if (details.password.length <5){
        errors.password="password must be more than 5 characters";
    }
  return errors;
};

export default Validation;
