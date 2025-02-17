import { useEffect, useState } from "react";

export const useDateDuration = (startDate: string) => {
  const [duration, setDuration] = useState<{ years: number; months: number }>({
    years: 0,
    months: 0,
  });

  useEffect(() => {
    const computeDateDuration = (date: string) => {
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

      const [monthStr, yearStr] = date.split(" ");
      const startMonth = monthsMap[monthStr];
      const startYear = parseInt(yearStr, 10);

      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();

      let yearDiff = currentYear - startYear;
      let monthDiff = currentMonth - startMonth;

      if (monthDiff < 0) {
        yearDiff -= 1;
        monthDiff += 12;
      }

      return { years: yearDiff, months: monthDiff };
    };

    setDuration(computeDateDuration(startDate));
  }, [startDate]);

  return duration;
};
