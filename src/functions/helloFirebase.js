import * as functions from "firebase-functions";

const message = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Firebase`);
    }, 5000);
  });
};

export let helloFirebase = functions.https.onRequest(async (req, res) => {
  let word = await message();
  res.status(200).send(`Hello ${word}`);
});
