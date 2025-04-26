using System;

namespace MaxConsecutive
{
    class Program
    {
        static void Main()
        {
            string numN, elemN;
            int n;

            do
            {
                Console.Write("Value for n = ");
                numN = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(numN, out n) && n > 0));

            int[] setN = new int[n];

            for(int i = 0; i < setN.Length; i++)
            {
                do
                {
                    Console.Write("Value for element n_{0} = ", i + 1);
                    elemN = Console.ReadLine();
                } while (!(int.TryParse(elemN, out setN[i])));
            }

            Console.WriteLine();

            Console.Write("The set of integer: { ");
            foreach (int x in setN) Console.Write("{0} ", x.ToString());
            Console.WriteLine("} ");

            int theIndex = 0, thePossible = 0, theSequence = 1, theLonger = 1;

            for (int i = 0; i < setN.Length - 1; i++)
            {
                if (setN[i] == setN[i + 1]) theSequence++;
                else theSequence = 1;

                if (theSequence == 2) thePossible = i;

                if (theSequence > theLonger)
                {
                    theIndex = (setN[theIndex] != setN[i]) ? thePossible : theIndex;
                    theLonger = theSequence;
                }
            }

            if (theLonger != 1)
            {
                Console.Write("The first maximal sequence of consecutive is: { ");
                for (int i = theIndex; i < theIndex + theLonger; i++) Console.Write("{0} ", setN[i].ToString());
                Console.WriteLine("}");
            } else
            {
                Console.WriteLine("There is not a sequence of consecutive number.");
            }
        }
    }
}
