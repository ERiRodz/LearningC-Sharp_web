using System;
using System.Numerics;

namespace ZerosFactEdns
{
    class Program
    {
        static void Main()
        {
            string numN;
            int n;
            BigInteger factN = 1;

            do
            {
                Console.Write("Value for n = ");
                numN = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numN, out n) && (n > 1)));

            int x = n;
            while(x > 1)
            {
                factN *= x;
                x--;
            }

            Console.WriteLine("{0}! = {1}", n, factN);

            int counter = 0;

            while (factN % 10 == 0)
            {
                counter++;
                factN /= 10;
            }

            Console.WriteLine("{0} zeros at the end", counter);
        }
    }
}
