using System;

namespace Hexadecimal_to_Decimal
{
    class Program
    {
        static void Main()
        {
            string nHexa;
            bool isHexa = true;
            int nDec;
            do
            {
                isHexa = true;
                nDec = 0;
                Console.Write("Enter the number in hexadecimal representation: ");
                nHexa = Console.ReadLine();
                int pow16 = nHexa.Length - 1;
                foreach (char c in nHexa)
                {
                    if (((Char.GetNumericValue(c) < 0) || (Char.GetNumericValue(c) > 9)) &&
                        Char.ToUpper(c) != 'A' && Char.ToUpper(c) != 'B' && Char.ToUpper(c) != 'C' && 
                        Char.ToUpper(c) != 'D' && Char.ToUpper(c) != 'E' && Char.ToUpper(c) != 'F')
                    {
                        isHexa = false;
                        break;
                    }

                    if(Char.IsDigit(c)) nDec += (int)(Char.GetNumericValue(c) * Math.Pow(16, pow16));
                    else
                    {
                        switch (Char.ToUpper(c))
                        {
                            case 'A':
                                nDec += (int)(10 * Math.Pow(16, pow16));
                                break;
                            case 'B':
                                nDec += (int)(11 * Math.Pow(16, pow16));
                                break;
                            case 'C':
                                nDec += (int)(12 * Math.Pow(16, pow16));
                                break;
                            case 'D':
                                nDec += (int)(13 * Math.Pow(16, pow16));
                                break;
                            case 'E':
                                nDec += (int)(14 * Math.Pow(16, pow16));
                                break;
                            case 'F':
                                nDec += (int)(15 * Math.Pow(16, pow16));
                                break;
                        }
                    }
                    pow16--;
                }
            } while (!isHexa);

            Console.WriteLine("{0}", nDec.ToString());
        }
    }
}