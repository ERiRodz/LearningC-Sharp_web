namespace Encrypts_a_Text
{
    class Program
    {
        static void Main()
        {
            string 
                text = "Test", 
                code = "ab";

            System.Console.Write("Encrypted text: ");

            for(int i = 0, j = 0; i < text.Length; i++)
            {
                System.Console.Write("\\u{0:x4}", (text[i] ^ code[j]));

                if (j == 1) j = 0;
                else j++;
            }

            System.Console.WriteLine();

        }
    }
}