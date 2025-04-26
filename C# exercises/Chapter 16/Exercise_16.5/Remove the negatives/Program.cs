class Program
{
    static void Main()
    {
        System.Collections.Generic.List<int> nums = new System.Collections.Generic.List<int>();
        System.Random rnd = new System.Random(System.DateTime.Now.Millisecond);
        int n;

        do
        {
            System.Console.Write("Enter quantity of numbers to be entered: ");
        } while (!int.TryParse(System.Console.ReadLine(), out n));

        for(int i = 0; i < n; i++)
        {
            nums.Add(rnd.Next(100) - rnd.Next(100));
        }

        foreach (int x in nums) System.Console.WriteLine(x);

        for(int i = 0; i < nums.Count; i++)
        {
            if (nums[i] < 0)
            {
                nums.RemoveAt(i);
                i--;
            }
        }

        System.Console.WriteLine("After negatives been removed...");
        foreach (int x in nums) System.Console.WriteLine(x);

    }
}