using System;

namespace DecimalToHexadecimal
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
            } while (!(int.TryParse(numN, out n) && (n > 1)));

            string nHexa = "";
            int x = n, y = 0;

            while(x > 0)
            {
                int r = x % 16;
                if(r < 10) nHexa += r.ToString();
                switch (r)
                {
                    case 10:
                        nHexa += "A";
                        break;
                    case 11:
                        nHexa += "B";
                        break;
                    case 12:
                        nHexa += "C";
                        break;
                    case 13:
                        nHexa += "D";
                        break;
                    case 14:
                        nHexa += "E";
                        break;
                    case 15:
                        nHexa += "F";
                        break;
                    default:
                        break;
                }
                x /= 16;
            }

            Console.Write(n.ToString() + " = (base16) ");

            for(int i = (nHexa.Length - 1); i >= 0; i--)
            {
                Console.Write(nHexa[i]);
                switch (nHexa[i])
                {
                    case '1':
                        y += (int)Math.Pow(16, i);
                        break;
                    case '2':
                        y += 2 * (int)Math.Pow(16, i);
                        break;
                    case '3':
                        y += 3 * (int)Math.Pow(16, i);
                        break;
                    case '4':
                        y += 4 * (int)Math.Pow(16, i);
                        break;
                    case '5':
                        y += 5 * (int)Math.Pow(16, i);
                        break;
                    case '6':
                        y += 6 * (int)Math.Pow(16, i);
                        break;
                    case '7':
                        y += 7 * (int)Math.Pow(16, i);
                        break;
                    case '8':
                        y += 8 * (int)Math.Pow(16, i);
                        break;
                    case '9':
                        y += 9 * (int)Math.Pow(16, i);
                        break;
                    case 'A':
                        y += 10 * (int)Math.Pow(16, i);
                        break;
                    case 'B':
                        y += 11 * (int)Math.Pow(16, i);
                        break;
                    case 'C':
                        y += 12 * (int)Math.Pow(16, i);
                        break;
                    case 'D':
                        y += 13 * (int)Math.Pow(16, i);
                        break;
                    case 'E':
                        y += 14 * (int)Math.Pow(16, i);
                        break;
                    case 'F':
                        y += 15 * (int)Math.Pow(16, i);
                        break;
                    default:
                        break;
                }
            }
            Console.Write(" =(base10) " + y.ToString());
            Console.WriteLine();
        }
    }
}
