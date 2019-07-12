// https://www.npmjs.com/package/mailchimp-api-v3

var Mailchimp = require('mailchimp-api-v3')

var mailchimp = new Mailchimp(api_key);

//Callback style
mailchimp.get({
    path: '/lists/id1'
}, function(err, result) {
    ...
})

//Promise style
mailchimp.get({
        path: '/lists/id1'
    })
    .then(function(result) {
        ...
    })
    .catch(function(err) {
        ...
    })