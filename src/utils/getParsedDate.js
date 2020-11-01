export default function getParsedDate(date, isSetToday = false) {
  if (!date) return date;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date(date);
  const year = d.getFullYear();
  const day = d.getDate();
  const month = monthNames[d.getMonth()];

  if (isSetToday) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    const currentMonth = monthNames[currentDate.getMonth()];
    if (currentYear === year && currentMonth === month && currentDay === day)
      return "today";
  }

  return `${month} ${day}, ${year}`;
}
