export const computeDateDuration = (start: string, end?: string) => {
  const monthsMap: { [key: string]: number } = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const [startMonthStr, startYearStr] = start.split(" ");
  const startMonth = monthsMap[startMonthStr];
  const startYear = parseInt(startYearStr, 10);

  let endMonth: number, endYear: number;
  if (end) {
    const [endMonthStr, endYearStr] = end.split(" ");
    endMonth = monthsMap[endMonthStr];
    endYear = parseInt(endYearStr, 10);
  } else {
    const currentDate = new Date();
    endMonth = currentDate.getMonth();
    endYear = currentDate.getFullYear();
  }

  let yearDiff = endYear - startYear;
  let monthDiff = endMonth - startMonth;

  if (monthDiff < 0) {
    yearDiff -= 1;
    monthDiff += 12;
  }

  let result = "";
  if (yearDiff > 0) {
    result += `${yearDiff} yr${yearDiff > 1 ? "s" : ""} `;
  }
  if (monthDiff > 0) {
    result += `${monthDiff} mo${monthDiff > 1 ? "s" : ""}`;
  }

  return result.trim();
};
