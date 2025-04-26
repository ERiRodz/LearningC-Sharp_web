using System;
namespace All_Variations_Duplicated
{
    class Program
    {
        static void PrintSet(int[] set, int pos, int last)
        {
            Console.Write("( ");
            foreach (int x in set) Console.Write("{0} ", x.ToString());
            Console.Write(")");
            bool comma = true;
            for (int i = 0; i < pos; i++)
            {
                if (set[i] == last) { comma = false; continue; }
                else { comma = true; break; }
            }
            if (comma) Console.Write(", ");
            else Console.WriteLine();
        }

        static void VariationsDuplicated(int currentPos, int lastPos, int lastInt, int[] subSet)
        {
            if (currentPos == lastPos)
            {
                bool print = true;

                for(int i = 0; i < lastPos - 1; i++)
                {
                    if (subSet[i] > subSet[i + 1]) { print = false; break; }
                }
                if(print) PrintSet(subSet, lastPos, lastInt);
                return;
            }
            for (int c = subSet[currentPos]; c <= lastInt; c++)
            {
                subSet[currentPos] = c;
                VariationsDuplicated(currentPos + 1, lastPos, lastInt, subSet);
                subSet[currentPos]--;
            }
        }
        static int EnterValue(string X)
        {
            string Value;
            int value;
            do
            {
                Console.Write(X + " = ");
                Value = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(Value, out value) && value > 0));
            return value;
        }
        static void Main()
        {
            string N = "n", K = "k";
            int n = EnterValue(N), k = EnterValue(K);
            int[] sets = new int[k];
            for (int i = 0; i < k; i++) sets[i] = 1;
            VariationsDuplicated(0, k, n, sets);
            Console.WriteLine();
        }
    }
}