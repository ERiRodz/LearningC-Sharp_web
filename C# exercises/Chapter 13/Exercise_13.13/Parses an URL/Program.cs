namespace Parses_an_URL
{
    class Program
    {
        static void Main()
        {
            string
                url = @"http:/www.cnn.com/video";
            Non_Regex.NonRegexClass.NonRegex(url);
            System.Console.WriteLine("\n\n\nUsing Regex...");
            UsingRegex.UsingRegexClass.UseRegex(url);
        }
    }
}

namespace Non_Regex
{
    class NonRegexClass
    {
       public static void NonRegex(string urlText)
        {
            char[]
                seprators = { ':', '/' };
            string[]
                ulrChunks = urlText.Split(seprators, System.StringSplitOptions.RemoveEmptyEntries),
                ulrComponents = { "protocol", "server", "resource" };

            System.Console.WriteLine("URL: " + urlText);
            for (int i = 0; i < ulrComponents.Length; i++)
            {
                System.Console.WriteLine("[{0}]=\"{1}\"", ulrComponents[i], ulrChunks[i]);
            }
        }
    }
}

namespace UsingRegex
{
    public class UsingRegexClass
    {
       public static void UseRegex(string urlText)
        {
            //http:/www.cnn.com/video
            string 
                urlProtocol = @"\bhttp\b",
                urlServer = @"\bw*\.\w+\.\w+\b",
                urlResource = @"\b\w*\b$",
                protocol = System.Text.RegularExpressions.Regex.Match(urlText, urlProtocol).Value,
                server = System.Text.RegularExpressions.Regex.Match(urlText, urlServer).Value,
                resource = System.Text.RegularExpressions.Regex.Match(urlText, urlResource).Value ;

            System.Console.WriteLine("[protocol] = {0}\n[server] = {1}\n[resource] = {2}", protocol, server, resource);
        }
    }
}