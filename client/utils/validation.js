const isValidEmail = (email) => {
  const emailRegrex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  return emailRegrex.test(email);
};

const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/;
  return passwordRegex.test(password);
};

export { isValidEmail, isValidPassword };
