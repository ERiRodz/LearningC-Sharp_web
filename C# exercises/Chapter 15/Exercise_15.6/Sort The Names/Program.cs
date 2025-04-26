class Program
{
    static void Main()
    {
        try
        {
            Reader List = new Reader("List of Names.txt");

            List.ToArray();
            List.SeeText();
            List.Sort();
            List.SaveAsTxt();

            System.Console.Write("Open file? (y/n)");
            if (System.Console.ReadLine() == "y") System.Diagnostics.Process.Start("List of Names (Sorted).txt");
        }
        catch(System.IO.FileNotFoundException exception)
        {
            System.Console.WriteLine("FileNotFoundException:\n" + 
                exception.Message + "\n" +
                "More details? (Y/N)");
            if (System.Console.ReadLine() == "Y") System.Console.WriteLine(exception.ToString());
        }
    }
}