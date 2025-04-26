using System;

namespace First100Sequence
{
    class Program
    {
        static void Main()
        {
            int n = 1; //Sing converter.
            for(int i = 2; i <102; i++)
            {
                int num = n*i;
                Console.Write(num + " ");
                n *= -1;
            }
            Console.WriteLine();
        }
    }
}
