namespace Uppercase
{
    class Program
    {
        static void Main()
        {
            System.Text.StringBuilder 
                htmlText = new System.Text.StringBuilder("See that <upcase>this is the part</upcase> to <upcase>modify</upcase>.");
            string
                openUp = "<upcase>",
                closeUp = "</upcase>";
            int
                openUpIndex = htmlText.ToString().IndexOf(openUp);

            while (openUpIndex != -1)
            {
                int
                    openUpLastIndex = openUpIndex + openUp.Length - 1,//inclusively
                    closeUpIndex = htmlText.ToString().IndexOf(closeUp),
                    closeUpLastIndex = closeUpIndex + closeUp.Length - 1;//inclusively

                System.Console.WriteLine("Original text: " + htmlText.ToString());
                //for (int i = 0; i < htmlText.Length; i++) System.Console.Write((i % 10).ToString());
                //System.Console.WriteLine("\n" + openUp + " starts at {0} ends at {1} while " + closeUp + " starts at {2} and ends at {3}.",
                //    openUpIndex.ToString(), openUpLastIndex.ToString(), closeUpIndex.ToString(), closeUpLastIndex.ToString());
                System.Console.WriteLine("Substring within the tags: " + htmlText.ToString().Substring(openUpLastIndex + 1, (closeUpIndex - 1 - openUpLastIndex)));

                htmlText.Replace(htmlText.ToString().Substring(openUpLastIndex + 1, (closeUpIndex - 1 - openUpLastIndex)),
                    htmlText.ToString().Substring(openUpLastIndex + 1, (closeUpIndex - 1 - openUpLastIndex)).ToUpper());
                System.Console.WriteLine("ToUpper() modification: " + htmlText.ToString());

                htmlText.Remove(openUpIndex, openUp.Length);
                htmlText.Remove(closeUpIndex - openUp.Length, closeUp.Length);
                System.Console.WriteLine("Without the tags: " + htmlText.ToString());

                openUpIndex = htmlText.ToString().IndexOf(openUp);
            }
        }
    }
}