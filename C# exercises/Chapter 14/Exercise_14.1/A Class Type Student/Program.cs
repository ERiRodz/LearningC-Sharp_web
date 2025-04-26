class Program
{
    static void Main()
    {
        Student std1 = new Student("eric", "rivera");

        System.Console.WriteLine(std1.Name + " " + std1.LastName);

        std1.Name = System.Console.ReadLine();


        System.Console.WriteLine(std1.Name);

        System.Console.WriteLine(Student.numStds);

        std1.University = Universities.PR.ToString();

        std1.StudentInfo();
    }
}