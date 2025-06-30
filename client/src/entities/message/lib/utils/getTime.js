import { formatDateNumber } from '../../../../shared/lib/utils/formatDateNumber';

export function getTime(timestamp) {
  const date = new Date(timestamp);
  const hours = formatDateNumber(date.getHours());
  const minutes = formatDateNumber(date.getMinutes());

  return `${hours}:${minutes}`;
}
