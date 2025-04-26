using System;

namespace Decimal_to_Binary
{
    class Program
    {
        static void Main()
        {
            string numN;
            int n;

            do
            {
                Console.Write("Enter number in decimal representation: ");
                numN = Console.ReadLine();

            } while (!(int.TryParse(numN, out n)));

            if (n != 0)
            {
                int q = n, power2 = 0;
                while ((int)Math.Pow(2, power2) <= Math.Abs(n))
                {
                    power2++;
                }
                int[] r = new int[power2];
                int indexR = r.Length - 1;

                while (q > 0)
                {
                    r[indexR] = q % 2;
                    indexR--;
                    q /= 2;
                }
                foreach (int x in r) Console.Write("{0}", x.ToString());
                Console.WriteLine();
            }
            else Console.WriteLine("0");
        }
    }
}