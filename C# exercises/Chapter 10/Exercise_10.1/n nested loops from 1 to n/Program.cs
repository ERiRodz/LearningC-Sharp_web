using System;

namespace n_nested_loops_from_1_to_n
{
    class Program
    {
        static void TheNToTheNLoops (int nPos, int[] loop, int currentPos)
        {

            if (currentPos == nPos)
            {
                foreach (int x in loop) Console.Write("{0} ", x.ToString());
                Console.WriteLine();
                return;
            }

            for(int c = 1; c <= nPos; c++)
            {
                loop[currentPos] = c;
                TheNToTheNLoops(nPos, loop, currentPos + 1);
            }
        }

        static void Main()
        {
            string numN;
            int n;

            do
            {
                Console.Write("n = ");
                numN = Console.ReadLine();
                Console.WriteLine();

            } while (!(int.TryParse(numN, out n) && n > 0));

            int[] loops = new int[n];

            for (int i = 0; i < loops.Length; i++) loops[i] = 1;

            TheNToTheNLoops(n, loops, 0);

            Console.WriteLine();
        }
    }
}