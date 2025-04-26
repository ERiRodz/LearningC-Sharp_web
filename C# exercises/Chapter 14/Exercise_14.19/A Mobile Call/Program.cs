class Program
{
    static void Main()
    {
        Cellphone cell1 = new Cellphone();

        cell1.printCellInfo();

        System.Console.WriteLine("Number of cellphones: " + Cellphone.cellphoneCount.ToString());

        cell1.MakeCall("eric1");
        cell1.Hang();
        cell1.MakeCall("eric2");
        cell1.Hang();
        cell1.MakeCall("eric3");
        cell1.Hang();
        cell1.MakeCall("eric4");
        cell1.Hang();
        System.Console.WriteLine(cell1.CallHistory(cell1, 0));
        System.Console.WriteLine(cell1.CallHistory(cell1, 1));
        System.Console.WriteLine(cell1.CallHistory(cell1, 2));

        System.Console.WriteLine(cell1.CallHistory(cell1));

        Cellphone cell2 = new Cellphone("el");

        cell2.printCellInfo();

        System.Console.WriteLine("Number of cellphones: " + Cellphone.cellphoneCount.ToString());

        cell2.MakeCall("eric1");
        cell2.Hang();
        cell2.MakeCall("eric2");
        cell2.Hang();
        cell2.MakeCall("eric3");
        cell2.Hang();
        cell2.MakeCall("eric4");
        cell2.Hang();
        System.Console.WriteLine(cell2.CallHistory(cell2, 0));
        System.Console.WriteLine(cell2.CallHistory(cell2, 1));
        System.Console.WriteLine(cell2.CallHistory(cell2, 2));

        System.Console.WriteLine(cell2.CallHistory(cell2));
    }
}