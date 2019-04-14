const test = require('tape')
const { isEmail } = require('.')

test('sanity', t => {
  t.ok(true)
  t.end()
})

test('pass - valid email', t => {
  const email = `foo@bar.com`
  t.ok(isEmail(email))
  t.end()
})

test('fail - invalid email, invalid domain name', t => {
  const email = `foo@bar`
  t.ok(!isEmail(email))
  t.end()
})

test('fail - invalid email, too long', t => {
  const email = `foo@bar.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm` +
  `mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm` +
  `mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm`
  t.ok(!isEmail(email))
  t.end()
})

test('fail - invalid email, nonexistent', t => {
  const email = ``
  t.ok(!isEmail(email))
  t.end()
})

test('fail - invalid email, address too long', t => {
  const email = `fooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo` +
  `oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo@bar.com`
  t.ok(!isEmail(email))
  t.end()
})

test('fail - invalid email, domain too long', t => {
  const email = `foo@@barrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr` +
  `rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr.com`
  t.ok(!isEmail(email))
  t.end()
})
