namespace Palindormes_from_a_webpage
{
    class Program
    {
        static void Main()
        {
            string 
                htmlText = WebpageDownload.DownloadClass.DocHTML("https://www2.cs.arizona.edu/icon/oddsends/palinsen.htm");
            System.Text.RegularExpressions.Regex 
                html_CODE_NoTags = new System.Text.RegularExpressions.Regex("(?<=(<CODE>)).*(<BR>)(?=(</CODE>))", System.Text.RegularExpressions.RegexOptions.Singleline), //Selects the sentences within the <CODE> and </CODE>. One long string.
                html_BR_NoTags = new System.Text.RegularExpressions.Regex(".*[^&](?=(<BR>))"); //Selects each sentece. For some reason, [^&] skips empty lines.
            System.Text.RegularExpressions.MatchCollection 
                matches = html_BR_NoTags.Matches(html_CODE_NoTags.Match(htmlText).Value); //All Lines(Matches)! Individual strings.
            System.Text.StringBuilder[] 
                lines = new System.Text.StringBuilder[matches.Count]; //To store all lines (matches).

            //Cleaning all lines.
            //  Takes out "&quot;" and the tag "<BR>".
            for (int i = 0; i < matches.Count; i++)
            {
                lines[i] = new System.Text.StringBuilder(); //Creates the object StringBuilder to store a line from the Matches.
                lines[i].Append(matches[i]); //Stores the line 'i'.
                lines[i].Replace("&quot;", ""); //Drops "&quot;".
                lines[i].Replace("<BR>", ""); //Drops "<BR>".
            }

            System.Text.RegularExpressions.Regex
                aWord = new System.Text.RegularExpressions.Regex(@"\b[\w']+\b"); //Regex to match a word in a text.
                
            for(int j = 0; j < lines.Length; j++)
            {
                int
                    lengthOfSentence = System.Text.RegularExpressions.Regex.Match(lines[j].ToString(), @"\w[?!\).]?\)?$").Index, 
                    pos = 0,
                    wordCounter = 1;

                System.Console.WriteLine("Sentence #{0}: {1}", (j + 1).ToString(), lines[j].ToString().Trim());

                while(pos < lengthOfSentence)
                {
                    System.Text.StringBuilder
                        sentence = new System.Text.StringBuilder(lines[j].ToString()),
                        word = new System.Text.StringBuilder(aWord.Match(sentence.ToString(), pos).Value.ToString());

                    System.Console.Write("Word #{0}: {1}", wordCounter.ToString(), word);
                    Program f = new Program();
                    System.Console.WriteLine("\t" + f.CheckPalindrome(word.ToString()));
                    pos = sentence.ToString().IndexOf(word.ToString(), pos) + word.Length;
                    wordCounter++;
                }
                System.Console.WriteLine();
            }
        }

        string CheckPalindrome(string word)
        {
            int
                leftChar = 0,
                rightChar = word.Length - 1;

            while (char.ToLower(word[leftChar]) == char.ToLower(word[rightChar]))
            {
                leftChar++;
                rightChar--;

                if (leftChar >= rightChar) return "Palindrome";
            }

            return null;
        }
    }
}

namespace WebpageDownload
{
    class DownloadClass
    {
        public static string DocHTML(string url)
        {
            try
            {
                System.Net.WebClient client = new System.Net.WebClient();
                return client.DownloadString(url);
            }
            catch (System.Net.WebException e)
            {
                System.Console.WriteLine("Fali!\n{0}", e.Message.ToString());
            }

            return null;
        }
    }
}