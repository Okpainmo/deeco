const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
export function validatePasswordWithRegex(password) {
    const isConfirmPasswordValid = passwordRegex.test(password);
    return isConfirmPasswordValid;
}
export function validateConfirmPasswordWithRegex(confirmPassword) {
    const isConfirmPasswordValid = passwordRegex.test(confirmPassword);
    return isConfirmPasswordValid;
}
