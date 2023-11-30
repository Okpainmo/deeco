import { findUser } from '../lib/auth.findUser.service.js';
import decryptPassword from '../../../utils/decryptPassword.js';
import generateTokens from '../../../utils/generateTokens.js';
import { validatePasswordWithRegex } from '../../../utils/validatePasswordWithRegex.js';
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                error: 'access denied',
                responseMessage: 'user input missing: please provide all input fields'
            });
        }
        const passwordValidationResponse = validatePasswordWithRegex(password);
        if (!passwordValidationResponse) {
            return res.status(400).json({
                error: 'request rejected',
                responseMessage: 'password is incorrect as it does not match regex specifications'
            });
        }
        //check if user exists
        const user = await findUser({ email });
        // console.log(user);
        if (!user) {
            return res.status(404).json({
                error: 'access denied',
                responseMessage: 'request unsuccessful: user not found or does not exist'
            });
        }
        // check if password matches
        const hashedPassword = user.password;
        const comparePasswords = await decryptPassword(password, hashedPassword);
        if (!comparePasswords) {
            res.status(403).json({
                error: 'access forbidden',
                responseMessage: 'incorrect password: login unsuccessful'
            });
        }
        if (user && comparePasswords) {
            const generatedTokens = await generateTokens(user);
            const { refreshToken } = generatedTokens;
            // set refresh token as cookie for authorization purposes
            res.cookie('TerabyteTechnologies_SecretRefreshToken', refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict', // Prevent CSRF attacks
                maxAge: 24 * 60 * 60 * 1000 // 1 days
            });
            const { accessToken } = generatedTokens;
            return res.status(200).json({
                responseMessage: 'user logged in successfully',
                response: {
                    user,
                    accessToken: accessToken
                }
            });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                responseMessage: 'user login failed',
                error: error.message
            });
        }
        else {
            return res.status(500).json({
                responseMessage: 'user login failed: please try again',
                error: error
            });
        }
    }
    return;
};
export default loginUser;
