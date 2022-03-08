const Validation = (details) => {
  const errors = {};

  if (!details.email) {
    errors.email = 'Email cannot be empty';
  }
  if (!details.password) {
    errors.password = 'Password cannot be empty';
  } else if (details.password.length < 5) {
    errors.password = 'password must be more than 5 characters';
  }
  return errors;
};

export default Validation;
