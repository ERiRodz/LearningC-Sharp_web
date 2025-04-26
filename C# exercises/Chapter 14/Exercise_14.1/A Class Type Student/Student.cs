class Student
{
    public static int 
        numStds = 0;
    private string
        name = null, lastName = null, course = null, subject = null, university = null, email = null, phoneNum = null;

    public Student() : this("[unknow name]")
    {
    }
    public Student(string name) : this(name, "[unknow lastName]")
    {
        this.name = name;
    }
    public Student(string name, string lastName) : this(name, lastName, "[unknow course]")
    {
        this.name = name;
        this.lastName = lastName;
    }
    public Student(string name, string lastName, string course) : this(name, lastName, course, "[unknow subject]")
    {
        this.name = name;
        this.lastName = lastName;
        this.course = course;
    }
    public Student(string name, string lastName, string course, string subject) : this(name, lastName, course, subject, "[unknow university]")
    {
        this.name = name;
        this.lastName = lastName;
        this.course = course;
        this.subject = subject;
    }
    public Student(string name, string lastName, string course, string subject, string university) : this(name, lastName, course, subject, university, "[unknow email]")
    {
        this.name = name;
        this.lastName = lastName;
        this.course = course;
        this.subject = subject;
        this.university = university;
    }
    public Student(string name, string lastName, string course, string subject, string university, string email) : this(name, lastName, course, subject, university, email, "[unknow phoneNumber]")
    {
        this.name = name;
        this.lastName = lastName;
        this.course = course;
        this.subject = subject;
        this.university = university;
        this.email = email;
    }
    public Student(string name, string lastName, string course, string subject, string university, string email, string phoneNum)
    {
        this.name = name;
        this.lastName = lastName;
        this.course = course;
        this.subject = subject;
        this.university = university;
        this.email = email;
        this.phoneNum = phoneNum;

        numStds++;
    }

    public string Name
    {
        get { return this.name; }
        set { this.name = value; }
    }
    public string LastName
    {
        get { return this.lastName; }
        set { this.lastName = value; }
    }
    public string Course
    {
        get { return this.course; }
        set { this.course = value; }
    }
    public string Subject
    {
        get { return this.subject; }
        set { this.subject = value; }
    }
    public string University
    {
        get { return this.university; }
        set { this.university = value; }
    }
    public string Email
    {
        get { return this.email; }
        set { this.email = value; }
    }
    public string PhoneNum
    {
        get { return this.phoneNum; }
        set { this.phoneNum = value; }
    }

    public void StudentInfo()
    {
        System.Console.WriteLine(
            $"Name: {this.name} {this.lastName}\n" +
            $"Course: {this.course}\n" +
            $"Subject: {this.subject}\n" +
            $"University: {this.university}\n" +
            $"email: {this.email}\n" +
            $"phone number: {this.phoneNum}");
    }
}

public enum Universities { PR, OH };