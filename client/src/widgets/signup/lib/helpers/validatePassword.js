export function validatePassword(password) {
  if (password.length === 0) return 'Field is required';
  if (password.length < 8) return 'Field must have minimum of 8 characters';
  if (password.length > 20) return 'Field must have maximum of 20 characters';
  return true;
}
