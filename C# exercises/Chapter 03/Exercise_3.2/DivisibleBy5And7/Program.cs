using System;

namespace DivisibleBy5And7
{
    class Program
    {
        static void Main()
        {
            string numX;
            int x;

            do
            {
                Console.Write("Value for x = ");
                numX = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numX, out x)));

            if (x % 35 == 0) Console.WriteLine(x.ToString() + " is divisible by 5 and 7");
            else if (x % 7 == 0) Console.WriteLine(x.ToString() + " is divisible by 7, but not by 5");
            else if (x % 5 == 0) Console.WriteLine(x.ToString() + " is divisible by 5, but not by 7");
            else Console.WriteLine(x.ToString() + " is neither dibisible by 7 nor by 5");
        }
    }
}
