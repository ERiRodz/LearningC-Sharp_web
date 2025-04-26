class Program
{
    static void Main()
    {
        Library 
            lib1 = new Library("eric"), 
            lib2 = new Library("ash");

        lib1.AddBook(new Book());

        lib2.AddBook(new Book("La Teta", "ashly"));

        lib1.BookInfo();
        System.Console.WriteLine();
        lib2.BookInfo();
        System.Console.WriteLine();

        Book elBook = new Book("Rama", "Pepe", "Yauco", "8339", System.DateTime.Now);

        lib1.AddBook(elBook);
        lib1.AddBook(elBook);

        lib2.AddBook(elBook);
        lib2.AddBook(new Book("hey!"));

        lib1.BookInfo();
        System.Console.WriteLine();
        lib2.BookInfo();
        System.Console.WriteLine();

        lib1.BookInfo(2);
        System.Console.WriteLine();
        lib2.BookInfo(5);
        System.Console.WriteLine();
        lib2.BookInfo(0);
        System.Console.WriteLine();

        lib2.RemoveBook(90);
        lib2.RemoveBook(0);

        lib2.BookInfo();
        System.Console.WriteLine();

        lib1.SearchByAuthor("Pepe");
        lib1.SearchByAuthor("ashly");

    }
}