const os = require("os");

const user = os.userInfo();

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOS)