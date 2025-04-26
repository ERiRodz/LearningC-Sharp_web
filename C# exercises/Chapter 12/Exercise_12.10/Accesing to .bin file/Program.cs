namespace Accesing_to.bin_file
{
    class Program
    {
        static void TakesBinaryFile(string path)
        {
            System.IO.BinaryReader fileContent = null;
            try
            {
                fileContent = new System.IO.BinaryReader(System.IO.File.Open(path, System.IO.FileMode.Open));
            }
            catch (System.IO.FileNotFoundException)
            {
                System.Console.WriteLine("Wrong!");
            }
            finally
            {
                System.Console.WriteLine("Bye");
                if (fileContent != null) fileContent.Dispose();
            }
        }

        static void Main()
        {
            System.Console.Write("File name: ");

            TakesBinaryFile(
                @"C:\Users\2700x\Los Documentos I\Dropbox\Los Códigos\Trabajos V.2\04 - Learning C#\C# exercises\Chapter 12\Exercise_12.10\" + System.Console.ReadLine());
        }
    }
}
