namespace Extract_an_email__First_using_regex_
{
    class Program
    {
        static void Main()
        {
            string text = "Please contact us by phone (+001 222 222 222) or " +
                "by email at example@gmail.com or at test.user@yahoo.co.uk. This is " +
                "not email: test@test. This also: @gmail.com. Neither this: a@a.b.",
                emailPattern = @"\b[\w\.+-]+@[\w-]+(\.[\w-]+)?\.\w{2,}\b";
            System.Text.RegularExpressions.Regex
                rgx = new System.Text.RegularExpressions.Regex(emailPattern);

            foreach (System.Text.RegularExpressions.Match match in rgx.Matches(text))
                System.Console.WriteLine("Found '{0}' at position {1}",
                    match.Value, match.Index);
        }
    }
}