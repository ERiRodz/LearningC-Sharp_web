using System;

namespace Binary_Seach_to_Find
{
    class Program
    {
        static void Main()
        {
            string enterSize;
            int arraySize;

            do
            {
                Console.Write("Enter the size of the array: ");
                enterSize = Console.ReadLine();
                Console.WriteLine();
            } while (!(int.TryParse(enterSize, out arraySize) && arraySize > 1));

            int[] arr = new int[arraySize];
            Random rnd = new Random();

            for (int i = 0; i < arraySize; i++) arr[i] = rnd.Next(100);

            Console.Write("Array: {");
            foreach (int x in arr) Console.Write(" {0, 3}", x);
            Console.WriteLine(" }");

            for(int i = 0; i < arraySize; i++)
            {
                for(int j= i + 1; j < arraySize; j++)
                {
                    if(arr[i] > arr[j])
                    {
                        int jHeld = j, entryHeld = arr[j];

                        while(jHeld > i)
                        {
                            arr[jHeld] = arr[jHeld - 1];
                            jHeld--;
                        }

                        arr[i] = entryHeld;
                    }
                }
            }

            Console.Write("Sorted Array: {");
            foreach (int x in arr) Console.Write(" {0, 3}", x);
            Console.WriteLine(" }");

            string mNum;
            int m;

            do
            {
                Console.Write("Enter the number to find in the array: ");
                mNum = Console.ReadLine();
            } while (!(int.TryParse(mNum, out m)));

            int fGroup = 0, mdd = (arraySize % 2 == 0) ? (arraySize / 2) : ((arraySize + 1) / 2), sGroup = mdd; 
            int? iFound = null;

            while ((mdd > 0) && (fGroup < arraySize) && (sGroup < arraySize))
            {
                if (arr[sGroup] == m)
                {
                    iFound = sGroup;
                    break;
                }
                else if (mdd == 1)
                {
                    fGroup = (fGroup == 0) ? 0 : sGroup;
                    sGroup = fGroup + mdd;

                    if ((fGroup < arraySize) && (arr[fGroup] == m)) iFound = fGroup;
                    else if((sGroup < arraySize) && (arr[sGroup] == m)) iFound = sGroup;

                    mdd--;
                }
                else if (arr[sGroup] > m)
                {
                    mdd = (mdd % 2 == 0) ? (mdd / 2) : ((mdd + 1) / 2);
                    sGroup = fGroup + mdd;
                }
                else
                {
                    fGroup = sGroup;
                    mdd = (mdd % 2 == 0) ? (mdd / 2) : ((mdd + 1) / 2);
                    sGroup = fGroup + mdd;
                }
            }

            Console.Write("{0}", (iFound != null) ? m.ToString() + " is found at the index " + iFound.ToString() : m.ToString() + " is not in the array.");
            Console.WriteLine();
        }
    }
}