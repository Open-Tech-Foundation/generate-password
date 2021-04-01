const numbers = '0123456789';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '!@#$%^&*';
const characters = numbers + lowerCase + upperCase + symbols;

function generate(rules) {
  let password = '';
  const array = new Uint8Array(1);
  for (let i = 0; i < rules.length; i++) {
    const c = crypto.getRandomValues(array)[0];
    password += characters[c % characters.length];
  }
  return password;
}

function generatePassword(options) {
  options = options || {};
  const rules = {
    length: options.length || 8,
  };

  return generate(rules);
}

export default generatePassword;
