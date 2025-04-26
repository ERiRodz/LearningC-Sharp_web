using System;

namespace FourDigitNumber
{
    class Program
    {
        static void Main()
        {
            string numX, xNum = "", lastFirst = "", swapMid = "";
            int x, sum = 0;

            do
            {
                Console.Write("Value for x = ");
                numX = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numX, out x)) || (numX.Length != 4));

            for(int i = numX.Length - 1; i >= 0; i--)
            {
                int y;
                int.TryParse(numX[i].ToString(), out y);
                sum += y;
                xNum += numX[i];
            }

            lastFirst = numX[3].ToString() + numX[0].ToString() + numX[1].ToString() + numX[2].ToString();
            swapMid = numX[0].ToString() + numX[2].ToString() + numX[1].ToString() + numX[3].ToString();


            Console.Write("Sum of the digits: " + sum.ToString());
            Console.WriteLine();
            Console.Write("Number in reversed order: " + xNum);
            Console.WriteLine();
            Console.Write("Last digit in the first poostion: " + lastFirst.ToString());
            Console.WriteLine();
            Console.Write("Second and third digits were exchanged: " + swapMid.ToString());
            Console.WriteLine();
        }
    }
}
