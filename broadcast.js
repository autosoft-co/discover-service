const dnssd = require('dnssd');

const options = {
  name: 'PC Sync'
}

const ad = new dnssd.Advertisement(dnssd.tcp('pcsync'), 1996, options);

ad.start();

console.log('service advertised')

