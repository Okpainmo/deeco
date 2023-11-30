import bcrypt from 'bcryptjs';
async function decryptPassword(password, hashedPassword) {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    // console.log(isMatch);
    return isMatch;
}
export default decryptPassword;
