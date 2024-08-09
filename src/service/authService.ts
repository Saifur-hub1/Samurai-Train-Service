import bcrypt from 'bcryptjs'
import userService from './user.js'
import error from '../utils/error.js';

const { findUserByProperty, createNewUser } = userService;


const registerService = async ({ user_id, user_name, password, balance }: userProperties) => {
  let user = await findUserByProperty('user_id', user_id);
  if (user) throw error('User already exist', 400);
  
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return createNewUser({ user_id, user_name, password, balance });
}

export default {
  registerService
}