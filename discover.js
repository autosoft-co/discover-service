const dnssd = require('dnssd');

// find all services
const browser = dnssd.Browser(dnssd.all())
  .on('serviceUp', service => console.log("Device up: ", service))
  .on('serviceDown', service => console.log("Device down: ", service))
  .start();