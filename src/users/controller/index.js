const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Web3 = require('web3');

const config = require('../../../config');
const schemes = require('../models/mongoose');

const signUp = async (res, parameters) => {
  const { password, passwordConfirmation, email, username, name, lastName } =
    parameters;

  if (password === passwordConfirmation) {
    const newUser = schemes.User({
      password: Bcrypt.hashSync(password, 10),
      email,
      username,
      name,
      lastName,
    });

    try {
      const savedUser = await newUser.save();

      const token = jwt.sign(
        { email, id: savedUser.id, username },
        config.API_KEY_JWT,
        { expiresIn: config.TOKEN_EXPIRES_IN }
      );

      return res.status(201).json({ token });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error,
      });
    }
  }

  return res.status(400).json({
    status: 400,
    message: 'Passwords are different, try again!!!',
  });
};

const verify = async (res, parameters) => {
  const { transaction, walletAddress, text } = parameters;

  // Connect web3 bsc testnet
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      'https://data-seed-prebsc-1-s1.binance.org:8545'
    )
  );

  const recoveredAddress = web3.eth.accounts.recover(text, transaction);

  if (recoveredAddress.toUpperCase() === walletAddress.toUpperCase()) {
    const newWallet = schemes.WalletAddress({
      address: walletAddress,
    });

    try {
      // check wallet address exists
      const query = schemes.WalletAddress.query({ address: walletAddress });
      const row = await query.findOne();
      if (!row) {
        await newWallet.save();
      }
      return res
        .status(200)
        .json({ message: 'Transaction has been verified!' });
    } catch (error) {
      return res.status(400).json({ status: 400, message: error });
    }
  }
  return res
    .status(400)
    .json({ status: 400, message: 'Transaction verification was failed' });
};

module.exports = { signUp, verify };
