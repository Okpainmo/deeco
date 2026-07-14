import bcrypt from 'bcryptjs';

async function decryptPassword(password: string, hashedPassword: string) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  // console.log(isMatch);
  return isMatch;
}

export default decryptPassword;
