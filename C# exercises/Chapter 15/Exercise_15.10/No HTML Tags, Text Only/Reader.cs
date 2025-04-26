class Reader
{
    private readonly uint numOfLines = 0;
    private readonly string path = null;
    private string[] arrayList = null;

    public Reader(string path)
    {
        this.path = path;
        this.numOfLines = LineCounter();
    }

    public string GetPath
    {
        get { return this.path; }
    }
    public uint GetNumberOfLines
    {
        get { return this.numOfLines; }
    }

    public string[] GetArrayList
    {
        get { return this.arrayList; }
    }

    private uint LineCounter()
    {
        uint counter = 0;

        using (System.IO.StreamReader read = new System.IO.StreamReader(this.path))
        {
            while (read.ReadLine() != null) counter++;
        }

        return counter;
    }

    public void SeeText()
    {
        using (System.IO.StreamReader read = new System.IO.StreamReader(this.path))
        {
            while (read.Peek() != -1) System.Console.WriteLine(read.ReadLine().ToString());
        }
    }

    public void ToArray()
    {
        uint i = 0;

        this.arrayList = new string[this.numOfLines];

        using (System.IO.StreamReader read = new System.IO.StreamReader(this.path))
        {
            while (read.Peek() != -1)
            {
                this.arrayList[i] = read.ReadLine().ToString();
                i++;
            }
        }
    }

    public void Sort()
    {
        for(int i = 0; i < this.arrayList.Length - 1; i++)
        {
            for (int j = i + 1; j < this.arrayList.Length; j++)
            {
                int idx = 0, aLength = this.arrayList[i].Length, bLength = this.arrayList[j].Length;
                char a = this.arrayList[i][idx], b = this.arrayList[j][idx];

                while(a == b)
                {
                    //System.Console.WriteLine($"a: {a} b: {b}");

                    idx++;

                    if(idx == System.Math.Min(aLength, bLength) - 1)
                    {
                        if (aLength > bLength) GrabPushPlace(i, j);
                        break;
                    }
                    else
                    {
                        a = this.arrayList[i][idx];
                        b = this.arrayList[j][idx];
                    }
                }
                
                
                if (a > b) GrabPushPlace(i, j);
            }
        }

        void GrabPushPlace(int i, int j)
        {
            //System.Console.WriteLine($"i: {i} j: {j}\n" +
            //    $"array[i] = {this.arrayList[i]}\n" +
            //    $"array[j] = {this.arrayList[j]}");
            //Grab
            string first = this.arrayList[j];
            int minIdx = j;

            //Push
            while (minIdx > i)
            {
                this.arrayList[minIdx] = this.arrayList[minIdx - 1];
                minIdx--;
            }

            //Place
            this.arrayList[i] = first;
        }

        System.Console.WriteLine("Sorted...");
        foreach (string str in this.arrayList) System.Console.WriteLine(str);
    }

    public void SaveAsTxt()
    {
        if (System.IO.File.Exists("List of Names (Sorted).txt")) System.IO.File.Delete("List of Names (Sorted).txt");

        using(System.IO.StreamWriter write = new System.IO.StreamWriter("List of Names (Sorted).txt"))
        {
            for(int i = 0; i < this.arrayList.Length; i++) write.WriteLine(arrayList[i]);
        }
    }
}