namespace Extract_Some_Sentences
{
    class Program
    {
        static void Main()
        {
            string 
                text = "We are living in a yellow submarine. " +
                "We don't have anything else. Inside the submarine is very tight. " +
                "So we are drinking all the day. We will move out of it in 5 days. " +
                "In it I am happy!";
            char[] 
                dot = { '.' };
            string[] 
                piecesOfText = text.Split(dot, System.StringSplitOptions.RemoveEmptyEntries);

            for (int i = 0; i < piecesOfText.Length; i++)
            {
                System.Text.StringBuilder
                    piece = new System.Text.StringBuilder(piecesOfText[i]);
                int
                    index = piece.ToString().ToLower().IndexOf("in");

                try
                {
                    while (index != -1)
                    {
                        if (!System.Char.IsLetter(piece[index - 1]) && !System.Char.IsLetter(piece[index + 2]))
                        {
                            System.Console.WriteLine(piece.ToString().TrimStart() + ".");
                        }

                        index = piece.ToString().ToLower().IndexOf("in", ++index);
                    }
                }
                catch(System.IndexOutOfRangeException)
                {
                    if (!System.Char.IsLetter(piece[index + 2])) System.Console.WriteLine(piece.ToString() + ".");
                }
            }
        }
    }
}