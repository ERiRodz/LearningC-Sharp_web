using System;

namespace Decimal_to_Hexadecimal
{
    class Program
    {
        static void Main()
        {
            string nDec;
            int n;

            do
            {
                Console.Write("Enter the value for n: ");
                nDec = Console.ReadLine();
            } while (!(int.TryParse(nDec, out n)));

            int q = n, powerOf16 = 0;
            while ((int)Math.Pow(16, powerOf16) <= Math.Abs(n)) powerOf16++;
            int[] r = new int[powerOf16];

            for(int i = 0; i < powerOf16; i++)
            {
                r[powerOf16 - (1 + i)] = q % 16;
                q /= 16;
            }

            foreach(int x in r)
            {
                if (x < 10) Console.Write(x.ToString());
                else
                {
                    switch(x)
                    {
                        case 10:
                            Console.Write("A");
                            break;
                        case 11:
                            Console.Write("B");
                            break;
                        case 12:
                            Console.Write("C");
                            break;
                        case 13:
                            Console.Write("D");
                            break;
                        case 14:
                            Console.Write("E");
                            break;
                        case 15:
                            Console.Write("F");
                            break;
                    }
                }
            }
        }
    }
}