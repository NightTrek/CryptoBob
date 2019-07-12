const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = 'bK9uSGlTGfqFHV0O4unF20sLYD82J0iEHyxPW9qL2bIMNpn2OonKfbUe8Q5JHhHq';
const passwordHash = "$2b$10$0HyaBW.PDM61SJIP6KBNIOFpl4tzt47UJOugxoCStZIKfSrRLMlKi"

//autogenerate a password hash for a plaintext password
// bcrypt.hash(passwordPlainText, saltRounds, function(err, hash) {
//     console.log(hash);
//   });

// bcrypt.compare(password, passwordHash).then(function(res) {
//     console.log(res)
// });