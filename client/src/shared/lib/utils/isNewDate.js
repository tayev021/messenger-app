export function isNewDate(aTimestamp, bTimestamp) {
  const a = new Date(aTimestamp);
  const b = new Date(bTimestamp);

  if (
    a.getDate() !== b.getDate() ||
    a.getMonth() !== b.getMonth() ||
    a.getFullYear() !== b.getFullYear()
  ) {
    return true;
  }

  return false;
}
