using System;

namespace Subset_of_sum_S
{
    class Program
    {
        static void Main()
        {
            string nSize;
            int n;

            do
            {
                Console.Write("Enter the size of the array: ");
                nSize = Console.ReadLine();
            } while (!(int.TryParse(nSize, out n) && (n > 1)));

            int[] arr = new int[n];
            Random rndA = new Random(), rndB = new Random();

            int y = rndB.Next(100);
            for (int i = 0; i < n; i++) arr[i] = rndA.Next(100) - y;

            Console.Write("Array: [ ");
            foreach (int x in arr) Console.Write((x < -9) ? "{0, 4}" : "{0, 3}", x.ToString());
            Console.WriteLine(" ]");

            int N = (n - 1), NFact = n;
            while (N > 1)
            {
                NFact *= N;
                N--;
            }

            for(int m = 1; m <= n; m++)
            {
                int M = (m - 1), MFact = m,
                    NM = (n - m) - 1, NMFact = (n - m == 0) ? 1 : (n - m);
                while(M > 1 || NM > 1)
                {
                    if(M > 1)
                    {
                        MFact *= M;
                        M--;
                    }
                    if(NM > 1)
                    {
                        NMFact *= NM;
                        NM--;
                    }
                }
                
                int NcombM = (NFact / (MFact * NMFact));
                int[] subSets = new int[NcombM];

                for(int j = 0; j < n - (m - 1); j++)
                {
                    bool firstElem = true;
                    int numElem = m;
                    for(int h = j + 1; h < n; h++)
                    {
                        if (firstElem) 
                        {
                            firstElem = false;
                            Console.Write((arr[j] < -9) ? "[ {0, 4} " : "[ {0, 3} ", arr[j].ToString());
                            numElem--;
                        }

                        if (numElem > 0)
                        {
                            Console.Write((arr[h] < -9) ? "{0, 4} " : "{0, 3} ", arr[h].ToString());
                            numElem--;
                        }

                        if (numElem == 0)
                        {
                            Console.WriteLine("]");
                            if (h < n - 1)
                            {
                                firstElem = true;
                                numElem = m;
                            }
                        }

                    }
            }
            }
        }
    }
}
