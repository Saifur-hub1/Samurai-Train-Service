import error from "../utils/error.js";
import train from "./train.js";

const { findTrainByProperty, createNewTrain} = train;

const registerTrain = async ({train_id, train_name, capacity, stops}: trainProperties) => {
  const user = await findTrainByProperty('train_id', train_id);
  if (user) {
    throw error('Train already exist', 400) // 400 status code represent 'Bad Request'
  }
  return createNewTrain({ train_id, train_name, capacity, stops });
}

export default {
  registerTrain,
};