class Program
{
    static void Main()
    {
        string fileName = "someLines.txt";

        try
        {
            System.IO.StreamReader reader = new System.IO.StreamReader(fileName);

            using (reader)
            {
                bool oddLine = true;
                System.Text.StringBuilder line;

                do
                {
                    line = new System.Text.StringBuilder(reader.ReadLine());
                    if (oddLine) System.Console.WriteLine(line.ToString());
                    oddLine = !oddLine;
                } while (reader.Peek() != -1) ;
            }
        }
        catch(System.IO.FileNotFoundException)
        {
            System.Console.WriteLine("Can't find the file {0}", fileName);
        }
        catch(System.IO.IOException)
        {
            System.Console.WriteLine("It went wrong all the way!");
        }
    }
}