namespace _20_Characters_String
{
    class Program
    {
        static void Main()
        {
            try
            {
                System.Console.Write("Enter text: ");
                System.Text.StringBuilder text = new System.Text.StringBuilder(System.Console.ReadLine(), 20);
                
                if (text.ToString().Length > 20) throw new System.ArgumentOutOfRangeException();
                else
                {
                    for (int i = text.Length; i < 20; i++) text.Append("*");
                }

                System.Console.WriteLine("Modify text: " + text.ToString());

            }
            catch (System.ArgumentOutOfRangeException)
            {
                System.Console.WriteLine("Text length greater than 20 characters.");
            }
        }
    }
}