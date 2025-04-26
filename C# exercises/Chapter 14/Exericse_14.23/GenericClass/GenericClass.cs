class GenericClass<T>
{
    public static T[] classes = new T[3];
    private static uint i = 0;

    public GenericClass(T classX)
    {
        if(i < classes.Length)
        {
            classes[i] = classX;
            i++;
        }
    }

    public string ClassName(uint i)
    {
        return classes[i].ToString();
    }
}