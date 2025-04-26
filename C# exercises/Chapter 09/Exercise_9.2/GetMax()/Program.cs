using System;

namespace GetMax__
{
    class Program
    {
        static int GetMax(int a, int b)
        {
            if (a > b) return a;
            else return b;
        }
        static void Main()
        {
            string value;
            int[] numbers = new int[3];
            int i = 0;

            Console.WriteLine("Enter three values.");
            do
            {
                Console.Write("Enter value {0}:", (i + 1).ToString());
                value = Console.ReadLine();
                if ((int.TryParse(value, out numbers[i]))) i++;
                else Console.WriteLine("Invalid value entered.");
            } while (i < 3);

            Console.WriteLine("The maximum value is {0}.", 
                GetMax(GetMax(numbers[0], numbers[1]), numbers[2]).ToString());
        }
    }
}