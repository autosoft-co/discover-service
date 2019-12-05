var bonjour = require('bonjour')()
var diont = require('diont')()

// advertise an HTTP server on port 3000
bonjour.publish({ name: 'My Web Server', type: '_pcsync._tcp', port: 3000 })

// browse for all http services
bonjour.find({ type: '_pcsync._tcp' }, function (service) {
  console.log('Found an HTTP server:', service)
})