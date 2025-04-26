using System;

namespace Last_digit_s_English_Name
{
    class Program
    {
        static string LastDigitsEngName(char lastDigit)
        {
            switch (lastDigit)
            {
                case '0': return "zero";
                case '1': return "one";
                case '2': return "two";
                case '3': return "three";
                case '4': return "four";
                case '5': return "five";
                case '6': return "six";
                case '7': return "seven";
                case '8': return "eight";
                case '9': return "nine";
                default: return null;
            }
        }
        static void Main()
        {
            string number;
            do
            {
                Console.Write("Enter a number: ");
                number = Console.ReadLine();
            } while (!(int.TryParse(number, out int n)));

            Console.WriteLine("The English name of the last digit of {0} is {1}.", 
                number, LastDigitsEngName(number[number.Length - 1]));
        }
    }
}