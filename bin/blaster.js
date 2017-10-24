#!/usr/bin/env node
const blaster = require('../');

return blaster.updateAWSSecrets(e => {
  if(e) {
    console.error(e);
    return process.exit(1);
  }
  return process.exit(0);
});
