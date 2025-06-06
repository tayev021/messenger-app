function isValidName(name) {
  return /^[A-Z]{1}[a-z]{1,}$/i.test(name);
}

function isValidEmail(email) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}

export { isValidName, isValidEmail, isValidPassword };
