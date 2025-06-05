export function validateEmail(email) {
  if (email.length === 0) return 'Field is required';
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
    return 'Please provide a valid email address';
  return true;
}
