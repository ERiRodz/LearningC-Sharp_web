
namespace HolidayAndWorkingSat
{
    class Holidays
    {
        public static string[] HolidaysList = 
        {
           new System.DateTime(1, 1, 1).ToString("MM/dd"),
           new System.DateTime(1991, 4, 17).ToString("MM/dd"),
           new System.DateTime(1990, 11, 10).ToString("MM/dd"),
           new System.DateTime(1, 12, 31).ToString("MM/dd")
        };
    }

    class WorkingSat
    {
        public static string[] WorkingSatList = 
        {
            new System.DateTime(System.DateTime.Now.Year, 4, 18).ToString("MM/dd/yyy")
        };
    }
}


namespace CalculateTheWorkDaysBetween
{
    class Workdays
    {
        static int FutureYear(int crntYear) { return Input("Year", "yyyy", crntYear, 2020); } 
        static int FutureMonth() { return Input("Month", "mm", 1, 12); }
        static int FutureDay(int month, int crntYear) { return Input("Day", "dd", 1, LastMonthDay(crntYear, month)); }

        static string MonthName(int monthNum)
        {
            switch (monthNum)
            {
                case 1: return "January";
                case 2: return "February";
                case 3: return "March";
                case 4: return "April";
                case 5: return "May";
                case 6: return "June";
                case 7: return "July";
                case 8: return "August";
                case 9: return "September";
                case 10: return "October";
                case 11: return "November";
                case 12: return "December";
                default: return null;
            }
        }

        static int LastMonthDay(int year, int month)
        {
            int lastDay;

            switch (month)
            {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    lastDay = 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    lastDay = 30;
                    break;
                case 2:
                    lastDay = (System.DateTime.IsLeapYear(year)) ? 29 : 28;
                    break;
                default:
                    lastDay = 30;
                    break;
            }

            return lastDay;
        }
        
        static int Input(string dateComponent, string dateFormat, int minValue, int maxValue)
        {
            string input;
            int value;

            do
            {
                System.Console.Write("\t{0}({1}): ", dateComponent, dateFormat);
                input = System.Console.ReadLine();
            } while (!(int.TryParse(input, out value) && value >= minValue && value <= maxValue));

            return value;
        }

        static int CalculateWorkdays(int year, int month, int day, int workdaysCount)
        {
            //Validates the date.
            if(day == 0)
            {
                month--;

                if(month == 0) 
                {
                    year--;
                    month = 12;
                }

                day = LastMonthDay(year, month);
            }

            System.DateTime 
                aDate = new System.DateTime(year, month, day);

            if (System.DateTime.Compare(System.DateTime.Now.Date, aDate.Date) == 0) return ++workdaysCount;

            switch (aDate.DayOfWeek.ToString())
            {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    workdaysCount++;
                    break;
                default:
                    break;
            }

            for (int i = 0; i < HolidayAndWorkingSat.Holidays.HolidaysList.Length; i++)
            {
                if (aDate.Date.ToString("MM/dd") == HolidayAndWorkingSat.Holidays.HolidaysList[i] && workdaysCount > 0)
                {
                    System.Console.WriteLine("Holiday! {0}", HolidayAndWorkingSat.Holidays.HolidaysList[i]);
                    workdaysCount--;
                };
            }

            for (int i = 0; i < HolidayAndWorkingSat.WorkingSat.WorkingSatList.Length; i++)
            {
                if (aDate.Date.ToString("MM/dd/yyyy") == HolidayAndWorkingSat.WorkingSat.WorkingSatList[i])
                {
                    System.Console.WriteLine("Working Satuday! {0}", HolidayAndWorkingSat.WorkingSat.WorkingSatList[i]);
                    workdaysCount++;
                }
            }

            return CalculateWorkdays(year, month, --day, workdaysCount);
        }

        static void Main()
        {
            int 
                dayOfMonth = System.DateTime.Now.Day, 
                year = System.DateTime.Now.Year,
                month = System.DateTime.Now.Month;
            string
                weekDay = System.DateTime.Now.DayOfWeek.ToString(),
                monthName = MonthName(month);

            System.Console.WriteLine("Today is: {0} {1} {2}, {3}", weekDay, monthName, dayOfMonth.ToString(), year.ToString());

            int 
                futureYear,
                futureMonth,
                futureDay;
            System.DateTime 
                futureDateTime;
            do
            {
                System.Console.WriteLine("Enter the future date (until 2020).");
                futureYear = FutureYear(year);
                futureMonth = FutureMonth();
                futureDay = FutureDay(futureMonth, futureYear);
                futureDateTime = new System.DateTime(futureYear, futureMonth, futureDay);
            } while (System.DateTime.Compare(System.DateTime.Now.Date, futureDateTime.Date) > 0);
            
            string
                futureMonthName = MonthName(futureMonth),
                futureDayName = futureDateTime.DayOfWeek.ToString();

            System.Console.WriteLine("The future date is: {0} {1} {2}, {3}", futureDayName, futureMonthName, futureDay.ToString(), futureYear.ToString());

            System.TimeSpan 
                dayInBetween = futureDateTime.Date - System.DateTime.Now.Date; //plus 1, .Date does not include the actual future day

            System.Console.WriteLine("The difference between dates is {0} days. The number of workdays is {1}.", 
                (1 + dayInBetween.TotalDays).ToString(), CalculateWorkdays(futureYear, futureMonth, futureDay, 0).ToString());
        }
    }
}