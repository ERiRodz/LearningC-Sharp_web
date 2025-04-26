using System;

namespace Index_of_the_letter_in_a_word
{
    class Program
    {
        static void Main()
        {
            char[] lowerCaseLttr = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

            string wordEntered;
            bool isItWord;

            do
            {
                isItWord = true;
                Console.Write("Write a word: ");
                wordEntered = Console.ReadLine();
                foreach (char c in wordEntered)
                {
                    if (!Char.IsLetter(c)) isItWord = false;
                }
            } while (!isItWord);

            for(int i = 0; i < wordEntered.Length; i++)
            {
                for(int j = 0; j < lowerCaseLttr.Length; j++)
                {
                    if(Char.ToLower(wordEntered[i]) == lowerCaseLttr[j])
                    {
                        Console.WriteLine("This {0} is the number {1} letter in the alphabet.", wordEntered[i], (j + 1));
                        break;
                    }
                }
            }
        }
    }
}
