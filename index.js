
const REGEX_EMAIL = /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

const isEmail = (email) => {
  if (!email || email.length > 254 || !REGEX_EMAIL.test(email)) { return false }

  const split = email.split('@')

  if (split[0].length > 64) { return false }

  const domain = split[1].split('.')

  if (domain.some(function (part) { return part.length > 63 })) { return false }

  return true
}

module.exports = {
  isEmail
}
