using System;
namespace Any_Numeral_System
{
    class Program
    {
        static void Main()
        {
            string N, S, D;
            int n = 0, s, d;
            bool corctN = true;

            do
            {
                Console.Write("Enter the intial numeral system base: ");
                S = Console.ReadLine();
            } while (!(int.TryParse(S, out s) && s >= 2 && s <= 16));

            do
            {
                corctN = true;
                Console.Write("Enter the number in base {0} representation: ", S);
                N = Console.ReadLine();

                if(N == "") corctN = false;
                else
                {
                    foreach (char c in N)
                    {
                        if(Char.IsDigit(c) && Char.GetNumericValue(c) >= s) { corctN = false; break; }
                        else if (!Char.IsDigit(c))
                        {
                            if(s == 10) { corctN = false; break; }
                            else if(s == 11 && Char.ToUpper(c) != 'A') { corctN = false; break; }
                            else if(s == 12 && Char.ToUpper(c) != 'A' 
                                            && Char.ToUpper(c) != 'B') { corctN = false; break; }
                            else if(s == 13 && Char.ToUpper(c) != 'A' 
                                            && Char.ToUpper(c) != 'B' 
                                            && Char.ToUpper(c) != 'C') { corctN = false; break; }
                            else if(s == 14 && Char.ToUpper(c) != 'A' 
                                            && Char.ToUpper(c) != 'B' 
                                            && Char.ToUpper(c) != 'C' 
                                            && Char.ToUpper(c) != 'D') { corctN = false; break; }
                            else if(s == 15 && Char.ToUpper(c) != 'A' 
                                            && Char.ToUpper(c) != 'B' 
                                            && Char.ToUpper(c) != 'C' 
                                            && Char.ToUpper(c) != 'D' 
                                            && Char.ToUpper(c) != 'E') { corctN = false; break; }
                            else if(s == 16 && Char.ToUpper(c) != 'A' 
                                            && Char.ToUpper(c) != 'B' 
                                            && Char.ToUpper(c) != 'C' 
                                            && Char.ToUpper(c) != 'D' 
                                            && Char.ToUpper(c) != 'E' 
                                            && Char.ToUpper(c) != 'F') { corctN = false; break; }
                        }
                    }
                }
            } while (!corctN);

            for (int i = 0; i < N.Length; i++)
            {
                if (Char.IsDigit(N[i])) n += (int)(Char.GetNumericValue(N[i]) * Math.Pow(s, (N.Length - (1 + i))));
                else
                {
                    switch (Char.ToUpper(N[i]))
                    {
                        case 'A':
                            n += 10 * (int)Math.Pow(s, (N.Length - (1 + i)));
                            break;
                        case 'B':
                            n += 11 * (int)Math.Pow(s, (N.Length - (1 + i)));
                            break;
                        case 'C':
                            n += 12 * (int)Math.Pow(s, (N.Length - (1 + i)));
                            break;
                        case 'D':
                            n += 13 * (int)Math.Pow(s, (N.Length - (1 + i)));
                            break;
                        case 'E':
                            n += 14 * (int)Math.Pow(s, (N.Length - (1 + i)));
                            break;
                        case 'F':
                            n += 15 * (int)Math.Pow(s, (N.Length - (1 + i)));
                            break;
                    }
                }
            }
            Console.WriteLine("Decimal representation: {0}", n.ToString());

            do
            {
                Console.Write("Enter the new numeral system base: ");
                D = Console.ReadLine();
            } while (!(int.TryParse(D, out d) && d >= 2 && d <= 16));

            if (d != 10)
            {
                int dPow = 0;
                while (Math.Pow(d, dPow) <= n) dPow++;
                while (dPow > 0)
                {
                    int m = (n < d) ? n : (n / (int)Math.Pow(d, dPow - 1)) % d;

                    if (d < 10) Console.Write("{0}", m.ToString());
                    else if (m < 10) Console.Write(m.ToString());
                    else
                    {
                        switch (d)
                        {
                            case 11:
                                Console.Write("A");
                                break;
                            case 12:
                                Console.Write((m == 10) ? "A" : "B");
                                break;
                            case 13:
                                Console.Write((m == 10) ? "A" : (m == 11) ? "B" : "C");
                                break;
                            case 14:
                                Console.Write((m == 10) ? "A" : (m == 11) ? "B" : (m == 12) ? "C" : "D");
                                break;
                            case 15:
                                Console.Write((m == 10) ? "A" : (m == 11) ? "B" : (m == 12) ? "C" : (m == 13) ? "D" : "E");
                                break;
                            case 16:
                                Console.Write((m == 10) ? "A" : (m == 11) ? "B" : (m == 12) ? "C" : (m == 13) ? "D" : (m == 14) ? "E" : "F");
                                break;
                        }
                    }
                    dPow--;
                }
            }
            else Console.Write("Look up!");
            Console.WriteLine();
        }
    }
}