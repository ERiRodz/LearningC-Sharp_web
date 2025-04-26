using System;
namespace Quick_Sort_Algorithm
{
    class Program
    {
        static void Main()
        {
            string numN;
            int n;

            do
            {
                Console.Write("Enter the size of the array: ");
                numN = Console.ReadLine();
            } while (!(int.TryParse(numN, out n) && n > 1));

            int[] array = new int[n];
            Random rnd = new Random();

            for (int i = 0; i < n; i++) array[i] = rnd.Next(100);

            Console.Write("Array: [ ");
            foreach (int x in array) Console.Write("{0, 3}", x.ToString());
            Console.WriteLine(" ]");

            string optnSelected;
            int optnNum;

            Console.WriteLine("Select an option to sort the array by the \"quick sort algorithm\": ");
            do
            {
                Console.WriteLine("\t 1: Sort around the first element.");
                Console.WriteLine("\t 2: Sort around the last element.");
                Console.WriteLine("\t 3: Sort around a specefic element.");
                Console.WriteLine("\t 4: Sort around a random element.");
                Console.WriteLine();
                Console.Write("Selection: ");
                optnSelected = Console.ReadLine();
            } while (!(int.TryParse(optnSelected, out optnNum) && (optnNum > 0) && (optnNum < 5)));

            int iAround = 0;

            switch(optnNum)
            {
                case 2:
                    iAround = (n - 1);
                    break;
                case 3:
                    string index;
                    do
                    {
                        Console.Write("Select the element to sort around it: ");
                        index = Console.ReadLine();
                    } while (!(int.TryParse(index, out iAround) && (iAround > 0) && (iAround < n)));
                    break;
                case 4:
                    iAround = rnd.Next(n);
                    break;
            }

            bool sorted;

            do
            {
                int[] left = new int[n], right = new int[n];
                int iLeft = 0, iRight = 0, pivotElement = array[iAround];

                for (int i = 0; i < n; i++)
                {
                    if (i == iAround) continue;
                    else if (array[i] < pivotElement)
                    {
                        left[iLeft] = array[i];
                        iLeft++;
                    }
                    else
                    {
                        right[iRight] = array[i];
                        iRight++;
                    }
                }

                Console.Write("Left Array: [ ");
                for (int i = 0; i < iLeft; i++) Console.Write("{0, 3}", left[i].ToString());
                Console.Write(" ]");

                Console.Write("\t Right Array [ ");
                for (int i = 0; i < iRight; i++) Console.Write("{0, 3}", right[i].ToString());
                Console.WriteLine(" ]");

                for (int i = 0; i < n; i++)
                {
                    if (i < iLeft) array[i] = left[i];
                    else if (i == iLeft) array[i] = pivotElement;
                    else array[(n - 1) + (iLeft + 1 - i)] = right[(n - 1) - i];
                }

                Console.Write("Array [ ");
                foreach (int x in array) Console.Write("{0, 3}", x.ToString());
                Console.WriteLine(" ]");

                sorted = true;

                for (int i = 0; i < n; i++)
                {
                    for (int j = i + 1; j < n; j++)
                    {
                        if (array[i] > array[j])
                        {
                            sorted = false;
                            iAround = j;
                        }
                        if (!sorted) break;
                    }
                    if (!sorted) break;
                }

                Console.WriteLine("{0}", (sorted) ? "Sorted." : "Not sorted.");
            } while (!sorted);
        }
    }
}