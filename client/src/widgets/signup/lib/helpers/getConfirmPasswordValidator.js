export function getConfirmPasswordValidator(password) {
  return function (confirmPassword) {
    if (confirmPassword.length === 0) return 'Field is required';
    if (confirmPassword.length < 8)
      return 'Field must have minimum of 8 characters';
    if (confirmPassword.length > 20)
      return 'Field must have maximum of 20 characters';
    if (confirmPassword !== password) return 'Passwords need to match';
    return true;
  };
}
