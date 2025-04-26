using System;

namespace DigitsToWords_0_9_
{
    class Program
    {
        static void Main()
        {
            string numX, wordX;
            int x;

            do
            {
                Console.Write("Value for x = ");
                numX = Console.ReadLine();
                Console.WriteLine();

            } while (!(int.TryParse(numX, out x) && (x >= 0) && (x <= 9)));

            switch (x)
            {
                case 0:
                    wordX = "zero";
                    break;
                case 1:
                    wordX = "one";
                    break;
                case 2:
                    wordX = "two";
                    break;
                case 3:
                    wordX = "three";
                    break;
                case 4:
                    wordX = "four";
                    break;
                case 5:
                    wordX = "five";
                    break;
                case 6:
                    wordX = "six";
                    break;
                case 7:
                    wordX = "seven";
                    break;
                case 8:
                    wordX = "eight";
                    break;
                case 9:
                    wordX = "nine";
                    break;
                default:
                    wordX = null;
                    break;
            }

            Console.WriteLine("The number {0} in words is \"{1}\".", x, wordX);            
        }
    }
}
