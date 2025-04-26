namespace Convert_to_Unicode
{
    class Program
    {
        static void Main()
        {
            string e = "Test";

            System.Console.Write("Input: {0} \t Result: ", e);
            foreach (char c in e) System.Console.Write(@"\u{0:x4}", (ushort)c);

            System.Console.WriteLine();
        }
    }
}