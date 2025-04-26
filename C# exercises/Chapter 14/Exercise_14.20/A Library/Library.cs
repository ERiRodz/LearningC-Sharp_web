class Library
{
    private uint bookCounter = 0;
    private const uint LIBCAPACITY = 3;
    private readonly string LIBRARYNAME = null;
    private Book[] books = null;

    public Library(string libraryName)
    {
        this.LIBRARYNAME = libraryName;

        books = new Book[LIBCAPACITY];
    }

    public string LibraryName
    {
        get { return this.LIBRARYNAME; }
    }

    public void AddBook(Book book)
    {
        if (bookCounter < LIBCAPACITY)
        {
            books[bookCounter] = book;

            bookCounter++;
        }
        else System.Console.WriteLine("Sorry library is full.");
    }
    public void RemoveBook(uint location)
    {
        if (location >= 0 && location <= 2)
        {
            books[location] = null;

            for (int i = 0; i < bookCounter - 1; i++) books[i] = books[i + 1];

            bookCounter--;
        }
        else System.Console.WriteLine("Invalid location.");
    }
    public void SearchByAuthor(string author)
    {
        bool found = false;

        for(int i = 0; i < bookCounter; i++)
        {
            if (books[i].Author == author)
            {
                System.Console.WriteLine("Book found in location number {0}.", i.ToString());
                found = true;
                break;
            }
        }
        if(!found) System.Console.WriteLine("Book not found.");
    }
    public void BookInfo(uint? location = null)
    {
        if(location == null) for(int i = 0; i < bookCounter; i++) PrintBookInfo(books[i]);
        else if (location >= 0 && location <= 2) PrintBookInfo(books[(int)location]);
        else System.Console.WriteLine("Invalid location.");
    }
    public void PrintBookInfo(Book b)
    {
        System.Console.Write(
                $"Title: {b.Title}\n" +
                $"Author: {b.Author}\n" +
                $"Publisher: {b.Publisher}\n" +
                $"ISBN: {b.ISBN}\n" +
                $"Release Date: {b.ReleaseDate.ToString()}\n");
    }
}