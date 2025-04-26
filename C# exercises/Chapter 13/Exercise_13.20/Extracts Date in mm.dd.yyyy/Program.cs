namespace Extracts_Date_in_mm.dd.yyyy
{
    class Program
    {
        static void Main()
        {
            string
                text = "I was born at 14.06.1980. My sister was born at 3.7.1984. " +
                "In 5/1999 I graduated my high school. The law says (see section 7.3.12) " +
                "that we are allowed to do this (section 7.4.2.9).",
                dateFormat = @"\b\d{1,2}\.\d{1,2}\.\d{4,4}\b";

            foreach(System.Text.RegularExpressions.Match match in System.Text.RegularExpressions.Regex.Matches(text, dateFormat))
                System.Console.WriteLine("Date: {0}", match);
        }
    }
}
