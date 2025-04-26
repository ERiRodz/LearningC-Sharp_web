namespace Only_Positive_Int_to_Square
{
    class Program
    {
        static void Main()
        {
            try
            {
                System.Console.Write("Enter a positive integer: ");
                int num = int.Parse(System.Console.ReadLine());

                if (num < 1) throw new System.ArgumentOutOfRangeException();

                System.Console.WriteLine("Square root of {0} is {1}.\nGood bye!", num.ToString(), System.Math.Pow(num, 2).ToString());
            }
            catch (System.FormatException)
            {
                System.Console.WriteLine("Wrong format!");
            }
            catch (System.ArgumentOutOfRangeException)
            {
                System.Console.WriteLine("Wrong! Input is a non-positve integer.");
            }
        }
    }
}