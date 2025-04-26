class Program
{
    static void Main()
    {
        string textOne = "textOne.txt", textTwo = "textTwo.txt";

        try
        {
            System.IO.StreamWriter writer = new System.IO.StreamWriter("textThree.txt", false);
            System.IO.StreamReader readerOne = new System.IO.StreamReader(textOne);
            System.IO.StreamReader readerTwo = new System.IO.StreamReader(textTwo);

            using(readerOne)
            using(readerTwo)
            using(writer)
            {
                writer.WriteLine(readerOne.ReadToEnd().ToString() + "\n" + readerTwo.ReadToEnd().ToString());
            }
            
            System.Console.WriteLine("DONE!");
        }
        catch
        {
            System.Console.WriteLine("Handling the exception(s)!");
        }
    }
}