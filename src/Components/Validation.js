import LoginForm from './LoginForm';
const adminUser={
    name:'admin',
    password:'password'
}
const Validation = (details) => {
    let errors={};

    if(!details.name){
        errors.name= 'Username cannot be empty';
    }
    if(details.name !== adminUser.name){
        errors.name= 'Username is incorrect';
    }
    if(!details.password){
        errors.password='Password cannot be empty';
    }if(details.password !== adminUser.password){
        errors.password= 'Password is incorrect';
    }
    else if (details.password.length < 5){
        errors.password="password must be more than 5 characters";
    }
  return errors;
};

export default Validation;
