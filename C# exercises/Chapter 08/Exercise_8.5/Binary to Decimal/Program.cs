using System;

namespace Binary_to_Decimal
{
    class Program
    {
        static void Main()
        {
            string nBin;
            bool binary;

            do
            {
                binary = true;
                Console.Write("Enter the number in binary representation: ");
                nBin = Console.ReadLine();
                foreach (char c in nBin) if (c != '1' && c != '0') binary = false;
            } while (!binary);

            int nDec = 0;
            for(int i = 0; i < nBin.Length; i++) nDec += (int)Char.GetNumericValue(nBin[i]) * (int)Math.Pow(2, (nBin.Length - (1 + i)));
            Console.WriteLine("{0}", nDec.ToString());
        }
    }
}