using System;

namespace How_Many_Times_N
{
    class Program
    {
        static string HowManyTimesN(int element, int[] set)
        {
            int countE = 0;
            foreach (int y in set) if (y == element) countE++;
            return countE.ToString();
        }

        static void Main()
        {
            string sizeN;
            int n;

            do
            {
                Console.Write("Enter array's size: ");
                sizeN = Console.ReadLine();
            } while (!(int.TryParse(sizeN, out n) && n > 0));

            int[] array = new int[n];
            Random rnd = new Random();

            for (int i = 0; i < n; i++) array[i] = rnd.Next(100);

            Console.Write("[ ");
            foreach (int x in array) Console.Write("{0} ", x.ToString());
            Console.WriteLine("]");

            string whatElement;
            int e;

            do
            {
                Console.Write("Enter the element: ");
                whatElement = Console.ReadLine();
            } while (!(int.TryParse(whatElement, out e)));

            Console.WriteLine("The element {0} is found {1} time in the array.", e.ToString(), HowManyTimesN(e, array));
        }
    }
}