namespace Detect_Substrings
{
    class Program
    {
        static int CountOccurrences(string text, string key)
        {
            int 
                index = text.IndexOf(key, 0),
                count = 0;

            while (index != -1)
            {
                count++;
                index = text.IndexOf(key, ++index);
            }

            return count;
        }
        static void Main()
        {
            string
                text = "We are living in a yellow submarine. We don't have anything else. " +
                "Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",
                keyword = "in";

            System.Console.WriteLine("\"{0}\" appears {1} times.", keyword, CountOccurrences(text.ToLower(), keyword).ToString());
        }
    }
}