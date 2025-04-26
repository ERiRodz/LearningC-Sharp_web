class Program
{
    static int[,] GSumMatrix = null;
    static int theSum = 0;
    static void Main()
    {
        System.Console.Write("Size: ");
        int size = System.Convert.ToInt16(System.Console.ReadLine());
        try
        {
            Matrix matrixObj = new Matrix(size);
            int[,] matrixArr = new int[size, size];
            System.Console.WriteLine("Opiening...");
            System.Diagnostics.Process.Start("MatrixFile.txt");

            using (System.IO.StreamReader reader = new System.IO.StreamReader("MatrixFile.txt"))
            {
                int row = 0;
                while (reader.Peek() != -1)
                {
                    System.Text.StringBuilder rowLine = new System.Text.StringBuilder(reader.ReadLine().ToString());
                    System.Console.WriteLine(/*$"ROW: {*/rowLine/*}"*/);
                    string[] entries = rowLine.ToString().Split(' ', '\n');
                    for (int col = 0; col < matrixArr.GetLength(0); col++)
                    {
                        //System.Console.WriteLine($"[{row}, {col}] = {entries[col]}");
                        matrixArr[row, col] = System.Convert.ToInt32(entries[col]);
                    }
                    row++;
                }
            }

            if (size > 2) SubMatrixes(matrixArr, size);
            else
            {
                GSumMatrix = matrixArr;
                theSum = GreatestEntriesSum(matrixArr);
            }

            System.Console.WriteLine($"2D Sub-Matrix with greatest sum of {theSum} is...");
            PrintMatrix(GSumMatrix);
        }
        catch (System.Exception e)
        {
            System.Console.WriteLine("Problem: {0}", e);
        }
    }

    static void PrintMatrix(int[,] mtx)
    {
        for (int i = 0; i < mtx.GetLength(0); i++)
        {
            for (int j = 0; j < mtx.GetLength(1); j++)
            {
                System.Console.Write(mtx[i, j].ToString() + ((j == mtx.GetLength(1) - 1) ? "\n" : " "));
            }
        }
    }


    static int GreatestEntriesSum(int[,] mtx)
    {
        int sum = 0;

        for (int i = 0; i < mtx.GetLength(0); i++)
        {
            for (int j = 0; j < mtx.GetLength(1); j++)
            {
                sum += mtx[i, j];
            }
        }

        return sum;
    }

    static void SubMatrixes(int[,] matrix, int size)
    {
        int skipRow = 0, skipCol = matrix.GetLength(1) - 1;
        int[,] subMatrix = new int[size - 1, size - 1];

        while (skipRow < matrix.GetLength(0))
        {
            while (skipCol >= 0)
            {
                //System.Console.WriteLine($"Sub matrix {size - 1} X {size - 1}...");
                int subRow = 0, subCol = 0;
                for (int row = 0; row < matrix.GetLength(0); row++)
                {
                    if (row == skipRow) continue;
                    else
                    {

                        for (int col = 0; col < matrix.GetLength(1); col++)
                        {
                            if (col == skipCol) continue;
                            else
                            {
                                subMatrix[subRow, subCol] = matrix[row, col];
                                subCol++;
                                if (subCol == subMatrix.GetLength(1))
                                {
                                    subRow++;
                                    subCol = 0;
                                }
                            }
                        }
                    }
                }
                //PrintMatrix(subMatrix);
                if (subMatrix.GetLength(0) > 2) SubMatrixes(subMatrix, size - 1);
                else if (theSum < GreatestEntriesSum(subMatrix))
                {
                    GSumMatrix = new int[subMatrix.GetLength(0), subMatrix.GetLength(1)];
                    for (int i = 0; i < subMatrix.GetLength(0); i++)
                    {
                        for (int j = 0; j < subMatrix.GetLength(1); j++)
                        {
                            GSumMatrix[i, j] = subMatrix[i, j];
                        }
                    }
                    theSum = GreatestEntriesSum(GSumMatrix);
                }
                skipCol--;
            }
            skipRow++;
            skipCol = matrix.GetLength(1) - 1;
        }
    }
}