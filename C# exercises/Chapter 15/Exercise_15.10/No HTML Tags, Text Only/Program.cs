class Program
{
    static void Main()
    {
        try
        {
            Reader txtFile = new Reader("XML File.txt");

            txtFile.SeeText();
            txtFile.ToArray();

            for(int i = 0; i < txtFile.GetNumberOfLines; i ++)
            {
                System.Text.StringBuilder 
                    lineNoTags = new System.Text.StringBuilder(System.Text.RegularExpressions.Regex.Replace(txtFile.GetArrayList[i].Trim().ToString(), "<[^>]+>", ""));

                if(lineNoTags.ToString() != "") System.Console.WriteLine(lineNoTags.ToString());
            }
        }
        catch
        {
            System.Console.WriteLine("Something Wrong Has Happened!");
        }
    }
}