const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

export function validatePasswordWithRegex(password: string) {
  const isConfirmPasswordValid = passwordRegex.test(password);
  return isConfirmPasswordValid;
}

export function validateConfirmPasswordWithRegex(confirmPassword: string) {
  const isConfirmPasswordValid = passwordRegex.test(confirmPassword);
  return isConfirmPasswordValid;
}
