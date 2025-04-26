using System;

namespace PC_Time_that_has_Passed
{
    class Program
    {
        static void Main()
        {
            int pcTime = Environment.TickCount / 1000;

            string secs = (pcTime % 60).ToString("D2"), min = (pcTime / 60).ToString("D2"), hrs = (pcTime / 3600).ToString("D2"), days = (pcTime / 86400).ToString(); 

            Console.WriteLine("{0} days, {1} hours with {2} minutes and {3} seconds.", days, hrs, min, secs);
        }
    }
}