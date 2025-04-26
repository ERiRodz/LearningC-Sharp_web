namespace TheCatObject
{
    
    public class Cat
    {
        private string catsID;

        public Cat(string ID)
        {
            this.catsID = ID;
        }

        public void SayMiau()
        {
            System.Console.WriteLine("Cat{0} said: Miauuu!", catsID);
        }
    }

}

namespace TheCreatorOfCats
{
    public class CreateCats
    {
        private static System.Random rnd = new System.Random();
        private static int serial = rnd.Next(989);

        public static int NextSerialNum()
        {
            return ++serial;
        }
    }
}

namespace TheCaller
{
    class CallingClass
    {
        static void Main()
        {
            for(int i = 0; i < 10; i++)
            {
                TheCatObject.Cat lolo = new TheCatObject.Cat(TheCreatorOfCats.CreateCats.NextSerialNum().ToString("000"));
                lolo.SayMiau();
            }
        }
    }
}