using System;

namespace TheBitPositionP
{
    class Program
    {
        static void Main()
        {
            int n, p;
            string numN, posP, numBi = "";

            do
            {
                Console.Write("Value for n = ");
                numN = Console.ReadLine();
                Console.Write("Position p = ");
                posP = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numN, out n)) || !(int.TryParse(posP, out p)));

            long y = n;
            
            //Binary representation.
            do
            {
                long r = y % 2;
                numBi += r.ToString();
                y /= 2;
            } while (y > 0);
            Console.Write(n.ToString() + " =(base 2) ");

            //Printing in reverse.
            for (int i = (numBi.Length - 1); i >= 0; i--)
            {
                Console.Write(numBi[i]);
            }

            Console.WriteLine();
            //Position counting begins with 0.
            string theBit = ((n >> p) & 1) != 0 ? "1" : "0";
            Console.WriteLine("The bit on the position " + p.ToString() + " is " + theBit + ".");           
        }
    }
}
