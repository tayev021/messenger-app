function isValidName(name) {
  return /^[a-z]{2,}$/i.test(name);
}

function isValidEmail(email) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}

export { isValidName, isValidEmail, isValidPassword };
