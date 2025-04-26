using System;
using System.Numerics;

namespace N_DividedByK_
{
    class Program
    {
        static void Main()
        {
            string numN, numK;
            int n, k;
            BigInteger nFact = 1, kFact = 1;

            do
            {
                Console.Write("Value for n = ");
                numN = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numN, out n) && (n > 2)));

            do
            {
                Console.Write("Value for k = ");
                numK = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numK, out k) && (k > 1) && (k < n)));

            int x = n, y = k;

            while (n > 1)
            {
                if(k > 1) kFact *= k;
                nFact *= n;

                if(k > 1) k--;
                n--;
            }

            Console.WriteLine("{0}!/{1}! = {2}/{3} = {4}", x, y, nFact, kFact, nFact/kFact);
        }
    }
}
