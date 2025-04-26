using System;
namespace FourSquareMatices
{
    class Program
    {
        static void Main()
        {
            string sizeOfn;
            int n, el = 1;

            do
            {
                Console.Write("Size of the square matices: ");
                sizeOfn = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(sizeOfn, out n) && (n > 1)));

            int[,] Arr = new int[n, n];

            //Filling the array
            for(int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    Arr[i, j] = el;
                    el++;
                }
            }

            //Printing the array in normal order
            Console.WriteLine("Array in normal order");
            for(int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++) Console.Write("{0, 3}", Arr[i, j].ToString("00"));
                Console.WriteLine();
            }
            Console.WriteLine();

            //Going down
            Console.WriteLine("Going Down");
            for(int j = 0; j < n; j++)
            {
                for (int i = 0; i < n; i++) Console.Write("{0, 3}", Arr[i, j].ToString("00"));
                Console.WriteLine();
            }
            Console.WriteLine();

            //ZigZag
            Console.WriteLine("In zigzag-down-up");
            int jj = 0; //Double 'j' because single 'j' is being used in the prior loops. Global scope, and when it enters in the for-loop there is a double initialization. 
            for(int h = 0; h < n; h++)
            {
                for(int i = 0; i < n; i++)
                {
                    if (i % 2 == 0) Console.Write("{0, 3}", Arr[i, jj].ToString("00"));
                    else Console.Write("{0, 3}", Arr[i, n - (jj + 1)].ToString("00"));
                }
                Console.WriteLine();
                jj++;
            }
            Console.WriteLine();

            //Diagonal
            int[,] DiagArr = new int[n, n];
            int m = 2;

            DiagArr[0, 0] = 1;

            for(int i = 1; i < n; i++)
            {
                int h = i;
                for(int j = 0; j <= i; j++)
                {
                    DiagArr[h, j] = m;
                    m++;
                    h--;
                }

                if(i == n - 1)
                {
                    int jStart = n - i; //That's 1;
                    for(int k = i, j = jStart; j < n; j++)
                    {
                        DiagArr[k, j] = m;
                        m++;
                        k--;

                        if(j == i)
                        {
                            jStart++;
                            j = jStart - 1; //Minus 1 beacuse it will be increased by 1 at the end off the loop.
                            k = i;
                        }
                    }
                }
            }

            Console.WriteLine("Diagonals' Array");
            for(int i = 0; i < n; i++)
            {
                for(int j = 0; j < n; j++)
                {
                    Console.Write("{0, 3}", DiagArr[i, j].ToString("00"));
                }
                Console.WriteLine();
            }
            Console.WriteLine();

            //Reversed Diagonals' Array
            Console.WriteLine("Reversed Diagonals' Array");
            for(int i = (n - 1); i >= 0; i--)
            {
                for(int j = 0; j < n; j++)
                {
                    Console.Write("{0, 3}", DiagArr[i, j].ToString("00"));
                }
                Console.WriteLine();
            }
            Console.WriteLine();

            //Spiral
            Console.WriteLine("Spiral");
            int[,] SpiralArr = new int[n, n];
            int w = 1;

            for(int i = 0; i < n; i++)
            {
                SpiralArr[i, 0] = w;
                w++;
            }

            int pairTrav = 0, steps = 0, stpAllowed = (n - 1), 
                hh = 0, kk = 1, l;

            for(int i = (n - 1), j = 1; steps < stpAllowed; i += hh, j += kk)
            {
                SpiralArr[i, j] = w;
                w++;
                
                steps++;

                if(steps == stpAllowed)
                {
                    pairTrav++;
                    steps = 0;
                    l = hh;
                    hh = -1 * kk;
                    kk = l;
                }

                if(pairTrav == 2)
                {
                    pairTrav = 0;
                    stpAllowed--;
                }
            }

            for(int i = 0; i < n; i++)
            {
                for(int j = 0; j < n; j++)
                {
                    Console.Write("{0, 3}", SpiralArr[i, j].ToString("00"));
                }
                Console.WriteLine();
            }
            Console.WriteLine();
        }
    }
}
