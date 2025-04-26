using System;

namespace Binary_to_Hexadecimal
{
    class Program
    {
        static void Main()
        {
            string nBin;
            bool corctIn = true;

            do
            {
                corctIn = true;
                Console.Write("Enter the number in binary representation: ");
                nBin = Console.ReadLine();
                foreach (char c in nBin)
                {
                    if (c != '1' && c != '0')
                    {
                        corctIn = false;
                        break;
                    }
                }
            } while (!corctIn);


            for (int i = 0; i < nBin.Length; i += 4)
            {
                int valueDec = 0, pow2 = 3, j = i;
                while ((j < nBin.Length) && (j < i + 4))
                {
                    valueDec += (int)(Char.GetNumericValue(nBin[j]) * Math.Pow(2, pow2));
                    pow2--;
                    j++;
                }

                if (valueDec < 10) Console.Write("{0}", valueDec.ToString());
                else
                {
                    switch(valueDec)
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
            Console.WriteLine();

        }
    }
}