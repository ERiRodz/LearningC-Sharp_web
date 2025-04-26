using System;


namespace Hexadecimal_to_Binary
{
    class Program
    {
        static void Main()
        {
            string nHexa;
            bool corctIn = true;
            do
            {
                corctIn = true;
                Console.Write("Enter a number using hexadecimal representation: ");
                nHexa = Console.ReadLine();

                foreach (char c in nHexa)
                {
                    if ((Char.GetNumericValue(c) < 0 || Char.GetNumericValue(c) > 9) &&
                        Char.ToUpper(c) != 'A' && Char.ToUpper(c) != 'B' && Char.ToUpper(c) != 'C' &&
                        Char.ToUpper(c) != 'D' && Char.ToUpper(c) != 'E' && Char.ToUpper(c) != 'F')
                    {
                        corctIn = false;
                        break;
                    }
                }

                if(corctIn)
                {
                    foreach (char c in nHexa)
                    {
                        switch (Char.ToUpper(c))
                        {
                            case '0':
                                Console.Write("0000");
                                break;
                            case '1':
                                Console.Write("0001");
                                break;
                            case '2':
                                Console.Write("0010");
                                break;
                            case '3':
                                Console.Write("0011");
                                break;
                            case '4':
                                Console.Write("0100");
                                break;
                            case '5':
                                Console.Write("0101");
                                break;
                            case '6':
                                Console.Write("0110");
                                break;
                            case '7':
                                Console.Write("0111");
                                break;
                            case '8':
                                Console.Write("1000");
                                break;
                            case '9':
                                Console.Write("1001");
                                break;
                            case 'A':
                                Console.Write("1010");
                                break;
                            case 'B':
                                Console.Write("1011");
                                break;
                            case 'C':
                                Console.Write("1100");
                                break;
                            case 'D':
                                Console.Write("1101");
                                break;
                            case 'E':
                                Console.Write("1110");
                                break;
                            case 'F':
                                Console.Write("1111");
                                break;
                        }
                        Console.Write(" ");
                    }
                }
            } while (!corctIn);
            Console.WriteLine();
        }
    }
}