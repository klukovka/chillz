export function formattedDateDayShortMonthFullYear(date, languageCode) {
  const formattedDate = new Intl.DateTimeFormat(languageCode, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

  return formattedDate;
}
