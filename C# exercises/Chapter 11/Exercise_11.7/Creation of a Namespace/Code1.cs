namespace One
{
    public class Cat
    {
        public void SayMiau()
        {
            System.Console.WriteLine("Miau!");
        }
    }

    public class Sequence
    {
        private static int crntValue = 0;
                
        public static int NextValue()
        {
            return ++crntValue;
        }
    }
    
}

namespace Two
{
    class CallingCass
    {
        static void Main()
        {
            One.Cat lolo = new One.Cat();

            lolo.SayMiau();
            //One.Cat.SayMiau(); - This one will work if 'static' modifire is used, but then 'lolo.' wont work.

            System.Console.WriteLine("Sequence [1...3]: {0}, {1}, {2}",
                One.Sequence.NextValue(), One.Sequence.NextValue(), One.Sequence.NextValue());
        }
    }
}