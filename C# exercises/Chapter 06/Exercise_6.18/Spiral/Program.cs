using System;

namespace Spiral
{
    class Program
    {
        static void Main()
        {
            string numN;
            int n, m = 1, x = 0, y = 1, rSteps = 0,  cSteps = 0;
            
            do
            {
                Console.Write("Value for n = ");
                numN = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numN, out n) && (n > 1)));

            int[,] spiral = new int[n, n];

            for (int i = 0; i < n; i++, m++) spiral[0, i] = m;

            for(int r = 1, c = n - 1, steps = n - 1; steps > 0; r += y, c += x, m++)
            {
                spiral[r, c] = m;

                if (y != 0) rSteps++;
                if (x != 0) cSteps++;

                if(rSteps == steps)
                {
                    x = -1 * y;
                    y = 0;
                    rSteps = 0;
                }

                if(cSteps == steps)
                {
                    y = x;
                    x = 0;
                    cSteps = 0; 
                    steps--;
                }
            }

            for (int i = 0; i < n; i++)
            {
                for(int j = 0; j < n; j++) Console.Write("{0,-4}", spiral[i, j].ToString());
                Console.WriteLine();
            }
        }
    }
}
