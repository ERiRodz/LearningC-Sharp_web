using System;

namespace Sum_of_two_very_long_int
{
    class Program
    {
        static string EnterNumber()
        {
            string num;
            bool isNumber = true;

            do
            {
                isNumber = true;
                Console.Write("Enter a number: ");
                num = Console.ReadLine();
                foreach (char c in num)
                {
                    if (!Char.IsDigit(c))
                    {
                        isNumber = !isNumber;
                        Console.WriteLine("Invalid input!");
                        break; 
                    }
                }
            } while (!isNumber);

            return num;
        }
        
        static void FillTheArrayInverted(int[] X, string num)
        {
            for (int i = 0; i < X.Length; i++)
            {
                X[X.Length - (1 + i)] = (int)Char.GetNumericValue(num[i]);
            }
        }

        static string SumOfTwoLongInt(int[] a, int[] b)
        {
            string sum = "";
            int smallestNumLength = (a.Length < b.Length) ? a.Length : b.Length;
            int aTen = 0;

            for (int i = 0; i < smallestNumLength; i++)
            {
                int c = a[i] + b[i] + aTen;

                if (c < 10)
                {
                    aTen = 0;
                    sum += c.ToString();
                }
                else
                {
                    aTen = 1;
                    c = c - 10;
                    sum += c.ToString();
                }
            }

            if (a.Length != b.Length)
            {
                int[] longestNum = (a.Length > b.Length) ? a : b;

                longestNum[smallestNumLength] += aTen;

                for (int i = smallestNumLength; i < longestNum.Length; i++)
                {
                    sum += longestNum[i].ToString();
                }
            }
            else
            {
                if (aTen == 1) sum += aTen.ToString();
            }

            return sum;
        }

        static void CorrectOrderSum(string S)
        {
            for (int i = S.Length - 1; i >= 0; i--) Console.Write(S[i]);
        }

        static void Main()
        {
            string numN, numM;
            numN = EnterNumber();
            numM = EnterNumber();
            Console.Write(numN + " + " + numM + " = ");

            int[] numX = new int[numN.Length], numY = new int[numM.Length];
            FillTheArrayInverted(numX, numN);
            FillTheArrayInverted(numY, numM);

            CorrectOrderSum(SumOfTwoLongInt(numX, numY));
            Console.WriteLine();
        }
    }
}