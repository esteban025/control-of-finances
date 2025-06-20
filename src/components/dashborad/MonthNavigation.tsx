import { MonthNames } from "@/data/MonthNames";
import { useMonthActualStore } from "@/store/useMonthActualStore";
import { Card } from "../ui/Card";

const PrevIcon = ({classes}: {classes: string}) => (
  <svg className={classes}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
)
const NextIcon = ({classes}: {classes: string}) => (
  <svg className={classes}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
)
export const MonthNavigation = () => {

  const { month, year, setMonth, setYear } = useMonthActualStore();

  const classBtn = "border border-light-border rounded-full p-2 cursor-pointer dark:border-dark-border"
  const classIcon = "size-5"

  const prevMonth = () => {
    const newMonth = month === 0 ? 11 : month - 1;
    const newYear = month === 0 ? year - 1 : year;
    setMonth(newMonth);
    setYear(newYear);
  }

  const nextMonth = () => {
    const newMonth = month === 11 ? 0 : month + 1;
    const newYear = month === 11 ? year + 1 : year;
    setMonth(newMonth);
    setYear(newYear);
  }

  return (
    <Card className="">
    <div className="flex items-center justify-between gap-2 p-2">
      <button className={classBtn} onClick={prevMonth}>
        <PrevIcon classes={classIcon} />
      </button>
      <p className="font-bold">{MonthNames[month]} {year}</p>
      <button className={classBtn} onClick={nextMonth}>
        <NextIcon classes={classIcon} />
      </button>
    </div>
    </Card>
  );
}
