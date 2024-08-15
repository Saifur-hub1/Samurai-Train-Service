import { Request, Response, NextFunction} from 'express'
import walletService from '../service/wallet.js';

const { walletGenerator, WalletBalanceAdder} = walletService;

const getWallet = (req: Request, res: Response, next: NextFunction) => {
  const wallet_id: wallet_id_Type = Number(req.params.wallet_id);
  console.log(wallet_id);
  try {
    if (typeof wallet_id === 'number') {
      console.log('yeahoooo')
    }
    const walletObject = walletGenerator(wallet_id);
    // const result = JSON.stringify(walletObject);
    res.status(200).send(walletObject);
  } catch (error) {
    next(error);
  }
}

const addWallet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recharge = Number(req.body.recharge);
    const wallet_id = Number(req.params.wallet_id);

    const result = await WalletBalanceAdder(recharge, wallet_id)
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export default {
  getWallet,
  addWallet
}