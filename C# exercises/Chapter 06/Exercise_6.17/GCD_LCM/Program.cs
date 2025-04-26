using System;

namespace GCD_LCM
{
    class Program
    {
        static void Main()
        {
            string numA, numB;
            int a, b, r, x, y, gcd = 1;

            do
            {
                do
                {
                    Console.Write("Value for a = ");
                    numA = Console.ReadLine();
                    Console.WriteLine();
                } while (!(int.TryParse(numA, out a)));

                do
                {
                    Console.Write("Value for b = ");
                    numB = Console.ReadLine();
                    Console.WriteLine();
                } while (!(int.TryParse(numB, out b)));
            } while ((a == 0) && (b == 0));

            x = (a > b) ? a : b;
            y = (x == a) ? b : a;

            if (x < 0) x *= -1;
            if (y < 0) y *= -1;

            if (y != 0)
            {
                Console.WriteLine("{0} =(mod{1}) {2}", x, y, x % y);

                if (x % y == 0) gcd = y;

                while (x % y > 0)
                {
                    r = x % y;
                    x = y;
                    y = r;
                    gcd = y;
                }
            }
            else gcd = x;

            Console.WriteLine("GCD({0}, {1}) = {2}", a, b, gcd);
            Console.WriteLine("LCM({0}, {1}) = {2}", a, b, (Math.Abs(a*b)/gcd));
        }
    }
}
