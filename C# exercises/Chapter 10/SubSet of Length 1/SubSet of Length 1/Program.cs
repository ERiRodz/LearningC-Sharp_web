using System;

namespace SubSet_of_Length_1
{
    class Program
    {
        static void Print(string[] set, bool last)
        {
            Console.Write("{ ");
            for (int i = 0; i < set.Length; i++)
            {
                Console.Write("{0}", set[i]);
                if (i == set.Length - 1) Console.Write(" }");
                else Console.Write(", ");
            }

            if (!last) Console.Write(", ");
        }

        static void SubSet(string[] set, int crrtnPos, int crrtnLength, int setSize)
        {
            string[] subSet = new string[crrtnLength];

            if (crrtnPos == setSize) { Console.WriteLine(); return; }

            subSet[0] = set[crrtnPos];

            bool lastSubSet = (crrtnPos < setSize - 1) ? false : true;

            Print(subSet, lastSubSet);

            SubSet(set, crrtnPos + 1, crrtnLength, setSize);
        }

        static void Main()
        {
            string Size;
            int s;

            do
            {
                Console.Write("Size: ");
                Size = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(Size, out s) && s > 0));

            string[] words = new string[s];

            for (int i = 0; i < s; i++) words[i] = i.ToString();

            Print(words, true);
            Console.WriteLine();

            SubSet(words, 0, 1, s);

        }
    }
}
