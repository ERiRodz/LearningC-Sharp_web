class Program
{
    static void Main()
    {
        string fileOne = "fileOne.txt", fileTwo = "fileTwo.txt";

        try
        {
            using(System.IO.StreamWriter wrtOne = CreateATxtFile(fileOne))
            using(System.IO.StreamWriter wrtTwo = CreateATxtFile(fileTwo))
            {
                WriteThreeRndLines(wrtOne, new System.Random(System.DateTime.Now.Millisecond));
                WriteThreeRndLines(wrtTwo, new System.Random(System.DateTime.Now.Millisecond));
            }

            using(System.IO.StreamReader rdrOne = new System.IO.StreamReader(fileOne))
            using(System.IO.StreamReader rdrTwo = new System.IO.StreamReader(fileTwo))
            {
                System.Console.WriteLine($"Printed: {fileOne}");
                PrintFile(rdrOne);
                System.Console.WriteLine($"Printed: {fileTwo}");
                PrintFile(rdrTwo);
            }

            using(System.IO.StreamReader txtOne = new System.IO.StreamReader(fileOne))
            using(System.IO.StreamReader txtTwo = new System.IO.StreamReader(fileTwo))
            {
                while(txtOne.Peek() != -1 || txtTwo.Peek() != -1)
                {
                    if (txtOne.ReadLine() == txtTwo.ReadLine()) System.Console.WriteLine("Equal.");
                    else System.Console.WriteLine("Not equal.");
                }
            }
        }
        catch
        {
            System.Console.WriteLine("Handling errors.");
        }
    }

    static System.IO.StreamWriter CreateATxtFile(string path)
    {
        if (System.IO.File.Exists(path)) System.IO.File.Delete(path);

        return new System.IO.StreamWriter(path);
    }

    static void WriteThreeRndLines(System.IO.StreamWriter writer, System.Random rnd)
    {
        byte counter = 0;

        while (counter < 3)
        {
            writer.WriteLine(rnd.Next(3));
            counter++;
        }

        writer.Dispose();
        writer.Close();
    }

    static void PrintFile(System.IO.StreamReader reader)
    {
        while (reader.Peek() != -1) System.Console.WriteLine(reader.ReadLine().ToString());

        reader.Dispose();
        reader.Close();
    }
}