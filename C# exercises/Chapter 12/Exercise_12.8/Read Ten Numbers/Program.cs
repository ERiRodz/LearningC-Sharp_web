namespace Read_Ten_Numbers
{
    class Program
    {
        static void ReadNumber(int start, int end)
        {
            int[] numbers = new int[10];
            
            try
            {
                int i = 0;

                while(i < 10)
                {
                    System.Console.Write("Enter integer number {0}: ", (i + 1).ToString());
                    numbers[i] = int.Parse(System.Console.ReadLine());

                    if (i > 0 && numbers[i] < numbers[i - 1]) throw new System.ArgumentOutOfRangeException();
                    else if (numbers[i] < start || numbers[i] > end) throw new System.ArgumentOutOfRangeException();

                    i++;
                }
            }
            catch (System.FormatException)
            {
                System.Console.WriteLine("Wrong Format!");
                ReadNumber(start, end);
            }
            catch (System.ArgumentOutOfRangeException)
            {
                System.Console.WriteLine("Out of range!");
                ReadNumber(start, end);
            }
        }

        static int InputNumber(string variable)
        {
            string X;
            int x;

            do
            {
                System.Console.Write("Enter the {0} value: ", variable);
                X = System.Console.ReadLine();
                System.Console.WriteLine();
            } while (!(int.TryParse(X, out x)));

            return x;
        }

        static void Main()
        {
            ReadNumber(InputNumber("starting"), InputNumber("ending"));
        }
    }
}