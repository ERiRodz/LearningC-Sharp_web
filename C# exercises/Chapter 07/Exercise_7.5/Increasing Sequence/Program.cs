using System;

namespace Increasing_Sequence
{
    class Program
    {
        static void Main()
        {
            string numN;
            int n;

            do
            {
                Console.Write("Array length: n = ");
                numN = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numN, out n) && n > 1));

            int[] setN = new int[n];

            for (int i = 0; i < setN.Length; i++)
            {
                do
                {
                    Console.Write("Element n_{0} = ", i.ToString());
                    numN = Console.ReadLine();
                } while (!(int.TryParse(numN, out setN[i])));
            }

            Console.Write("The set: { ");
            foreach (int x in setN) Console.Write("{0} ", x.ToString());
            Console.WriteLine("}");

            int theIndex = 0, thePossible = 0, theSequence = 1, theLonger = 1;

            for(int i = 1; i < setN.Length; i++)
            {
                if (setN[i] == setN[i - 1] + 1) theSequence++;
                else theSequence = 1;

                if (theSequence == 2) thePossible = i - 1;

                if(theSequence > theLonger)
                {
                    theIndex = (setN[i] == setN[theIndex] + theSequence) ? theIndex : thePossible;
                    theLonger = theSequence;
                }
            }

            if(theLonger != 1)
            {
                Console.Write("The first maximal sequence of increasing elements is: { ");
                for (int i = theIndex; i < theIndex + theLonger; i++) Console.Write("{0} ", setN[i].ToString());
                Console.WriteLine("}");
            } else
            {
                Console.WriteLine("There is not a sequence of increasing elements.");
            }
        }
    }
}
