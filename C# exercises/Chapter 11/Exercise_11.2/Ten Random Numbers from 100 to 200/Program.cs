using System;

namespace Ten_Random_Numbers_from_100_to_200
{
    class Program
    {
        static void Main()
        {
            Random rnd = new Random();

            for(int i = 0; i < 10; i++)
            {
                Console.WriteLine("{0}: {1}", (i + 1).ToString(), (rnd.Next(100) + 100).ToString());
            }
        }
    }
}