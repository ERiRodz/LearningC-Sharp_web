class Book
{
    public static uint bookCounter = 0;
    private string
        title = null,
        author = null,
        publisher = null,
        isbn = null;
    private System.DateTime releaseDate = default;

    public Book() : this("[unknow title]")
    {
    }
    public Book(string title) : this(title, "[unknow author]")
    {
        this.title = title;
    }
    public Book(string title, string author) : this(title, author, "[unknow publisher]")
    {
        this.title = title;
        this.author = author;
    }
    public Book(string title, string author, string publisher) : this(title, author, publisher, "[unknow ISBN]")
    {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }
    public Book(string title, string author, string publisher, string isbn) : this(title, author, publisher, isbn, default)
    {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.isbn = isbn;
    }
    public Book(string title, string author, string publisher, string isbn, System.DateTime releaseDate)
    {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.isbn = isbn;
        this.releaseDate = releaseDate;

        bookCounter++;
    }

    public string Title
    {
        get { return this.title; }
        set { this.title = value; }
    }
    public string Author
    {
        get { return this.author; }
        set { this.author = value; }
    }
    public string Publisher
    {
        get { return this.publisher; }
        set { this.publisher = value; }
    }
    public string ISBN
    {
        get { return this.isbn; }
        set { this.isbn = value; }
    }
    public System.DateTime ReleaseDate
    {
        get { return this.releaseDate; }
        set { this.releaseDate = value; }
    }
}