using System;

namespace SubSetsSums0
{
    class Program
    {
        static void Main()
        {
            string numA, numB, numC, numD, numE;
            int a, b, c, d, e;

            do
            {
                Console.Write("Value for a = ");
                numA = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numA, out a)));

            do
            {
                Console.Write("Value for b = ");
                numB = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numB, out b)));

            do
            {
                Console.Write("Value for c = ");
                numC = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numC, out c)));

            do
            {
                Console.Write("Value for d = ");
                numD = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numD, out d)));

            do
            {
                Console.Write("Value for e = ");
                numE = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numE, out e)));

            //Combination of two integers.
            if (a + b == 0) Console.WriteLine("The sum of {0} and {1} is 0.", a, b);
            if (a + c == 0) Console.WriteLine("The sum of {0} and {1} is 0.", a, c);
            if (a + d == 0) Console.WriteLine("The sum of {0} and {1} is 0.", a, d);
            if (a + e == 0) Console.WriteLine("The sum of {0} and {1} is 0.", a, e);
            if (b + c == 0) Console.WriteLine("The sum of {0} and {1} is 0.", b, c);
            if (b + d == 0) Console.WriteLine("The sum of {0} and {1} is 0.", b, d);
            if (b + e == 0) Console.WriteLine("The sum of {0} and {1} is 0.", b, e);
            if (c + d == 0) Console.WriteLine("The sum of {0} and {1} is 0.", c, d);
            if (c + e == 0) Console.WriteLine("The sum of {0} and {1} is 0.", c, e);
            if (d + e == 0) Console.WriteLine("The sum of {0} and {1} is 0.", d, e);
            //Combination of three integers.
            if (a + b + c == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, b, c);
            if (a + b + d == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, b, d);
            if (a + b + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, b, e);
            if (a + c + d == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, c, d);
            if (a + c + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, c, e);
            if (a + d + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, d, e);
            if (b + c + d == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", b, c, d);
            if (b + c + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", b, c, e);
            if (b + d + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", b, d, e);
            if (c + d + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", c, d, e);
            //Comnination of four integers.
            if (a + b + c + d == 0) Console.WriteLine("The sum of {0}, {1}, {2} and {3} is 0.", a, b, c, d);
            if (a + b + c + e == 0) Console.WriteLine("The sum of {0}, {1}, {2} and {3} is 0.", a, b, c, e);
            if (a + b + d + e == 0) Console.WriteLine("The sum of {0}, {1}, {2} and {3} is 0.", a, b, d, e);
            if (a + c + d + e == 0) Console.WriteLine("The sum of {0}, {1}, {2} and {3} is 0.", a, c, d, e);
            if (b + c + d + e == 0) Console.WriteLine("The sum of {0}, {1}, {2} and {3} is 0.", b, c, d, e);
            //Combination of five integers.
            if (a + b + c + d + e == 0) Console.WriteLine("The sum of {0}, {1}, {2}, {3} and {4} is 0.", a, b, c, d, e);

        }
    }
}
