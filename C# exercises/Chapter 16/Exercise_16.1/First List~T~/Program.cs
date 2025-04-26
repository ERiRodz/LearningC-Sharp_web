using System.Linq;

class Program
{
    static void Main()
    {
        try
        {
            System.Collections.Generic.List<int> posInt = new System.Collections.Generic.List<int>();
            Program prgm = new Program();
            int? n;

            while(true)
            {
                n = prgm.EnterNumber();

                if (n == null) break;
                else if (n < 1) throw new System.ApplicationException("Negative value you are not allow to pass.");
                else posInt.Add((int)n);
            }

            if(posInt.Count > 0)
            {
                int sum = 0;

                for (int i = 0; i < posInt.Count; i++)
                {
                    System.Console.Write(posInt[i].ToString() + " ");
                    sum += posInt[i];
                }

                System.Console.WriteLine("\n" +
                    $"Sum: {sum}\n" +
                    $"Average: {sum / posInt.Count}");
            }
        }
        catch(System.ApplicationException e)
        {
            System.Console.WriteLine(e.Message);
        }
        catch
        {
            System.Console.WriteLine("hey");
        }
    }

    int? EnterNumber()
    {
        System.Text.StringBuilder num = new System.Text.StringBuilder();
        int? x = null;
        bool positive = true;

        do
        {
            int n = 0;

            if (!positive) System.Console.WriteLine("Wrong input.");

            System.Console.WriteLine("Enter a positive integer: ");
            num.Clear();
            num.Append(System.Console.ReadLine());

            if (num.ToString() == "") return x;

            positive = int.TryParse(num.ToString(), out n);

            if(positive) x = n;

        } while (!positive);

        return x;
    }
}