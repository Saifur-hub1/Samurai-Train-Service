import { notStrictEqual } from "assert";
import error from "../utils/error.js";
import user from "./user.js"

const { findUserByProperty } = user;

const walletGenerator = async (wallet_id: wallet_id_Type) => {
  const User: userProperties | null = await findUserByProperty('user_id', wallet_id);
  console.log('first', User, wallet_id)
  if (typeof wallet_id === 'number') {
    console.log('nice');
  }
  if (!User) {
    error(`Wallet with id ${wallet_id} not found`, 404);
  }
  else {
    console.log('hehllo wallet gener')
    const { user_id, user_name, balance }: userProperties = User;
    const result: Wallet = {
      wallet_id: user_id,
      balance,
      wallet_user: {
        user_id,
        user_name
      }
    }
    return result;
  }
}

const WalletBalanceAdder = async (recharge: addWallet['recharge'], wallet_id: wallet_id_Type): Promise<Wallet> => {
  const User: userProperties | null = await findUserByProperty('user_id', wallet_id);
  if (!User) {
    throw error(`Wallet with id ${wallet_id} not found`, 404);
    // throw new Error('User not found');
  }
  else {
    User.balance += recharge;
    await User.save();
    return {
      wallet_id: User.user_id,
      balance: User.balance,
      wallet_user: {
        user_id: User.user_id,
        user_name: User.user_name
      }
    }
  }
}

export default {
  walletGenerator,
  WalletBalanceAdder
}