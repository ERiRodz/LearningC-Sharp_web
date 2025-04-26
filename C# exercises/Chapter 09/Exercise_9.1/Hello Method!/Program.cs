using System;

namespace Hello_Method_
{
    class Program
    {
        static void NiceToMeetYou(string name)
        {
            if (name != "") Console.WriteLine("PC - Nice to meet you {0}!", name);
            else Console.WriteLine("PC - Okay you.");
        }

        static void Main()
        {
            Console.WriteLine("Pc - Hello you! What's your name?");
            Console.Write("You - ");
            NiceToMeetYou(Console.ReadLine());
        }
    }
}