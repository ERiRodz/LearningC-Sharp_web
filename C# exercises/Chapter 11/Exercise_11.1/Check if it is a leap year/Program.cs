using System;

namespace Check_if_it_is_a_leap_year
{
    class Program
    {
        static void Main()
        {
            int year = DateTime.Now.Year;
            bool leapYear = DateTime.IsLeapYear(year);

            Console.WriteLine("The year is {0}, and is {1} that it is a leap year!", year.ToString(), leapYear.ToString().ToLower());
        }
    }
}