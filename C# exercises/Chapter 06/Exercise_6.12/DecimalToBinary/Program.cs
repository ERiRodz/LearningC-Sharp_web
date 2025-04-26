using System;

namespace DecimalToBinary
{
    class Program
    {
        static void Main()
        {
            string numN;
            int n;

            do
            {
                Console.Write("Value for n = ");
                numN = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numN, out n) && (n > 0)));

            Console.Write(n.ToString() + " =(base 2) ");
                
            string nBino = "";

            while (n > 0)
            {
                nBino += (n % 2).ToString();
                n /= 2;
            }

            int x = 0;
                        
            for(int i = (nBino.Length - 1); i >= 0; i--)
            {
                Console.Write(nBino[i]);
                if (nBino[i] == '1') x += (int)Math.Pow(2, i); 
            }
            Console.Write(" =(base10) " + x.ToString());
            Console.WriteLine();
        }
    }
}
