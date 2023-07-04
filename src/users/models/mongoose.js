const mongoose = require('../../../services/mongoose');

const User = mongoose.model(
  'User',
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  'users'
);

const WalletAddress = mongoose.model(
  'WalletAddress',
  {
    address: {
      type: String,
      required: true,
      unique: true,
    },
  },
  'walletaddresses'
);

module.exports = {
  User,
  WalletAddress,
};
