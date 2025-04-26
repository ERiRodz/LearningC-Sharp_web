class Program
{
    static void Main()
    {
        int? x;
        bool numberIn = true;
        System.Collections.Generic.Stack<int> nums = new System.Collections.Generic.Stack<int>();

        do
        {
            do
            {
                if (!numberIn) System.Console.WriteLine("Wrong Input.");

                x = null;

                System.Console.Write("number: ");

                System.Text.StringBuilder input = new System.Text.StringBuilder(System.Console.ReadLine());

                if (input.ToString() == "") break;
                else if (int.TryParse(input.ToString(), out int y))
                {
                    x = y;
                    nums.Push((int)x);
                    numberIn = true;
                }
                else numberIn = false;

            } while (!numberIn);

        } while (x != null);

        System.Console.WriteLine("Numbers entered in reversed order...");
        while(nums.Count > 0)
        {
            System.Console.Write(nums.Pop() + " ");
        }
        System.Console.WriteLine();

    }
}