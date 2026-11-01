const entryDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function formatEntryDate(date: string) {
  const parsedDate = new Date(`${date}T00:00:00Z`);

  return Number.isNaN(parsedDate.getTime())
    ? date
    : entryDateFormatter.format(parsedDate);
}
