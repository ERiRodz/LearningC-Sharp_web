class Matrix
{
    public Matrix(int N)
    {
        this.Create(N);
    }

    private void Create(int N)
    {
        if (System.IO.File.Exists("MatrixFile.txt")) System.IO.File.Delete("MatrixFile.txt");

        System.Random rnd = new System.Random();

        using (System.IO.StreamWriter matrix = new System.IO.StreamWriter("MatrixFile.txt"))
        {
            for(int i = 0; i < N; i++)
            {
                for (int j = 0; j < N; j++)
                {
                    matrix.Write(rnd.Next(20).ToString() + ((j == N - 1) ? "\n" : " "));
                }
            }
        }
    }
}