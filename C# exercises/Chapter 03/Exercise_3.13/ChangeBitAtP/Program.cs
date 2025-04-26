using System;

namespace ChangeBitAtP
{
    class Program
    {
        static void Main()
        {
            string numN, posP, valV;
            ulong n, p;
            byte v;
            bool nPass, pPass, vPass;

            do
            {
                Console.Write("Value for n = ");
                numN = Console.ReadLine();
                nPass = ulong.TryParse(numN, out n);
                Console.WriteLine();
            } while (!nPass || n < 0);

            do
            {
                Console.Write("Position of the bit p = ");
                posP = Console.ReadLine();
                pPass = ulong.TryParse(posP, out p);
                Console.WriteLine();
            } while (!pPass || p < 0);

            do
            {
                Console.Write("Bit value v = ");
                valV = Console.ReadLine();
                vPass = byte.TryParse(valV, out v);
                Console.WriteLine();
            } while (!vPass || (v != 0 && v != 1));

            //n to binomial
            ulong y = n;
            string numBi = "";

            do
            {
                byte r = (byte)(y % 2);
                numBi += r.ToString();
                y /= 2;
            } while (y > 0);

            Console.Write(n.ToString() + " =(base 2) ");
            for(int i = (numBi.Length - 1); i >= 0; i--)
            {
                Console.Write(numBi[i]);
            }
            Console.WriteLine();

            Console.WriteLine((v == 1) ? "|" : "^");

            //Binomial used for the change of the bit p of n.
            ulong z = (1u << (byte)p);
            string zBi = "";

            do
            {
                byte r = (byte)(z % 2);
                zBi += r.ToString();
                z /= 2;
            } while (z > 0);

            Console.Write((1u << (byte)p).ToString() + " =(base 2) ");
            for (int i = (zBi.Length - 1); i >= 0; i--)
            {
                Console.Write(zBi[i]);
            }
            Console.WriteLine();

            //Result
            ulong w = (v == 1) ? (n | (1u << (byte)p)) : (n ^ (1u << (byte)p));
            ulong result = w; 
            string wBi = "";

            do
            {
                byte r = (byte)(w % 2);
                wBi += r.ToString();
                w /= 2;
            } while (w > 0);

            Console.WriteLine("________________________");
            
            Console.Write(result.ToString() + " =(base 2) ");
            for (int i = (wBi.Length - 1); i >= 0; i--)
            {
                Console.Write(wBi[i]);
            }
            Console.WriteLine();
        }
    }
}
