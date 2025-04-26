using System;

namespace ThirdDigitis7
{
    class Program
    {
        static void Main()
        {
            string numX;
            long x;

            do
            {
                Console.Write("Value for x = ");
                numX = Console.ReadLine();
                Console.WriteLine();
            } while (!(long.TryParse(numX, out x)));

            long thirdDigit = (x - (x % 100)) / 100;

            if (thirdDigit > 9) thirdDigit %= 10;

            if (thirdDigit == 7) Console.WriteLine(thirdDigit.ToString() + " is seven!");
            else Console.WriteLine(thirdDigit + " is not seven.");

        }
    }
}
