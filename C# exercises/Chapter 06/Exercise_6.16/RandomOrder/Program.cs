using System;

namespace RandomOrder
{
    class Program
    {
        static void Main()
        {
            string numN;
            int n;

            do
            {
                Console.Write("Value for n = ");
                numN = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numN, out n)));

            int[] setX  = new int[n];
            Random rand = new Random();
            setX[0] = rand.Next(n) + 1;

            for (int i = 1; i < n; i++)
            {
                int x = rand.Next(n) + 1;
                bool pass = true;

                for (int y = 0; y < i; y++)
                {
                    if (setX[y] == x)
                    {
                        i--;
                        pass = false;
                        break;
                    }
                }
                if (pass) setX[i] = x;
            }
            foreach(int z in setX) Console.WriteLine("{0}", z);
        }
    }
}
