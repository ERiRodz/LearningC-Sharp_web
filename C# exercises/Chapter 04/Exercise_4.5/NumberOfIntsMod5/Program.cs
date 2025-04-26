using System;

namespace NumberOfIntsMod5
{
    class Program
    {
        static void Main()
        {
            string numX, numY;
            int x, y, counts = 0;

            do
            {
                Console.Write("Value for x = ");
                numX = Console.ReadLine();
                Console.Write("Value for y = ");
                numY = Console.ReadLine();
            } while (!(int.TryParse(numX, out x) && int.TryParse(numY, out y) && (x < y)));

            Console.Write("In the range ({0}, {1}) there are ", x, y);
                for (int i = x; i <= y; i++) if (i % 5 == 0) counts++;
            Console.Write("{0} such numbers: ", counts);
                int cAD = 1;
                for (int i = x; i <= y; i++)
                {
                    if (i % 5 == 0)
                    { 
                        Console.Write("{0}{1}", i.ToString(), (cAD < (counts-1)) ? ", " : ((cAD != counts) ? " and " : "."));
                        cAD++;
                    }
                }
            Console.WriteLine();
        }
    }
}
