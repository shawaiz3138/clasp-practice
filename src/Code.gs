/**
 * Example: NEVER hardcode secrets like this:
 * const TWILIO_SID = "AC123real456key789";  // BAD
 *
 * Instead, read from Script Properties:
 */
function getConfig() {
  const props = PropertiesService.getScriptProperties();
  return {
    twilioSid: props.getProperty('TWILIO_SID'),
    twilioAuthToken: props.getProperty('TWILIO_AUTH_TOKEN'),
    sqlHost: props.getProperty('SQL_HOST'),
    sqlUser: props.getProperty('SQL_USER'),
    sqlPassword: props.getProperty('SQL_PASSWORD')
  };
}

/**
 * Run this once manually from the Apps Script editor to set values.
 * Do NOT commit real values to Git.
 */
function setupConfig() {
  PropertiesService.getScriptProperties().setProperties({
    'TWILIO_SID': 'REPLACE_ME',
    'TWILIO_AUTH_TOKEN': 'REPLACE_ME',
    'SQL_HOST': 'REPLACE_ME',
    'SQL_USER': 'REPLACE_ME',
    'SQL_PASSWORD': 'REPLACE_ME'
  });
}

function myFunction() {
  const config = getConfig();
  Logger.log('Config loaded (values hidden): ' + Object.keys(config).join(', '));
}
