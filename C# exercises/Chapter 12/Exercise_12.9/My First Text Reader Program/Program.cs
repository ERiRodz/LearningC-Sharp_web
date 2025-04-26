namespace My_First_Text_Reader_Program
{
    class Program
    {
        static void Main()
        {
            try
            {
                string fileContent = 
                    System.IO.File.ReadAllText(@"C:\Users\2700x\Los Documentos I\Dropbox\Los Códigos\Trabajos V.2\04 - Learning C#\C# exercises\Chapter 12\Exercise_12.9\ElFile.txt");
                System.Console.WriteLine(fileContent);
            }
            catch (System.IO.FileNotFoundException e)
            {
                string answer;
                System.Console.WriteLine(e.Message);
                System.Console.WriteLine("More detail?");
                answer = System.Console.ReadLine();

                if (answer == "y") System.Console.WriteLine(e);
            }
        }
    }
}