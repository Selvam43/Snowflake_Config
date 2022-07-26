var snowflake = require('snowflake-sdk');
var connection = snowflake.createConnection({
  account: 'natera_dev',
  username: 's_etl_process',
  password: '4lE6GBK$*@^KDNh2!p',
  authenticator: "https://natera.okta.com"
});
connection.connect(function(err, conn) {
  if (err) {
    console.error('Unable to connect: ' + err.message);
  } else {
    console.log('Successfully connected as id: ' + connection.getId());
  }
});