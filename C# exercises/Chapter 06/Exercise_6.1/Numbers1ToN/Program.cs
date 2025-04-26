using System;

namespace Numbers1ToN
{
    class Program
    {
        static void Main()
        {
            string numN;
            int x = 1, n;

            do
            {
                Console.Write("Value for n = ");
                numN = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numN, out n) && (n > 1)));

            while(x <= n)
            {
                Console.Write("{0,-4}", x);
                x++;
            }
            Console.WriteLine();
        }
    }
}
