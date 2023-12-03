import bcrypt from 'bcryptjs';
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(14);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
export default hashPassword;
