import User from "../models/User.js"



const findUserByProperty = async (key: string, value: number) => {
  if (key == '_id') {
    return await User.findById(value)
  }
  return await User.findOne({ [key]: value })
}

const createNewUser = ({ user_id, user_name, password, balance }: userProperties) => {
  const user = new User({
    user_id,
    user_name,
    password,
    balance
  });
  return user.save();
}

export default { findUserByProperty, createNewUser };