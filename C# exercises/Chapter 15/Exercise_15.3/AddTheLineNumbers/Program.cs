class Program
{
    static void Main()
    {
        string fileName = "textFile.txt";

        try
        {
            using(System.IO.StreamReader reader = new System.IO.StreamReader(fileName))
            {
                uint lineCounter = 0;

                while(reader.Peek() != -1)
                {
                    lineCounter++;
                    System.Text.StringBuilder line = new System.Text.StringBuilder(reader.ReadLine().ToString());

                    using(System.IO.StreamWriter temp = new System.IO.StreamWriter("temp.txt", true))
                    {
                        temp.WriteLine($"Line number {lineCounter.ToString()}: {line.ToString()}");
                    }
                }

            }

            if (System.IO.File.Exists("textFileOG.txt")) System.IO.File.Delete("textFileOG.txt");

            System.IO.File.Copy(fileName, "textFileOG.txt");

            using (System.IO.StreamWriter rewritingReader = new System.IO.StreamWriter(fileName, false))
            {
                using (System.IO.StreamReader readingTemp = new System.IO.StreamReader("temp.txt"))
                {
                    rewritingReader.Write(readingTemp.ReadToEnd().ToString());
                }
            }
            System.IO.File.Delete("temp.txt");
        }
        catch(System.Exception e)
        {
            System.Console.WriteLine("A catch of an exception." + e.Message);
        }
    }
}