using System;

namespace MatrixOfNums
{
    class Program
    {
        static void Main()
        {
            string numCol;
            int col;

            do
            {
                Console.Write("How many columns? ");
                numCol = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numCol, out col) && (col > 1) && (col < 20)));

            for (int line = 1, i = 1; line <= col; line++, i++)
            {
                for (int n = 1, j = i; n <= col; j++, n++)
                {
                    if (n == 1) Console.Write("|");
                    Console.Write("{0,-3}|", j);
                }
                Console.WriteLine();
            }
        }
    }
}
