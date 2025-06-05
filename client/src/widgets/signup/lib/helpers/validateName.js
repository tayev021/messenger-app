export function validateName(name) {
  if (name.length === 0) return 'Field is required';
  if (name.length < 2) return 'Field must have a minimum of 2 characters';
  if (name.length > 20) return 'Field must have a maximum of 20 characters';
  if (!/^[a-zA-Z]{1,}$/.test(name)) return 'Field must have only letters';
  if (!/[A-Z]/.test(name[0])) return 'First letter must be capitalized';
  if (name.slice(1) && !/^[a-z]{1,}$/g.test(name.slice(1)))
    return 'Only first letter must be capitalized';
  return true;
}
