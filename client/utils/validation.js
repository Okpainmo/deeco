const isValidEmail = (email) => {
  const emailRegrex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  return emailRegrex.test(email);
};

const isValidPassword = (password) => {
  const passwordRegrex = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[]:;<>,.?~\\-]).{8,}$/;
  return passwordRegrex.test(email);
};

export { isValidEmail, isValidPassword };
