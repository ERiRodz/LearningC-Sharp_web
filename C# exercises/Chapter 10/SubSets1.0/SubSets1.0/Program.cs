using System;

namespace SubSets1._0
{
    class Program
    {
        static int EnterIntVal(string name)
        {
            string val;
            int v;

            do
            {
                Console.Write(name + " = ");
                val = Console.ReadLine();
            } while (!(int.TryParse(val, out v) && v > 1));

            return v;
        }

        static void Print(string[] set, bool last)
        {
            Console.Write("{ ");
            for (int i = 0; i < set.Length; i++)
            {
                Console.Write("{0}", set[i].ToString());

                if (i < set.Length - 1) Console.Write(", ");
                else Console.Write(" }");
            }

            if (!last) Console.Write(", ");
            else Console.WriteLine();
        }

        static void Subsets(string[] sub, string[] set, int crntE, int nextE)
        {
            if (crntE == set.Length)
            {

                //Print(sub, true);
                return;
            }

            for(int cE= crntE; cE + nextE < sub.Length; cE++)
            {
                sub[crntE] = set[cE + nextE];
                Subsets(sub, set, crntE, nextE + 1);
            }
        }

        static void Main()
        {
            int s = EnterIntVal("s");
            string[] set = new string[s];

            for (int i = 0; i < s; i++) set[i] = i.ToString();

            Print(set, true);

            for (int l = 0; l < s; l++)
            {
                string[] subset = new string[l];
                Subsets(subset, set, 0, 1);
            }
        }
    }
}
