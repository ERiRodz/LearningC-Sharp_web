using System;

namespace Multiplication
{
    class Program
    {
        static string EnterStringNumber(char C)
        {
            string X;
            do
            {
                Console.Write("{0} = ", C.ToString());
                X = Console.ReadLine();
            } while (X == "" || !CheckStringForNumber(X));

            return X;
        }

        static bool CheckStringForNumber(string input)
        {
            foreach (char c in input) if (!Char.IsDigit(c)) return false;
            return true;
        }

        static void ArrayOfDigitsInverted(int[] array, string S)
        {
            for (int i = 0; i < S.Length; i++) array[S.Length - (1 + i)] = (int)Char.GetNumericValue(S[i]);
        }

        static void PrintArrayInverted(int[] arrayForPrint)
        {
            bool notValidZero = true;
            for (int i = 0; i < arrayForPrint.Length; i++)
            {
                if (arrayForPrint[arrayForPrint.Length - (1 + i)] == 0 && notValidZero)
                {
                    if (i < (arrayForPrint.Length - 1)) Console.Write(" ");
                    else Console.Write("0");
                }
                else
                {
                    Console.Write(arrayForPrint[arrayForPrint.Length - (1 + i)].ToString());
                    notValidZero = false;
                }
            }
            Console.WriteLine();
        }

        static void Print2X2ArrayInverted(int[,] arrayFPt)
        {
            for(int i = 0; i < arrayFPt.GetLength(0); i++)
            {
                bool notVldZero = true;

                if (i == (arrayFPt.GetLength(0) - 1)) Console.Write("+ ");
                else Console.Write("  ");

                for (int w = 0; w < arrayFPt.GetLength(1); w++)
                {
                    if (arrayFPt[i, w] != 0) { notVldZero = true; break; }
                    else notVldZero = false;
                }

                for(int j = 0; j < arrayFPt.GetLength(1) - i; j++)
                {
                    if (arrayFPt[i, (arrayFPt.GetLength(1) - (1 + j))] == 0 && notVldZero) Console.Write(" ");
                    else
                    {
                        Console.Write("{0}", arrayFPt[i, (arrayFPt.GetLength(1) - (1 + j))].ToString());
                        notVldZero = false;
                    }
                }
                Console.WriteLine();
            }
        }

        static void SumTheProducts(int firstDimension, int[,] theProducts, int[] theSum)
        {
            int d = 0;
            for(int i = 0; i < theProducts.GetLength(1); i++)
            {
                int s = theProducts[firstDimension, i] + theSum[i] + d;

                if (s < 10)
                {
                    theSum[i] = s;
                    d = 0;
                }
                else
                {
                    theSum[i] = (s - 10);
                    d = 1;
                }
            }
        }
        
        static void Main()
        {
            string A, B;

            A = EnterStringNumber('A');
            B = EnterStringNumber('B');

            int[] numA = new int[A.Length], numB = new int[B.Length];

            ArrayOfDigitsInverted(numA, A);
            ArrayOfDigitsInverted(numB, B);

           int[,] products = new int[numB.Length, (1 + numA.Length + numB.Length)];

            for(int i = 0; i < numB.Length; i++)
            {
                for(int j = 0; j < (1 + numA.Length + numB.Length); j++)
                {
                    products[i, j] = 0;
                }
            }

            for(int i = 0; i < numB.Length; i++)
            {
                int d = 0;
                for(int j = 0; j < numA.Length; j++)
                {
                    int m = numB[i] * numA[j] + d;

                    if (m < 10) products[i, (i + j)] = m;
                    else products[i, (i + j)] = (m % 10);
                    d = (int)(m / 10);
                }
                if (d != 0) products[i, i + numA.Length] = d;
            }

            Console.WriteLine("The product:");
            Print2X2ArrayInverted(products);
            for (int i = 0; i < products.GetLength(1); i++) Console.Write("-");
            Console.WriteLine("--");

            int[] productsAdded = new int[products.GetLength(1)];

            for (int i = 0; i < productsAdded.Length; i++) productsAdded[i] = 0;

            Console.Write("  ");
            for (int i = 0; i < products.GetLength(0); i++) SumTheProducts(i, products, productsAdded);

            PrintArrayInverted(productsAdded);
        }
    }
}
