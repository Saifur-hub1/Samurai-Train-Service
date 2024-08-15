import bcrypt from 'bcryptjs'
import userService from './user.js'
import error from '../utils/error.js';

const { findUserByProperty, createNewUser } = userService;


const registerService = async (User: userProperties) => {
  let user = await findUserByProperty('user_id', User.user_id);
  if (user) throw error('User already exist', 400);
  
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(User.password, salt);

  return createNewUser(User);
}

export default {
  registerService
}