const crypto = require("crypto");
const key = crypto.randomBytes(32);
const iv = "swaklrdvymvxop2l";
const Securitykey = crypto.randomBytes(32);
//Encrypting text
exports.encrypt = (text) => {
  let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString("hex");
};

// Decrypting text
exports.decrypt = (text) => {
  const decipher = crypto.createDecipheriv("aes-256-cbc", Securitykey, iv);

  let decryptedData = decipher.update(text, "hex", "utf-8");

  decryptedData += decipher.final("utf8");

  return decryptedData;
};
