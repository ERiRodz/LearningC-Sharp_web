using System;
namespace Factorial_
{
    class Program
    {
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
                    if (i < (arrayForPrint.Length - 1)) continue;
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

        static void SumTheProducts(int firstDimension, int[,] theProducts, int[] theSum)
        {
            int d = 0;
            for (int i = 0; i < theProducts.GetLength(1); i++)
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
            string numN;
            int n;

            do
            {
                Console.Write("Enter a number from 1 to 100: ");
                numN = Console.ReadLine();
            } while (!(int.TryParse(numN, out n) && (n >= 1) && (n <= 100)));

            string A = n.ToString(), B = (n - 1).ToString();

            while (n > 1)
            {
                int[] numA = new int[A.Length], numB = new int[B.Length];

                ArrayOfDigitsInverted(numA, A);
                ArrayOfDigitsInverted(numB, B);

                int[,] products = new int[numB.Length, (1 + numA.Length + numB.Length)];

                for (int i = 0; i < numB.Length; i++)
                {
                    for (int j = 0; j < (1 + numA.Length + numB.Length); j++)
                    {
                        products[i, j] = 0;
                    }
                }

                for (int i = 0; i < numB.Length; i++)
                {
                    int d = 0;
                    for (int j = 0; j < numA.Length; j++)
                    {
                        int m = numB[i] * numA[j] + d;

                        if (m < 10) products[i, (i + j)] = m;
                        else products[i, (i + j)] = (m % 10);
                        d = (int)(m / 10);
                    }
                    if (d != 0) products[i, i + numA.Length] = d;
                }

                int[] productsAdded = new int[products.GetLength(1)];

                for (int i = 0; i < productsAdded.Length; i++) productsAdded[i] = 0;

                for (int i = 0; i < products.GetLength(0); i++) SumTheProducts(i, products, productsAdded);

                A = "";
                for (int i = 0; i < productsAdded.Length; i++) A += productsAdded[productsAdded.Length - (1 + i)];
                n--;
                B = (n - 1).ToString();
                
                if (n == 2)
                {
                    Console.Write(numN + "! = ");
                    PrintArrayInverted(productsAdded);
                }
            }
        }
    }
}