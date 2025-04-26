using System;
namespace All_Variations_Duplicated
{
    class Program
    {
        static void VariationsDuplicated(int currentPos, int lastPos, int lastInt, int[] subSet)
        {
            if (currentPos == lastPos)
            {
                Console.Write("( ");
                foreach (int x in subSet) Console.Write("{0} ", x.ToString());
                Console.Write(")");
                bool comma = true;
                for (int i = 0; i < lastPos; i++)
                {
                    if (subSet[i] == lastInt) { comma = false; continue; }
                    else { comma = true; break; }
                }
                if (comma) Console.Write(", ");
                else Console.WriteLine();
                return;
            }
            for (int c = 1; c <= lastInt; c++)
            {
                subSet[currentPos] = c;
                VariationsDuplicated(currentPos + 1, lastPos, lastInt, subSet);
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
            VariationsDuplicated(0, k, n, sets);
            Console.WriteLine();
        }
    }
}