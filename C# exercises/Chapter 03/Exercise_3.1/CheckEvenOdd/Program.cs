using System;

namespace CheckEvenOdd
{
    class Program
    {
        static void Main()
        {

            int x;
            string numX;

            do
            {
                Console.Write("Value for x = ");
                numX = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numX, out x)));

            if (x % 2 == 0) Console.WriteLine(x.ToString() + " is even!");
            else Console.WriteLine(x.ToString() + " is odd!");


        }
    }
}
