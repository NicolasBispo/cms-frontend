import dayjs from "dayjs";
import locale from "dayjs/locale/pt-br" 
import relativeTime from 'dayjs/plugin/relativeTime'

export function humanizeDate(date: Date) {
  dayjs.locale(locale)
  dayjs.extend(relativeTime)
  const formattedDate = dayjs(date);
  return formattedDate.fromNow();
}

