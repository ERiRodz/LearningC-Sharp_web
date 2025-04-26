using System;

namespace Selection_Sort
{
    class Program
    {
        static void Main()
        {
            string nInput;
            int n;

            do
            {
                Console.Write("Enter the size of the array: ");
                nInput = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(nInput, out n) && (n > 1)));

            int[] Arr = new int[n];
            Random random = new Random();

            while (n > 0)
            {
                Arr[Arr.Length - n] = random.Next(100);
                n--;
            }

            Console.Write("The array is: ");
            foreach (int x in Arr) Console.Write("{0, 3}", x.ToString());
            Console.WriteLine();

            int arrgStps = 0, minIndx = 0;

            for(int i = 0; i < Arr.Length - 1; i++)
            {
                int min = Arr[i];

                for(int m = i + 1; m < Arr.Length; m++)
                {
                    if (Arr[m] < min)
                    {
                        min = Arr[m];
                        minIndx = m;
                    }
                }

                if(min < Arr[i])
                {
                    int holdIt = Arr[i];

                    Arr[i] = min;
                    Arr[minIndx] = holdIt;
                    arrgStps++;

                    Console.Write("Sorting #" + arrgStps.ToString() + ": ");
                    foreach (int x in Arr) Console.Write("{0, 3}", x.ToString());
                    Console.WriteLine();
                }
            }
            Console.WriteLine();

            Console.WriteLine("In {0} steps.", arrgStps.ToString());
        }
    }
}
