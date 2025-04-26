using System;

namespace Merge_Sort_Algorithm
{
    class Program
    {
        static void Main()
        {
            string nSize;
            int n;

            do
            {
                Console.Write("Size of the array: ");
                nSize = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(nSize, out n) && (n > 1)));

            int[] Arr = new int[n], Arr1 = new int[n], Arr2 = new int[n];
            Random rnd = new Random();

            while(n > 0)
            {
                Arr2[Arr2.Length - n] = Arr1[Arr1.Length - n] = Arr[Arr.Length - n] = rnd.Next(100);
                n--;
            }

            Console.Write("Array: ");
            foreach (int x in Arr) Console.Write("{0, 3}", x.ToString());
            Console.WriteLine("\r\n");

            int grp = 1, mergeStps = 0;
            double m = 1;
            bool iReset = false, lastGrp = false, sorted = false;

            for(int i = 0; i < Arr.Length; i = i + (int)Math.Pow(2 , m))
                //Here, add by powers of two. Once the for-loop reaches the end, i = 0 and next add by the following multiple of two.
            {
                if (iReset)
                {
                    i = 0;
                    iReset = false;
                }

                if (i == 0) grp = 1;
                Console.Write("Group {0}: ", grp.ToString());

                if(i <= Arr.Length - (int)Math.Pow(2, m))
                {
                    for (int j = i; j < i + (int)Math.Pow(2, m); j++) Console.Write("{0, 3}", Arr[j].ToString());
                    if (i == Arr.Length - (int)Math.Pow(2, m)) lastGrp = true;
                }
                else
                {
                    for(int h = i; h < Arr.Length; h++) Console.Write("{0, 3}", Arr[h].ToString());
                    lastGrp = true;
                }

                for(int j = i; j < ((lastGrp) ? Arr.Length : (i + (int)Math.Pow(2, m))); j++)
                {
                    for (int h = j + 1; h < ((lastGrp) ? Arr.Length : (i + (int)Math.Pow(2, m))); h++)
                    {
                        if (Arr[j] > Arr[h])
                        {
                            int min = Arr[h], minIdx = h;

                            while (minIdx > j)
                            {
                                Arr[minIdx] = Arr[minIdx - 1];
                                minIdx--;
                            }

                            Arr[j] = min;

                            if (!sorted) sorted = true;
                            mergeStps++;
                        }
                    }
                }

                if (sorted)
                {
                    Console.Write("\t\tSorted: ");
                    for(int k = i; k < ((lastGrp) ? Arr.Length : (i + (int)Math.Pow(2, m))); k++) Console.Write("{0, 3}", Arr[k].ToString());
                    sorted = false;
                }
                else
                {
                    Console.Write("\t\tPass!");
                }
                Console.WriteLine();

                grp++;

                //Reset i to 0 and next mutiple of two. ALL limited by the array length.
                if(lastGrp)
                {
                    iReset = true;
                    lastGrp = false;
                    i = 0;
                    m++;

                    Console.Write("\r\nArray: ");
                    foreach (int x in Arr) Console.Write("{0, 3}", x.ToString());
                    Console.WriteLine("\r\n");
                }
            }

            for(int i = 0; i < Arr.Length; i++)
            {
                for(int j = i + 1; j < Arr.Length; j++)
                {
                    if(Arr[i] > Arr[j])
                    {
                        int min = Arr[j], minIdx = j;

                        while(minIdx > i)
                        {
                            Arr[minIdx] = Arr[minIdx - 1];
                            minIdx--;
                        }

                        Arr[i] = min;
                        mergeStps++;
                    }
                }
            }

            Console.Write("\r\n(Final-Merge/Push) Array: \t");
            foreach (int x in Arr) Console.Write("{0, 3}", x.ToString());
            Console.WriteLine("\r\nSteps: {0, 3}\r\n", mergeStps.ToString());

            int pushStps = 0;

            for (int i = 0; i < Arr1.Length; i++)
            {
                for (int j = i + 1; j < Arr1.Length; j++)
                {
                    if (Arr1[i] > Arr1[j])
                    {
                        int min = Arr1[j], minIdx = j;

                        while (minIdx > i)
                        {
                            Arr1[minIdx] = Arr1[minIdx - 1];
                            minIdx--;
                        }

                        Arr1[i] = min;
                        pushStps++;
                    }
                }
            }

            Console.Write("\r\n(Final-No Merge/Push) Array: \t");
            foreach (int x in Arr1) Console.Write("{0, 3}", x.ToString());
            Console.WriteLine("\r\nSteps: {0, 3}\r\n", pushStps.ToString());

            int swapStps = 0;

            for (int i = 0; i < Arr2.Length; i++)
            {
                for (int j = i + 1; j < Arr2.Length; j++)
                {
                    if (Arr2[i] > Arr2[j])
                    {
                        int hld = Arr2[j];

                        Arr2[j] = Arr2[i];
                        Arr2[i] = hld;

                        j--;
                        swapStps++;
                    }
                }
            }

            Console.Write("\r\n(Final-No Merge/Swap) Array: \t");
            foreach (int x in Arr2) Console.Write("{0, 3}", x.ToString());
            Console.WriteLine("\r\nSteps: {0, 3}\r\n", swapStps.ToString());
        }
    }
}