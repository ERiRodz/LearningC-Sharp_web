namespace Replace_with_astericks
{
    class Program
    {
        static void Main()
        {
            System.Text.StringBuilder
                text = new System.Text.StringBuilder("Microsoft announced its next generation C# compiler today. It uses advanced parser and special optimizer for the Microsoft CLR."),
                asterisks = new System.Text.StringBuilder();

            System.Console.WriteLine(text.ToString());

            string[] forbiddenWords = { "C#", "CLR", "Microsoft" };

            for(int i = 0; i < forbiddenWords.Length; i++)
            {
                for (int s = 0; s < forbiddenWords[i].Length; s++) asterisks.Append("*");
                text.Replace(forbiddenWords[i], asterisks.ToString());
                asterisks.Clear();
            }

            System.Console.WriteLine("Modify:\n" + text.ToString());
        }
    }
}