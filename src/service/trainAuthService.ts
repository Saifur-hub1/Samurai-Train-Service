import error from "../utils/error.js";
import train from "./train.js";

const { findTrainByProperty, createNewTrain} = train;

const registerTrain = async (Train: trainProperties) => {
  const user = await findTrainByProperty('train_id', Train.train_id);
  if (user) {
    throw error('Train already exist', 400) // 400 status code represent 'Bad Request'
  }
  return createNewTrain(Train);
}

export default {
  registerTrain,
};