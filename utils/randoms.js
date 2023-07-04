/* eslint-disable func-names */
/* eslint-disable no-plusplus */
// eslint-disable-next-line import/no-unresolved
const { sha224 } = require('js-sha256');
const SHA256 = require('crypto-js/sha256');

module.exports.gameNumber = function (length) {
  const chars = '0123456789';
  let result = '';
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

module.exports.randomString = function (length) {
  const chars = '0123456789';
  let result = '';
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

module.exports.gameHash = function (roundNumber, hashSalt) {
  return sha224(`${roundNumber}-${hashSalt}`);
};

module.exports.randomNumber = function (length) {
  const chars = '0123456789';
  let result = '';
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];

  return result;
};

module.exports.getNumber = function (length) {
  const chars = '3456';
  let result = '';
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

module.exports.getRandomInt = function (min, max) {
  const reandomNo = Math.floor(Math.random() * (max - min + 1) + min);
  return reandomNo;
};

module.exports.randomFloat = function () {
  return Math.random();
};

module.exports.getNextIntNumber = function (number) {
  // eslint-disable-next-line radix
  return parseInt(number) + 1;
};

module.exports.randomOnlyNumber = function (length) {
  const chars = '0123456789';
  let result = '';
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

module.exports.randomRefferal = function (length) {
  const chars = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM';
  let result = '';
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

module.exports.createSecretkey = function (data) {
  const secretKey = SHA256(data);
  return secretKey.toString();
};
module.exports.getUserName = function (length) {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};
