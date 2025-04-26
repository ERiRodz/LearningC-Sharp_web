using System;

namespace ThirdDigit_InBinary1Or0
{
    class Program
    {
        static void Main()
        {
            string numX;
            long x;
            string numBi = "";

            do
            {
                Console.Write("Value for x = ");
                numX = Console.ReadLine();
                Console.WriteLine();
            } while (!(long.TryParse(numX, out x)));

            long y = x;

            //Binary representation.
            do
            {
                long r = y % 2;
                numBi += r.ToString();
                y /= 2;
            } while (y > 0);

            Console.Write(x.ToString() + " =(base 2) "); 

            //Printing in reverse. 
            for(int i = (numBi.Length - 1); i >= 0; i--)
            {
                Console.Write(numBi[i]);
            }

            Console.WriteLine();

            if (numBi[numBi.Length - 3] == '1') Console.WriteLine("The third bit of " + x.ToString() + " is 1.");
            else Console.WriteLine("The third bit of " + x.ToString() + " is 0.");
        }
    }
}
