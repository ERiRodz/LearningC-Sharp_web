//This array will contains the exercises.
//Each entry will by added using an object (blueprint).
//The array:
//               [    chapter #,          ]   outer entry: array
//exerciseThis = [[obj, obj, ...], [], ...].
//                [  exercise#, ],            inner entry: obj
//exerciseThis[chapter#][exercise#]
//exerciseThis[point to to array of the chapter][point to the obj of the exercise]
let exerciseThis = new Array();

//Object's blueprint for every exercise.
function ExerciseInfo(chpt, exerc, problem, solution) {
  this.chapter = chpt;//chapter #
  this.exercise = exerc;//exercise #
  this.problem = problem;//problem text
  this.solution = solution;//solution; each line is and <li>; '&nbsp;' is non-break-sapce
}
//The <li> tag for each line in the solution code.
let a = (j) => {
  //It's the opening <li> plus indentation. The parameter is the hierarchy of the line.
  let h = "";
  for(i = 0; i < j; i++) h += "&nbsp;&nbsp;&nbsp;";//Indentation beased on the hierarchy (parameter).
  return '<li>' + h;
}
let z = '</li>';//Closing, </li>.

//Concept (entry) creation.
//Chapter 0.
exerciseThis[0] = new Array();
//Chapter 1; an array that contains its exercises.
exerciseThis[1] = new Array();//Array of chapter 1 exercises.
exerciseThis[1][0] = null;
exerciseThis[1][1] = null;
exerciseThis[1][2] = null;
exerciseThis[1][3] = null;
exerciseThis[1][4] = new ExerciseInfo("1", "4",
"Compile and execute the sample program from this chapter using the command prompt (the console) and Visual Studio.",
a(0) + 'using System;'                     + z +
a(0)                                       + z +
a(0) + 'namespace HelloCSharp'             + z +
a(0) + '{'                                 + z +
a(1) +  'class Program'                    + z +
a(1) +  '{'                                + z +
a(2) +    'static void Main()'             + z +
a(2) +    '{'                              + z +
a(3) +      'Console.WriteLine("Hello");'  + z +
a(2) +    '}'                              + z +
a(1) +  '}'                                + z +
a(0) + '}'                                 + z
);
exerciseThis[1][5] = null;
exerciseThis[1][6] = null;
exerciseThis[1][7] = null;
exerciseThis[1][8] = new ExerciseInfo("1", "8",
"Write a program that prints on the console the current date and time.",
a(0) + 'using System;'                                + z +
a(0)                                                  + z +
a(0) + 'namespace PrintDateAndTime'                   + z +
a(0) + '{'                                            + z +
a(1) +     'class Program'                            + z +
a(1) +     '{'                                        + z +
a(2) +         'static void Main()'                   + z +
a(2) +         '{'                                    + z +
a(3) +           'Console.WriteLine(DateTime.Now);'   + z +
a(2) +         '}'                                    + z +
a(1) +     '}'                                        + z +
a(0) + '}'                                            + z
);
exerciseThis[1][9] = null;
exerciseThis[1][10] = new ExerciseInfo("1", "10",
"Write a program that prints the first 100 members of the sequence 2, -3, 4, -5, 6, -7, 8.",
a(0) + 'using System;'                                + z +
a(0)                                                  + z +
a(0) + 'namespace First100Sequence'                   + z +
a(0) + '{'                                            + z +
a(1) +     'class Program'                            + z +
a(1) +     '{'                                        + z +
a(2) +         'static void Main()'                   + z +
a(2) +         '{'                                    + z +
a(3) +             'int n = 1; //Sign converter.'     + z +
a(3) +             'for(int i = 2; i <102; i++)'      + z +
a(3) +             '{'                                + z +
a(4) +                 'int num = n*i;'               + z +
a(4) +                 'Console.Write(num + " ");'    + z +
a(4) +                 'n *= -1;'                     + z +
a(3) +             '}'                                + z +
a(3) +             'Console.WriteLine();'             + z +
a(2) +         '}'                                    + z +
a(1) +     '}'                                        + z +
a(0) + '}'                                            + z
);
//Chapter 2; an array that contains its exercises.
exerciseThis[2] = new Array();//Array of chapter 2 exercises.
exerciseThis[2][0] = null;
//Chapter 3; an array that contains its exercises.
exerciseThis[3] = new Array();//Array of chapter 3.
exerciseThis[3][0] = null;
exerciseThis[3][1] = new ExerciseInfo("3", "1",
"Write an expression that checks whether an integer is odd or even.",
a(0) + 'using System;'                                                              + z +
a(0)                                                                                + z +
a(0) + 'namespace CheckEvenOdd'                                                     + z +
a(0) + '{'                                                                          + z +
a(1) +     'class Program'                                                          + z +
a(1) +     '{'                                                                      + z +
a(2) +         'static void Main()'                                                 + z +
a(2) +         '{'                                                                  + z +
a(0)                                                                                + z +
a(3) +             'int x;'                                                         + z +
a(3) +             'string numX;'                                                   + z +
a(0)                                                                                + z +
a(3) +             'do'                                                             + z +
a(3) +             '{'                                                              + z +
a(4) +                 'Console.Write("Value for x = ");'                           + z +
a(4) +                 'numX = Console.ReadLine();'                                 + z +
a(4) +                 'Console.WriteLine();'                                       + z +
a(3) +             '} while (!(int.TryParse(numX, out x)));'                        + z +
a(0)                                                                                + z +
a(3) +             'if (x % 2 == 0)'                                                + z +
a(4) +                'Console.WriteLine(x.ToString() + " is even!");'              + z +
a(3) +             'else'                                                           + z +
a(4) +                'Console.WriteLine(x.ToString() + " is odd!");'               + z +
a(0)                                                                                + z +
a(2) +         '}'                                                                  + z +
a(1) +     '}'                                                                      + z +
a(0) + '}'                                                                          + z
);
exerciseThis[3][2] = new ExerciseInfo("3", "2",
"Write a Boolean expression that checks whether a given integer is divisible by both 5 and 7, without a remainder.",
a(0) + 'using System;'                                                                              + z +
a(0)                                                                                                + z +
a(0) + 'namespace CheckEvenOdd'                                                                     + z +
a(0) + '{'                                                                                          + z +
a(1) +     'class Program'                                                                          + z +
a(1) +     '{'                                                                                      + z +
a(2) +         'static void Main()'                                                                 + z +
a(2) +         '{'                                                                                  + z +
a(0)                                                                                                + z +
a(3) +             'string numX;'                                                                   + z +
a(3) +             'int x;'                                                                         + z +
a(0)                                                                                                + z +
a(3) +             'do'                                                                             + z +
a(3) +             '{'                                                                              + z +
a(4) +                 'Console.Write("Value for x = ");'                                           + z +
a(4) +                 'numX = Console.ReadLine();'                                                 + z +
a(4) +                 'Console.WriteLine();'                                                       + z +
a(3) +             '} while (!(int.TryParse(numX, out x)));'                                        + z +
a(0)                                                                                                + z +
a(3) +             'if (x % 35 == 0)'                                                               + z +
a(4) +                'Console.WriteLine(x.ToString() + " is divisible by 5 and 7");'               + z +
a(3) +             'else if (x % 7 == 0)'                                                           + z +
a(4) +                'Console.WriteLine(x.ToString() + " is divisible by 7, but not by 5");'       + z +
a(3) +             'else if (x % 5 == 0)'                                                           + z +
a(4) +                'Console.WriteLine(x.ToString() + " is divisible by 5, but not by 7");'       + z +
a(3) +             'else'                                                                           + z +
a(4) +                'Console.WriteLine(x.ToString() + " is neither dibisible by 7 nor by 5");'    + z +
a(0)                                                                                                + z +
a(2) +         '}'                                                                                  + z +
a(1) +     '}'                                                                                      + z +
a(0) + '}'                                                                                          + z
);
exerciseThis[3][3] = new ExerciseInfo("3", "3",
"Write an expression that looks for a given integer if its third digit (right to left) is 7.",
a(0) + 'using System;'                                                                                + z +
a(0)                                                                                                  + z +
a(0) + 'namespace ThirdDigitis7'                                                                      + z +
a(0) + '{'                                                                                            + z +
a(1) +     'class Program'                                                                            + z +
a(1) +     '{'                                                                                        + z +
a(2) +         'static void Main()'                                                                   + z +
a(2) +         '{'                                                                                    + z +
a(3) +             'string numX;'                                                                     + z +
a(3) +             'long x;'                                                                          + z +
a(0)                                                                                                  + z +
a(3) +             'do'                                                                               + z +
a(3) +             '{'                                                                                + z +
a(4) +                 'Console.Write("Value for x = ");'                                             + z +
a(4) +                 'numX = Console.ReadLine();'                                                   + z +
a(4) +                 'Console.WriteLine();'                                                         + z +
a(3) +             '} while (!(long.TryParse(numX, out x)));'                                         + z +
a(0)                                                                                                  + z +
a(3) +             'long thirdDigit = (x - (x % 100)) / 100;'                                         + z +
a(0)                                                                                                  + z +
a(3) +             'if (thirdDigit > 9) thirdDigit %= 10;'                                            + z +
a(0)                                                                                                  + z +
a(3) +             'if (thirdDigit == 7)'                                                             + z +
a(4) +                'Console.WriteLine(thirdDigit.ToString() + " is seven!");'                      + z +
a(3) +             'else'                                                                             + z +
a(4) +                'Console.WriteLine(thirdDigit + " is not seven.");'                             + z +
a(0)                                                                                                  + z +
a(2) +         '}'                                                                                    + z +
a(1) +     '}'                                                                                        + z +
a(0) + '}'                                                                                            + z
);
exerciseThis[3][4] = new ExerciseInfo("3", "4",
"Write an expression that checks whether the third bit in a given integer is 1 or 0.",
a(0) + 'using System;'                                                                        + z +
a(0)                                                                                          + z +
a(0) + 'namespace ThirdDigit_InBinary1Or0'                                                    + z +
a(0) + '{'                                                                                    + z +
a(1) +     'class Program'                                                                    + z +
a(1) +     '{'                                                                                + z +
a(2) +         'static void Main()'                                                           + z +
a(2) +         '{'                                                                            + z +
a(3) +             'string numX;'                                                             + z +
a(3) +             'long x;'                                                                  + z +
a(3) +             'string numBi = "";'                                                       + z +
a(0)                                                                                          + z +
a(3) +             'do'                                                                       + z +
a(3) +             '{'                                                                        + z +
a(4) +                 'Console.Write("Value for x = ");'                                     + z +
a(4) +                 'numX = Console.ReadLine();'                                           + z +
a(4) +                 'Console.WriteLine();'                                                 + z +
a(3) +             '} while (!(long.TryParse(numX, out x)));'                                 + z +
a(0)                                                                                          + z +
a(3) +             'long y = x;'                                                              + z +
a(0)                                                                                          + z +
a(3) +             '//Binary representation.'                                                 + z +
a(3) +             'do'                                                                       + z +
a(3) +             '{'                                                                        + z +
a(4) +                 'long r = y % 2;'                                                      + z +
a(4) +                 'numBi += r.ToString();'                                               + z +
a(4) +                 'y /= 2;'                                                              + z +
a(3) +             '} while (y > 0);'                                                         + z +
a(0)                                                                                          + z +
a(3) +             'Console.Write(x.ToString() + " =(base 2) ");'                             + z +
a(0)                                                                                          + z +
a(3) +             '//Printing in reverse.'                                                   + z +
a(3) +             'for(int i = (numBi.Length - 1); i >= 0; i--)'                             + z +
a(3) +             '{'                                                                        + z +
a(4) +                 'Console.Write(numBi[i]);'                                             + z +
a(3) +             '}'                                                                        + z +
a(0)                                                                                          + z +
a(3) +             'Console.WriteLine();'                                                     + z +
a(0)                                                                                          + z +
a(3) +             'if (numBi[numBi.Length - 3] == \'1\')'                                    + z +
a(4) +                'Console.WriteLine("The third bit of " + x.ToString() + " is 1.");'     + z +
a(3) +             'else'                                                                     + z +
a(4) +                'Console.WriteLine("The third bit of " + x.ToString() + " is 0.");'     + z +
a(2) +         '}'                                                                            + z +
a(1) +     '}'                                                                                + z +
a(0) + '}'                                                                                    + z
);
exerciseThis[3][5] = null;
exerciseThis[3][6] = null;
exerciseThis[3][7] = null;
exerciseThis[3][8] = null;
exerciseThis[3][9] = null;
exerciseThis[3][10] = new ExerciseInfo("3", "10",
"Write a program that takes as input a four-digit number in format abcd (e.g. 2011) and performs the following actions:" +
"- Calculates the sum of the digits (in our example 2+0+1+1 = 4)."                                                       +
"- Prints on the console the number in reversed order: dcba (in our example 1102)."                                      +
"- Puts the last digit in the first position: dabc (in our example 1201)."                                               +
"- Exchanges the second and the third digits: acbd (in our example 2101).",
a(0) + 'using System;'                                                                                                + z +
a(0)                                                                                                                  + z +
a(0) + 'namespace FourDigitNumber'                                                                                    + z +
a(0) + '{'                                                                                                            + z +
a(1) +     'class Program'                                                                                            + z +
a(1) +     '{'                                                                                                        + z +
a(2) +         'static void Main()'                                                                                   + z +
a(2) +         '{'                                                                                                    + z +
a(3) +             'string numX, xNum = "", lastFirst = "", swapMid = "";'                                            + z +
a(3) +             'int x, sum = 0;'                                                                                  + z +
a(0)                                                                                                                  + z +
a(3) +             'do'                                                                                               + z +
a(3) +             '{'                                                                                                + z +
a(4) +                 'Console.Write("Value for x = ");'                                                             + z +
a(4) +                 'numX = Console.ReadLine();'                                                                   + z +
a(4) +                 'Console.WriteLine();'                                                                         + z +
a(3) +             '} while (!(int.TryParse(numX, out x)) || (numX.Length != 4));'                                    + z +
a(0)                                                                                                                  + z +
a(3) +             'for(int i = numX.Length - 1; i >= 0; i--)'                                                        + z +
a(3) +             '{'                                                                                                + z +
a(4) +                 'int y;'                                                                                       + z +
a(4) +                 'int.TryParse(numX[i].ToString(), out y);'                                                     + z +
a(4) +                 'sum += y;'                                                                                    + z +
a(4) +                 'xNum += numX[i];'                                                                             + z +
a(3) +             '}'                                                                                                + z +
a(0)                                                                                                                  + z +
a(3) +             'lastFirst = numX[3].ToString() + numX[0].ToString() + numX[1].ToString() + numX[2].ToString();'   + z +
a(3) +             'swapMid = numX[0].ToString() + numX[2].ToString() + numX[1].ToString() + numX[3].ToString();'     + z +
a(0)                                                                                                                  + z +
a(3) +             'Console.Write("Sum of the digits: " + sum.ToString());'                                           + z +
a(3) +             'Console.WriteLine();'                                                                             + z +
a(3) +             'Console.Write("Number in reversed order: " + xNum);'                                              + z +
a(3) +             'Console.WriteLine();'                                                                             + z +
a(3) +             'Console.Write("Last digit in the first poostion: " + lastFirst.ToString());'                      + z +
a(3) +             'Console.WriteLine();'                                                                             + z +
a(3) +             'Console.Write("Second and third digits were exchanged: " + swapMid.ToString());'                  + z +
a(3) +             'Console.WriteLine();'                                                                             + z +
a(2) +         '}'                                                                                                    + z +
a(1) +     '}'                                                                                                        + z +
a(0) + '}'                                                                                                            + z
);
exerciseThis[3][11] = new ExerciseInfo("3", "11",
"We are given a number n and a position p. Write a sequence of operations that prints the value of the bit on the position p in the number (0 or 1). Example: n=35, p=5 -> 1. Another example: n=35, p=6 -> 0.",
a(0) + 'using System;'                                                                                            + z +
a(0)                                                                                                              + z +
a(0) + 'namespace TheBitPositionP'                                                                                + z +
a(0) + '{'                                                                                                        + z +
a(1) +     'class Program'                                                                                        + z +
a(1) +     '{'                                                                                                    + z +
a(2) +         'static void Main()'                                                                               + z +
a(2) +         '{'                                                                                                + z +
a(3) +             'int n, p;'                                                                                    + z +
a(3) +             'string numN, posP, numBi = "";'                                                               + z +
a(0)                                                                                                              + z +
a(3) +             'do'                                                                                           + z +
a(3) +             '{'                                                                                            + z +
a(4) +                 'Console.Write("Value for n = ");'                                                         + z +
a(4) +                 'numN = Console.ReadLine();'                                                               + z +
a(4) +                 'Console.Write("Position p = ");'                                                          + z +
a(4) +                 'posP = Console.ReadLine();'                                                               + z +
a(4) +                 'Console.WriteLine();'                                                                     + z +
a(3) +             '} while (!(int.TryParse(numN, out n)) || !(int.TryParse(posP, out p)));'                      + z +
a(0)                                                                                                              + z +
a(3) +             'long y = n;'                                                                                  + z +
a(0)                                                                                                              + z +
a(3) +             '//Binary representation.'                                                                     + z +
a(3) +             'do'                                                                                           + z +
a(3) +             '{'                                                                                            + z +
a(4) +                 'long r = y % 2;'                                                                          + z +
a(4) +                 'numBi += r.ToString();'                                                                   + z +
a(4) +                 'y /= 2;'                                                                                  + z +
a(3) +             '} while (y > 0);'                                                                             + z +
a(3) +             'Console.Write(n.ToString() + " =(base 2) ");'                                                 + z +
a(0)                                                                                                              + z +
a(3) +             '//Printing in reverse.'                                                                       + z +
a(3) +             'for (int i = (numBi.Length - 1); i >= 0; i--)'                                                + z +
a(3) +             '{'                                                                                            + z +
a(4) +                 'Console.Write(numBi[i]);'                                                                 + z +
a(3) +             '}'                                                                                            + z +
a(0)                                                                                                              + z +
a(3) +             'Console.WriteLine();'                                                                         + z +
a(3) +             '//Position counting begins with 0.'                                                           + z +
a(3) +             'string theBit = ((n >> p) & 1) != 0 ? "1" : "0";'                                             + z +
a(3) +             'Console.WriteLine("The bit on the position " + p.ToString() + " is " + theBit + "."); '       + z +
a(2) +         '}'                                                                                                + z +
a(1) +     '}'                                                                                                    + z +
a(0) + '}'                                                                                                        + z
);
exerciseThis[3][12] = null;
exerciseThis[3][13] = new ExerciseInfo("3", "13",
"We are given the number n, the value v (v = 0 or 1) and the position p. write a sequence of operations that changes the value of n, so the bit on the position p has the value of v. Example: n=35, p=5, v=0 -> n=3. Another example: n=35, p=2, v=1 -> n=39.",
a(0) + 'using System;'                                                                      + z +
a(0)                                                                                        + z +
a(0) + 'namespace ChangeBitAtP'                                                             + z +
a(0) + '{'                                                                                  + z +
a(1) +     'class Program'                                                                  + z +
a(1) +     '{'                                                                              + z +
a(2) +         'static void Main()'                                                         + z +
a(2) +         '{'                                                                          + z +
a(3) +             'string numN, posP, valV;'                                               + z +
a(3) +             'ulong n, p;'                                                            + z +
a(3) +             'byte v;'                                                                + z +
a(3) +             'bool nPass, pPass, vPass;'                                              + z +
a(3)                                                                                        + z +
a(3) +             'do'                                                                     + z +
a(3) +             '{'                                                                      + z +
a(4) +                 'Console.Write("Value for n = ");'                                   + z +
a(4) +                 'numN = Console.ReadLine();'                                         + z +
a(4) +                 'nPass = ulong.TryParse(numN, out n);'                               + z +
a(4) +                 'Console.WriteLine();'                                               + z +
a(3) +             '} while (!nPass || n < 0);'                                             + z +
a(0)                                                                                        + z +
a(3) +             'do'                                                                     + z +
a(3) +             '{'                                                                      + z +
a(4) +                 'Console.Write("Position of the bit p = ");'                         + z +
a(4) +                 'posP = Console.ReadLine();'                                         + z +
a(4) +                 'pPass = ulong.TryParse(posP, out p);'                               + z +
a(4) +                 'Console.WriteLine();'                                               + z +
a(3) +             '} while (!pPass || p < 0);'                                             + z +
a(0)                                                                                        + z +
a(3) +             'do'                                                                     + z +
a(3) +             '{'                                                                      + z +
a(4) +                 'Console.Write("Bit value v = ");'                                   + z +
a(4) +                 'valV = Console.ReadLine();'                                         + z +
a(4) +                 'vPass = byte.TryParse(valV, out v);'                                + z +
a(4) +                 'Console.WriteLine();'                                               + z +
a(3) +             '} while (!vPass || (v != 0 && v != 1));'                                + z +
a(0)                                                                                        + z +
a(3) +             '//n to binomial'                                                        + z +
a(3) +             'ulong y = n;'                                                           + z +
a(3) +             'string numBi = "";'                                                     + z +
a(0)                                                                                        + z +
a(3) +             'do'                                                                     + z +
a(3) +             '{'                                                                      + z +
a(4) +                 'byte r = (byte)(y % 2);'                                            + z +
a(4) +                 'numBi += r.ToString();'                                             + z +
a(4) +                 'y /= 2;'                                                            + z +
a(3) +             '} while (y > 0);'                                                       + z +
a(0)                                                                                        + z +
a(3) +             'Console.Write(n.ToString() + " =(base 2) ");'                           + z +
a(3) +             'for(int i = (numBi.Length - 1); i >= 0; i--)'                           + z +
a(3) +             '{'                                                                      + z +
a(4) +                 'Console.Write(numBi[i]);'                                           + z +
a(3) +             '}'                                                                      + z +
a(3) +             'Console.WriteLine();'                                                   + z +
a(0)                                                                                        + z +
a(3) +             'Console.WriteLine((v == 1) ? "|" : "^");'                               + z +
a(0)                                                                                        + z +
a(3) +             '//Binomial used for the change of the bit p of n.'                      + z +
a(3) +             'ulong z = (1u << (byte)p);'                                             + z +
a(3) +             'string zBi = "";'                                                       + z +
a(0)                                                                                        + z +
a(3) +             'do'                                                                     + z +
a(3) +             '{'                                                                      + z +
a(4) +                 'byte r = (byte)(z % 2);'                                            + z +
a(4) +                 'zBi += r.ToString();'                                               + z +
a(4) +                 'z /= 2;'                                                            + z +
a(3) +             '} while (z > 0);'                                                       + z +
a(0)                                                                                        + z +
a(3) +             'Console.Write((1u << (byte)p).ToString() + " =(base 2) ");'             + z +
a(3) +             'for (int i = (zBi.Length - 1); i >= 0; i--)'                            + z +
a(3) +             '{'                                                                      + z +
a(4) +                 'Console.Write(zBi[i]);'                                             + z +
a(3) +             '}'                                                                      + z +
a(3) +             'Console.WriteLine();'                                                   + z +
a(0)                                                                                        + z +
a(3) +             '//Result'                                                               + z +
a(3) +             'ulong w = (v == 1) ? (n | (1u << (byte)p)) : (n ^ (1u << (byte)p));'    + z +
a(3) +             'ulong result = w;'                                                      + z +
a(3) +             'string wBi = "";'                                                       + z +
a(0)                                                                                        + z +
a(3) +             'do'                                                                     + z +
a(3) +             '{'                                                                      + z +
a(4) +                 'byte r = (byte)(w % 2);'                                            + z +
a(4) +                 'wBi += r.ToString();'                                               + z +
a(4) +                 'w /= 2;'                                                            + z +
a(3) +             '} while (w > 0);'                                                       + z +
a(0)                                                                                        + z +
a(3) +             'Console.WriteLine("________________________");'                         + z +
a(0)                                                                                        + z +
a(3) +             'Console.Write(result.ToString() + " =(base 2) ");'                      + z +
a(3) +             'for (int i = (wBi.Length - 1); i >= 0; i--)'                            + z +
a(3) +             '{'                                                                      + z +
a(4) +                 'Console.Write(wBi[i]);'                                             + z +
a(3) +             '}'                                                                      + z +
a(3) +             'Console.WriteLine();'                                                   + z +
a(2) +         '}'                                                                          + z +
a(1) +     '}'                                                                              + z +
a(0) + '}'                                                                                  + z
);
exerciseThis[3][14] = new ExerciseInfo("3", "14",
"Write a program that checks if a given number n (1 < n < 100) is a prime number (i.e. it is divisible without remainder only to itself and 1).",
a(0) + 'using System;'                                                                        + z +
a(0) + 'namespace IsItPrime_2_99_'                                                            + z +
a(0) + '{'                                                                                    + z +
a(1) +     'class Program'                                                                    + z +
a(1) +     '{'                                                                                + z +
a(2) +         'static void Main()'                                                           + z +
a(2) +         '{'                                                                            + z +
a(3) +             'string numN;'                                                             + z +
a(3) +             'uint n;'                                                                  + z +
a(3) +             'bool prime = true;'                                                       + z +
a(0)                                                                                          + z +
a(3) +             'do'                                                                       + z +
a(3) +             '{'                                                                        + z +
a(4) +                 'Console.Write("Value for n = ");'                                     + z +
a(4) +                 'numN = Console.ReadLine();'                                           + z +
a(3) +             '} while (!(uint.TryParse(numN, out n) && n > 1 && n < 100));'             + z +
a(0)                                                                                          + z +
a(3) +             'for(uint i = (n - 1); i > 2; i--)'                                        + z +
a(3) +             '{'                                                                        + z +
a(4) +                 'uint r = n % i;'                                                      + z +
a(4) +                 'if(r == 0)'                                                           + z +
a(4) +                 '{'                                                                    + z +
a(5) +                     'prime = false;'                                                   + z +
a(5) +                     'break;'                                                           + z +
a(4) +                 '}'                                                                    + z +
a(3) +             '}'                                                                        + z +
a(0)                                                                                          + z +
a(3) +             'Console.WriteLine(numN + " is " + ((prime) ? "prime" : "not prime"));'    + z +
a(2) +         '}'                                                                            + z +
a(1) +     '}'                                                                                + z +
a(0) + '}'                                                                                    + z
);
exerciseThis[3][15] = new ExerciseInfo("3", "15",
"Write a program that exchanges the values of the bits on positions 3, 4 and 5 with bits on positions 24, 25 and 26 of a given 32-bit unsigned integer.",
a(0) + 'using System;'                                                                + z +
a(0)                                                                                  + z +
a(0) + 'namespace Bit3For24'                                                          + z +
a(0) + '{'                                                                            + z +
a(1) +     'class Program'                                                            + z +
a(1) +     '{'                                                                        + z +
a(2) +         'static void Main()'                                                   + z +
a(2) +         '{'                                                                    + z +
a(3) +             'string numN, nBi = "";'                                           + z +
a(3) +             'uint n;'                                                          + z +
a(0)                                                                                  + z +
a(3) +             'do'                                                               + z +
a(3) +             '{'                                                                + z +
a(4) +                 'Console.Write("Value for n = ");'                             + z +
a(4) +                 'numN = Console.ReadLine();'                                   + z +
a(4) +                 'Console.WriteLine();'                                         + z +
a(3) +             '} while (!(uint.TryParse(numN, out n) & n > 0));'                 + z +
a(0)                                                                                  + z +
a(0) +             'uint x = n;'                                                      + z +
a(0)                                                                                  + z +
a(3) +             'do'                                                               + z +
a(3) +             '{'                                                                + z +
a(4) +                 'byte r = (byte)(x % 2);'                                      + z +
a(4) +                 'nBi += r.ToString();'                                         + z +
a(4) +                 'x /= 2;'                                                      + z +
a(3) +             '} while (x > 0);'                                                 + z +
a(0)                                                                                  + z +
a(3) +             'Console.Write(numN + " =(base2) ");'                              + z +
a(3) +             'for(int i = (nBi.Length - 1); i >= 0; i--)'                       + z +
a(3) +             '{'                                                                + z +
a(4) +                 'Console.Write(nBi[i]);'                                       + z +
a(3) +             '}'                                                                + z +
a(3) +             'Console.WriteLine();'                                             + z +
a(0)                                                                                  + z +
a(3) +             'string n32Bit = "";'                                              + z +
a(0)                                                                                  + z +
a(3) +             'Console.Write("32-bit:");'                                        + z +
a(3) +             'for(int i = 31; i >= 0; i--)'                                     + z +
a(3) +             '{'                                                                + z +
a(4) +                 'if (((i + 1) % 4) == 0) Console.Write(" ");'                  + z +
a(0)                                                                                  + z +
a(4) +                 'if (i > (nBi.Length - 1)) Console.Write("0");'                + z +
a(4) +                 'else Console.Write(nBi[i]);'                                  + z +
a(0)                                                                                  + z +
a(4) +                 'n32Bit += (i > (nBi.Length - 1) ? "0" : nBi[i].ToString());'  + z +
a(3) +             '}'                                                                + z +
a(3) +             'Console.WriteLine();'                                             + z +
a(0)                                                                                  + z +
a(3) +             'Console.WriteLine("Bit 3 is: " + n32Bit[29].ToString());'         + z +
a(3) +             'Console.WriteLine("Bit 24 is: " + n32Bit[8].ToString());'         + z +
a(0)                                                                                  + z +
a(3) +             'uint bit3 = (n >> 2) & 1, bit24 = (n >> 23) & 1;'                 + z +
a(0)                                                                                  + z +
a(3) +             'n = n & (~(1u << 23)) | (bit3 << 23);'                            + z +
a(3) +             'n = n & (~(1u << 2)) | (bit24 << 2);'                             + z +
a(0)                                                                                  + z +
a(3) +             'x = n;'                                                           + z +
a(3) +             'nBi = "";'                                                        + z +
a(0)                                                                                  + z +
a(3) +             'do'                                                               + z +
a(3) +             '{'                                                                + z +
a(4) +                 'byte r = (byte)(x % 2);'                                      + z +
a(4) +                 'nBi += r.ToString();'                                         + z +
a(4) +                 'x /= 2;'                                                      + z +
a(3) +             '} while (x > 0);'                                                 + z +
a(0)                                                                                  + z +
a(3) +             'Console.Write(n.ToString() + " =(base2) ");'                      + z +
a(3) +             'for (int i = (nBi.Length - 1); i >= 0; i--)'                      + z +
a(3) +             '{'                                                                + z +
a(4) +                 'Console.Write(nBi[i]);'                                       + z +
a(3) +             '}'                                                                + z +
a(3) +             'Console.WriteLine();'                                             + z +
a(0)                                                                                  + z +
a(3) +             'n32Bit = "";'                                                     + z +
a(0)                                                                                  + z +
a(3) +             'Console.Write("32-bit:");'                                        + z +
a(3) +             'for (int i = 31; i >= 0; i--)'                                    + z +
a(3) +             '{'                                                                + z +
a(4) +                 'if (((i + 1) % 4) == 0) Console.Write(" ");'                  + z +
a(0)                                                                                  + z +
a(4) +                 'if (i > (nBi.Length - 1)) Console.Write("0");'                + z +
a(4) +                 'else Console.Write(nBi[i]);'                                  + z +
a(0)                                                                                  + z +
a(4) +                 'n32Bit += (i > (nBi.Length - 1) ? "0" : nBi[i].ToString());'  + z +
a(3) +             '}'                                                                + z +
a(3) +             'Console.WriteLine();'                                             + z +
a(0)                                                                                  + z +
a(3) +             'Console.WriteLine("New bit 3: " + n32Bit[29].ToString());'        + z +
a(3) +             'Console.WriteLine("New bit 24: " + n32Bit[8].ToString());'        + z +
a(2) +         '}'                                                                    + z +
a(1) +     '}'                                                                        + z +
a(0) + '}'                                                                            + z
);
exerciseThis[4] = new Array();
exerciseThis[4][0] = null;
exerciseThis[4][1] = null;
exerciseThis[4][2] = null;
exerciseThis[4][3] = null;
exerciseThis[4][4] = new ExerciseInfo("4", "4",
"Write a program that prints three numbers in three virtual columns on the console. Each column should have a width of 10 characters and the numbers should be left aligned. The first number should be an integer in hexadecimal; the second should be fractional positive; and the third – a negative fraction. The last two numbers have to be rounded to the second decimal place.",
a(0) + 'using System;'                                                                      + z +
a(0) + 'namespace ThreeNumThreeCols'                                                        + z +
a(0) + '{'                                                                                  + z +
a(1) +     'class Program'                                                                  + z +
a(1) +     '{'                                                                              + z +
a(2) +         'static void Main()'                                                         + z +
a(2) +         '{'                                                                          + z +
a(3) +             'Console.Write("{0,-10:X} {1,-10:F2} {2,-10:F2}", 254, 0.506, -0.258);'  + z +
a(2) +         '}'                                                                          + z +
a(1) +     '}'                                                                              + z +
a(0) + '}'                                                                                  + z
);
exerciseThis[4][5] = new ExerciseInfo("4", "5",
"Write a program that reads from the console two integer numbers (int) and prints how many numbers between them exist, such that the remainder of their division by 5 is 0. Example: in the range (14, 25) there are 3 such numbers: 15, 20 and 25.",
a(0) + 'using System;'                                                                                                                  + z +
a(0)                                                                                                                                    + z +
a(0) + 'namespace NumberOfIntsMod5'                                                                                                     + z +
a(0) + '{'                                                                                                                              + z +
a(1) +     'class Program'                                                                                                              + z +
a(1) +     '{'                                                                                                                          + z +
a(2) +         'static void Main()'                                                                                                     + z +
a(2) +         '{'                                                                                                                      + z +
a(3) +             'string numX, numY;'                                                                                                 + z +
a(3) +             'int x, y, counts = 0;'                                                                                              + z +
a(3)                                                                                                                                    + z +
a(3) +             'do'                                                                                                                 + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'Console.Write("Value for x = ");'                                                                               + z +
a(4) +                 'numX = Console.ReadLine();'                                                                                     + z +
a(4) +                 'Console.Write("Value for y = ");'                                                                               + z +
a(4) +                 'numY = Console.ReadLine();'                                                                                     + z +
a(3) +             '} while (!(int.TryParse(numX, out x) && int.TryParse(numY, out y) && (x < y)));'                                    + z +
a(0)                                                                                                                                    + z +
a(3) +             'Console.Write("In the range ({0}, {1}) there are ", x, y);'                                                         + z +
a(4) +                 'for (int i = x; i <= y; i++) if (i % 5 == 0) counts++;'                                                         + z +
a(3) +             'Console.Write("{0} such numbers: ", counts);'                                                                       + z +
a(4) +                 'int cAD = 1;'                                                                                                   + z +
a(4) +                 'for (int i = x; i <= y; i++)'                                                                                   + z +
a(4) +                 '{'                                                                                                              + z +
a(5) +                     'if (i % 5 == 0)'                                                                                            + z +
a(5) +                     '{'                                                                                                          + z +
a(6) +                         'Console.Write("{0}{1}", i.ToString(), (cAD < (counts-1)) ? ", " : ((cAD != counts) ? " and " : "."));'  + z +
a(6) +                         'cAD++;'                                                                                                 + z +
a(5) +                     '}'                                                                                                          + z +
a(4) +                 '}'                                                                                                              + z +
a(3) +             'Console.WriteLine();'                                                                                               + z +
a(2) +         '}'                                                                                                                      + z +
a(1) +     '}'                                                                                                                          + z +
a(0) + '}'                                                                                                                              + z
);
exerciseThis[5] = new Array();
exerciseThis[5][0] = null;
exerciseThis[5][1] = null;
exerciseThis[5][2] = null;
exerciseThis[5][3] = null;
exerciseThis[5][4] = null;
exerciseThis[5][5] = new ExerciseInfo("5", "5",
"Write a program that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English). Use a switch statement.",
a(0) + 'using System;'                                                                    + z +
a(0)                                                                                      + z +
a(0) + 'namespace DigitsToWords_0_9_'                                                     + z +
a(0) + '{'                                                                                + z +
a(1) +     'class Program'                                                                + z +
a(1) +     '{'                                                                            + z +
a(2) +         'static void Main()'                                                       + z +
a(2) +         '{'                                                                        + z +
a(3) +             'string numX, wordX;'                                                  + z +
a(3) +             'int x;'                                                               + z +
a(0)                                                                                      + z +
a(3) +             'do'                                                                   + z +
a(3) +             '{'                                                                    + z +
a(4) +                 'Console.Write("Value for x = ");'                                 + z +
a(4) +                 'numX = Console.ReadLine();'                                       + z +
a(4) +                 'Console.WriteLine();'                                             + z +
a(3) +             '} while (!(int.TryParse(numX, out x) && (x >= 0) && (x <= 9)));'      + z +
a(0)                                                                                      + z +
a(3) +             'switch (x)'                                                           + z +
a(3) +             '{'                                                                    + z +
a(4) +                 'case 0:'                                                          + z +
a(5) +                     'wordX = "zero";'                                              + z +
a(5) +                     'break;'                                                       + z +
a(4) +                 'case 1:'                                                          + z +
a(5) +                     'wordX = "one";'                                               + z +
a(5) +                     'break;'                                                       + z +
a(4) +                 'case 2:'                                                          + z +
a(5) +                     'wordX = "two";'                                               + z +
a(5) +                     'break;'                                                       + z +
a(4) +                 'case 3:'                                                          + z +
a(5) +                     'wordX = "three";'                                             + z +
a(5) +                     'break;'                                                       + z +
a(4) +                 'case 4:'                                                          + z +
a(5) +                     'wordX = "four";'                                              + z +
a(5) +                     'break;'                                                       + z +
a(4) +                 'case 5:'                                                          + z +
a(5) +                     'wordX = "five";'                                              + z +
a(5) +                     'break;'                                                       + z +
a(4) +                 'case 6:'                                                          + z +
a(5) +                     'wordX = "six";'                                               + z +
a(5) +                     'break;'                                                       + z +
a(4) +                 'case 7:'                                                          + z +
a(5) +                     'wordX = "seven";'                                             + z +
a(5) +                     'break;'                                                       + z +
a(4) +                 'case 8:'                                                          + z +
a(5) +                     'wordX = "eight";'                                             + z +
a(5) +                     'break;'                                                       + z +
a(4) +                 'case 9:'                                                          + z +
a(5) +                     'wordX = "nine";'                                              + z +
a(5) +                     'break;'                                                       + z +
a(4) +                 'default:'                                                         + z +
a(5) +                     'wordX = null;'                                                + z +
a(5) +                     'break;'                                                       + z +
a(3) +             '}'                                                                    + z +
a(0)                                                                                      + z +
a(3) +             'Console.WriteLine("The number {0} in words is \"{1}\".", x, wordX);'  + z +
a(2) +         '}'                                                                        + z +
a(1) +     '}'                                                                            + z +
a(0) + '}'                                                                                + z
);
exerciseThis[5][6] = null;
exerciseThis[5][7] = null;
exerciseThis[5][8] = null;
exerciseThis[5][9] = new ExerciseInfo("5", "9",
"We are given 5 integer numbers. Write a program that finds those subsets whose sum is 0. Examples:" +
"- If we are given the numbers {3, -2, 1, 1, 8}, the sum of -2, 1 and 1 is 0." +
"- If we are given the numbers {3, 1, -7, 35, 22}, there are no subsets with sum 0.",
a(0) + 'using System;'                                                                                                            + z +
a(0)                                                                                                                              + z +
a(0) + 'namespace SubSetsSums0'                                                                                                   + z +
a(0) + '{'                                                                                                                        + z +
a(1) +     'class Program'                                                                                                        + z +
a(1) +     '{'                                                                                                                    + z +
a(2) +         'static void Main()'                                                                                               + z +
a(2) +         '{'                                                                                                                + z +
a(3) +             'string numA, numB, numC, numD, numE;'                                                                         + z +
a(3) +             'int a, b, c, d, e;'                                                                                           + z +
a(0)                                                                                                                              + z +
a(3) +             'do'                                                                                                           + z +
a(3) +             '{'                                                                                                            + z +
a(4) +                 'Console.Write("Value for a = ");'                                                                         + z +
a(4) +                 'numA = Console.ReadLine();'                                                                               + z +
a(4) +                 'Console.WriteLine();'                                                                                     + z +
a(3) +             '} while (!(int.TryParse(numA, out a)));'                                                                      + z +
a(0)                                                                                                                              + z +
a(3) +             'do'                                                                                                           + z +
a(3) +             '{'                                                                                                            + z +
a(4) +                 'Console.Write("Value for b = ");'                                                                         + z +
a(4) +                 'numB = Console.ReadLine();'                                                                               + z +
a(4) +                 'Console.WriteLine();'                                                                                     + z +
a(3) +             '} while (!(int.TryParse(numB, out b)));'                                                                      + z +
a(0)                                                                                                                              + z +
a(3) +             'do'                                                                                                           + z +
a(3) +             '{'                                                                                                            + z +
a(4) +                 'Console.Write("Value for c = ");'                                                                         + z +
a(4) +                 'numC = Console.ReadLine();'                                                                               + z +
a(4) +                 'Console.WriteLine();'                                                                                     + z +
a(3) +             '} while (!(int.TryParse(numC, out c)));'                                                                      + z +
a(0)                                                                                                                              + z +
a(3) +             'do'                                                                                                           + z +
a(3) +             '{'                                                                                                            + z +
a(4) +                 'Console.Write("Value for d = ");'                                                                         + z +
a(4) +                 'numD = Console.ReadLine();'                                                                               + z +
a(4) +                 'Console.WriteLine();'                                                                                     + z +
a(3) +             '} while (!(int.TryParse(numD, out d)));'                                                                      + z +
a(0)                                                                                                                              + z +
a(3) +             'do'                                                                                                           + z +
a(3) +             '{'                                                                                                            + z +
a(4) +                 'Console.Write("Value for e = ");'                                                                         + z +
a(4) +                 'numE = Console.ReadLine();'                                                                               + z +
a(4) +                 'Console.WriteLine();'                                                                                     + z +
a(3) +             '} while (!(int.TryParse(numE, out e)));'                                                                      + z +
a(0)                                                                                                                              + z +
a(3) +             '//Combination of two integers.'                                                                               + z +
a(3) +             'if (a + b == 0) Console.WriteLine("The sum of {0} and {1} is 0.", a, b);'                                     + z +
a(3) +             'if (a + c == 0) Console.WriteLine("The sum of {0} and {1} is 0.", a, c);'                                     + z +
a(3) +             'if (a + d == 0) Console.WriteLine("The sum of {0} and {1} is 0.", a, d);'                                     + z +
a(3) +             'if (a + e == 0) Console.WriteLine("The sum of {0} and {1} is 0.", a, e);'                                     + z +
a(3) +             'if (b + c == 0) Console.WriteLine("The sum of {0} and {1} is 0.", b, c);'                                     + z +
a(3) +             'if (b + d == 0) Console.WriteLine("The sum of {0} and {1} is 0.", b, d);'                                     + z +
a(3) +             'if (b + e == 0) Console.WriteLine("The sum of {0} and {1} is 0.", b, e);'                                     + z +
a(3) +             'if (c + d == 0) Console.WriteLine("The sum of {0} and {1} is 0.", c, d);'                                     + z +
a(3) +             'if (c + e == 0) Console.WriteLine("The sum of {0} and {1} is 0.", c, e);'                                     + z +
a(3) +             'if (d + e == 0) Console.WriteLine("The sum of {0} and {1} is 0.", d, e);'                                     + z +
a(3) +             '//Combination of three integers.'                                                                             + z +
a(3) +             'if (a + b + c == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, b, c);'                         + z +
a(3) +             'if (a + b + d == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, b, d);'                         + z +
a(3) +             'if (a + b + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, b, e);'                         + z +
a(3) +             'if (a + c + d == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, c, d);'                         + z +
a(3) +             'if (a + c + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, c, e);'                         + z +
a(3) +             'if (a + d + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", a, d, e);'                         + z +
a(3) +             'if (b + c + d == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", b, c, d);'                         + z +
a(3) +             'if (b + c + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", b, c, e);'                         + z +
a(3) +             'if (b + d + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", b, d, e);'                         + z +
a(3) +             'if (c + d + e == 0) Console.WriteLine("The sum of {0}, {1} and {2} is 0.", c, d, e);'                         + z +
a(3) +             '//Comnination of four integers.'                                                                              + z +
a(3) +             'if (a + b + c + d == 0) Console.WriteLine("The sum of {0}, {1}, {2} and {3} is 0.", a, b, c, d);'             + z +
a(3) +             'if (a + b + c + e == 0) Console.WriteLine("The sum of {0}, {1}, {2} and {3} is 0.", a, b, c, e);'             + z +
a(3) +             'if (a + b + d + e == 0) Console.WriteLine("The sum of {0}, {1}, {2} and {3} is 0.", a, b, d, e);'             + z +
a(3) +             'if (a + c + d + e == 0) Console.WriteLine("The sum of {0}, {1}, {2} and {3} is 0.", a, c, d, e);'             + z +
a(3) +             'if (b + c + d + e == 0) Console.WriteLine("The sum of {0}, {1}, {2} and {3} is 0.", b, c, d, e);'             + z +
a(3) +             '//Combination of five integers.'                                                                              + z +
a(3) +             'if (a + b + c + d + e == 0) Console.WriteLine("The sum of {0}, {1}, {2}, {3} and {4} is 0.", a, b, c, d, e);' + z +
a(2) +         '}'                                                                                                                + z +
a(1) +     '}'                                                                                                                    + z +
a(0) + '}'                                                                                                                        + z
);
exerciseThis[6] = new Array();
exerciseThis[6][0] = null;
exerciseThis[6][1] = new ExerciseInfo("6", "1",
"Write a program that prints on the console the numbers from 1 to N. The number N should be read from the standard input.",
a(0) + 'using System;'                                                  + z +
a(0)                                                                    + z +
a(0) + 'namespace Numbers1ToN'                                          + z +
a(0) + '{'                                                              + z +
a(1) +     'class Program'                                              + z +
a(1) +     '{'                                                          + z +
a(2) +         'static void Main()'                                     + z +
a(2) +         '{'                                                      + z +
a(3) +             'string numN;'                                       + z +
a(3) +             'int x = 1, n;'                                      + z +
a(0)                                                                    + z +
a(3) +             'do'                                                 + z +
a(3) +             '{'                                                  + z +
a(4) +                 'Console.Write("Value for n = ");'               + z +
a(4) +                 'numN = Console.ReadLine();'                     + z +
a(4) +                 'Console.WriteLine();'                           + z +
a(3) +             '} while (!(int.TryParse(numN, out n) && (n > 1)));' + z +
a(0)                                                                    + z +
a(3) +             'while(x <= n)'                                      + z +
a(3) +             '{'                                                  + z +
a(4) +                 'Console.Write("{0,-4}", x);'                    + z +
a(4) +                 'x++;'                                           + z +
a(3) +             '}'                                                  + z +
a(3) +             'Console.WriteLine();'                               + z +
a(2) +         '}'                                                      + z +
a(1) +     '}'                                                          + z +
a(0) + '}'                                                              + z
);
exerciseThis[6][2] = new ExerciseInfo("6", "2",
"Write a program that prints on the console the numbers from 1 to N, which are not divisible by 3 and 7 simultaneously. The number N should be read from the standard input.",
a(0) + 'using System;'                                                                + z +
a(0)                                                                                  + z +
a(0) + 'namespace NotMod21Number1ToN'                                                 + z +
a(0) + '{'                                                                            + z +
a(1) +     'class Program'                                                            + z +
a(1) +     '{'                                                                        + z +
a(2) +         'static void Main()'                                                   + z +
a(2) +         '{'                                                                    + z +
a(3) +             'string numN;'                                                     + z +
a(3) +             'int x = 1, n;'                                                    + z +
a(0)                                                                                  + z +
a(3) +             'do'                                                               + z +
a(3) +             '{'                                                                + z +
a(4) +                 'Console.Write("Value for n = ");'                             + z +
a(4) +                 'numN = Console.ReadLine();'                                   + z +
a(4) +                 'Console.WriteLine();'                                         + z +
a(3) +             '} while (!(int.TryParse(numN, out n) && (n > 1)));'               + z +
a(0)                                                                                  + z +
a(3) +             'while(x <= n)'                                                    + z +
a(3) +             '{'                                                                + z +
a(4) +                 'if((x % 3 !=0) && (x % 7 != 0)) Console.Write("{0,-4}", x);'  + z +
a(4) +                 'x++;'                                                         + z +
a(3) +             '}'                                                                + z +
a(3) +             'Console.WriteLine();'                                             + z +
a(2) +         '}'                                                                    + z +
a(1) +     '}'                                                                        + z +
a(0) + '}'                                                                            + z
);
exerciseThis[6][3] = null;
exerciseThis[6][4] = null;
exerciseThis[6][5] = null;
exerciseThis[6][6] = new ExerciseInfo("6", "6",
"Write a program that calculates N!/K! for given N and K (1<K<N).",
a(0) + 'using System;'                                                                                + z +
a(0) + 'using System.Numerics;'                                                                       + z +
a(0)                                                                                                  + z +
a(0) + 'namespace N_DividedByK_'                                                                      + z +
a(0) + '{'                                                                                            + z +
a(1) +     'class Program'                                                                            + z +
a(1) +     '{'                                                                                        + z +
a(2) +         'static void Main()'                                                                   + z +
a(2) +         '{'                                                                                    + z +
a(3) +             'string numN, numK;'                                                               + z +
a(3) +             'int n, k;'                                                                        + z +
a(3) +             'BigInteger nFact = 1, kFact = 1;'                                                 + z +
a(0)                                                                                                  + z +
a(3) +             'do'                                                                               + z +
a(3) +             '{'                                                                                + z +
a(4) +                 'Console.Write("Value for n = ");'                                             + z +
a(4) +                 'numN = Console.ReadLine();'                                                   + z +
a(4) +                 'Console.WriteLine();'                                                         + z +
a(3) +             '} while (!(int.TryParse(numN, out n) && (n > 2)));'                               + z +
a(0)                                                                                                  + z +
a(3) +             'do'                                                                               + z +
a(3) +             '{'                                                                                + z +
a(4) +                 'Console.Write("Value for k = ");'                                             + z +
a(4) +                 'numK = Console.ReadLine();'                                                   + z +
a(4) +                 'Console.WriteLine();'                                                         + z +
a(3) +             '} while (!(int.TryParse(numK, out k) && (k > 1) && (k < n)));'                    + z +
a(0)                                                                                                  + z +
a(3) +             'int x = n, y = k;'                                                                + z +
a(0)                                                                                                  + z +
a(3) +             'while (n > 1)'                                                                    + z +
a(3) +             '{'                                                                                + z +
a(4) +                 'if(k > 1) kFact *= k;'                                                        + z +
a(4) +                 'nFact *= n;'                                                                  + z +
a(0)                                                                                                  + z +
a(4) +                 'if(k > 1) k--;'                                                               + z +
a(4) +                 'n--;'                                                                         + z +
a(3) +             '}'                                                                                + z +
a(0)                                                                                                  + z +
a(3) +             'Console.WriteLine("{0}!/{1}! = {2}/{3} = {4}", x, y, nFact, kFact, nFact/kFact);' + z +
a(2) +         '}'                                                                                    + z +
a(1) +     '}'                                                                                        + z +
a(0) + '}'                                                                                            + z
);
exerciseThis[6][7] = null;
exerciseThis[6][8] = null;
exerciseThis[6][9] = null;
exerciseThis[6][10] = new ExerciseInfo("6", "10",
"Write a program that reads from the console a positive integer number N (N < 20) and prints a matrix of numbers as on the figures below:" +
"N = 3       N = 4"   +
"1 2 3       1 2 3 4" +
"2 3 4       2 3 4 5" +
"3 4 5       3 4 5 6" +
"            4 5 6 7",
a(0) + 'using System;'                                                                        + z +
a(0)                                                                                          + z +
a(0) + 'namespace MatrixOfNums'                                                               + z +
a(0) + '{'                                                                                    + z +
a(1) +     'class Program'                                                                    + z +
a(1) +     '{'                                                                                + z +
a(2) +         'static void Main()'                                                           + z +
a(2) +         '{'                                                                            + z +
a(3) +             'string numCol;'                                                           + z +
a(3) +             'int col;'                                                                 + z +
a(0)                                                                                          + z +
a(3) +             'do'                                                                       + z +
a(3) +             '{'                                                                        + z +
a(4) +                 'Console.Write("How many columns? ");'                                 + z +
a(4) +                 'numCol = Console.ReadLine();'                                         + z +
a(4) +                 'Console.WriteLine();'                                                 + z +
a(3) +             '} while (!(int.TryParse(numCol, out col) && (col > 1) && (col < 20)));'   + z +
a(0)                                                                                          + z +
a(3) +             'for (int line = 1, i = 1; line <= col; line++, i++)'                      + z +
a(3) +             '{'                                                                        + z +
a(4) +                 'for (int n = 1, j = i; n <= col; j++, n++)'                           + z +
a(4) +                 '{'                                                                    + z +
a(5) +                     'if (n == 1) Console.Write("|");'                                  + z +
a(5) +                     'Console.Write("{0,-3}|", j);'                                     + z +
a(4) +                 '}'                                                                    + z +
a(4) +                 'Console.WriteLine();'                                                 + z +
a(3) +             '}'                                                                        + z +
a(2) +         '}'                                                                            + z +
a(1) +     '}'                                                                                + z +
a(0) + '}'                                                                                    + z
);
exerciseThis[6][11] = new ExerciseInfo("6", "11",
"Write a program that calculates with how many zeroes the factorial of a given number ends. Examples:" +
"N = 10 -> N! = 3628800 -> 2" +
"N = 20 -> N! = 2432902008176640000 -> 4",
a(0) + 'using System;'                                                    + z +
a(0) + 'using System.Numerics;'                                           + z +
a(0)                                                                      + z +
a(0) + 'namespace ZerosFactEdns'                                          + z +
a(0) + '{'                                                                + z +
a(1) +     'class Program'                                                + z +
a(1) +     '{'                                                            + z +
a(2) +         'static void Main()'                                       + z +
a(2) +         '{'                                                        + z +
a(3) +             'string numN;'                                         + z +
a(3) +             'int n;'                                               + z +
a(3) +             'BigInteger factN = 1;'                                + z +
a(0)                                                                      + z +
a(3) +             'do'                                                   + z +
a(3) +             '{'                                                    + z +
a(4) +                 'Console.Write("Value for n = ");'                 + z +
a(4) +                 'numN = Console.ReadLine();'                       + z +
a(4) +                 'Console.WriteLine();'                             + z +
a(3) +             '} while (!(int.TryParse(numN, out n) && (n > 1)));'   + z +
a(0)                                                                      + z +
a(3) +             'int x = n;'                                           + z +
a(3) +             'while(x > 1)'                                         + z +
a(3) +             '{'                                                    + z +
a(4) +                 'factN *= x;'                                      + z +
a(4) +                 'x--;'                                             + z +
a(3) +             '}'                                                    + z +
a(0)                                                                      + z +
a(3) +             'Console.WriteLine("{0}! = {1}", n, factN);'           + z +
a(0)                                                                      + z +
a(3) +             'int counter = 0;'                                     + z +
a(0)                                                                      + z +
a(3) +             'while (factN % 10 == 0)'                              + z +
a(3) +             '{'                                                    + z +
a(4) +                 'counter++;'                                       + z +
a(4) +                 'factN /= 10;'                                     + z +
a(3) +             '}'                                                    + z +
a(0)                                                                      + z +
a(3) +             'Console.WriteLine("{0} zeros at the end", counter);'  + z +
a(2) +         '}'                                                        + z +
a(1) +     '}'                                                            + z +
a(0) + '}'                                                                + z
);
exerciseThis[6][12] = null;
exerciseThis[6][13] = new ExerciseInfo("6", "13",
"Write a program that converts a given number from binary to decimal notation.",
a(0) + 'using System;'                                                    + z +
a(0)                                                                      + z +
a(0) + 'namespace DecimalToBinary'                                        + z +
a(0) + '{'                                                                + z +
a(1) +     'class Program'                                                + z +
a(1) +     '{'                                                            + z +
a(2) +         'static void Main()'                                       + z +
a(2) +         '{'                                                        + z +
a(3) +             'string numN;'                                         + z +
a(3) +             'int n;'                                               + z +
a(0)                                                                      + z +
a(3) +             'do'                                                   + z +
a(3) +             '{'                                                    + z +
a(4) +                 'Console.Write("Value for n = ");'                 + z +
a(4) +                 'numN = Console.ReadLine();'                       + z +
a(4) +                 'Console.WriteLine();'                             + z +
a(3) +             '} while (!(int.TryParse(numN, out n) && (n > 0)));'   + z +
a(0)                                                                      + z +
a(3) +             'Console.Write(n.ToString() + " =(base 2) ");'         + z +
a(0)                                                                      + z +
a(3) +             'string nBino = "";'                                   + z +
a(0)                                                                      + z +
a(3) +             'while (n > 0)'                                        + z +
a(3) +             '{'                                                    + z +
a(4) +                 'nBino += (n % 2).ToString();'                     + z +
a(4) +                 'n /= 2;'                                          + z +
a(3) +             '}'                                                    + z +
a(0)                                                                      + z +
a(3) +             'int x = 0;'                                           + z +
a(0)                                                                      + z +
a(3) +             'for(int i = (nBino.Length - 1); i >= 0; i--)'         + z +
a(3) +             '{'                                                    + z +
a(4) +                 'Console.Write(nBino[i]);'                         + z +
a(4) +                 'if (nBino[i] == \'1\') x += (int)Math.Pow(2, i);' + z +
a(3) +             '}'                                                    + z +
a(3) +             'Console.Write(" =(base10) " + x.ToString());'         + z +
a(3) +             'Console.WriteLine();'                                 + z +
a(2) +         '}'                                                        + z +
a(1) +     '}'                                                            + z +
a(0) + '}'                                                                + z
);
exerciseThis[6][14] = null;
exerciseThis[6][15] = new ExerciseInfo("6", "15",
"Write a program that converts a given number from hexadecimal to decimal notation.",
a(0) + 'using System;'                                                    + z +
a(0)                                                                      + z +
a(0) + 'namespace DecimalToHexadecimal'                                   + z +
a(0) + '{'                                                                + z +
a(1) +     'class Program'                                                + z +
a(1) +     '{'                                                            + z +
a(2) +         'static void Main()'                                       + z +
a(2) +         '{'                                                        + z +
a(3) +             'string numN;'                                         + z +
a(3) +             'int n;'                                               + z +
a(0)                                                                      + z +
a(3) +             'do'                                                   + z +
a(3) +             '{'                                                    + z +
a(4) +                 'Console.Write("Value for n = ");'                 + z +
a(4) +                 'numN = Console.ReadLine();'                       + z +
a(4) +                 'Console.WriteLine();'                             + z +
a(3) +             '} while (!(int.TryParse(numN, out n) && (n > 1)));'   + z +
a(0)                                                                      + z +
a(3) +             'string nHexa = "";'                                   + z +
a(3) +             'int x = n, y = 0;'                                    + z +
a(0)                                                                      + z +
a(3) +             'while(x > 0)'                                         + z +
a(3) +             '{'                                                    + z +
a(4) +                 'int r = x % 16;'                                  + z +
a(4) +                 'if(r < 10) nHexa += r.ToString();'                + z +
a(4) +                 'switch (r)'                                       + z +
a(4) +                 '{'                                                + z +
a(5) +                     'case 10:'                                     + z +
a(6) +                         'nHexa += "A";'                            + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case 11:'                                     + z +
a(6) +                         'nHexa += "B";'                            + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case 12:'                                     + z +
a(6) +                         'nHexa += "C";'                            + z +
a(6) +                         'break;'                                   + z +
a(5) +                    'case 13:'                                      + z +
a(6) +                         'nHexa += "D";'                            + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case 14:'                                     + z +
a(6) +                         'nHexa += "E";'                            + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case 15:'                                     + z +
a(6) +                         'nHexa += "F";'                            + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'default:'                                     + z +
a(6) +                         'break;'                                   + z +
a(4) +                 '}'                                                + z +
a(4) +                 'x /= 16;'                                         + z +
a(3) +             '}'                                                    + z +
a(0)                                                                      + z +
a(3) +             'Console.Write(n.ToString() + " = (base16) ");'        + z +
a(0)                                                                      + z +
a(3) +             'for(int i = (nHexa.Length - 1); i >= 0; i--)'         + z +
a(3) +             '{'                                                    + z +
a(4) +                 'Console.Write(nHexa[i]);'                         + z +
a(4) +                 'switch (nHexa[i])'                                + z +
a(4) +                 '{'                                                + z +
a(5) +                     'case \'1\':'                                  + z +
a(6) +                         'y += (int)Math.Pow(16, i);'               + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'2\':'                                  + z +
a(6) +                         'y += 2 * (int)Math.Pow(16, i);'           + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'3\':'                                  + z +
a(6) +                         'y += 3 * (int)Math.Pow(16, i);'           + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'4\':'                                  + z +
a(6) +                         'y += 4 * (int)Math.Pow(16, i);'           + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'5\':'                                  + z +
a(6) +                         'y += 5 * (int)Math.Pow(16, i);'           + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'6\':'                                  + z +
a(6) +                         'y += 6 * (int)Math.Pow(16, i);'           + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'7\':'                                  + z +
a(6) +                         'y += 7 * (int)Math.Pow(16, i);'           + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'8\':'                                  + z +
a(6) +                         'y += 8 * (int)Math.Pow(16, i);'           + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'9\':'                                  + z +
a(6) +                         'y += 9 * (int)Math.Pow(16, i);'           + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'A\':'                                  + z +
a(6) +                         'y += 10 * (int)Math.Pow(16, i);'          + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'B\':'                                  + z +
a(6) +                         'y += 11 * (int)Math.Pow(16, i);'          + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'C\':'                                  + z +
a(6) +                         'y += 12 * (int)Math.Pow(16, i);'          + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'D\':'                                  + z +
a(6) +                         'y += 13 * (int)Math.Pow(16, i);'          + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'E\':'                                  + z +
a(6) +                         'y += 14 * (int)Math.Pow(16, i);'          + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'case \'F\':'                                  + z +
a(6) +                         'y += 15 * (int)Math.Pow(16, i);'          + z +
a(6) +                         'break;'                                   + z +
a(5) +                     'default:'                                     + z +
a(6) +                         'break;'                                   + z +
a(4) +                 '}'                                                + z +
a(3) +             '}'                                                    + z +
a(3) +             'Console.Write(" =(base10) " + y.ToString());'         + z +
a(3) +             'Console.WriteLine();'                                 + z +
a(2) +         '}'                                                        + z +
a(1) +     '}'                                                            + z +
a(0) + '}'                                                                + z
);
exerciseThis[6][16] = new ExerciseInfo("6", "16",
"Write a program that by a given integer N prints the numbers from 1 to N in random order.",
a(0) + 'using System;'                                                    + z +
a(0)                                                                      + z +
a(0) + 'namespace RandomOrder'                                            + z +
a(0) + '{'                                                                + z +
a(1) +     'class Program'                                                + z +
a(1) +     '{'                                                            + z +
a(2) +         'static void Main()'                                       + z +
a(2) +         '{'                                                        + z +
a(3) +             'string numN;'                                         + z +
a(3) +             'int n;'                                               + z +
a(0)                                                                      + z +
a(3) +             'do'                                                   + z +
a(3) +             '{'                                                    + z +
a(4) +                 'Console.Write("Value for n = ");'                 + z +
a(4) +                 'numN = Console.ReadLine();'                       + z +
a(4) +                 'Console.WriteLine();'                             + z +
a(3) +             '} while (!(int.TryParse(numN, out n)));'              + z +
a(0)                                                                      + z +
a(3) +             'int[] setX  = new int[n];'                            + z +
a(3) +             'Random rand = new Random();'                          + z +
a(3) +             'setX[0] = rand.Next(n) + 1;'                          + z +
a(0)                                                                      + z +
a(3) +             'for (int i = 1; i < n; i++)'                          + z +
a(3) +             '{'                                                    + z +
a(4) +                 'int x = rand.Next(n) + 1;'                        + z +
a(4) +                 'bool pass = true;'                                + z +
a(0)                                                                      + z +
a(4) +                 'for (int y = 0; y < i; y++)'                      + z +
a(4) +                 '{'                                                + z +
a(5) +                     'if (setX[y] == x)'                            + z +
a(5) +                     '{'                                            + z +
a(6) +                         'i--;'                                     + z +
a(6) +                         'pass = false;'                            + z +
a(6) +                         'break;'                                   + z +
a(5) +                     '}'                                            + z +
a(4) +                 '}'                                                + z +
a(4) +                 'if (pass) setX[i] = x;'                           + z +
a(3) +             '}'                                                    + z +
a(3) +             'foreach(int z in setX) Console.WriteLine("{0}", z);'  + z +
a(2) +         '}'                                                        + z +
a(1) +     '}'                                                            + z +
a(0) + '}'                                                                + z
);
exerciseThis[6][17] = new ExerciseInfo("6", "17",
"Write a program that given two numbers finds their greatest common divisor (GCD) and their least common multiple (LCM). You may use the formula LCM(a, b) = |a*b| / GCD(a, b).",
a(0) + 'using System;'                                                                    + z +
a(0)                                                                                      + z +
a(0) + 'namespace GCD_LCM'                                                                + z +
a(0) + '{'                                                                                + z +
a(1) +     'class Program'                                                                + z +
a(1) +     '{'                                                                            + z +
a(2) +         'static void Main()'                                                       + z +
a(2) +         '{'                                                                        + z +
a(3) +             'string numA, numB;'                                                   + z +
a(3) +             'int a, b, r, x, y, gcd = 1;'                                          + z +
a(0)                                                                                      + z +
a(3) +             'do'                                                                   + z +
a(3) +             '{'                                                                    + z +
a(4) +                 'do'                                                               + z +
a(4) +                 '{'                                                                + z +
a(5) +                     'Console.Write("Value for a = ");'                             + z +
a(5) +                     'numA = Console.ReadLine();'                                   + z +
a(5) +                     'Console.WriteLine();'                                         + z +
a(4) +                 '} while (!(int.TryParse(numA, out a)));'                          + z +
a(0)                                                                                      + z +
a(4) +                 'do'                                                               + z +
a(4) +                 '{'                                                                + z +
a(5) +                     'Console.Write("Value for b = ");'                             + z +
a(5) +                     'numB = Console.ReadLine();'                                   + z +
a(5) +                     'Console.WriteLine();'                                         + z +
a(4) +                 '} while (!(int.TryParse(numB, out b)));'                          + z +
a(3) +             '} while ((a == 0) && (b == 0));'                                      + z +
a(0)                                                                                      + z +
a(3) +             'x = (a > b) ? a : b;'                                                 + z +
a(3) +             'y = (x == a) ? b : a;'                                                + z +
a(0)                                                                                      + z +
a(3) +             'if (x < 0) x *= -1;'                                                  + z +
a(3) +             'if (y < 0) y *= -1;'                                                  + z +
a(0)                                                                                      + z +
a(3) +             'if (y != 0)'                                                          + z +
a(3) +             '{'                                                                    + z +
a(4) +                 'Console.WriteLine("{0} =(mod{1}) {2}", x, y, x % y);'             + z +
a(0)                                                                                      + z +
a(4) +                 'if (x % y == 0) gcd = y;'                                         + z +
a(0) +
a(4) +                 'while (x % y > 0)'                                                + z +
a(4) +                 '{'                                                                + z +
a(5) +                     'r = x % y;'                                                   + z +
a(5) +                     'x = y;'                                                       + z +
a(5) +                     'y = r;'                                                       + z +
a(5) +                     'gcd = y;'                                                     + z +
a(4) +                 '}'                                                                + z +
a(3) +             '}'                                                                    + z +
a(3) +             'else gcd = x;'                                                        + z +
a(0)                                                                                      + z +
a(3) +             'Console.WriteLine("GCD({0}, {1}) = {2}", a, b, gcd);'                 + z +
a(3) +             'Console.WriteLine("LCM({0}, {1}) = {2}", a, b, (Math.Abs(a*b)/gcd));' + z +
a(2) +         '}'                                                                        + z +
a(1) +     '}'                                                                            + z +
a(0) + '}'                                                                                + z
);
exerciseThis[6][18] = new ExerciseInfo("6", "18",
"Write a program that for a given number n, outputs a matrix in the form of a spiral:",
a(0) + 'using System;'                                                                                + z +
a(0)                                                                                                  + z +
a(0) + 'namespace Spiral'                                                                             + z +
a(0) + '{'                                                                                            + z +
a(1) +     'class Program'                                                                            + z +
a(1) +     '{'                                                                                        + z +
a(2) +         'static void Main()'                                                                   + z +
a(2) +         '{'                                                                                    + z +
a(3) +             'string numN;'                                                                     + z +
a(3) +             'int n, m = 1, x = 0, y = 1, rSteps = 0,  cSteps = 0;'                             + z +
a(0)                                                                                                  + z +
a(3) +             'do'                                                                               + z +
a(3) +             '{'                                                                                + z +
a(4) +                 'Console.Write("Value for n = ");'                                             + z +
a(4) +                 'numN = Console.ReadLine();'                                                   + z +
a(4) +                 'Console.WriteLine();'                                                         + z +
a(3) +             '} while (!(int.TryParse(numN, out n) && (n > 1)));'                               + z +
a(0)                                                                                                  + z +
a(3) +             'int[,] spiral = new int[n, n];'                                                   + z +
a(0)                                                                                                  + z +
a(3) +             'for(int i = 0; i < n; i++, m++) spiral[0, i] = m;'                                + z +
a(0)                                                                                                  + z +
a(3) +             'for(int r = 1, c = n - 1, steps = n - 1; steps > 0; r += y, c += x, m++)'         + z +
a(3) +             '{'                                                                                + z +
a(4) +                 'spiral[r, c] = m;'                                                            + z +
a(0)                                                                                                  + z +
a(4) +                 'if (y != 0) rSteps++;'                                                        + z +
a(4) +                 'if (x != 0) cSteps++;'                                                        + z +
a(0)                                                                                                  + z +
a(4) +                 'if(rSteps == steps)'                                                          + z +
a(4) +                 '{'                                                                            + z +
a(5) +                     'x = -1 * y;'                                                              + z +
a(5) +                     'y = 0;'                                                                   + z +
a(5) +                     'rSteps = 0;'                                                              + z +
a(4) +                 '}'                                                                            + z +
a(0)                                                                                                  + z +
a(4) +                 'if(cSteps == steps)'                                                          + z +
a(4) +                 '{'                                                                            + z +
a(5) +                     'y = x;'                                                                   + z +
a(5) +                     'x = 0;'                                                                   + z +
a(5) +                     'cSteps = 0; '                                                             + z +
a(5) +                     'steps--;'                                                                 + z +
a(4) +                 '}'                                                                            + z +
a(3) +             '}'                                                                                + z +
a(0)                                                                                                  + z +
a(3) +             'for (int i = 0; i < n; i++)'                                                      + z +
a(3) +             '{'                                                                                + z +
a(4) +                 'for(int j = 0; j < n; j++) Console.Write("{0,-4}", spiral[i, j].ToString());' + z +
a(4) +                 'Console.WriteLine();'                                                         + z +
a(3) +             '}'                                                                                + z +
a(2) +         '}'                                                                                    + z +
a(1) +     '}'                                                                                        + z +
a(0) + '}'                                                                                            + z
);
exerciseThis[7] = new Array();
exerciseThis[7][0] = null;
exerciseThis[7][1] = null;
exerciseThis[7][2] = null;
exerciseThis[7][3] = null;
exerciseThis[7][4] = new ExerciseInfo("7", "4",
"Write a program, which finds the maximal sequence of consecutive equal elements in an array. E.g.: {1, 1, 2, 3, 2, 2, 2, 1} -> {2, 2, 2}.",
a(0) + 'using System;'                                                                                                    + z +
a(0)                                                                                                                      + z +
a(0) + 'namespace MaxConsecutive'                                                                                         + z +
a(0) + '{'                                                                                                                + z +
a(1) +     'class Program'                                                                                                + z +
a(1) +     '{'                                                                                                            + z +
a(2) +         'static void Main()'                                                                                       + z +
a(2) +         '{'                                                                                                        + z +
a(3) +             'string numN, elemN;'                                                                                  + z +
a(3) +             'int n;'                                                                                               + z +
a(0)                                                                                                                      + z +
a(3) +             'do'                                                                                                   + z +
a(3) +             '{'                                                                                                    + z +
a(4) +                 'Console.Write("Value for n = ");'                                                                 + z +
a(4) +                 'numN = Console.ReadLine();'                                                                       + z +
a(4) +                 'Console.WriteLine();'                                                                             + z +
a(3) +             '} while (!(int.TryParse(numN, out n) && n > 0));'                                                     + z +
a(0)                                                                                                                      + z +
a(3) +             'int[] setN = new int[n];'                                                                             + z +
a(0)                                                                                                                      + z +
a(3) +             'for(int i = 0; i < setN.Length; i++)'                                                                 + z +
a(3) +             '{'                                                                                                    + z +
a(4) +                 'do'                                                                                               + z +
a(4) +                 '{'                                                                                                + z +
a(5) +                     'Console.Write("Value for element n_{0} = ", i + 1);'                                          + z +
a(5) +                     'elemN = Console.ReadLine();'                                                                  + z +
a(4) +                 '} while (!(int.TryParse(elemN, out setN[i])));'                                                   + z +
a(3) +             '}'                                                                                                    + z +
a(0)                                                                                                                      + z +
a(3) +             'Console.WriteLine();'                                                                                 + z +
a(0)                                                                                                                      + z +
a(3) +             'Console.Write("The set of integer: { ");'                                                             + z +
a(3) +             'foreach (int x in setN) Console.Write("{0} ", x.ToString());'                                         + z +
a(3) +             'Console.WriteLine("} ");'                                                                             + z +
a(0)                                                                                                                      + z +
a(3) +             'int theIndex = 0, thePossible = 0, theSequence = 1, theLonger = 1;'                                   + z +
a(0)                                                                                                                      + z +
a(3) +             'for (int i = 0; i < setN.Length - 1; i++)'                                                            + z +
a(3) +             '{'                                                                                                    + z +
a(4) +                 'if (setN[i] == setN[i + 1]) theSequence++;'                                                       + z +
a(4) +                 'else theSequence = 1;'                                                                            + z +
a(0)                                                                                                                      + z +
a(4) +                 'if (theSequence == 2) thePossible = i;'                                                           + z +
a(0)                                                                                                                      + z +
a(4) +                 'if (theSequence > theLonger)'                                                                     + z +
a(4) +                 '{'                                                                                                + z +
a(5) +                     'theIndex = (setN[theIndex] != setN[i]) ? thePossible : theIndex;'                             + z +
a(5) +                     'theLonger = theSequence;'                                                                     + z +
a(4) +                 '}'                                                                                                + z +
a(3) +             '}'                                                                                                    + z +
a(0)                                                                                                                      + z +
a(3) +             'if(theLonger != 1)'                                                                                   + z +
a(3) +             '{'                                                                                                    + z +
a(4) +                 'Console.Write("The first maximal sequence of consecutive is: { ");'                               + z +
a(4) +                 'for(int i = theIndex; i < theIndex + theLonger; i++) Console.Write("{0} ", setN[i].ToString());'  + z +
a(4) +                 'Console.WriteLine("}");'                                                                          + z +
a(3) +             '} else'                                                                                               + z +
a(3) +             '{'                                                                                                    + z +
a(4) +                 'Console.WriteLine("There is not a sequence of consecutive number.");'                             + z +
a(3) +             '}'                                                                                                    + z +
a(2) +         '}'                                                                                                        + z +
a(1) +     '}'                                                                                                            + z +
a(0) + '}'                                                                                                                + z
);
exerciseThis[7][5] = new ExerciseInfo("7", "5",
"Write a program, which finds the maximal sequence of consecutively placed increasing integers. Example: {3, 2, 3, 4, 2, 2, 4} -> {2, 3, 4}.",
a(0) + 'using System;'                                                                                                    + z +
a(0)                                                                                                                      + z +
a(0) + 'namespace Increasing_Sequence'                                                                                    + z +
a(0) + '{'                                                                                                                + z +
a(1) +     'class Program'                                                                                                + z +
a(1) +     '{'                                                                                                            + z +
a(2) +         'static void Main()'                                                                                       + z +
a(2) +         '{'                                                                                                        + z +
a(3) +             'string numN;'                                                                                         + z +
a(3) +             'int n;'                                                                                               + z +
a(0)                                                                                                                      + z +
a(3) +             'do'                                                                                                   + z +
a(3) +             '{'                                                                                                    + z +
a(4) +                 'Console.Write("Array length: n = ");'                                                             + z +
a(4) +                 'numN = Console.ReadLine();'                                                                       + z +
a(4) +                 'Console.WriteLine();'                                                                             + z +
a(3) +             '} while (!(int.TryParse(numN, out n) && n > 1));'                                                     + z +
a(0)                                                                                                                      + z +
a(3) +             'int[] setN = new int[n];'                                                                             + z +
a(0)                                                                                                                      + z +
a(3) +             'for (int i = 0; i < setN.Length; i++)'                                                                + z +
a(3) +             '{'                                                                                                    + z +
a(4) +                 'do'                                                                                               + z +
a(4) +                 '{'                                                                                                + z +
a(5) +                     'Console.Write("Element n_{0} = ", i.ToString());'                                             + z +
a(5) +                     'numN = Console.ReadLine();'                                                                   + z +
a(4) +                 '} while (!(int.TryParse(numN, out setN[i])));'                                                    + z +
a(3) +             '}'                                                                                                    + z +
a(0)                                                                                                                      + z +
a(3) +             'Console.Write("The set: { ");'                                                                        + z +
a(3) +             'foreach (int x in setN) Console.Write("{0} ", x.ToString());'                                         + z +
a(3) +             'Console.WriteLine("}");'                                                                              + z +
a(0)                                                                                                                      + z +
a(3) +             'int theIndex = 0, thePossible = 0, theSequence = 1, theLonger = 1;'                                   + z +
a(0)                                                                                                                      + z +
a(3) +             'for(int i = 1; i < setN.Length; i++)'                                                                 + z +
a(3) +             '{'                                                                                                    + z +
a(4) +                 'if (setN[i] == setN[i - 1] + 1) theSequence++;'                                                   + z +
a(4) +                 'else theSequence = 1;'                                                                            + z +
a(0)                                                                                                                      + z +
a(4) +                 'if (theSequence == 2) thePossible = i - 1;'                                                       + z +
a(0)                                                                                                                      + z +
a(4) +                 'if(theSequence > theLonger)'                                                                      + z +
a(4) +                 '{'                                                                                                + z +
a(5) +                     'theIndex = (setN[i] == setN[theIndex] + theSequence) ? theIndex : thePossible;'               + z +
a(5) +                     'theLonger = theSequence;'                                                                     + z +
a(4) +                 '}'                                                                                                + z +
a(3) +             '}'                                                                                                    + z +
a(0)                                                                                                                      + z +
a(3) +             'if(theLonger != 1)'                                                                                   + z +
a(3) +             '{'                                                                                                    + z +
a(4) +                 'Console.Write("The first maximal sequence of increasing elements is: { ");'                       + z +
a(4) +                 'for (int i = theIndex; i < theIndex + theLonger; i++) Console.Write("{0} ", setN[i].ToString());' + z +
a(4) +                 'Console.WriteLine("}");'                                                                          + z +
a(3) +             '} else'                                                                                               + z +
a(3) +             '{'                                                                                                    + z +
a(4) +                 'Console.WriteLine("There is not a sequence of increasing elements.");'                            + z +
a(3) +             '}'                                                                                                    + z +
a(2) +         '}'                                                                                                        + z +
a(1) +     '}'                                                                                                            + z +
a(0) + '}'                                                                                                                + z
);
exerciseThis[7][6] = null;
exerciseThis[7][7] = null;
exerciseThis[7][8] = new ExerciseInfo("7", "8",
"Sorting an array means to arrange its elements in an increasing (or decreasing) order. Write a program, which sorts an array using the algorithm \"selection sort\".",
a(0) + 'using System;'                                                                         + z +
a(0)                                                                                           + z +
a(0) + 'namespace Selection_Sort'                                                              + z +
a(0) + '{'                                                                                     + z +
a(1) +     'class Program'                                                                     + z +
a(1) +     '{'                                                                                 + z +
a(2) +         'static void Main()'                                                            + z +
a(2) +         '{'                                                                             + z +
a(3) +             'string nInput;'                                                            + z +
a(3) +             'int n;'                                                                    + z +
a(0)                                                                                           + z +
a(3) +             'do'                                                                        + z +
a(3) +             '{'                                                                         + z +
a(4) +                 'Console.Write("Enter the size of the array: ");'                       + z +
a(4) +                 'nInput = Console.ReadLine();'                                          + z +
a(4) +                 'Console.WriteLine();'                                                  + z +
a(3) +             '} while (!(int.TryParse(nInput, out n) && (n > 1)));'                      + z +
a(0)                                                                                           + z +
a(3) +             'int[] Arr = new int[n];'                                                   + z +
a(3) +             'Random random = new Random();'                                             + z +
a(0)                                                                                           + z +
a(3) +             'while (n > 0)'                                                             + z +
a(3) +             '{'                                                                         + z +
a(4) +                 'Arr[Arr.Length - n] = random.Next(100);'                               + z +
a(4) +                 'n--;'                                                                  + z +
a(3) +             '}'                                                                         + z +
a(0)                                                                                           + z +
a(3) +             'Console.Write("The array is: ");'                                          + z +
a(3) +             'foreach (int x in Arr) Console.Write("{0, 3}", x.ToString());'             + z +
a(3) +             'Console.WriteLine();'                                                      + z +
a(0)                                                                                           + z +
a(3) +             'int arrgStps = 0, minIndx = 0;'                                            + z +
a(0)                                                                                           + z +
a(3) +             'for(int i = 0; i < Arr.Length - 1; i++)'                                   + z +
a(3) +             '{'                                                                         + z +
a(4) +                 'int min = Arr[i];'                                                     + z +
a(0)                                                                                           + z +
a(4) +                 'for(int m = i + 1; m < Arr.Length; m++)'                               + z +
a(4) +                 '{'                                                                     + z +
a(5) +                     'if (Arr[m] < min)'                                                 + z +
a(5) +                     '{'                                                                 + z +
a(6) +                         'min = Arr[m];'                                                 + z +
a(6) +                         'minIndx = m;'                                                  + z +
a(5) +                     '}'                                                                 + z +
a(4) +                 '}'                                                                     + z +
a(0)                                                                                           + z +
a(4) +                 'if(min < Arr[i])'                                                      + z +
a(4) +                 '{'                                                                     + z +
a(5) +                     'int holdIt = Arr[i];'                                              + z +
a(0)                                                                                           + z +
a(5) +                     'Arr[i] = min;'                                                     + z +
a(5) +                     'Arr[minIndx] = holdIt;'                                            + z +
a(5) +                     'arrgStps++;'                                                       + z +
a(0)                                                                                           + z +
a(5) +                     'Console.Write("Sorting #" + arrgStps.ToString() + ": ");'          + z +
a(5) +                     'foreach (int x in Arr) Console.Write("{0, 3}", x.ToString());'     + z +
a(5) +                     'Console.WriteLine();'                                              + z +
a(4) +                 '}'                                                                     + z +
a(3) +             '}'                                                                         + z +
a(3) +             'Console.WriteLine();'                                                      + z +
a(0)                                                                                           + z +
a(3) +             'Console.WriteLine("In {0} steps.", arrgStps.ToString());'                  + z +
a(2) +         '}'                                                                             + z +
a(1) +     '}'                                                                                 + z +
a(0) + '}'                                                                                     + z
);
exerciseThis[7][9] = null;
exerciseThis[7][10] = null;
exerciseThis[7][11] = null;
exerciseThis[7][12] = new ExerciseInfo("7", "12",
"Write a program, which creates square matrices like those in the figures below and prints them formatted to the console. The size of the matrices will be read from the console. See the examples for matrices with size of 4 x 4 and make the other sizes in a similar fashion:",
a(0) + 'using System;'                                                                                                                  + z +
a(0) + 'namespace FourSquareMatices'                                                                                                    + z +
a(0) + '{'                                                                                                                              + z +
a(1) +     'class Program'                                                                                                              + z +
a(1) +     '{'                                                                                                                          + z +
a(2) +         'static void Main()'                                                                                                     + z +
a(2) +         '{'                                                                                                                      + z +
a(3) +             'string sizeOfn;'                                                                                                    + z +
a(3) +             'int n, el = 1;'                                                                                                     + z +
a(0)                                                                                                                                    + z +
a(3) +             'do'                                                                                                                 + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'Console.Write("Size of the square matices: ");'                                                                 + z +
a(4) +                 'sizeOfn = Console.ReadLine();'                                                                                  + z +
a(4) +                 'Console.WriteLine();'                                                                                           + z +
a(3) +             '} while (!(int.TryParse(sizeOfn, out n) && (n > 1)));'                                                              + z +
a(0)                                                                                                                                    + z +
a(3) +             'int[,] Arr = new int[n, n];'                                                                                        + z +
a(0)                                                                                                                                    + z +
a(3) +             '//Filling the array'                                                                                                + z +
a(3) +             'for(int i = 0; i < n; i++)'                                                                                         + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'for (int j = 0; j < n; j++)'                                                                                    + z +
a(4) +                 '{'                                                                                                              + z +
a(5) +                     'Arr[i, j] = el;'                                                                                            + z +
a(5) +                     'el++;'                                                                                                      + z +
a(4) +                 '}'                                                                                                              + z +
a(3) +             '}'                                                                                                                  + z +
a(0)                                                                                                                                    + z +
a(3) +             '//Printing the array in normal order'                                                                               + z +
a(3) +             'Console.WriteLine("Array in normal order");'                                                                        + z +
a(3) +             'for(int i = 0; i < n; i++)'                                                                                         + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'for (int j = 0; j < n; j++) Console.Write("{0, 3}", Arr[i, j].ToString("00"));'                                 + z +
a(4) +                 'Console.WriteLine();'                                                                                           + z +
a(3) +             '}'                                                                                                                  + z +
a(3) +             'Console.WriteLine();'                                                                                               + z +
a(0)                                                                                                                                    + z +
a(3) +             '//Going down'                                                                                                       + z +
a(3) +             'Console.WriteLine("Going Down");'                                                                                   + z +
a(3) +             'for(int j = 0; j < n; j++)'                                                                                         + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'for (int i = 0; i < n; i++) Console.Write("{0, 3}", Arr[i, j].ToString("00"));'                                 + z +
a(4) +                 'Console.WriteLine();'                                                                                           + z +
a(3) +             '}'                                                                                                                  + z +
a(3) +             'Console.WriteLine();'                                                                                               + z +
a(0)                                                                                                                                    + z +
a(3) +             '//ZigZag'                                                                                                           + z +
a(3) +             'Console.WriteLine("In zigzag-down-up");'                                                                            + z +
a(3) +             'int jj = 0; //Double \'j\' because single \'j\' is being used in the prior loops. Global scope,'                    +
                      'and when it enters in the for-loop there is a double initialization.'                                            + z +
a(3) +             'for(int h = 0; h < n; h++)'                                                                                         + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'for(int i = 0; i < n; i++)'                                                                                     + z +
a(4) +                 '{'                                                                                                              + z +
a(5) +                     'if (i % 2 == 0) Console.Write("{0, 3}", Arr[i, jj].ToString("00"));'                                        + z +
a(5) +                     'else Console.Write("{0, 3}", Arr[i, n - (jj + 1)].ToString("00"));'                                         + z +
a(4) +                 '}'                                                                                                              + z +
a(4) +                 'Console.WriteLine();'                                                                                           + z +
a(4) +                 'jj++;'                                                                                                          + z +
a(3) +             '}'                                                                                                                  + z +
a(3) +             'Console.WriteLine();'                                                                                               + z +
a(0)                                                                                                                                    + z +
a(3) +             '//Diagonal'                                                                                                         + z +
a(3) +             'int[,] DiagArr = new int[n, n];'                                                                                    + z +
a(3) +             'int m = 2;'                                                                                                         + z +
a(0)                                                                                                                                    + z +
a(3) +             'DiagArr[0, 0] = 1;'                                                                                                 + z +
a(0)                                                                                                                                    + z +
a(3) +             'for(int i = 1; i < n; i++)'                                                                                         + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'int h = i;'                                                                                                     + z +
a(4) +                 'for(int j = 0; j <= i; j++)'                                                                                    + z +
a(4) +                 '{'                                                                                                              + z +
a(5) +                     'DiagArr[h, j] = m;'                                                                                         + z +
a(5) +                     'm++;'                                                                                                       + z +
a(5) +                     'h--;'                                                                                                       + z +
a(4) +                 '}'                                                                                                              + z +
a(0)                                                                                                                                    + z +
a(4) +                 'if(i == n - 1)'                                                                                                 + z +
a(4) +                 '{'                                                                                                              + z +
a(5) +                     'int jStart = n - i; //That\'s 1;'                                                                           + z +
a(5) +                     'for(int k = i, j = jStart; j < n; j++)'                                                                     + z +
a(5) +                     '{'                                                                                                          + z +
a(6) +                         'DiagArr[k, j] = m;'                                                                                     + z +
a(6) +                         'm++;'                                                                                                   + z +
a(6) +                         'k--;'                                                                                                   + z +
a(0)                                                                                                                                    + z +
a(6) +                         'if(j == i)'                                                                                             + z +
a(6) +                         '{'                                                                                                      + z +
a(7) +                             'jStart++;'                                                                                          + z +
a(7) +                             'j = jStart - 1; //Minus 1 beacuse it will be increased by 1 at the end off the loop.'               + z +
a(7) +                             'k = i;'                                                                                             + z +
a(6) +                         '}'                                                                                                      + z +
a(5) +                     '}'                                                                                                          + z +
a(4) +                 '}'                                                                                                              + z +
a(3) +             '}'                                                                                                                  + z +
a(0)                                                                                                                                    + z +
a(3) +             'Console.WriteLine("Diagonals\' Array");'                                                                            + z +
a(3) +             'for(int i = 0; i < n; i++)'                                                                                         + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'for(int j = 0; j < n; j++)'                                                                                     + z +
a(4) +                 '{'                                                                                                              + z +
a(5) +                     'Console.Write("{0, 3}", DiagArr[i, j].ToString("00"));'                                                     + z +
a(4) +                 '}'                                                                                                              + z +
a(4) +                 'Console.WriteLine();'                                                                                           + z +
a(3) +             '}'                                                                                                                  + z +
a(3) +             'Console.WriteLine();'                                                                                               + z +
a(0)                                                                                                                                    + z +
a(3) +             '//Reversed Diagonals\' Array'                                                                                       + z +
a(3) +             'Console.WriteLine("Reversed Diagonals\' Array");'                                                                   + z +
a(3) +             'for(int i = (n - 1); i >= 0; i--)'                                                                                  + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'for(int j = 0; j < n; j++)'                                                                                     + z +
a(4) +                 '{'                                                                                                              + z +
a(5) +                     'Console.Write("{0, 3}", DiagArr[i, j].ToString("00"));'                                                     + z +
a(4) +                 '}'                                                                                                              + z +
a(4) +                 'Console.WriteLine();'                                                                                           + z +
a(3) +             '}'                                                                                                                  + z +
a(3) +             'Console.WriteLine();'                                                                                               + z +
a(0)                                                                                                                                    + z +
a(3) +             '//Spiral'                                                                                                           + z +
a(3) +             'Console.WriteLine("Spiral");'                                                                                       + z +
a(3) +             'int[,] SpiralArr = new int[n, n];'                                                                                  + z +
a(3) +             'int w = 1;'                                                                                                         + z +
a(0)                                                                                                                                    + z +
a(3) +             'for(int i = 0; i < n; i++)'                                                                                         + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'SpiralArr[i, 0] = w;'                                                                                           + z +
a(4) +                 'w++;'                                                                                                           + z +
a(3) +             '}'                                                                                                                  + z +
a(0)                                                                                                                                    + z +
a(3) +             'int pairTrav = 0, steps = 0, stpAllowed = (n - 1),'                                                                 + z +
a(0) +                 'hh = 0, kk = 1, l;'                                                                                             + z +
a(0)                                                                                                                                    + z +
a(3) +             'for(int i = (n - 1), j = 1; steps < stpAllowed; i += hh, j += kk)'                                                  + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'SpiralArr[i, j] = w;'                                                                                           + z +
a(4) +                 'w++;'                                                                                                           + z +
a(0)                                                                                                                                    + z +
a(4) +                 'steps++;'                                                                                                       + z +
a(0)                                                                                                                                    + z +
a(4) +                 'if(steps == stpAllowed)'                                                                                        + z +
a(4) +                 '{'                                                                                                              + z +
a(5) +                     'pairTrav++;'                                                                                                + z +
a(5) +                     'steps = 0;'                                                                                                 + z +
a(5) +                     'l = hh;'                                                                                                    + z +
a(5) +                     'hh = -1 * kk;'                                                                                              + z +
a(5) +                     'kk = l;'                                                                                                    + z +
a(4) +                 '}'                                                                                                              + z +
a(0)                                                                                                                                    + z +
a(4) +                 'if(pairTrav == 2)'                                                                                              + z +
a(4) +                 '{'                                                                                                              + z +
a(5) +                     'pairTrav = 0;'                                                                                              + z +
a(5) +                     'stpAllowed--;'                                                                                              + z +
a(4) +                 '}'                                                                                                              + z +
a(3) +             '}'                                                                                                                  + z +
a(0)                                                                                                                                    + z +
a(3) +             'for(int i = 0; i < n; i++)'                                                                                         + z +
a(3) +             '{'                                                                                                                  + z +
a(4) +                 'for(int j = 0; j < n; j++)'                                                                                     + z +
a(4) +                 '{'                                                                                                              + z +
a(5) +                     'Console.Write("{0, 3}", SpiralArr[i, j].ToString("00"));'                                                   + z +
a(4) +                 '}'                                                                                                              + z +
a(4) +                 'Console.WriteLine();'                                                                                           + z +
a(3) +             '}'                                                                                                                  + z +
a(3) +             'Console.WriteLine();'                                                                                               + z +
a(2) +         '}'                                                                                                                      + z +
a(1) +     '}'                                                                                                                          + z +
a(0) + '}'                                                                                                                              + z
);
exerciseThis[7][13] = null;
exerciseThis[7][14] = null;
exerciseThis[7][15] = new ExerciseInfo("7", "15",
"Write a program, which creates an array containing all Latin letters. The user inputs a word from the console and as result the program prints to the console the indices of the letters from the word.",
a(0) + 'using System;'                                                                                                                                                                                                                                            + z +
a(0)                                                                                                                                                                                                                                                              + z +
a(0) + 'namespace Index_of_the_letter_in_a_word'                                                                                                                                                                                                                  + z +
a(0) + '{'                                                                                                                                                                                                                                                        + z +
a(1) +       'class Program'                                                                                                                                                                                                                                      + z +
a(1) +       '{'                                                                                                                                                                                                                                                  + z +
a(2) +             'static void Main()'                                                                                                                                                                                                                           + z +
a(2) +             '{'                                                                                                                                                                                                                                            + z +
a(3) +                   'char[] lowerCaseLttr = {\'a\', \'b\', \'c\', \'d\', \'e\', \'f\', \'g\', \'h\', \'i\', \'j\', \'k\', \'l\', \'m\', \'n\', \'o\', \'p\', \'q\', \'r\', \'s\', \'t\', \'u\', \'v\', \'w\', \'x\', \'y\', \'z\'};'                         + z +
a(0)                                                                                                                                                                                                                                                              + z +
a(3) +                   'string wordEntered;'                                                                                                                                                                                                                    + z +
a(3) +                   'bool isItWord;'                                                                                                                                                                                                                         + z +
a(0)                                                                                                                                                                                                                                                              + z +
a(3) +                   'do'                                                                                                                                                                                                                                     + z +
a(3) +                   '{'                                                                                                                                                                                                                                      + z +
a(4) +                         'isItWord = true;'                                                                                                                                                                                                                 + z +
a(4) +                         'Console.Write("Write a word: ");'                                                                                                                                                                                                 + z +
a(4) +                         'wordEntered = Console.ReadLine();'                                                                                                                                                                                                + z +
a(4) +                         'foreach (char c in wordEntered)'                                                                                                                                                                                                  + z +
a(4) +                         '{'                                                                                                                                                                                                                                + z +
a(5) +                               'if (!Char.IsLetter(c)) isItWord = false;'                                                                                                                                                                                   + z +
a(4) +                         '}'                                                                                                                                                                                                                                + z +
a(3) +                   '} while (!isItWord);'                                                                                                                                                                                                                   + z +
a(0)                                                                                                                                                                                                                                                              + z +
a(3) +                   'for(int i = 0; i < wordEntered.Length; i++)'                                                                                                                                                                                            + z +
a(3) +                   '{'                                                                                                                                                                                                                                      + z +
a(4) +                         'for(int j = 0; j < lowerCaseLttr.Length; j++)'                                                                                                                                                                                    + z +
a(4) +                         '{'                                                                                                                                                                                                                                + z +
a(5) +                               'if(Char.ToLower(wordEntered[i]) == lowerCaseLttr[j])'                                                                                                                                                                       + z +
a(5) +                               '{'                                                                                                                                                                                                                          + z +
a(6) +                                     'Console.WriteLine("This {0} is the number {1} letter in the alphabet.", wordEntered[i], (j + 1));'                                                                                                                    + z +
a(6) +                                     'break;'                                                                                                                                                                                                               + z +
a(5) +                               '}'                                                                                                                                                                                                                          + z +
a(4) +                         '}'                                                                                                                                                                                                                                + z +
a(3) +                   '}'                                                                                                                                                                                                                                      + z +
a(2) +             '}'                                                                                                                                                                                                                                            + z +
a(1) +       '}'                                                                                                                                                                                                                                                  + z +
a(0) + '} '                                                                                                                                                                                                                                                       + z
);
exerciseThis[7][16] = new ExerciseInfo("7", "16",
"Write a program, which uses a binary search in a sorted array of integer numbers to find a certain element.",
a(0) + 'using System;'                                                                                                                                                                             + z +
a(0)                                                                                                                                                                                               + z +
a(0) + 'namespace Binary_Seach_to_Find'                                                                                                                                                            + z +
a(0) + '{'                                                                                                                                                                                         + z +
a(1) +       'class Program'                                                                                                                                                                       + z +
a(1) +       '{'                                                                                                                                                                                   + z +
a(2) +             'static void Main()'                                                                                                                                                            + z +
a(2) +             '{'                                                                                                                                                                             + z +
a(3) +                   'string enterSize;'                                                                                                                                                       + z +
a(3) +                   'int arraySize;'                                                                                                                                                          + z +
a(0)                                                                                                                                                                                               + z +
a(3) +                   'do'                                                                                                                                                                      + z +
a(3) +                   '{'                                                                                                                                                                       + z +
a(4) +                         'Console.Write("Enter the size of the array: ");'                                                                                                                   + z +
a(4) +                         'enterSize = Console.ReadLine();'                                                                                                                                   + z +
a(4) +                         'Console.WriteLine();'                                                                                                                                              + z +
a(3) +                   '} while (!(int.TryParse(enterSize, out arraySize) && arraySize > 1));'                                                                                                   + z +
a(0)                                                                                                                                                                                               + z +
a(3) +                   'int[] arr = new int[arraySize];'                                                                                                                                         + z +
a(3) +                   'Random rnd = new Random();'                                                                                                                                              + z +
a(0)                                                                                                                                                                                               + z +
a(3) +                   'for (int i = 0; i < arraySize; i++) arr[i] = rnd.Next(100);'                                                                                                             + z +
a(0)                                                                                                                                                                                               + z +
a(3) +                   'Console.Write("Array: {");'                                                                                                                                              + z +
a(3) +                   'foreach (int x in arr) Console.Write(" {0, 3}", x);'                                                                                                                     + z +
a(3) +                   'Console.WriteLine(" }");'                                                                                                                                                + z +
a(0)                                                                                                                                                                                               + z +
a(3) +                   'for(int i = 0; i < arraySize; i++)'                                                                                                                                      + z +
a(3) +                   '{'                                                                                                                                                                       + z +
a(4) +                         'for(int j= i + 1; j < arraySize; j++)'                                                                                                                             + z +
a(4) +                         '{'                                                                                                                                                                 + z +
a(5) +                               'if(arr[i] > arr[j])'                                                                                                                                         + z +
a(5) +                               '{'                                                                                                                                                           + z +
a(6) +                                     'int jHeld = j, entryHeld = arr[j];'                                                                                                                    + z +
a(0)                                                                                                                                                                                               + z +
a(6) +                                     'while(jHeld > i)'                                                                                                                                      + z +
a(6) +                                     '{'                                                                                                                                                     + z +
a(7) +                                           'arr[jHeld] = arr[jHeld - 1];'                                                                                                                    + z +
a(7) +                                           'jHeld--;'                                                                                                                                        + z +
a(6) +                                     '}'                                                                                                                                                     + z +
a(0)                                                                                                                                                                                               + z +
a(6) +                                     'arr[i] = entryHeld;'                                                                                                                                   + z +
a(5) +                               '}'                                                                                                                                                           + z +
a(4) +                         '}'                                                                                                                                                                 + z +
a(3) +                   '}'                                                                                                                                                                       + z +
a(0)                                                                                                                                                                                               + z +
a(3) +                   'Console.Write("Sorted Array: {");'                                                                                                                                       + z +
a(3) +                   'foreach (int x in arr) Console.Write(" {0, 3}", x);'                                                                                                                     + z +
a(3) +                   'Console.WriteLine(" }");'                                                                                                                                                + z +
a(0)                                                                                                                                                                                               + z +
a(3) +                   'string mNum;'                                                                                                                                                            + z +
a(3) +                   'int m;'                                                                                                                                                                  + z +
a(0)                                                                                                                                                                                               + z +
a(3) +                   'do'                                                                                                                                                                      + z +
a(3) +                   '{'                                                                                                                                                                       + z +
a(4) +                         'Console.Write("Enter the number to find in the array: ");'                                                                                                         + z +
a(4) +                         'mNum = Console.ReadLine();'                                                                                                                                        + z +
a(3) +                   '} while (!(int.TryParse(mNum, out m)));'                                                                                                                                 + z +
a(0)                                                                                                                                                                                               + z +
a(3) +                   'int fGroup = 0, mdd = (arraySize % 2 == 0) ? (arraySize / 2) : ((arraySize + 1) / 2), sGroup = mdd; '                                                                    + z +
a(3) +                   'int? iFound = null;'                                                                                                                                                     + z +
a(0)                                                                                                                                                                                               + z +
a(3) +                   'while ((mdd > 0) && (fGroup < arraySize) && (sGroup < arraySize))'                                                                                                       + z +
a(3) +                   '{'                                                                                                                                                                       + z +
a(4) +                         'if (arr[sGroup] == m)'                                                                                                                                             + z +
a(4) +                         '{'                                                                                                                                                                 + z +
a(5) +                               'iFound = sGroup;'                                                                                                                                            + z +
a(5) +                               'break;'                                                                                                                                                      + z +
a(4) +                         '}'                                                                                                                                                                 + z +
a(4) +                         'else if (mdd == 1)'                                                                                                                                                + z +
a(4) +                         '{'                                                                                                                                                                 + z +
a(5) +                               'fGroup = (fGroup == 0) ? 0 : sGroup;'                                                                                                                        + z +
a(5) +                               'sGroup = fGroup + mdd;'                                                                                                                                      + z +
a(0)                                                                                                                                                                                               + z +
a(5) +                               'if ((fGroup < arraySize) && (arr[fGroup] == m)) iFound = fGroup;'                                                                                            + z +
a(5) +                               'else if((sGroup < arraySize) && (arr[sGroup] == m)) iFound = sGroup;'                                                                                        + z +
a(0)                                                                                                                                                                                               + z +
a(5) +                               'mdd--;'                                                                                                                                                      + z +
a(4) +                         '}'                                                                                                                                                                 + z +
a(4) +                         'else if (arr[sGroup] > m)'                                                                                                                                         + z +
a(4) +                         '{'                                                                                                                                                                 + z +
a(5) +                               'mdd = (mdd % 2 == 0) ? (mdd / 2) : ((mdd + 1) / 2);'                                                                                                         + z +
a(5) +                               'sGroup = fGroup + mdd;'                                                                                                                                      + z +
a(4) +                         '}'                                                                                                                                                                 + z +
a(4) +                         'else'                                                                                                                                                              + z +
a(4) +                         '{'                                                                                                                                                                 + z +
a(5) +                               'fGroup = sGroup;'                                                                                                                                            + z +
a(5) +                               'mdd = (mdd % 2 == 0) ? (mdd / 2) : ((mdd + 1) / 2);'                                                                                                         + z +
a(5) +                               'sGroup = fGroup + mdd;'                                                                                                                                      + z +
a(4) +                         '}'                                                                                                                                                                 + z +
a(3) +                   '}'                                                                                                                                                                       + z +
a(0)                                                                                                                                                                                               + z +
a(3) +                   'Console.Write("{0}", (iFound != null) ? m.ToString() + " is found at the index " + iFound.ToString() : m.ToString() + " is not in the array.");'                         + z +
a(3) +                   'Console.WriteLine();'                                                                                                                                                    + z +
a(2) +             '}'                                                                                                                                                                             + z +
a(1) +       '}'                                                                                                                                                                                   + z +
a(0) + '}'                                                                                                                                                                                         + z);
exerciseThis[7][17] = new ExerciseInfo("7", "17",
"Write a program, which sorts an array of integer elements using a \"merge sort\" algorithm.",
a(0) + 'using System;'                                                                                                                                                             + z +
a(0)                                                                                                                                                                               + z +
a(0) + 'namespace Merge_Sort_Algorithm'                                                                                                                                            + z +
a(0) + '{'                                                                                                                                                                         + z +
a(1) +       'class Program'                                                                                                                                                       + z +
a(1) +       '{'                                                                                                                                                                   + z +
a(2) +             'static void Main()'                                                                                                                                            + z +
a(2) +             '{'                                                                                                                                                             + z +
a(3) +                   'string nSize;'                                                                                                                                           + z +
a(3) +                   'int n;'                                                                                                                                                  + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'do'                                                                                                                                                      + z +
a(3) +                   '{'                                                                                                                                                       + z +
a(4) +                         'Console.Write("Size of the array: ");'                                                                                                             + z +
a(4) +                         'nSize = Console.ReadLine();'                                                                                                                       + z +
a(4) +                         'Console.WriteLine();'                                                                                                                              + z +
a(3) +                   '} while (!(int.TryParse(nSize, out n) && (n > 1)));'                                                                                                     + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'int[] Arr = new int[n], Arr1 = new int[n], Arr2 = new int[n];'                                                                                           + z +
a(3) +                   'Random rnd = new Random();'                                                                                                                              + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'while(n > 0)'                                                                                                                                            + z +
a(3) +                   '{'                                                                                                                                                       + z +
a(4) +                         'Arr2[Arr2.Length - n] = Arr1[Arr1.Length - n] = Arr[Arr.Length - n] = rnd.Next(100);'                                                              + z +
a(4) +                         'n--;'                                                                                                                                              + z +
a(3) +                   '}'                                                                                                                                                       + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'Console.Write("Array: ");'                                                                                                                               + z +
a(3) +                   'foreach (int x in Arr) Console.Write("{0, 3}", x.ToString());'                                                                                           + z +
a(3) +                   'Console.WriteLine("\\r\\n");'                                                                                                                            + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'int grp = 1, mergeStps = 0;'                                                                                                                             + z +
a(3) +                   'double m = 1;'                                                                                                                                           + z +
a(3) +                   'bool iReset = false, lastGrp = false, sorted = false;'                                                                                                   + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'for(int i = 0; i < Arr.Length; i = i + (int)Math.Pow(2 , m))'                                                                                            + z +
a(3) +                   '//Here, add by powers of two. Once the for-loop reaches the end, i = 0 and next add by the following multiple of two.'                                   + z +
a(3) +                   '{'                                                                                                                                                       + z +
a(4) +                         'if (iReset)'                                                                                                                                       + z +
a(4) +                         '{'                                                                                                                                                 + z +
a(5) +                               'i = 0;'                                                                                                                                      + z +
a(5) +                               'iReset = false;'                                                                                                                             + z +
a(4) +                         '}'                                                                                                                                                 + z +
a(0)                                                                                                                                                                               + z +
a(4) +                         'if (i == 0) grp = 1;'                                                                                                                              + z +
a(4) +                         'Console.Write("Group {0}: ", grp.ToString());'                                                                                                     + z +
a(0)                                                                                                                                                                               + z +
a(4) +                         'if(i <= Arr.Length - (int)Math.Pow(2, m))'                                                                                                         + z +
a(4) +                         '{'                                                                                                                                                 + z +
a(5) +                               'for (int j = i; j < i + (int)Math.Pow(2, m); j++) Console.Write("{0, 3}", Arr[j].ToString());'                                               + z +
a(5) +                               'if (i == Arr.Length - (int)Math.Pow(2, m)) lastGrp = true;'                                                                                  + z +
a(4) +                         '}'                                                                                                                                                 + z +
a(4) +                         'else'                                                                                                                                              + z +
a(4) +                         '{'                                                                                                                                                 + z +
a(5) +                               'for(int h = i; h < Arr.Length; h++) Console.Write("{0, 3}", Arr[h].ToString());'                                                             + z +
a(5) +                               'lastGrp = true;'                                                                                                                             + z +
a(4) +                         '}'                                                                                                                                                 + z +
a(0)                                                                                                                                                                               + z +
a(4) +                         'for(int j = i; j < ((lastGrp) ? Arr.Length : (i + (int)Math.Pow(2, m))); j++)'                                                                     + z +
a(4) +                         '{'                                                                                                                                                 + z +
a(5) +                               'for (int h = j + 1; h < ((lastGrp) ? Arr.Length : (i + (int)Math.Pow(2, m))); h++)'                                                          + z +
a(5) +                               '{'                                                                                                                                           + z +
a(6) +                                     'if (Arr[j] > Arr[h])'                                                                                                                  + z +
a(6) +                                     '{'                                                                                                                                     + z +
a(7) +                                           'int min = Arr[h], minIdx = h;'                                                                                                   + z +
a(0)                                                                                                                                                                               + z +
a(7) +                                           'while (minIdx > j)'                                                                                                              + z +
a(7) +                                           '{'                                                                                                                               + z +
a(8) +                                                 'Arr[minIdx] = Arr[minIdx - 1];'                                                                                            + z +
a(8) +                                                 'minIdx--;'                                                                                                                 + z +
a(7) +                                           '}'                                                                                                                               + z +
a(0)                                                                                                                                                                               + z +
a(7) +                                           'Arr[j] = min;'                                                                                                                   + z +
a(0)                                                                                                                                                                               + z +
a(7) +                                           'if (!sorted) sorted = true;'                                                                                                     + z +
a(7) +                                           'mergeStps++;'                                                                                                                    + z +
a(6) +                                     '}'                                                                                                                                     + z +
a(5) +                               '}'                                                                                                                                           + z +
a(4) +                         '}'                                                                                                                                                 + z +
a(0)                                                                                                                                                                               + z +
a(4) +                         'if (sorted)'                                                                                                                                       + z +
a(4) +                         '{'                                                                                                                                                 + z +
a(5) +                               'Console.Write("\\t\\tSorted: ");'                                                                                                            + z +
a(5) +                               'for(int k = i; k < ((lastGrp) ? Arr.Length : (i + (int)Math.Pow(2, m))); k++) Console.Write("{0, 3}", Arr[k].ToString());'                   + z +
a(5) +                               'sorted = false;'                                                                                                                             + z +
a(4) +                         '}'                                                                                                                                                 + z +
a(4) +                         'else'                                                                                                                                              + z +
a(4) +                         '{'                                                                                                                                                 + z +
a(5) +                               'Console.Write("\\t\\tPass!");'                                                                                                               + z +
a(4) +                         '}'                                                                                                                                                 + z +
a(4) +                         'Console.WriteLine();'                                                                                                                              + z +
a(0)                                                                                                                                                                               + z +
a(4) +                         'grp++;'                                                                                                                                            + z +
a(0)                                                                                                                                                                               + z +
a(4) +                         '//Reset i to 0 and next mutiple of two. ALL limited by the array length.'                                                                          + z +
a(4) +                         'if(lastGrp)'                                                                                                                                       + z +
a(4) +                         '{'                                                                                                                                                 + z +
a(5) +                               'iReset = true;'                                                                                                                              + z +
a(5) +                               'lastGrp = false;'                                                                                                                            + z +
a(5) +                               'i = 0;'                                                                                                                                      + z +
a(5) +                               'm++;'                                                                                                                                        + z +
a(0)                                                                                                                                                                               + z +
a(5) +                               'Console.Write("\\r\\nArray: ");'                                                                                                             + z +
a(5) +                               'foreach (int x in Arr) Console.Write("{0, 3}", x.ToString());'                                                                               + z +
a(5) +                               'Console.WriteLine("\\r\\n");'                                                                                                                + z +
a(4) +                         '}'                                                                                                                                                 + z +
a(3) +                   '}'                                                                                                                                                       + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'for(int i = 0; i < Arr.Length; i++)'                                                                                                                     + z +
a(3) +                   '{'                                                                                                                                                       + z +
a(4) +                         'for(int j = i + 1; j < Arr.Length; j++)'                                                                                                           + z +
a(4) +                         '{'                                                                                                                                                 + z +
a(5) +                               'if(Arr[i] > Arr[j])'                                                                                                                         + z +
a(5) +                               '{'                                                                                                                                           + z +
a(6) +                                     'int min = Arr[j], minIdx = j;'                                                                                                         + z +
a(0)                                                                                                                                                                               + z +
a(6) +                                     'while(minIdx > i)'                                                                                                                     + z +
a(6) +                                     '{'                                                                                                                                     + z +
a(7) +                                           'Arr[minIdx] = Arr[minIdx - 1];'                                                                                                  + z +
a(7) +                                           'minIdx--;'                                                                                                                       + z +
a(6) +                                     '}'                                                                                                                                     + z +
a(0)                                                                                                                                                                               + z +
a(6) +                                     'Arr[i] = min;'                                                                                                                         + z +
a(6) +                                     'mergeStps++;'                                                                                                                          + z +
a(5) +                               '}'                                                                                                                                           + z +
a(4) +                         '}'                                                                                                                                                 + z +
a(3) +                   '}'                                                                                                                                                       + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'Console.Write("\\r\\n(Final-Merge/Push) Array: \\t");'                                                                                                   + z +
a(3) +                   'foreach (int x in Arr) Console.Write("{0, 3}", x.ToString());'                                                                                           + z +
a(3) +                   'Console.WriteLine("\\r\\nSteps: {0, 3}\\r\\n", mergeStps.ToString());'                                                                                   + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'int pushStps = 0;'                                                                                                                                       + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'for (int i = 0; i < Arr1.Length; i++)'                                                                                                                   + z +
a(3) +                   '{'                                                                                                                                                       + z +
a(4) +                         'for (int j = i + 1; j < Arr1.Length; j++)'                                                                                                         + z +
a(4) +                         '{'                                                                                                                                                 + z +
a(5) +                               'if (Arr1[i] > Arr1[j])'                                                                                                                      + z +
a(5) +                               '{'                                                                                                                                           + z +
a(6) +                                     'int min = Arr1[j], minIdx = j;'                                                                                                        + z +
a(0)                                                                                                                                                                               + z +
a(6) +                                     'while (minIdx > i)'                                                                                                                    + z +
a(6) +                                     '{'                                                                                                                                     + z +
a(7) +                                           'Arr1[minIdx] = Arr1[minIdx - 1];'                                                                                                + z +
a(7) +                                           'minIdx--;'                                                                                                                       + z +
a(6) +                                     '}'                                                                                                                                     + z +
a(0)                                                                                                                                                                               + z +
a(6) +                                     'Arr1[i] = min;'                                                                                                                        + z +
a(6) +                                     'pushStps++;'                                                                                                                           + z +
a(5) +                               '}'                                                                                                                                           + z +
a(4) +                         '}'                                                                                                                                                 + z +
a(3) +                   '}'                                                                                                                                                       + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'Console.Write("\\r\\n(Final-No Merge/Push) Array: \\t");'                                                                                                + z +
a(3) +                   'foreach (int x in Arr1) Console.Write("{0, 3}", x.ToString());'                                                                                          + z +
a(3) +                   'Console.WriteLine("\\r\\nSteps: {0, 3}\\r\\n", pushStps.ToString());'                                                                                    + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'int swapStps = 0;'                                                                                                                                       + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'for (int i = 0; i < Arr2.Length; i++)'                                                                                                                   + z +
a(3) +                   '{'                                                                                                                                                       + z +
a(4) +                         'for (int j = i + 1; j < Arr2.Length; j++)'                                                                                                         + z +
a(4) +                         '{'                                                                                                                                                 + z +
a(5) +                               'if (Arr2[i] > Arr2[j])'                                                                                                                      + z +
a(5) +                               '{'                                                                                                                                           + z +
a(6) +                                     'int hld = Arr2[j];'                                                                                                                    + z +
a(0)                                                                                                                                                                               + z +
a(6) +                                     'Arr2[j] = Arr2[i];'                                                                                                                    + z +
a(6) +                                     'Arr2[i] = hld;'                                                                                                                        + z +
a(0)                                                                                                                                                                               + z +
a(6) +                                     'j--;'                                                                                                                                  + z +
a(6) +                                     'swapStps++;'                                                                                                                           + z +
a(5) +                               '}'                                                                                                                                           + z +
a(4) +                         '}'                                                                                                                                                 + z +
a(3) +                   '}'                                                                                                                                                       + z +
a(0)                                                                                                                                                                               + z +
a(3) +                   'Console.Write("\\r\\n(Final-No Merge/Swap) Array: \\t");'                                                                                                + z +
a(3) +                   'foreach (int x in Arr2) Console.Write("{0, 3}", x.ToString());'                                                                                          + z +
a(3) +                   'Console.WriteLine("\\r\\nSteps: {0, 3}\\r\\n", swapStps.ToString());'                                                                                    + z +
a(2) +             '}'                                                                                                                                                             + z +
a(1) +       '}'                                                                                                                                                                   + z +
a(0) + '}'                                                                                                                                                                         + z
);
exerciseThis[7][18] = new ExerciseInfo("7", "18",
"Write a program, which sorts an array of integer elements using a \"quicksort\" algorithm.",
a(0) + 'using System;'                                                                                                                          + z +
a(0) + 'namespace Quick_Sort_Algorithm'                                                                                                         + z +
a(0) + '{'                                                                                                                                      + z +
a(1) +       'class Program'                                                                                                                    + z +
a(1) +       '{'                                                                                                                                + z +
a(2) +             'static void Main()'                                                                                                         + z +
a(2) +             '{'                                                                                                                          + z +
a(3) +                   'string numN;'                                                                                                         + z +
a(3) +                   'int n;'                                                                                                               + z +
a(0)                                                                                                                                            + z +
a(3) +                   'do'                                                                                                                   + z +
a(3) +                   '{'                                                                                                                    + z +
a(4) +                         'Console.Write("Enter the size of the array: ");'                                                                + z +
a(4) +                         'numN = Console.ReadLine();'                                                                                     + z +
a(3) +                   '} while (!(int.TryParse(numN, out n) && n > 1));'                                                                     + z +
a(0)                                                                                                                                            + z +
a(3) +                   'int[] array = new int[n];'                                                                                            + z +
a(3) +                   'Random rnd = new Random();'                                                                                           + z +
a(0)                                                                                                                                            + z +
a(3) +                   'for (int i = 0; i < n; i++) array[i] = rnd.Next(100);'                                                                + z +
a(0)                                                                                                                                            + z +
a(3) +                   'Console.Write("Array: [ ");'                                                                                          + z +
a(3) +                   'foreach (int x in array) Console.Write("{0, 3}", x.ToString());'                                                      + z +
a(3) +                   'Console.WriteLine(" ]");'                                                                                             + z +
a(0)                                                                                                                                            + z +
a(3) +                   'string optnSelected;'                                                                                                 + z +
a(3) +                   'int optnNum;'                                                                                                         + z +
a(0)                                                                                                                                            + z +
a(3) +                   'Console.WriteLine("Select an option to sort the array by the \\"quick sort algorithm\\": ");'                         + z +
a(3) +                   'do'                                                                                                                   + z +
a(3) +                   '{'                                                                                                                    + z +
a(4) +                         'Console.WriteLine("\\t 1: Sort around the first element.");'                                                    + z +
a(4) +                         'Console.WriteLine("\\t 2: Sort around the last element.");'                                                     + z +
a(4) +                         'Console.WriteLine("\\t 3: Sort around a specefic element.");'                                                   + z +
a(4) +                         'Console.WriteLine("\\t 4: Sort around a random element.");'                                                     + z +
a(4) +                         'Console.WriteLine();'                                                                                           + z +
a(4) +                         'Console.Write("Selection: ");'                                                                                  + z +
a(4) +                         'optnSelected = Console.ReadLine();'                                                                             + z +
a(3) +                   '} while (!(int.TryParse(optnSelected, out optnNum) && (optnNum > 0) && (optnNum < 5)));'                              + z +
a(0)                                                                                                                                            + z +
a(3) +                   'int iAround = 0;'                                                                                                     + z +
a(0)                                                                                                                                            + z +
a(3) +                   'switch(optnNum)'                                                                                                      + z +
a(3) +                   '{'                                                                                                                    + z +
a(4) +                         'case 2:'                                                                                                        + z +
a(4) +                         'iAround = (n - 1);'                                                                                             + z +
a(4) +                         'break;'                                                                                                         + z +
a(4) +                         'case 3:'                                                                                                        + z +
a(4) +                         'string index;'                                                                                                  + z +
a(4) +                         'do'                                                                                                             + z +
a(4) +                         '{'                                                                                                              + z +
a(5) +                               'Console.Write("Select the element to sort around it: ");'                                                 + z +
a(5) +                               'index = Console.ReadLine();'                                                                              + z +
a(4) +                         '} while (!(int.TryParse(index, out iAround) && (iAround > 0) && (iAround < n)));'                               + z +
a(4) +                         'break;'                                                                                                         + z +
a(4) +                         'case 4:'                                                                                                        + z +
a(4) +                         'iAround = rnd.Next(n);'                                                                                         + z +
a(4) +                         'break;'                                                                                                         + z +
a(3) +                   '}'                                                                                                                    + z +
a(0)                                                                                                                                            + z +
a(3) +                   'bool sorted;'                                                                                                         + z +
a(0)                                                                                                                                            + z +
a(3) +                   'do'                                                                                                                   + z +
a(3) +                   '{'                                                                                                                    + z +
a(4) +                         'int[] left = new int[n], right = new int[n];'                                                                   + z +
a(4) +                         'int iLeft = 0, iRight = 0, pivotElement = array[iAround];'                                                      + z +
a(0)                                                                                                                                            + z +
a(4) +                         'for (int i = 0; i < n; i++)'                                                                                    + z +
a(4) +                         '{'                                                                                                              + z +
a(5) +                               'if (i == iAround) continue;'                                                                              + z +
a(5) +                               'else if (array[i] < pivotElement)'                                                                        + z +
a(5) +                               '{'                                                                                                        + z +
a(6) +                                     'left[iLeft] = array[i];'                                                                            + z +
a(6) +                                     'iLeft++;'                                                                                           + z +
a(5) +                               '}'                                                                                                        + z +
a(5) +                               'else'                                                                                                     + z +
a(5) +                               '{'                                                                                                        + z +
a(6) +                                     'right[iRight] = array[i];'                                                                          + z +
a(6) +                                     'iRight++;'                                                                                          + z +
a(5) +                               '}'                                                                                                        + z +
a(4) +                         '}'                                                                                                              + z +
a(0)                                                                                                                                            + z +
a(4) +                         'Console.Write("Left Array: [ ");'                                                                               + z +
a(4) +                         'for (int i = 0; i < iLeft; i++) Console.Write("{0, 3}", left[i].ToString());'                                   + z +
a(4) +                         'Console.Write(" ]");'                                                                                           + z +
a(0)                                                                                                                                            + z +
a(4) +                         'Console.Write("\\t Right Array [ ");'                                                                           + z +
a(4) +                         'for (int i = 0; i < iRight; i++) Console.Write("{0, 3}", right[i].ToString());'                                 + z +
a(4) +                         'Console.WriteLine(" ]");'                                                                                       + z +
a(0)                                                                                                                                            + z +
a(4) +                         'for (int i = 0; i < n; i++)'                                                                                    + z +
a(4) +                         '{'                                                                                                              + z +
a(5) +                               'if (i < iLeft) array[i] = left[i];'                                                                       + z +
a(5) +                               'else if (i == iLeft) array[i] = pivotElement;'                                                            + z +
a(5) +                               'else array[(n - 1) + (iLeft + 1 - i)] = right[(n - 1) - i];'                                              + z +
a(4) +                         '}'                                                                                                              + z +
a(0)                                                                                                                                            + z +
a(4) +                         'Console.Write("Array [ ");'                                                                                     + z +
a(4) +                         'foreach (int x in array) Console.Write("{0, 3}", x.ToString());'                                                + z +
a(4) +                         'Console.WriteLine(" ]");'                                                                                       + z +
a(0)                                                                                                                                            + z +
a(4) +                         'sorted = true;'                                                                                                 + z +
a(0)                                                                                                                                            + z +
a(4) +                         'for (int i = 0; i < n; i++)'                                                                                    + z +
a(4) +                         '{'                                                                                                              + z +
a(5) +                               'for (int j = i + 1; j < n; j++)'                                                                          + z +
a(5) +                               '{'                                                                                                        + z +
a(6) +                                     'if (array[i] > array[j])'                                                                           + z +
a(6) +                                     '{'                                                                                                  + z +
a(7) +                                           'sorted = false;'                                                                              + z +
a(7) +                                           'iAround = j;'                                                                                 + z +
a(6) +                                     '}'                                                                                                  + z +
a(6) +                                     'if (!sorted) break;'                                                                                + z +
a(5) +                               '}'                                                                                                        + z +
a(5) +                               'if (!sorted) break;'                                                                                      + z +
a(4) +                         '}'                                                                                                              + z +
a(0)                                                                                                                                            + z +
a(4) +                         'Console.WriteLine("{0}", (sorted) ? "Sorted." : "Not sorted.");'                                                + z +
a(3) +                   '} while (!sorted);'                                                                                                   + z +
a(2) +             '}'                                                                                                                          + z +
a(1) +       '}'                                                                                                                                + z +
a(0) + '}'                                                                                                                                      + z
);
exerciseThis[8] = new Array();
exerciseThis[8][0] = null;
exerciseThis[8][1] = null;
exerciseThis[8][2] = null;
exerciseThis[8][3] = null;
exerciseThis[8][4] = new ExerciseInfo("8", "4",
"Write a program that converts a decimal number to binary one.",
a(0) + 'using System;'                                                                            + z +
a(0)                                                                                              + z +
a(0) + 'namespace Decimal_to_Binary'                                                              + z +
a(0) + '{'                                                                                        + z +
a(1) +       'class Program'                                                                      + z +
a(1) +       '{'                                                                                  + z +
a(2) +             'static void Main()'                                                           + z +
a(2) +             '{'                                                                            + z +
a(3) +                   'string numN;'                                                           + z +
a(3) +                   'int n;'                                                                 + z +
a(0)                                                                                              + z +
a(3) +                   'do'                                                                     + z +
a(3) +                   '{'                                                                      + z +
a(4) +                         'Console.Write("Enter number in decimal representation: ");'       + z +
a(4) +                         'numN = Console.ReadLine();'                                       + z +
a(0)                                                                                              + z +
a(3) +                   '} while (!(int.TryParse(numN, out n)));'                                + z +
a(0)                                                                                              + z +
a(3) +                   'if (n != 0)'                                                            + z +
a(3) +                   '{'                                                                      + z +
a(4) +                         'int q = n, power2 = 0;'                                           + z +
a(4) +                         'while ((int)Math.Pow(2, power2) <= Math.Abs(n))'                  + z +
a(4) +                         '{'                                                                + z +
a(5) +                               'power2++;'                                                  + z +
a(4) +                         '}'                                                                + z +
a(4) +                         'int[] r = new int[power2];'                                       + z +
a(4) +                         'int indexR = r.Length - 1;'                                       + z +
a(0)                                                                                              + z +
a(4) +                         'while (q > 0)'                                                    + z +
a(4) +                         '{'                                                                + z +
a(5) +                               'r[indexR] = q % 2;'                                         + z +
a(5) +                               'indexR--;'                                                  + z +
a(5) +                               'q /= 2;'                                                    + z +
a(4) +                         '}'                                                                + z +
a(4) +                         'foreach (int x in r) Console.Write("{0}", x.ToString());'         + z +
a(4) +                         'Console.WriteLine();'                                             + z +
a(3) +                   '}'                                                                      + z +
a(3) +                   'else Console.WriteLine("0");'                                           + z +
a(2) +             '}'                                                                            + z +
a(1) +       '}'                                                                                  + z +
a(0) + '}'                                                                                        + z
);
exerciseThis[8][5] = new ExerciseInfo("8", "5",
"Write a program that converts a binary number to decimal one.",
a(0) + 'using System;'                                                                                                                                        + z +
a(0)                                                                                                                                                          + z +
a(0) + 'namespace Binary_to_Decimal'                                                                                                                          + z +
a(0) + '{'                                                                                                                                                    + z +
a(1) +       'class Program'                                                                                                                                  + z +
a(1) +       '{'                                                                                                                                              + z +
a(2) +             'static void Main()'                                                                                                                       + z +
a(2) +             '{'                                                                                                                                        + z +
a(3) +                   'string nBin;'                                                                                                                       + z +
a(3) +                   'bool binary;'                                                                                                                       + z +
a(0)                                                                                                                                                          + z +
a(3) +                   'do'                                                                                                                                 + z +
a(3) +                   '{'                                                                                                                                  + z +
a(4) +                         'binary = true;'                                                                                                               + z +
a(4) +                         'Console.Write("Enter the number in binary representation: ");'                                                                + z +
a(4) +                         'nBin = Console.ReadLine();'                                                                                                   + z +
a(4) +                         'foreach (char c in nBin) if (c != \'1\' && c != \'0\') binary = false;'                                                       + z +
a(3) +                   '} while (!binary);'                                                                                                                 + z +
a(0)                                                                                                                                                          + z +
a(3) +                   'int nDec = 0;'                                                                                                                      + z +
a(3) +                   'for(int i = 0; i < nBin.Length; i++) nDec += (int)Char.GetNumericValue(nBin[i]) * (int)Math.Pow(2, (nBin.Length - (1 + i)));'       + z +
a(3) +                   'Console.WriteLine("{0}", nDec.ToString());'                                                                                         + z +
a(2) +             '}'                                                                                                                                        + z +
a(1) +       '}'                                                                                                                                              + z +
a(0) + '}'                                                                                                                                                    + z
);
exerciseThis[8][6] = new ExerciseInfo("8", "6",
"Write a program that converts a decimal number to hexadecimal one.",
a(0) + 'using System;'                                                                                        + z +
a(0)                                                                                                          + z +
a(0) + 'namespace Decimal_to_Hexadecimal'                                                                     + z +
a(0) + '{'                                                                                                    + z +
a(1) +       'class Program'                                                                                  + z +
a(1) +       '{'                                                                                              + z +
a(2) +             'static void Main()'                                                                       + z +
a(2) +             '{'                                                                                        + z +
a(3) +                   'string nDec;'                                                                       + z +
a(3) +                   'int n;'                                                                             + z +
a(0)                                                                                                          + z +
a(3) +                   'do'                                                                                 + z +
a(3) +                   '{'                                                                                  + z +
a(4) +                         'Console.Write("Enter the value for n: ");'                                    + z +
a(4) +                         'nDec = Console.ReadLine();'                                                   + z +
a(3) +                   '} while (!(int.TryParse(nDec, out n)));'                                            + z +
a(0)                                                                                                          + z +
a(3) +                   'int q = n, powerOf16 = 0;'                                                          + z +
a(3) +                   'while ((int)Math.Pow(16, powerOf16) <= Math.Abs(n)) powerOf16++;'                   + z +
a(3) +                   'int[] r = new int[powerOf16];'                                                      + z +
a(0)                                                                                                          + z +
a(3) +                   'for(int i = 0; i < powerOf16; i++)'                                                 + z +
a(3) +                   '{'                                                                                  + z +
a(4) +                         'r[powerOf16 - (1 + i)] = q % 16;'                                             + z +
a(4) +                         'q /= 16;'                                                                     + z +
a(3) +                   '}'                                                                                  + z +
a(0)                                                                                                          + z +
a(3) +                   'foreach(int x in r)'                                                                + z +
a(3) +                   '{'                                                                                  + z +
a(4) +                         'if (x < 10) Console.Write(x.ToString());'                                     + z +
a(4) +                         'else'                                                                         + z +
a(4) +                         '{'                                                                            + z +
a(5) +                               'switch(x)'                                                              + z +
a(5) +                               '{'                                                                      + z +
a(6) +                                     'case 10:'                                                         + z +
a(6) +                                     'Console.Write("A");'                                              + z +
a(6) +                                     'break;'                                                           + z +
a(6) +                                     'case 11:'                                                         + z +
a(6) +                                     'Console.Write("B");'                                              + z +
a(6) +                                     'break;'                                                           + z +
a(6) +                                     'case 12:'                                                         + z +
a(6) +                                     'Console.Write("C");'                                              + z +
a(6) +                                     'break;'                                                           + z +
a(6) +                                     'case 13:'                                                         + z +
a(6) +                                     'Console.Write("D");'                                              + z +
a(6) +                                     'break;'                                                           + z +
a(6) +                                     'case 14:'                                                         + z +
a(6) +                                     'Console.Write("E");'                                              + z +
a(6) +                                     'break;'                                                           + z +
a(6) +                                     'case 15:'                                                         + z +
a(6) +                                     'Console.Write("F");'                                              + z +
a(6) +                                     'break;'                                                           + z +
a(5) +                               '}'                                                                      + z +
a(4) +                         '}'                                                                            + z +
a(3) +                   '}'                                                                                  + z +
a(2) +             '}'                                                                                        + z +
a(1) +       '}'                                                                                              + z +
a(0) + '}'                                                                                                    + z
);
exerciseThis[8][7] = new ExerciseInfo("8", "7",
"Write a program that converts a hexadecimal number to decimal one.",
a(0) + 'using System;'                                                                                                                  + z +
a(0)                                                                                                                                    + z +
a(0) + 'namespace Hexadecimal_to_Decimal'                                                                                               + z +
a(0) + '{'                                                                                                                              + z +
a(1) +       'class Program'                                                                                                            + z +
a(1) +       '{'                                                                                                                        + z +
a(2) +             'static void Main()'                                                                                                 + z +
a(2) +             '{'                                                                                                                  + z +
a(3) +                   'string nHexa;'                                                                                                + z +
a(3) +                   'bool isHexa = true;'                                                                                          + z +
a(3) +                   'int nDec;'                                                                                                    + z +
a(3) +                   'do'                                                                                                           + z +
a(3) +                   '{'                                                                                                            + z +
a(4) +                         'isHexa = true;'                                                                                         + z +
a(4) +                         'nDec = 0;'                                                                                              + z +
a(4) +                         'Console.Write("Enter the number in hexadecimal representation: ");'                                     + z +
a(4) +                         'nHexa = Console.ReadLine();'                                                                            + z +
a(4) +                         'int pow16 = nHexa.Length - 1;'                                                                          + z +
a(4) +                         'foreach (char c in nHexa)'                                                                              + z +
a(4) +                         '{'                                                                                                      + z +
a(5) +                               'if (((Char.GetNumericValue(c) < 0) || (Char.GetNumericValue(c) > 9)) &&'                          + z +
a(5) +                               'Char.ToUpper(c) != \'A\' && Char.ToUpper(c) != \'B\' && Char.ToUpper(c) != \'C\' && '             + z +
a(5) +                               'Char.ToUpper(c) != \'D\' && Char.ToUpper(c) != \'E\' && Char.ToUpper(c) != \'F\')'                + z +
a(5) +                               '{'                                                                                                + z +
a(6) +                                     'isHexa = false;'                                                                            + z +
a(6) +                                     'break;'                                                                                     + z +
a(5) +                               '}'                                                                                                + z +
a(0)                                                                                                                                    + z +
a(5) +                               'if(Char.IsDigit(c)) nDec += (int)(Char.GetNumericValue(c) * Math.Pow(16, pow16));'                + z +
a(5) +                               'else'                                                                                             + z +
a(5) +                               '{'                                                                                                + z +
a(6) +                                     'switch (Char.ToUpper(c))'                                                                   + z +
a(6) +                                     '{'                                                                                          + z +
a(7) +                                           'case \'A\':'                                                                          + z +
a(7) +                                           'nDec += (int)(10 * Math.Pow(16, pow16));'                                             + z +
a(7) +                                           'break;'                                                                               + z +
a(7) +                                           'case \'B\':'                                                                          + z +
a(7) +                                           'nDec += (int)(11 * Math.Pow(16, pow16));'                                             + z +
a(7) +                                           'break;'                                                                               + z +
a(7) +                                           'case \'C\':'                                                                          + z +
a(7) +                                           'nDec += (int)(12 * Math.Pow(16, pow16));'                                             + z +
a(7) +                                           'break;'                                                                               + z +
a(7) +                                           'case \'D\':'                                                                          + z +
a(7) +                                           'nDec += (int)(13 * Math.Pow(16, pow16));'                                             + z +
a(7) +                                           'break;'                                                                               + z +
a(7) +                                           'case \'E\':'                                                                          + z +
a(7) +                                           'nDec += (int)(14 * Math.Pow(16, pow16));'                                             + z +
a(7) +                                           'break;'                                                                               + z +
a(7) +                                           'case \'F\':'                                                                          + z +
a(7) +                                           'nDec += (int)(15 * Math.Pow(16, pow16));'                                             + z +
a(7) +                                           'break;'                                                                               + z +
a(6) +                                     '}'                                                                                          + z +
a(5) +                               '}'                                                                                                + z +
a(5) +                               'pow16--;'                                                                                         + z +
a(4) +                         '}'                                                                                                      + z +
a(3) +                   '} while (!isHexa);'                                                                                           + z +
a(0)                                                                                                                                    + z +
a(3) +                   'Console.WriteLine("{0}", nDec.ToString());'                                                                   + z +
a(2) +             '}'                                                                                                                  + z +
a(1) +       '}'                                                                                                                        + z +
a(0) + '}'                                                                                                                              + z
);
exerciseThis[8][8] = new ExerciseInfo("8", "8",
"Write a program that converts a hexadecimal number to binary one.",
a(0) + 'using System;'                                                                                                                 + z +
a(0)                                                                                                                                   + z +
a(0)                                                                                                                                   + z +
a(0) + 'namespace Hexadecimal_to_Binary'                                                                                               + z +
a(0) + '{'                                                                                                                             + z +
a(1) +       'class Program'                                                                                                           + z +
a(1) +       '{'                                                                                                                       + z +
a(2) +             'static void Main()'                                                                                                + z +
a(2) +             '{'                                                                                                                 + z +
a(3) +                   'string nHexa;'                                                                                               + z +
a(3) +                   'bool corctIn = true;'                                                                                        + z +
a(3) +                   'do'                                                                                                          + z +
a(3) +                   '{'                                                                                                           + z +
a(4) +                         'corctIn = true;'                                                                                       + z +
a(4) +                         'Console.Write("Enter a number using hexadecimal representation: ");'                                   + z +
a(4) +                         'nHexa = Console.ReadLine();'                                                                           + z +
a(0)                                                                                                                                   + z +
a(4) +                         'foreach (char c in nHexa)'                                                                             + z +
a(4) +                         '{'                                                                                                     + z +
a(5) +                               'if ((Char.GetNumericValue(c) < 0 || Char.GetNumericValue(c) > 9) &&'                             + z +
a(5) +                               'Char.ToUpper(c) != \'A\' && Char.ToUpper(c) != \'B\' && Char.ToUpper(c) != \'C\' &&'             + z +
a(5) +                               'Char.ToUpper(c) != \'D\' && Char.ToUpper(c) != \'E\' && Char.ToUpper(c) != \'F\')'               + z +
a(5) +                               '{'                                                                                               + z +
a(6) +                                     'corctIn = false;'                                                                          + z +
a(6) +                                     'break;'                                                                                    + z +
a(5) +                               '}'                                                                                               + z +
a(4) +                         '}'                                                                                                     + z +
a(0)                                                                                                                                   + z +
a(4) +                         'if(corctIn)'                                                                                           + z +
a(4) +                         '{'                                                                                                     + z +
a(5) +                               'foreach (char c in nHexa)'                                                                       + z +
a(5) +                               '{'                                                                                               + z +
a(6) +                                     'switch (Char.ToUpper(c))'                                                                  + z +
a(6) +                                     '{'                                                                                         + z +
a(7) +                                           'case \'0\':'                                                                         + z +
a(7) +                                           'Console.Write("0000");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'1\':'                                                                         + z +
a(7) +                                           'Console.Write("0001");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'2\':'                                                                         + z +
a(7) +                                           'Console.Write("0010");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'3\':'                                                                         + z +
a(7) +                                           'Console.Write("0011");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'4\':'                                                                         + z +
a(7) +                                           'Console.Write("0100");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'5\':'                                                                         + z +
a(7) +                                           'Console.Write("0101");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'6\':'                                                                         + z +
a(7) +                                           'Console.Write("0110");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'7\':'                                                                         + z +
a(7) +                                           'Console.Write("0111");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'8\':'                                                                         + z +
a(7) +                                           'Console.Write("1000");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'9\':'                                                                         + z +
a(7) +                                           'Console.Write("1001");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'A\':'                                                                         + z +
a(7) +                                           'Console.Write("1010");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'B\':'                                                                         + z +
a(7) +                                           'Console.Write("1011");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'C\':'                                                                         + z +
a(7) +                                           'Console.Write("1100");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'D\':'                                                                         + z +
a(7) +                                           'Console.Write("1101");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'E\':'                                                                         + z +
a(7) +                                           'Console.Write("1110");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(7) +                                           'case \'F\':'                                                                         + z +
a(7) +                                           'Console.Write("1111");'                                                              + z +
a(7) +                                           'break;'                                                                              + z +
a(6) +                                     '}'                                                                                         + z +
a(6) +                                     'Console.Write(" ");'                                                                       + z +
a(5) +                               '}'                                                                                               + z +
a(4) +                         '}'                                                                                                     + z +
a(3) +                   '} while (!corctIn);'                                                                                         + z +
a(3) +                   'Console.WriteLine();'                                                                                        + z +
a(2) +             '}'                                                                                                                 + z +
a(1) +       '}'                                                                                                                       + z +
a(0) + '}'                                                                                                                             + z
);
exerciseThis[8][9] = new ExerciseInfo("8", "9",
"Write a program that converts a binary number to hexadecimal one.",
a(0) + 'using System;'                                                                                             + z +
a(0)                                                                                                               + z +
a(0) + 'namespace Binary_to_Hexadecimal'                                                                           + z +
a(0) + '{'                                                                                                         + z +
a(1) +       'class Program'                                                                                       + z +
a(1) +       '{'                                                                                                   + z +
a(2) +             'static void Main()'                                                                            + z +
a(2) +             '{'                                                                                             + z +
a(3) +                   'string nBin;'                                                                            + z +
a(3) +                   'bool corctIn = true;'                                                                    + z +
a(0)                                                                                                               + z +
a(3) +                   'do'                                                                                      + z +
a(3) +                   '{'                                                                                       + z +
a(4) +                         'corctIn = true;'                                                                   + z +
a(4) +                         'Console.Write("Enter the number in binary representation: ");'                     + z +
a(4) +                         'nBin = Console.ReadLine();'                                                        + z +
a(4) +                         'foreach (char c in nBin)'                                                          + z +
a(4) +                         '{'                                                                                 + z +
a(5) +                               'if (c != \'1\' && c != \'0\')'                                               + z +
a(5) +                               '{'                                                                           + z +
a(6) +                                     'corctIn = false;'                                                      + z +
a(6) +                                     'break;'                                                                + z +
a(5) +                               '}'                                                                           + z +
a(4) +                         '}'                                                                                 + z +
a(3) +                   '} while (!corctIn);'                                                                     + z +
a(0)                                                                                                               + z +
a(0)                                                                                                               + z +
a(3) +                   'for (int i = 0; i < nBin.Length; i += 4)'                                                + z +
a(3) +                   '{'                                                                                       + z +
a(4) +                         'int valueDec = 0, pow2 = 3, j = i;'                                                + z +
a(4) +                         'while ((j < nBin.Length) && (j < i + 4))'                                          + z +
a(4) +                         '{'                                                                                 + z +
a(5) +                               'valueDec += (int)(Char.GetNumericValue(nBin[j]) * Math.Pow(2, pow2));'       + z +
a(5) +                               'pow2--;'                                                                     + z +
a(5) +                               'j++;'                                                                        + z +
a(4) +                         '}'                                                                                 + z +
a(0)                                                                                                               + z +
a(4) +                         'if (valueDec < 10) Console.Write("{0}", valueDec.ToString());'                     + z +
a(4) +                         'else'                                                                              + z +
a(4) +                         '{'                                                                                 + z +
a(5) +                               'switch(valueDec)'                                                            + z +
a(5) +                               '{'                                                                           + z +
a(6) +                                     'case 10:'                                                              + z +
a(6) +                                     'Console.Write("A");'                                                   + z +
a(6) +                                     'break;'                                                                + z +
a(6) +                                     'case 11:'                                                              + z +
a(6) +                                     'Console.Write("B");'                                                   + z +
a(6) +                                     'break;'                                                                + z +
a(6) +                                     'case 12:'                                                              + z +
a(6) +                                     'Console.Write("C");'                                                   + z +
a(6) +                                     'break;'                                                                + z +
a(6) +                                     'case 13:'                                                              + z +
a(6) +                                     'Console.Write("D");'                                                   + z +
a(6) +                                     'break;'                                                                + z +
a(6) +                                     'case 14:'                                                              + z +
a(6) +                                     'Console.Write("E");'                                                   + z +
a(6) +                                     'break;'                                                                + z +
a(6) +                                     'case 15:'                                                              + z +
a(6) +                                     'Console.Write("F");'                                                   + z +
a(6) +                                     'break;'                                                                + z +
a(5) +                               '}'                                                                           + z +
a(4) +                         '}'                                                                                 + z +
a(3) +                   '}'                                                                                       + z +
a(3) +                   'Console.WriteLine();'                                                                    + z +
a(0)                                                                                                               + z +
a(2) +             '}'                                                                                             + z +
a(1) +       '}'                                                                                                   + z +
a(0) + '}'                                                                                                         + z
);
exerciseThis[8][10] = null;
exerciseThis[8][11] = null;
exerciseThis[8][12] = null;
exerciseThis[8][13] = new ExerciseInfo("8", "13",
"Write a program that by given N, S, D (2 ≤ S, D ≤ 16) converts the number N from an S-based numeral system to a D based numeral system.",
a(0) + 'using System;'                                                                                                                                                 + z +
a(0) + 'namespace Any_Numeral_System'                                                                                                                                  + z +
a(0) + '{'                                                                                                                                                             + z +
a(1) +       'class Program'                                                                                                                                           + z +
a(1) +       '{'                                                                                                                                                       + z +
a(2) +             'static void Main()'                                                                                                                                + z +
a(2) +             '{'                                                                                                                                                 + z +
a(3) +                   'string N, S, D;'                                                                                                                             + z +
a(3) +                   'int n = 0, s, d;'                                                                                                                            + z +
a(3) +                   'bool corctN = true;'                                                                                                                         + z +
a(0)                                                                                                                                                                   + z +
a(3) +                   'do'                                                                                                                                          + z +
a(3) +                   '{'                                                                                                                                           + z +
a(4) +                         'Console.Write("Enter the intial numeral system base: ");'                                                                              + z +
a(4) +                         'S = Console.ReadLine();'                                                                                                               + z +
a(3) +                   '} while (!(int.TryParse(S, out s) && s >= 2 && s <= 16));'                                                                                   + z +
a(0)                                                                                                                                                                   + z +
a(3) +                   'do'                                                                                                                                          + z +
a(3) +                   '{'                                                                                                                                           + z +
a(4) +                         'corctN = true;'                                                                                                                        + z +
a(4) +                         'Console.Write("Enter the number in base {0} representation: ", S);'                                                                    + z +
a(4) +                         'N = Console.ReadLine();'                                                                                                               + z +
a(0)                                                                                                                                                                   + z +
a(4) +                         'if(N == "") corctN = false;'                                                                                                           + z +
a(4) +                         'else'                                                                                                                                  + z +
a(4) +                         '{'                                                                                                                                     + z +
a(5) +                               'foreach (char c in N)'                                                                                                           + z +
a(5) +                               '{'                                                                                                                               + z +
a(6) +                                     'if(Char.IsDigit(c) && Char.GetNumericValue(c) >= s) { corctN = false; break; }'                                            + z +
a(6) +                                     'else if (!Char.IsDigit(c))'                                                                                                + z +
a(6) +                                     '{'                                                                                                                         + z +
a(7) +                                           'if(s == 10) { corctN = false; break; }'                                                                              + z +
a(7) +                                           'else if(s == 11 && Char.ToUpper(c) != \'A\') { corctN = false; break; }'                                             + z +
a(7) +                                           'else if(s == 12 && Char.ToUpper(c) != \'A\' '                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'B\') { corctN = false; break; }'                                                             + z +
a(7) +                                           'else if(s == 13 && Char.ToUpper(c) != \'A\' '                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'B\' '                                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'C\') { corctN = false; break; }'                                                             + z +
a(7) +                                           'else if(s == 14 && Char.ToUpper(c) != \'A\' '                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'B\' '                                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'C\' '                                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'D\') { corctN = false; break; }'                                                             + z +
a(7) +                                           'else if(s == 15 && Char.ToUpper(c) != \'A\' '                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'B\' '                                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'C\' '                                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'D\' '                                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'E\') { corctN = false; break; }'                                                             + z +
a(7) +                                           'else if(s == 16 && Char.ToUpper(c) != \'A\' '                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'B\' '                                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'C\' '                                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'D\' '                                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'E\' '                                                                                        + z +
a(7) +                                           '&& Char.ToUpper(c) != \'F\') { corctN = false; break; }'                                                             + z +
a(6) +                                     '}'                                                                                                                         + z +
a(5) +                               '}'                                                                                                                               + z +
a(4) +                         '}'                                                                                                                                     + z +
a(3) +                   '} while (!corctN);'                                                                                                                          + z +
a(0)                                                                                                                                                                   + z +
a(3) +                   'for (int i = 0; i < N.Length; i++)'                                                                                                          + z +
a(3) +                   '{'                                                                                                                                           + z +
a(4) +                         'if (Char.IsDigit(N[i])) n += (int)(Char.GetNumericValue(N[i]) * Math.Pow(s, (N.Length - (1 + i))));'                                   + z +
a(4) +                         'else'                                                                                                                                  + z +
a(4) +                         '{'                                                                                                                                     + z +
a(5) +                               'switch (Char.ToUpper(N[i]))'                                                                                                     + z +
a(5) +                               '{'                                                                                                                               + z +
a(6) +                                     'case \'A\':'                                                                                                               + z +
a(6) +                                     'n += 10 * (int)Math.Pow(s, (N.Length - (1 + i)));'                                                                         + z +
a(6) +                                     'break;'                                                                                                                    + z +
a(6) +                                     'case \'B\':'                                                                                                               + z +
a(6) +                                     'n += 11 * (int)Math.Pow(s, (N.Length - (1 + i)));'                                                                         + z +
a(6) +                                     'break;'                                                                                                                    + z +
a(6) +                                     'case \'C\':'                                                                                                               + z +
a(6) +                                     'n += 12 * (int)Math.Pow(s, (N.Length - (1 + i)));'                                                                         + z +
a(6) +                                     'break;'                                                                                                                    + z +
a(6) +                                     'case \'D\':'                                                                                                               + z +
a(6) +                                     'n += 13 * (int)Math.Pow(s, (N.Length - (1 + i)));'                                                                         + z +
a(6) +                                     'break;'                                                                                                                    + z +
a(6) +                                     'case \'E\':'                                                                                                               + z +
a(6) +                                     'n += 14 * (int)Math.Pow(s, (N.Length - (1 + i)));'                                                                         + z +
a(6) +                                     'break;'                                                                                                                    + z +
a(6) +                                     'case \'F\':'                                                                                                               + z +
a(6) +                                     'n += 15 * (int)Math.Pow(s, (N.Length - (1 + i)));'                                                                         + z +
a(6) +                                     'break;'                                                                                                                    + z +
a(5) +                               '}'                                                                                                                               + z +
a(4) +                         '}'                                                                                                                                     + z +
a(3) +                   '}'                                                                                                                                           + z +
a(3) +                   'Console.WriteLine("Decimal representation: {0}", n.ToString());'                                                                             + z +
a(0)                                                                                                                                                                   + z +
a(3) +                   'do'                                                                                                                                          + z +
a(3) +                   '{'                                                                                                                                           + z +
a(4) +                         'Console.Write("Enter the new numeral system base: ");'                                                                                 + z +
a(4) +                         'D = Console.ReadLine();'                                                                                                               + z +
a(3) +                   '} while (!(int.TryParse(D, out d) && d >= 2 && d <= 16));'                                                                                   + z +
a(0)                                                                                                                                                                   + z +
a(3) +                   'if (d != 10)'                                                                                                                                + z +
a(3) +                   '{'                                                                                                                                           + z +
a(4) +                         'int dPow = 0;'                                                                                                                         + z +
a(4) +                         'while (Math.Pow(d, dPow) <= n) dPow++;'                                                                                                + z +
a(4) +                         'while (dPow > 0)'                                                                                                                      + z +
a(4) +                         '{'                                                                                                                                     + z +
a(5) +                               'int m = (n < d) ? n : (n / (int)Math.Pow(d, dPow - 1)) % d;'                                                                     + z +
a(0)                                                                                                                                                                   + z +
a(5) +                               'if (d < 10) Console.Write("{0}", m.ToString());'                                                                                 + z +
a(5) +                               'else if (m < 10) Console.Write(m.ToString());'                                                                                   + z +
a(5) +                               'else'                                                                                                                            + z +
a(5) +                               '{'                                                                                                                               + z +
a(6) +                                     'switch (d)'                                                                                                                + z +
a(6) +                                     '{'                                                                                                                         + z +
a(7) +                                           'case 11:'                                                                                                            + z +
a(7) +                                           'Console.Write("A");'                                                                                                 + z +
a(7) +                                           'break;'                                                                                                              + z +
a(7) +                                           'case 12:'                                                                                                            + z +
a(7) +                                           'Console.Write((m == 10) ? "A" : "B");'                                                                               + z +
a(7) +                                           'break;'                                                                                                              + z +
a(7) +                                           'case 13:'                                                                                                            + z +
a(7) +                                           'Console.Write((m == 10) ? "A" : (m == 11) ? "B" : "C");'                                                             + z +
a(7) +                                           'break;'                                                                                                              + z +
a(7) +                                           'case 14:'                                                                                                            + z +
a(7) +                                           'Console.Write((m == 10) ? "A" : (m == 11) ? "B" : (m == 12) ? "C" : "D");'                                           + z +
a(7) +                                           'break;'                                                                                                              + z +
a(7) +                                           'case 15:'                                                                                                            + z +
a(7) +                                           'Console.Write((m == 10) ? "A" : (m == 11) ? "B" : (m == 12) ? "C" : (m == 13) ? "D" : "E");'                         + z +
a(7) +                                           'break;'                                                                                                              + z +
a(7) +                                           'case 16:'                                                                                                            + z +
a(7) +                                           'Console.Write((m == 10) ? "A" : (m == 11) ? "B" : (m == 12) ? "C" : (m == 13) ? "D" : (m == 14) ? "E" : "F");'       + z +
a(7) +                                           'break;'                                                                                                              + z +
a(6) +                                     '}'                                                                                                                         + z +
a(5) +                               '}'                                                                                                                               + z +
a(5) +                               'dPow--;'                                                                                                                         + z +
a(4) +                         '}'                                                                                                                                     + z +
a(3) +                   '}'                                                                                                                                           + z +
a(3) +                   'else Console.Write("Look up!");'                                                                                                             + z +
a(3) +                   'Console.WriteLine();'                                                                                                                        + z +
a(2) +             '}'                                                                                                                                                 + z +
a(1) +       '}'                                                                                                                                                       + z +
a(0) + '}'                                                                                                                                                             + z
);
exerciseThis[9] = new Array();
exerciseThis[9][0] = null;
exerciseThis[9][1] = new ExerciseInfo("9", "1",
"Write a code that by given name prints on the console \"Hello, <name>!\" (for example: \"Hello, Peter!\"). My version.",
a(0) + 'using System;'                                                                                  + z +
a(0)                                                                                                    + z +
a(0) + 'namespace Hello_Method_'                                                                        + z +
a(0) + '{'                                                                                              + z +
a(1) +       'class Program'                                                                            + z +
a(1) +       '{'                                                                                        + z +
a(2) +             'static void NiceToMeetYou(string name)'                                             + z +
a(2) +             '{'                                                                                  + z +
a(3) +                   'if (name != "") Console.WriteLine("PC - Nice to meet you {0}!", name);'       + z +
a(3) +                   'else Console.WriteLine("PC - Okay you.");'                                    + z +
a(2) +             '}'                                                                                  + z +
a(0)                                                                                                    + z +
a(2) +             'static void Main()'                                                                 + z +
a(2) +             '{'                                                                                  + z +
a(3) +                   'Console.WriteLine("Pc - Hello you! What\'s your name?");'                     + z +
a(3) +                   'Console.Write("You - ");'                                                     + z +
a(3) +                   'NiceToMeetYou(Console.ReadLine());'                                           + z +
a(2) +             '}'                                                                                  + z +
a(1) +       '}'                                                                                        + z +
a(0) + '}'                                                                                              + z
);
exerciseThis[9][2] = new ExerciseInfo("9", "2",
"Create a method GetMax() with two integer (int) parameters, that returns maximal of the two numbers. Write a program that reads three numbers from the console and prints the biggest of them. Use the GetMax() method you just created. Write a test program that validates that the methods works correctly.",
a(0) + 'using System;'                                                                                 + z +
a(0)                                                                                                   + z +
a(0) + 'namespace GetMax__'                                                                            + z +
a(0) + '{'                                                                                             + z +
a(1) +       'class Program'                                                                           + z +
a(1) +       '{'                                                                                       + z +
a(2) +             'static int GetMax(int a, int b)'                                                   + z +
a(2) +             '{'                                                                                 + z +
a(3) +                   'if (a > b) return a;'                                                        + z +
a(3) +                   'else return b;'                                                              + z +
a(2) +             '}'                                                                                 + z +
a(2) +             'static void Main()'                                                                + z +
a(2) +             '{'                                                                                 + z +
a(3) +                   'string value;'                                                               + z +
a(3) +                   'int[] numbers = new int[3];'                                                 + z +
a(3) +                   'int i = 0;'                                                                  + z +
a(0)                                                                                                   + z +
a(3) +                   'Console.WriteLine("Enter three values.");'                                   + z +
a(3) +                   'do'                                                                          + z +
a(3) +                   '{'                                                                           + z +
a(4) +                         'Console.Write("Enter value {0}:", (i + 1).ToString());'                + z +
a(4) +                         'value = Console.ReadLine();'                                           + z +
a(4) +                         'if ((int.TryParse(value, out numbers[i]))) i++;'                       + z +
a(4) +                         'else Console.WriteLine("Invalid value entered.");'                     + z +
a(3) +                   '} while (i < 3);'                                                            + z +
a(0)                                                                                                   + z +
a(3) +                   'Console.WriteLine("The maximum value is {0}.", '                             + z +
a(3) +                   'GetMax(GetMax(numbers[0], numbers[1]), numbers[2]).ToString());'             + z +
a(2) +             '}'                                                                                 + z +
a(1) +       '}'                                                                                       + z +
a(0) + '}'                                                                                             + z
);
exerciseThis[9][3] = new ExerciseInfo("9", "3",
"Write a method that returns the English name of the last digit of a given number. Example: for 512 prints \"two\"; for 1024 -> \"four\".",
a(0) + 'using System;'                                                                                   + z +
a(0)                                                                                                     + z +
a(0) + 'namespace Last_digit_s_English_Name'                                                             + z +
a(0) + '{'                                                                                               + z +
a(1) +       'class Program'                                                                             + z +
a(1) +       '{'                                                                                         + z +
a(2) +             'static string LastDigitsEngName(char lastDigit)'                                     + z +
a(2) +             '{'                                                                                   + z +
a(3) +                   'switch (lastDigit)'                                                            + z +
a(3) +                   '{'                                                                             + z +
a(4) +                         'case \'0\': return "zero";'                                              + z +
a(4) +                         'case \'1\': return "one";'                                               + z +
a(4) +                         'case \'2\': return "two";'                                               + z +
a(4) +                         'case \'3\': return "three";'                                             + z +
a(4) +                         'case \'4\': return "four";'                                              + z +
a(4) +                         'case \'5\': return "five";'                                              + z +
a(4) +                         'case \'6\': return "six";'                                               + z +
a(4) +                         'case \'7\': return "seven";'                                             + z +
a(4) +                         'case \'8\': return "eight";'                                             + z +
a(4) +                         'case \'9\': return "nine";'                                              + z +
a(4) +                         'default: return null;'                                                   + z +
a(3) +                   '}'                                                                             + z +
a(2) +             '}'                                                                                   + z +
a(2) +             'static void Main()'                                                                  + z +
a(2) +             '{'                                                                                   + z +
a(3) +                   'string number;'                                                                + z +
a(3) +                   'do'                                                                            + z +
a(3) +                   '{'                                                                             + z +
a(4) +                         'Console.Write("Enter a number: ");'                                      + z +
a(4) +                         'number = Console.ReadLine();'                                            + z +
a(3) +                   '} while (!(int.TryParse(number, out int n)));'                                 + z +
a(0)                                                                                                     + z +
a(3) +                   'Console.WriteLine("The English name of the last digit of {0} is {1}.", '       + z +
a(3) +                   'number, LastDigitsEngName(number[number.Length - 1]));'                        + z +
a(2) +             '}'                                                                                   + z +
a(1) +       '}'                                                                                         + z +
a(0) + '}'                                                                                               + z
);
exerciseThis[9][4] = new ExerciseInfo("9", "4",
"Write a method that finds how many times certain number can be found in a given array. Write a program to test that the method works correctly.",
a(0) + 'using System;'                                                                                                                        + z +
a(0)                                                                                                                                          + z +
a(0) + 'namespace How_Many_Times_N'                                                                                                           + z +
a(0) + '{'                                                                                                                                    + z +
a(1) +       'class Program'                                                                                                                  + z +
a(1) +       '{'                                                                                                                              + z +
a(2) +             'static string HowManyTimesN(int element, int[] set)'                                                                      + z +
a(2) +             '{'                                                                                                                        + z +
a(3) +                   'int countE = 0;'                                                                                                    + z +
a(3) +                   'foreach (int y in set) if (y == element) countE++;'                                                                 + z +
a(3) +                   'return countE.ToString();'                                                                                          + z +
a(2) +             '}'                                                                                                                        + z +
a(0)                                                                                                                                          + z +
a(2) +             'static void Main()'                                                                                                       + z +
a(2) +             '{'                                                                                                                        + z +
a(3) +                   'string sizeN;'                                                                                                      + z +
a(3) +                   'int n;'                                                                                                             + z +
a(0)                                                                                                                                          + z +
a(3) +                   'do'                                                                                                                 + z +
a(3) +                   '{'                                                                                                                  + z +
a(4) +                         'Console.Write("Enter array\'s size: ");'                                                                      + z +
a(4) +                         'sizeN = Console.ReadLine();'                                                                                  + z +
a(3) +                   '} while (!(int.TryParse(sizeN, out n) && n > 0));'                                                                  + z +
a(0)                                                                                                                                          + z +
a(3) +                   'int[] array = new int[n];'                                                                                          + z +
a(3) +                   'Random rnd = new Random();'                                                                                         + z +
a(0)                                                                                                                                          + z +
a(3) +                   'for (int i = 0; i < n; i++) array[i] = rnd.Next(100);'                                                              + z +
a(0)                                                                                                                                          + z +
a(3) +                   'Console.Write("[ ");'                                                                                               + z +
a(3) +                   'foreach (int x in array) Console.Write("{0} ", x.ToString());'                                                      + z +
a(3) +                   'Console.WriteLine("]");'                                                                                            + z +
a(0)                                                                                                                                          + z +
a(3) +                   'string whatElement;'                                                                                                + z +
a(3) +                   'int e;'                                                                                                             + z +
a(0)                                                                                                                                          + z +
a(3) +                   'do'                                                                                                                 + z +
a(3) +                   '{'                                                                                                                  + z +
a(4) +                         'Console.Write("Enter the element: ");'                                                                        + z +
a(4) +                         'whatElement = Console.ReadLine();'                                                                            + z +
a(3) +                   '} while (!(int.TryParse(whatElement, out e)));'                                                                     + z +
a(0)                                                                                                                                          + z +
a(3) +                   'Console.WriteLine("The element {0} is found {1} time in the array.", e.ToString(), HowManyTimesN(e, array));'       + z +
a(2) +             '}'                                                                                                                        + z +
a(1) +       '}'                                                                                                                              + z +
a(0) + '}'                                                                                                                                    + z
);
exerciseThis[9][5] = null;
exerciseThis[9][6] = null;
exerciseThis[9][7] = null;
exerciseThis[9][8] = new ExerciseInfo("9", "8",
"Write a method that calculates the sum of two very long positive integer numbers. The numbers are represented as array digits and the last digit (the ones) is stored in the array at index 0. Make the method work for all numbers with length up to 10,000 digits.",
a(0) + 'using System;'                                                                                            + z +
a(0)                                                                                                              + z +
a(0) + 'namespace Sum_of_two_very_long_int'                                                                       + z +
a(0) + '{'                                                                                                        + z +
a(1) +       'class Program'                                                                                      + z +
a(1) +       '{'                                                                                                  + z +
a(2) +             'static string EnterNumber()'                                                                  + z +
a(2) +             '{'                                                                                            + z +
a(3) +                   'string num;'                                                                            + z +
a(3) +                   'bool isNumber = true;'                                                                  + z +
a(0)                                                                                                              + z +
a(3) +                   'do'                                                                                     + z +
a(3) +                   '{'                                                                                      + z +
a(4) +                         'isNumber = true;'                                                                 + z +
a(4) +                         'Console.Write("Enter a number: ");'                                               + z +
a(4) +                         'num = Console.ReadLine();'                                                        + z +
a(4) +                         'foreach (char c in num)'                                                          + z +
a(4) +                         '{'                                                                                + z +
a(5) +                               'if (!Char.IsDigit(c))'                                                      + z +
a(5) +                               '{'                                                                          + z +
a(6) +                                     'isNumber = !isNumber;'                                                + z +
a(6) +                                     'Console.WriteLine("Invalid input!");'                                 + z +
a(6) +                                     'break; '                                                              + z +
a(5) +                               '}'                                                                          + z +
a(4) +                         '}'                                                                                + z +
a(3) +                   '} while (!isNumber);'                                                                   + z +
a(0)                                                                                                              + z +
a(3) +                   'return num;'                                                                            + z +
a(2) +             '}'                                                                                            + z +
a(0)                                                                                                              + z +
a(2) +             'static void FillTheArrayInverted(int[] X, string num)'                                        + z +
a(2) +             '{'                                                                                            + z +
a(3) +                   'for (int i = 0; i < X.Length; i++)'                                                     + z +
a(3) +                   '{'                                                                                      + z +
a(4) +                         'X[X.Length - (1 + i)] = (int)Char.GetNumericValue(num[i]);'                       + z +
a(3) +                   '}'                                                                                      + z +
a(2) +             '}'                                                                                            + z +
a(0)                                                                                                              + z +
a(2) +             'static string SumOfTwoLongInt(int[] a, int[] b)'                                              + z +
a(2) +             '{'                                                                                            + z +
a(3) +                   'string sum = "";'                                                                       + z +
a(3) +                   'int smallestNumLength = (a.Length < b.Length) ? a.Length : b.Length;'                   + z +
a(3) +                   'int aTen = 0;'                                                                          + z +
a(0)                                                                                                              + z +
a(3) +                   'for (int i = 0; i < smallestNumLength; i++)'                                            + z +
a(3) +                   '{'                                                                                      + z +
a(4) +                         'int c = a[i] + b[i] + aTen;'                                                      + z +
a(0)                                                                                                              + z +
a(4) +                         'if (c < 10)'                                                                      + z +
a(4) +                         '{'                                                                                + z +
a(5) +                               'aTen = 0;'                                                                  + z +
a(5) +                               'sum += c.ToString();'                                                       + z +
a(4) +                         '}'                                                                                + z +
a(4) +                         'else'                                                                             + z +
a(4) +                         '{'                                                                                + z +
a(5) +                               'aTen = 1;'                                                                  + z +
a(5) +                               'c = c - 10;'                                                                + z +
a(5) +                               'sum += c.ToString();'                                                       + z +
a(4) +                         '}'                                                                                + z +
a(3) +                   '}'                                                                                      + z +
a(0)                                                                                                              + z +
a(3) +                   'if (a.Length != b.Length)'                                                              + z +
a(3) +                   '{'                                                                                      + z +
a(4) +                         'int[] longestNum = (a.Length > b.Length) ? a : b;'                                + z +
a(0)                                                                                                              + z +
a(4) +                         'longestNum[smallestNumLength] += aTen;'                                           + z +
a(0)                                                                                                              + z +
a(4) +                         'for (int i = smallestNumLength; i < longestNum.Length; i++)'                      + z +
a(4) +                         '{'                                                                                + z +
a(5) +                               'sum += longestNum[i].ToString();'                                           + z +
a(4) +                         '}'                                                                                + z +
a(3) +                   '}'                                                                                      + z +
a(3) +                   'else'                                                                                   + z +
a(3) +                   '{'                                                                                      + z +
a(4) +                         'if (aTen == 1) sum += aTen.ToString();'                                           + z +
a(3) +                   '}'                                                                                      + z +
a(0)                                                                                                              + z +
a(3) +                   'return sum;'                                                                            + z +
a(2) +             '}'                                                                                            + z +
a(0)                                                                                                              + z +
a(2) +             'static void CorrectOrderSum(string S)'                                                        + z +
a(2) +             '{'                                                                                            + z +
a(3) +                   'for (int i = S.Length - 1; i >= 0; i--) Console.Write(S[i]);'                           + z +
a(2) +             '}'                                                                                            + z +
a(0)                                                                                                              + z +
a(2) +             'static void Main()'                                                                           + z +
a(2) +             '{'                                                                                            + z +
a(3) +                   'string numN, numM;'                                                                     + z +
a(3) +                   'numN = EnterNumber();'                                                                  + z +
a(3) +                   'numM = EnterNumber();'                                                                  + z +
a(3) +                   'Console.Write(numN + " + " + numM + " = ");'                                            + z +
a(0)                                                                                                              + z +
a(3) +                   'int[] numX = new int[numN.Length], numY = new int[numM.Length];'                        + z +
a(3) +                   'FillTheArrayInverted(numX, numN);'                                                      + z +
a(3) +                   'FillTheArrayInverted(numY, numM);'                                                      + z +
a(0)                                                                                                              + z +
a(3) +                   'CorrectOrderSum(SumOfTwoLongInt(numX, numY));'                                          + z +
a(3) +                   'Console.WriteLine();'                                                                   + z +
a(2) +             '}'                                                                                            + z +
a(1) +       '}'                                                                                                  + z +
a(0) + '}'                                                                                                        + z
);
exerciseThis[9][9] = null;
exerciseThis[9][10] = new ExerciseInfo("9", "10",
"Write a program that calculates and prints the n! for any n in the range [1…100].",
a(0) + 'using System;'                                                                                                                          + z +
a(0) + 'namespace Factorial_'                                                                                                                   + z +
a(0) + '{'                                                                                                                                      + z +
a(1) +       'class Program'                                                                                                                    + z +
a(1) +       '{'                                                                                                                                + z +
a(2) +             'static void ArrayOfDigitsInverted(int[] array, string S)'                                                                   + z +
a(2) +             '{'                                                                                                                          + z +
a(3) +                   'for (int i = 0; i < S.Length; i++) array[S.Length - (1 + i)] = (int)Char.GetNumericValue(S[i]);'                      + z +
a(2) +             '}'                                                                                                                          + z +
a(0)                                                                                                                                            + z +
a(2) +             'static void PrintArrayInverted(int[] arrayForPrint)'                                                                        + z +
a(2) +             '{'                                                                                                                          + z +
a(3) +                   'bool notValidZero = true;'                                                                                            + z +
a(3) +                   'for (int i = 0; i < arrayForPrint.Length; i++)'                                                                       + z +
a(3) +                   '{'                                                                                                                    + z +
a(4) +                         'if (arrayForPrint[arrayForPrint.Length - (1 + i)] == 0 && notValidZero)'                                        + z +
a(4) +                         '{'                                                                                                              + z +
a(5) +                               'if (i < (arrayForPrint.Length - 1)) continue;'                                                            + z +
a(5) +                               'else Console.Write("0");'                                                                                 + z +
a(4) +                         '}'                                                                                                              + z +
a(4) +                         'else'                                                                                                           + z +
a(4) +                         '{'                                                                                                              + z +
a(5) +                               'Console.Write(arrayForPrint[arrayForPrint.Length - (1 + i)].ToString());'                                 + z +
a(5) +                               'notValidZero = false;'                                                                                    + z +
a(4) +                         '}'                                                                                                              + z +
a(3) +                   '}'                                                                                                                    + z +
a(3) +                   'Console.WriteLine();'                                                                                                 + z +
a(2) +             '}'                                                                                                                          + z +
a(0)                                                                                                                                            + z +
a(2) +             'static void SumTheProducts(int firstDimension, int[,] theProducts, int[] theSum)'                                           + z +
a(2) +             '{'                                                                                                                          + z +
a(3) +                   'int d = 0;'                                                                                                           + z +
a(3) +                   'for (int i = 0; i < theProducts.GetLength(1); i++)'                                                                   + z +
a(3) +                   '{'                                                                                                                    + z +
a(4) +                         'int s = theProducts[firstDimension, i] + theSum[i] + d;'                                                        + z +
a(0)                                                                                                                                            + z +
a(4) +                         'if (s < 10)'                                                                                                    + z +
a(4) +                         '{'                                                                                                              + z +
a(5) +                               'theSum[i] = s;'                                                                                           + z +
a(5) +                               'd = 0;'                                                                                                   + z +
a(4) +                         '}'                                                                                                              + z +
a(4) +                         'else'                                                                                                           + z +
a(4) +                         '{'                                                                                                              + z +
a(5) +                               'theSum[i] = (s - 10);'                                                                                    + z +
a(5) +                               'd = 1;'                                                                                                   + z +
a(4) +                         '}'                                                                                                              + z +
a(3) +                   '}'                                                                                                                    + z +
a(2) +             '}'                                                                                                                          + z +
a(0)                                                                                                                                            + z +
a(2) +             'static void Main()'                                                                                                         + z +
a(2) +             '{'                                                                                                                          + z +
a(3) +                   'string numN;'                                                                                                         + z +
a(3) +                   'int n;'                                                                                                               + z +
a(0)                                                                                                                                            + z +
a(3) +                   'do'                                                                                                                   + z +
a(3) +                   '{'                                                                                                                    + z +
a(4) +                         'Console.Write("Enter a number from 1 to 100: ");'                                                               + z +
a(4) +                         'numN = Console.ReadLine();'                                                                                     + z +
a(3) +                   '} while (!(int.TryParse(numN, out n) && (n >= 1) && (n <= 100)));'                                                    + z +
a(0)                                                                                                                                            + z +
a(3) +                   'string A = n.ToString(), B = (n - 1).ToString();'                                                                     + z +
a(0)                                                                                                                                            + z +
a(3) +                   'while (n > 1)'                                                                                                        + z +
a(3) +                   '{'                                                                                                                    + z +
a(4) +                         'int[] numA = new int[A.Length], numB = new int[B.Length];'                                                      + z +
a(0)                                                                                                                                            + z +
a(4) +                         'ArrayOfDigitsInverted(numA, A);'                                                                                + z +
a(4) +                         'ArrayOfDigitsInverted(numB, B);'                                                                                + z +
a(0)                                                                                                                                            + z +
a(4) +                         'int[,] products = new int[numB.Length, (1 + numA.Length + numB.Length)];'                                       + z +
a(0)                                                                                                                                            + z +
a(4) +                         'for (int i = 0; i < numB.Length; i++)'                                                                          + z +
a(4) +                         '{'                                                                                                              + z +
a(5) +                               'for (int j = 0; j < (1 + numA.Length + numB.Length); j++)'                                                + z +
a(5) +                               '{'                                                                                                        + z +
a(6) +                                     'products[i, j] = 0;'                                                                                + z +
a(5) +                               '}'                                                                                                        + z +
a(4) +                         '}'                                                                                                              + z +
a(0)                                                                                                                                            + z +
a(4) +                         'for (int i = 0; i < numB.Length; i++)'                                                                          + z +
a(4) +                         '{'                                                                                                              + z +
a(5) +                               'int d = 0;'                                                                                               + z +
a(5) +                               'for (int j = 0; j < numA.Length; j++)'                                                                    + z +
a(5) +                               '{'                                                                                                        + z +
a(6) +                                     'int m = numB[i] * numA[j] + d;'                                                                     + z +
a(0)                                                                                                                                            + z +
a(6) +                                     'if (m < 10) products[i, (i + j)] = m;'                                                              + z +
a(6) +                                     'else products[i, (i + j)] = (m % 10);'                                                              + z +
a(6) +                                     'd = (int)(m / 10);'                                                                                 + z +
a(5) +                               '}'                                                                                                        + z +
a(5) +                               'if (d != 0) products[i, i + numA.Length] = d;'                                                            + z +
a(4) +                         '}'                                                                                                              + z +
a(0)                                                                                                                                            + z +
a(4) +                         'int[] productsAdded = new int[products.GetLength(1)];'                                                          + z +
a(0)                                                                                                                                            + z +
a(4) +                         'for (int i = 0; i < productsAdded.Length; i++) productsAdded[i] = 0;'                                           + z +
a(0)                                                                                                                                            + z +
a(4) +                         'for (int i = 0; i < products.GetLength(0); i++) SumTheProducts(i, products, productsAdded);'                    + z +
a(0)                                                                                                                                            + z +
a(4) +                         'A = "";'                                                                                                        + z +
a(4) +                         'for (int i = 0; i < productsAdded.Length; i++) A += productsAdded[productsAdded.Length - (1 + i)];'             + z +
a(4) +                         'n--;'                                                                                                           + z +
a(4) +                         'B = (n - 1).ToString();'                                                                                        + z +
a(0)                                                                                                                                            + z +
a(4) +                         'if (n == 2)'                                                                                                    + z +
a(4) +                         '{'                                                                                                              + z +
a(5) +                               'Console.Write(numN + "! = ");'                                                                            + z +
a(5) +                               'PrintArrayInverted(productsAdded);'                                                                       + z +
a(4) +                         '}'                                                                                                              + z +
a(3) +                   '}'                                                                                                                    + z +
a(2) +             '}'                                                                                                                          + z +
a(1) +       '}'                                                                                                                                + z +
a(0) + '}'                                                                                                                                      + z
);
exerciseThis[10] = new Array();
exerciseThis[10][0] = null;
exerciseThis[10][1] = new ExerciseInfo("10", "1",
"Write a program to simulate n nested loops from 1 to n.",
a(0) + 'using System;'                                                                                    + z +
a(0)                                                                                                      + z +
a(0) + 'namespace n_nested_loops_from_1_to_n'                                                             + z +
a(0) + '{'                                                                                                + z +
a(1) +       'class Program'                                                                              + z +
a(1) +       '{'                                                                                          + z +
a(2) +             'static void TheNToTheNLoops (int nPos, int[] loop, int currentPos)'                   + z +
a(2) +             '{'                                                                                    + z +
a(0)                                                                                                      + z +
a(3) +                   'if (currentPos == nPos)'                                                        + z +
a(3) +                   '{'                                                                              + z +
a(4) +                         'foreach (int x in loop) Console.Write("{0} ", x.ToString());'             + z +
a(4) +                         'Console.WriteLine();'                                                     + z +
a(4) +                         'return;'                                                                  + z +
a(3) +                   '}'                                                                              + z +
a(0)                                                                                                      + z +
a(3) +                   'for(int c = 1; c <= nPos; c++)'                                                 + z +
a(3) +                   '{'                                                                              + z +
a(4) +                         'loop[currentPos] = c;'                                                    + z +
a(4) +                         'TheNToTheNLoops(nPos, loop, currentPos + 1);'                             + z +
a(3) +                   '}'                                                                              + z +
a(2) +             '}'                                                                                    + z +
a(0)                                                                                                      + z +
a(2) +             'static void Main()'                                                                   + z +
a(2) +             '{'                                                                                    + z +
a(3) +                   'string numN;'                                                                   + z +
a(3) +                   'int n;'                                                                         + z +
a(0)                                                                                                      + z +
a(3) +                   'do'                                                                             + z +
a(3) +                   '{'                                                                              + z +
a(4) +                         'Console.Write("n = ");'                                                   + z +
a(4) +                         'numN = Console.ReadLine();'                                               + z +
a(4) +                         'Console.WriteLine();'                                                     + z +
a(0)                                                                                                      + z +
a(3) +                   '} while (!(int.TryParse(numN, out n) && n > 0));'                               + z +
a(0)                                                                                                      + z +
a(3) +                   'int[] loops = new int[n];'                                                      + z +
a(0)                                                                                                      + z +
a(3) +                   'for (int i = 0; i < loops.Length; i++) loops[i] = 1;'                           + z +
a(0)                                                                                                      + z +
a(3) +                   'TheNToTheNLoops(n, loops, 0);'                                                  + z +
a(0)                                                                                                      + z +
a(3) +                   'Console.WriteLine();'                                                           + z +
a(2) +             '}'                                                                                    + z +
a(1) +       '}'                                                                                          + z +
a(0) + '}'                                                                                                + z
);
exerciseThis[10][2] = new ExerciseInfo("10", "2",
"Write a program to generate all variations with duplicates of n elements class k.",
a(0) + 'using System;'                                                                                                                 + z +
a(0)                                                                                                                                   + z +
a(0) + 'namespace All_Variations_Duplicated'                                                                                           + z +
a(0) + '{'                                                                                                                             + z +
a(1) +       'class Program'                                                                                                           + z +
a(1) +       '{'                                                                                                                       + z +
a(2) +             'static void VariationsDuplicated (int currentPos, int lastPos, int lastInt, int[] subSet)'                         + z +
a(2) +             '{'                                                                                                                 + z +
a(3) +                   'if (currentPos == lastPos)'                                                                                  + z +
a(3) +                   '{'                                                                                                           + z +
a(4) +                         'Console.Write("( ");'                                                                                  + z +
a(4) +                         'foreach (int x in subSet) Console.Write("{0} ", x.ToString());'                                        + z +
a(4) +                         'Console.Write(")");'                                                                                   + z +
a(0)                                                                                                                                   + z +
a(4) +                         'bool comma = true;'                                                                                    + z +
a(0)                                                                                                                                   + z +
a(4) +                         'for(int i = 0; i < lastPos; i++)'                                                                      + z +
a(4) +                         '{'                                                                                                     + z +
a(5) +                               'if (subSet[i] == lastInt) { comma = false; continue; }'                                          + z +
a(5) +                               'else { comma = true; break; }'                                                                   + z +
a(4) +                         '}'                                                                                                     + z +
a(0)                                                                                                                                   + z +
a(4) +                         'if (comma) Console.Write(", ");'                                                                       + z +
a(4) +                         'else Console.WriteLine();'                                                                             + z +
a(0)                                                                                                                                   + z +
a(4) +                         'return;'                                                                                               + z +
a(3) +                   '}'                                                                                                           + z +
a(0)                                                                                                                                   + z +
a(3) +                   'for(int c = 1; c <= lastInt; c++)'                                                                           + z +
a(3) +                   '{'                                                                                                           + z +
a(4) +                         'subSet[currentPos] = c;'                                                                               + z +
a(4) +                         'VariationsDuplicated(currentPos + 1, lastPos, lastInt, subSet);'                                       + z +
a(3) +                   '}'                                                                                                           + z +
a(2) +             '}'                                                                                                                 + z +
a(0)                                                                                                                                   + z +
a(2) +             'static int EnterValue(string X)'                                                                                   + z +
a(2) +             '{'                                                                                                                 + z +
a(3) +                   'string Value;'                                                                                               + z +
a(3) +                   'int value;'                                                                                                  + z +
a(0)                                                                                                                                   + z +
a(3) +                   'do'                                                                                                          + z +
a(3) +                   '{'                                                                                                           + z +
a(4) +                         'Console.Write(X + " = ");'                                                                             + z +
a(4) +                         'Value = Console.ReadLine();'                                                                           + z +
a(4) +                         'Console.WriteLine();'                                                                                  + z +
a(3) +                   '} while (!(int.TryParse(Value, out value) && value > 0));'                                                   + z +
a(0)                                                                                                                                   + z +
a(3) +                   'return value;'                                                                                               + z +
a(2) +             '}'                                                                                                                 + z +
a(0)                                                                                                                                   + z +
a(2) +             'static void Main()'                                                                                                + z +
a(2) +             '{'                                                                                                                 + z +
a(3) +                   'string N = "n", K = "k";'                                                                                    + z +
a(3) +                   'int n = EnterValue(N), k = EnterValue(K);'                                                                   + z +
a(3) +                   'int[] sets = new int[k];'                                                                                    + z +
a(0)                                                                                                                                   + z +
a(3) +                   'VariationsDuplicated(0, k, n, sets);'                                                                        + z +
a(3) +                   'Console.WriteLine();'                                                                                        + z +
a(0)                                                                                                                                   + z +
a(2) +             '}'                                                                                                                 + z +
a(1) +       '}'                                                                                                                       + z +
a(0) + '}'                                                                                                                             + z
);
exerciseThis[10][3] = new ExerciseInfo("10", "3",
"Write a program to generate and print all combinations with duplicates of k elements from a set with n elements.",
a(0) + 'using System;'                                                                                                                + z +
a(0) + 'namespace All_Variations_Duplicated'                                                                                          + z +
a(0) + '{'                                                                                                                            + z +
a(1) +       'class Program'                                                                                                          + z +
a(1) +       '{'                                                                                                                      + z +
a(2) +             'static void PrintSet(int[] set, int pos, int last)'                                                               + z +
a(2) +             '{'                                                                                                                + z +
a(3) +                   'Console.Write("( ");'                                                                                       + z +
a(3) +                   'foreach (int x in set) Console.Write("{0} ", x.ToString());'                                                + z +
a(3) +                   'Console.Write(")");'                                                                                        + z +
a(3) +                   'bool comma = true;'                                                                                         + z +
a(3) +                   'for (int i = 0; i < pos; i++)'                                                                              + z +
a(3) +                   '{'                                                                                                          + z +
a(4) +                         'if (set[i] == last) { comma = false; continue; }'                                                     + z +
a(4) +                         'else { comma = true; break; }'                                                                        + z +
a(3) +                   '}'                                                                                                          + z +
a(3) +                   'if (comma) Console.Write(", ");'                                                                            + z +
a(3) +                   'else Console.WriteLine();'                                                                                  + z +
a(2) +             '}'                                                                                                                + z +
a(0)                                                                                                                                  + z +
a(2) +             'static void VariationsDuplicated(int currentPos, int lastPos, int lastInt, int[] subSet)'                         + z +
a(2) +             '{'                                                                                                                + z +
a(3) +                   'if (currentPos == lastPos)'                                                                                 + z +
a(3) +                   '{'                                                                                                          + z +
a(4) +                         'bool print = true;'                                                                                   + z +
a(0)                                                                                                                                  + z +
a(4) +                         'for(int i = 0; i < lastPos - 1; i++)'                                                                 + z +
a(4) +                         '{'                                                                                                    + z +
a(5) +                               'if (subSet[i] > subSet[i + 1]) { print = false; break; }'                                       + z +
a(4) +                         '}'                                                                                                    + z +
a(4) +                         'if(print) PrintSet(subSet, lastPos, lastInt);'                                                        + z +
a(4) +                         'return;'                                                                                              + z +
a(3) +                   '}'                                                                                                          + z +
a(3) +                   'for (int c = subSet[currentPos]; c <= lastInt; c++)'                                                        + z +
a(3) +                   '{'                                                                                                          + z +
a(4) +                         'subSet[currentPos] = c;'                                                                              + z +
a(4) +                         'VariationsDuplicated(currentPos + 1, lastPos, lastInt, subSet);'                                      + z +
a(4) +                         'subSet[currentPos]--;'                                                                                + z +
a(3) +                   '}'                                                                                                          + z +
a(2) +             '}'                                                                                                                + z +
a(2) +             'static int EnterValue(string X)'                                                                                  + z +
a(2) +             '{'                                                                                                                + z +
a(3) +                   'string Value;'                                                                                              + z +
a(3) +                   'int value;'                                                                                                 + z +
a(3) +                   'do'                                                                                                         + z +
a(3) +                   '{'                                                                                                          + z +
a(4) +                         'Console.Write(X + " = ");'                                                                            + z +
a(4) +                         'Value = Console.ReadLine();'                                                                          + z +
a(4) +                         'Console.WriteLine();'                                                                                 + z +
a(3) +                   '} while (!(int.TryParse(Value, out value) && value > 0));'                                                  + z +
a(3) +                   'return value;'                                                                                              + z +
a(2) +             '}'                                                                                                                + z +
a(2) +             'static void Main()'                                                                                               + z +
a(2) +             '{'                                                                                                                + z +
a(3) +                   'string N = "n", K = "k";'                                                                                   + z +
a(3) +                   'int n = EnterValue(N), k = EnterValue(K);'                                                                  + z +
a(3) +                   'int[] sets = new int[k];'                                                                                   + z +
a(3) +                   'for (int i = 0; i < k; i++) sets[i] = 1;'                                                                   + z +
a(3) +                   'VariationsDuplicated(0, k, n, sets);'                                                                       + z +
a(3) +                   'Console.WriteLine();'                                                                                       + z +
a(2) +             '}'                                                                                                                + z +
a(1) +       '}'                                                                                                                      + z +
a(0) + '}'                                                                                                                            + z                                                                                                        + z
);
exerciseThis[11] = new Array();
exerciseThis[11][0] = null;
exerciseThis[11][1] = new ExerciseInfo("11", "1",
"Write a program, which reads from the console a year and checks if it is a leap year.",
a(0) + 'using System;'                                                                                                                                     + z +
a(0)                                                                                                                                                       + z +
a(0) + 'namespace Check_if_it_is_a_leap_year'                                                                                                              + z +
a(0) + '{'                                                                                                                                                 + z +
a(1) +       'class Program'                                                                                                                               + z +
a(1) +       '{'                                                                                                                                           + z +
a(2) +             'static void Main()'                                                                                                                    + z +
a(2) +             '{'                                                                                                                                     + z +
a(3) +                   'int year = DateTime.Now.Year;'                                                                                                   + z +
a(3) +                   'bool leapYear = DateTime.IsLeapYear(year);'                                                                                      + z +
a(0)                                                                                                                                                       + z +
a(3) +                   'Console.WriteLine("The year is {0}, and is {1} that it is a leap year!", year.ToString(), leapYear.ToString().ToLower());'       + z +
a(2) +             '}'                                                                                                                                     + z +
a(1) +       '}'                                                                                                                                           + z +
a(0) + '}'                                                                                                                                                 + z
);
exerciseThis[11][2] = new ExerciseInfo("11", "2",
"Write a program, which generates and prints on the console 10 random numbers in the range [100, 200].",
a(0) + 'using System;'                                                                                                      + z +
a(0)                                                                                                                        + z +
a(0) + 'namespace Ten_Random_Numbers_from_100_to_200'                                                                       + z +
a(0) + '{'                                                                                                                  + z +
a(1) +       'class Program'                                                                                                + z +
a(1) +       '{'                                                                                                            + z +
a(2) +             'static void Main()'                                                                                     + z +
a(2) +             '{'                                                                                                      + z +
a(3) +                   'Random rnd = new Random();'                                                                       + z +
a(0)                                                                                                                        + z +
a(3) +                   'for(int i = 0; i < 10; i++)'                                                                      + z +
a(3) +                   '{'                                                                                                + z +
a(4) +                         'Console.WriteLine("{0}: {1}", (i + 1).ToString(), (rnd.Next(100) + 100).ToString());'       + z +
a(3) +                   '}'                                                                                                + z +
a(2) +             '}'                                                                                                      + z +
a(1) +       '}'                                                                                                            + z +
a(0) + '}'                                                                                                                  + z
);
exerciseThis[11][3] = null;
exerciseThis[11][4] = new ExerciseInfo("11", "4",
"Write a program, which prints on the standard output the count of days, hours, and minutes, which have passes since the computer is started until the moment of the program execution. For the implementation use the class Environment.",
a(0) + 'using System;'                                                                                                                                                                      + z +
a(0)                                                                                                                                                                                        + z +
a(0) + 'namespace PC_Time_that_has_Passed'                                                                                                                                                  + z +
a(0) + '{'                                                                                                                                                                                  + z +
a(1) +       'class Program'                                                                                                                                                                + z +
a(1) +       '{'                                                                                                                                                                            + z +
a(2) +             'static void Main()'                                                                                                                                                     + z +
a(2) +             '{'                                                                                                                                                                      + z +
a(3) +                   'int pcTime = Environment.TickCount / 1000;'                                                                                                                       + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'string secs = (pcTime % 60).ToString("D2"), min = (pcTime / 60).ToString("D2"), hrs = (pcTime / 3600).ToString("D2"), days = (pcTime / 86400).ToString(); '       + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'Console.WriteLine("{0} days, {1} hours with {2} minutes and {3} seconds.", days, hrs, min, secs);'                                                                + z +
a(2) +             '}'                                                                                                                                                                      + z +
a(1) +       '}'                                                                                                                                                                            + z +
a(0) + '}'                                                                                                                                                                                  + z
);
exerciseThis[11][5] = null;
exerciseThis[11][6] = null;
exerciseThis[11][7] = new ExerciseInfo("11", "7",
"Define your own namespace CreatingAndUsingObjects and place in it two classes Cat and Sequence, which we used in the examples of the current chapter. Define one more namespace and make a class, which calls the classes Cat and Sequence, in it.",
a(0) + 'namespace One'                                                                                          + z +
a(0) + '{'                                                                                                      + z +
a(1) +       'public class Cat'                                                                                 + z +
a(1) +       '{'                                                                                                + z +
a(2) +             'public void SayMiau()'                                                                      + z +
a(2) +             '{'                                                                                          + z +
a(3) +                   'System.Console.WriteLine("Miau!");'                                                   + z +
a(2) +             '}'                                                                                          + z +
a(1) +       '}'                                                                                                + z +
a(0)                                                                                                            + z +
a(1) +       'public class Sequence'                                                                            + z +
a(1) +       '{'                                                                                                + z +
a(2) +             'private static int crntValue = 0;'                                                          + z +
a(0)                                                                                                            + z +
a(2) +             'public static int NextValue()'                                                              + z +
a(2) +             '{'                                                                                          + z +
a(3) +                   'return ++crntValue;'                                                                  + z +
a(2) +             '}'                                                                                          + z +
a(1) +       '}'                                                                                                + z +
a(0)                                                                                                            + z +
a(0) + '}'                                                                                                      + z +
a(0)                                                                                                            + z +
a(0) + 'namespace Two'                                                                                          + z +
a(0) + '{'                                                                                                      + z +
a(1) +       'class CallingCass'                                                                                + z +
a(1) +       '{'                                                                                                + z +
a(2) +             'static void Main()'                                                                         + z +
a(2) +             '{'                                                                                          + z +
a(3) +                   'One.Cat lolo = new One.Cat();'                                                        + z +
a(0)                                                                                                            + z +
a(3) +                   'lolo.SayMiau();'                                                                      + z +
a(0)                                                                                                            + z +
a(3) +                   'System.Console.WriteLine("Sequence [1...3]: {0}, {1}, {2}",'                          + z +
a(3) +                   'One.Sequence.NextValue(), One.Sequence.NextValue(), One.Sequence.NextValue());'       + z +
a(2) +             '}'                                                                                          + z +
a(1) +       '}'                                                                                                + z +
a(0) + '}'                                                                                                      + z
);
exerciseThis[11][8] = new ExerciseInfo("11", "8",
"Write a program which creates 10 objects of type Cat, gives them names CatN, where N is a unique serial number of the object, and in the end call the method SayMiau() for each of them. For the implementation use the namespace CreatingAndUsingObjects.",
a(0) + 'namespace TheCatObject'                                                                                                             + z +
a(0) + '{'                                                                                                                                  + z +
a(0)                                                                                                                                        + z +
a(1) +       'public class Cat'                                                                                                             + z +
a(1) +       '{'                                                                                                                            + z +
a(2) +             'private string catsID;'                                                                                                 + z +
a(0)                                                                                                                                        + z +
a(2) +             'public Cat(string ID)'                                                                                                  + z +
a(2) +             '{'                                                                                                                      + z +
a(3) +                   'this.catsID = ID;'                                                                                                + z +
a(2) +             '}'                                                                                                                      + z +
a(0)                                                                                                                                        + z +
a(2) +             'public void SayMiau()'                                                                                                  + z +
a(2) +             '{'                                                                                                                      + z +
a(3) +                   'System.Console.WriteLine("Cat{0} said: Miauuu!", catsID);'                                                        + z +
a(2) +             '}'                                                                                                                      + z +
a(1) +       '}'                                                                                                                            + z +
a(0)                                                                                                                                        + z +
a(0) + '}'                                                                                                                                  + z +
a(0)                                                                                                                                        + z +
a(0) + 'namespace TheCreatorOfCats'                                                                                                         + z +
a(0) + '{'                                                                                                                                  + z +
a(1) +       'public class CreateCats'                                                                                                      + z +
a(1) +       '{'                                                                                                                            + z +
a(2) +             'private static System.Random rnd = new System.Random();'                                                                + z +
a(2) +             'private static int serial = rnd.Next(989);'                                                                             + z +
a(0)                                                                                                                                        + z +
a(2) +             'public static int NextSerialNum()'                                                                                      + z +
a(2) +             '{'                                                                                                                      + z +
a(3) +                   'return ++serial;'                                                                                                 + z +
a(2) +             '}'                                                                                                                      + z +
a(1) +       '}'                                                                                                                            + z +
a(0) + '}'                                                                                                                                  + z +
a(0)                                                                                                                                        + z +
a(0) + 'namespace TheCaller'                                                                                                                + z +
a(0) + '{'                                                                                                                                  + z +
a(1) +       'class CallingClass'                                                                                                           + z +
a(1) +       '{'                                                                                                                            + z +
a(2) +             'static void Main()'                                                                                                     + z +
a(2) +             '{'                                                                                                                      + z +
a(3) +                   'for(int i = 0; i < 10; i++)'                                                                                      + z +
a(3) +                   '{'                                                                                                                + z +
a(4) +                         'TheCatObject.Cat lolo = new TheCatObject.Cat(TheCreatorOfCats.CreateCats.NextSerialNum().ToString("000"));' + z +
a(4) +                         'lolo.SayMiau();'                                                                                            + z +
a(3) +                   '}'                                                                                                                + z +
a(2) +             '}'                                                                                                                      + z +
a(1) +       '}'                                                                                                                            + z +
a(0) + '}'                                                                                                                                  + z
);
exerciseThis[11][9] = new ExerciseInfo("11", "9",
"Write a program, which calculates the count of workdays between the current date and another given date after the current (inclusive). Consider that workdays are all days from Monday to Friday, which are not public holidays, except when Saturday is a working day. The program should keep a list of predefined public holidays, as well as a list of predefined working Saturdays.",
a(0)                                                                                                                                                                                        + z +
a(0) + 'namespace HolidayAndWorkingSat'                                                                                                                                                     + z +
a(0) + '{'                                                                                                                                                                                  + z +
a(1) +       'class Holidays'                                                                                                                                                               + z +
a(1) +       '{'                                                                                                                                                                            + z +
a(2) +             'public static string[] HolidaysList = '                                                                                                                                 + z +
a(2) +             '{'                                                                                                                                                                      + z +
a(3) +                   'new System.DateTime(1, 1, 1).ToString("MM/dd"),'                                                                                                                  + z +
a(3) +                   'new System.DateTime(1991, 4, 17).ToString("MM/dd"),'                                                                                                              + z +
a(3) +                   'new System.DateTime(1990, 11, 10).ToString("MM/dd"),'                                                                                                             + z +
a(3) +                   'new System.DateTime(1, 12, 31).ToString("MM/dd")'                                                                                                                 + z +
a(2) +             '};'                                                                                                                                                                     + z +
a(1) +       '}'                                                                                                                                                                            + z +
a(0)                                                                                                                                                                                        + z +
a(1) +       'class WorkingSat'                                                                                                                                                             + z +
a(1) +       '{'                                                                                                                                                                            + z +
a(2) +             'public static string[] WorkingSatList = '                                                                                                                               + z +
a(2) +             '{'                                                                                                                                                                      + z +
a(3) +                   'new System.DateTime(System.DateTime.Now.Year, 4, 18).ToString("MM/dd/yyy")'                                                                                       + z +
a(2) +             '};'                                                                                                                                                                     + z +
a(1) +       '}'                                                                                                                                                                            + z +
a(0) + '}'                                                                                                                                                                                  + z +
a(0)                                                                                                                                                                                        + z +
a(0)                                                                                                                                                                                        + z +
a(0) + 'namespace CalculateTheWorkDaysBetween'                                                                                                                                              + z +
a(0) + '{'                                                                                                                                                                                  + z +
a(1) +       'class Workdays'                                                                                                                                                               + z +
a(1) +       '{'                                                                                                                                                                            + z +
a(2) +             'static int FutureYear(int crntYear) { return Input("Year", "yyyy", crntYear, 2020); } '                                                                                 + z +
a(2) +             'static int FutureMonth() { return Input("Month", "mm", 1, 12); }'                                                                                                       + z +
a(2) +             'static int FutureDay(int month, int crntYear) { return Input("Day", "dd", 1, LastMonthDay(crntYear, month)); }'                                                         + z +
a(0)                                                                                                                                                                                        + z +
a(2) +             'static string MonthName(int monthNum)'                                                                                                                                  + z +
a(2) +             '{'                                                                                                                                                                      + z +
a(3) +                   'switch (monthNum)'                                                                                                                                                + z +
a(3) +                   '{'                                                                                                                                                                + z +
a(4) +                         'case 1: return "January";'                                                                                                                                  + z +
a(4) +                         'case 2: return "February";'                                                                                                                                 + z +
a(4) +                         'case 3: return "March";'                                                                                                                                    + z +
a(4) +                         'case 4: return "April";'                                                                                                                                    + z +
a(4) +                         'case 5: return "May";'                                                                                                                                      + z +
a(4) +                         'case 6: return "June";'                                                                                                                                     + z +
a(4) +                         'case 7: return "July";'                                                                                                                                     + z +
a(4) +                         'case 8: return "August";'                                                                                                                                   + z +
a(4) +                         'case 9: return "September";'                                                                                                                                + z +
a(4) +                         'case 10: return "October";'                                                                                                                                 + z +
a(4) +                         'case 11: return "November";'                                                                                                                                + z +
a(4) +                         'case 12: return "December";'                                                                                                                                + z +
a(4) +                         'default: return null;'                                                                                                                                      + z +
a(3) +                   '}'                                                                                                                                                                + z +
a(2) +             '}'                                                                                                                                                                      + z +
a(0)                                                                                                                                                                                        + z +
a(2) +             'static int LastMonthDay(int year, int month)'                                                                                                                           + z +
a(2) +             '{'                                                                                                                                                                      + z +
a(3) +                   'int lastDay;'                                                                                                                                                     + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'switch (month)'                                                                                                                                                   + z +
a(3) +                   '{'                                                                                                                                                                + z +
a(4) +                         'case 1:'                                                                                                                                                    + z +
a(4) +                         'case 3:'                                                                                                                                                    + z +
a(4) +                         'case 5:'                                                                                                                                                    + z +
a(4) +                         'case 7:'                                                                                                                                                    + z +
a(4) +                         'case 8:'                                                                                                                                                    + z +
a(4) +                         'case 10:'                                                                                                                                                   + z +
a(4) +                         'case 12:'                                                                                                                                                   + z +
a(4) +                         'lastDay = 31;'                                                                                                                                              + z +
a(4) +                         'break;'                                                                                                                                                     + z +
a(4) +                         'case 4:'                                                                                                                                                    + z +
a(4) +                         'case 6:'                                                                                                                                                    + z +
a(4) +                         'case 9:'                                                                                                                                                    + z +
a(4) +                         'case 11:'                                                                                                                                                   + z +
a(4) +                         'lastDay = 30;'                                                                                                                                              + z +
a(4) +                         'break;'                                                                                                                                                     + z +
a(4) +                         'case 2:'                                                                                                                                                    + z +
a(4) +                         'lastDay = (System.DateTime.IsLeapYear(year)) ? 29 : 28;'                                                                                                    + z +
a(4) +                         'break;'                                                                                                                                                     + z +
a(4) +                         'default:'                                                                                                                                                   + z +
a(4) +                         'lastDay = 30;'                                                                                                                                              + z +
a(4) +                         'break;'                                                                                                                                                     + z +
a(3) +                   '}'                                                                                                                                                                + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'return lastDay;'                                                                                                                                                  + z +
a(2) +             '}'                                                                                                                                                                      + z +
a(0)                                                                                                                                                                                        + z +
a(2) +             'static int Input(string dateComponent, string dateFormat, int minValue, int maxValue)'                                                                                  + z +
a(2) +             '{'                                                                                                                                                                      + z +
a(3) +                   'string input;'                                                                                                                                                    + z +
a(3) +                   'int value;'                                                                                                                                                       + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'do'                                                                                                                                                               + z +
a(3) +                   '{'                                                                                                                                                                + z +
a(4) +                         'System.Console.Write("\\t{0}({1}): ", dateComponent, dateFormat);'                                                                                          + z +
a(4) +                         'input = System.Console.ReadLine();'                                                                                                                         + z +
a(3) +                   '} while (!(int.TryParse(input, out value) && value >= minValue && value <= maxValue));'                                                                           + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'return value;'                                                                                                                                                    + z +
a(2) +             '}'                                                                                                                                                                      + z +
a(0)                                                                                                                                                                                        + z +
a(2) +             'static int CalculateWorkdays(int year, int month, int day, int workdaysCount)'                                                                                          + z +
a(2) +             '{'                                                                                                                                                                      + z +
a(3) +                   '//Validates the date.'                                                                                                                                            + z +
a(3) +                   'if(day == 0)'                                                                                                                                                     + z +
a(3) +                   '{'                                                                                                                                                                + z +
a(4) +                         'month--;'                                                                                                                                                   + z +
a(0)                                                                                                                                                                                        + z +
a(4) +                         'if(month == 0) '                                                                                                                                            + z +
a(4) +                         '{'                                                                                                                                                          + z +
a(5) +                               'year--;'                                                                                                                                              + z +
a(5) +                               'month = 12;'                                                                                                                                          + z +
a(4) +                         '}'                                                                                                                                                          + z +
a(0)                                                                                                                                                                                        + z +
a(4) +                         'day = LastMonthDay(year, month);'                                                                                                                           + z +
a(3) +                   '}'                                                                                                                                                                + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'System.DateTime '                                                                                                                                                 + z +
a(3) +                   'aDate = new System.DateTime(year, month, day);'                                                                                                                   + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'if (System.DateTime.Compare(System.DateTime.Now.Date, aDate.Date) == 0) return ++workdaysCount;'                                                                  + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'switch (aDate.DayOfWeek.ToString())'                                                                                                                              + z +
a(3) +                   '{'                                                                                                                                                                + z +
a(4) +                         'case "Monday":'                                                                                                                                             + z +
a(4) +                         'case "Tuesday":'                                                                                                                                            + z +
a(4) +                         'case "Wednesday":'                                                                                                                                          + z +
a(4) +                         'case "Thursday":'                                                                                                                                           + z +
a(4) +                         'case "Friday":'                                                                                                                                             + z +
a(4) +                         'workdaysCount++;'                                                                                                                                           + z +
a(4) +                         'break;'                                                                                                                                                     + z +
a(4) +                         'default:'                                                                                                                                                   + z +
a(4) +                         'break;'                                                                                                                                                     + z +
a(3) +                   '}'                                                                                                                                                                + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'for (int i = 0; i < HolidayAndWorkingSat.Holidays.HolidaysList.Length; i++)'                                                                                      + z +
a(3) +                   '{'                                                                                                                                                                + z +
a(4) +                         'if (aDate.Date.ToString("MM/dd") == HolidayAndWorkingSat.Holidays.HolidaysList[i] && workdaysCount > 0)'                                                    + z +
a(4) +                         '{'                                                                                                                                                          + z +
a(5) +                               'System.Console.WriteLine("Holiday! {0}", HolidayAndWorkingSat.Holidays.HolidaysList[i]);'                                                             + z +
a(5) +                               'workdaysCount--;'                                                                                                                                     + z +
a(4) +                         '};'                                                                                                                                                         + z +
a(3) +                   '}'                                                                                                                                                                + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'for (int i = 0; i < HolidayAndWorkingSat.WorkingSat.WorkingSatList.Length; i++)'                                                                                  + z +
a(3) +                   '{'                                                                                                                                                                + z +
a(4) +                         'if (aDate.Date.ToString("MM/dd/yyyy") == HolidayAndWorkingSat.WorkingSat.WorkingSatList[i])'                                                                + z +
a(4) +                         '{'                                                                                                                                                          + z +
a(5) +                               'System.Console.WriteLine("Working Satuday! {0}", HolidayAndWorkingSat.WorkingSat.WorkingSatList[i]);'                                                 + z +
a(5) +                               'workdaysCount++;'                                                                                                                                     + z +
a(4) +                         '}'                                                                                                                                                          + z +
a(3) +                   '}'                                                                                                                                                                + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'return CalculateWorkdays(year, month, --day, workdaysCount);'                                                                                                     + z +
a(2) +             '}'                                                                                                                                                                      + z +
a(0)                                                                                                                                                                                        + z +
a(2) +             'static void Main()'                                                                                                                                                     + z +
a(2) +             '{'                                                                                                                                                                      + z +
a(3) +                   'int '                                                                                                                                                             + z +
a(3) +                   'dayOfMonth = System.DateTime.Now.Day, '                                                                                                                           + z +
a(3) +                   'year = System.DateTime.Now.Year,'                                                                                                                                 + z +
a(3) +                   'month = System.DateTime.Now.Month;'                                                                                                                               + z +
a(3) +                   'string'                                                                                                                                                           + z +
a(3) +                   'weekDay = System.DateTime.Now.DayOfWeek.ToString(),'                                                                                                              + z +
a(3) +                   'monthName = MonthName(month);'                                                                                                                                    + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'System.Console.WriteLine("Today is: {0} {1} {2}, {3}", weekDay, monthName, dayOfMonth.ToString(), year.ToString());'                                              + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'int '                                                                                                                                                             + z +
a(3) +                   'futureYear,'                                                                                                                                                      + z +
a(3) +                   'futureMonth,'                                                                                                                                                     + z +
a(3) +                   'futureDay;'                                                                                                                                                       + z +
a(3) +                   'System.DateTime '                                                                                                                                                 + z +
a(3) +                   'futureDateTime;'                                                                                                                                                  + z +
a(3) +                   'do'                                                                                                                                                               + z +
a(3) +                   '{'                                                                                                                                                                + z +
a(4) +                         'System.Console.WriteLine("Enter the future date (until 2020).");'                                                                                           + z +
a(4) +                         'futureYear = FutureYear(year);'                                                                                                                             + z +
a(4) +                         'futureMonth = FutureMonth();'                                                                                                                               + z +
a(4) +                         'futureDay = FutureDay(futureMonth, futureYear);'                                                                                                            + z +
a(4) +                         'futureDateTime = new System.DateTime(futureYear, futureMonth, futureDay);'                                                                                  + z +
a(3) +                   '} while (System.DateTime.Compare(System.DateTime.Now.Date, futureDateTime.Date) > 0);'                                                                            + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'string'                                                                                                                                                           + z +
a(3) +                   'futureMonthName = MonthName(futureMonth),'                                                                                                                        + z +
a(3) +                   'futureDayName = futureDateTime.DayOfWeek.ToString();'                                                                                                             + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'System.Console.WriteLine("The future date is: {0} {1} {2}, {3}", futureDayName, futureMonthName, futureDay.ToString(), futureYear.ToString());'                   + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'System.TimeSpan '                                                                                                                                                 + z +
a(3) +                   'dayInBetween = futureDateTime.Date - System.DateTime.Now.Date; //plus 1, .Date does not include the actual future day'                                            + z +
a(0)                                                                                                                                                                                        + z +
a(3) +                   'System.Console.WriteLine("The difference between dates is {0} days. The number of workdays is {1}.", '                                                            + z +
a(3) +                   '(1 + dayInBetween.TotalDays).ToString(), CalculateWorkdays(futureYear, futureMonth, futureDay, 0).ToString());'                                                   + z +
a(2) +             '}'                                                                                                                                                                      + z +
a(1) +       '}'                                                                                                                                                                            + z +
a(0) + '}'                                                                                                                                                                                  + z
);
exerciseThis[12] = new Array();
exerciseThis[12][0] = null;
exerciseThis[12][1] = null;
exerciseThis[12][2] = null;
exerciseThis[12][3] = null;
exerciseThis[12][4] = null;
exerciseThis[12][5] = null;
exerciseThis[12][6] = null;
exerciseThis[12][7] = new ExerciseInfo("12", "7",
"Write a program that takes a positive integer from the console and prints the square root of this integer. If the input is negative or invalid print \"Invalid Number\" in the console. In all cases print \"Good Bye\".",
a(0) + 'namespace Only_Positive_Int_to_Square'                                                                                                                 + z +
a(0) + '{'                                                                                                                                                     + z +
a(1) +       'class Program'                                                                                                                                   + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'static void Main()'                                                                                                                        + z +
a(2) +             '{'                                                                                                                                         + z +
a(3) +                   'try'                                                                                                                                 + z +
a(3) +                   '{'                                                                                                                                   + z +
a(4) +                         'System.Console.Write("Enter a positive integer: ");'                                                                           + z +
a(4) +                         'int num = int.Parse(System.Console.ReadLine());'                                                                               + z +
a(0)                                                                                                                                                           + z +
a(4) +                         'if (num < 1) throw new System.ArgumentOutOfRangeException();'                                                                  + z +
a(0)                                                                                                                                                           + z +
a(4) +                         'System.Console.WriteLine("Square root of {0} is {1}.\\nGood bye!", num.ToString(), System.Math.Pow(num, 2).ToString());'       + z +
a(3) +                   '}'                                                                                                                                   + z +
a(3) +                   'catch (System.FormatException)'                                                                                                      + z +
a(3) +                   '{'                                                                                                                                   + z +
a(4) +                         'System.Console.WriteLine("Wrong format!");'                                                                                    + z +
a(3) +                   '}'                                                                                                                                   + z +
a(3) +                   'catch (System.ArgumentOutOfRangeException)'                                                                                          + z +
a(3) +                   '{'                                                                                                                                   + z +
a(4) +                         'System.Console.WriteLine("Wrong! Input is a non-positve integer.");'                                                           + z +
a(3) +                   '}'                                                                                                                                   + z +
a(2) +             '}'                                                                                                                                         + z +
a(1) +       '}'                                                                                                                                               + z +
a(0) + '}'                                                                                                                                                     + z
);
exerciseThis[12][8] = new ExerciseInfo("12", "8",
"Write a method ReadNumber(int start, int end) that reads an integer from the console in the range [start…end]. In case the input integer is not valid or it is not in the required range throw appropriate exception. Using this method, write a program that takes 10 integers a1, a2, …, a10 such that 1 < a1 < … < a10 < 100.",
a(0) + 'namespace Read_Ten_Numbers'                                                                                                           + z +
a(0) + '{'                                                                                                                                    + z +
a(1) +       'class Program'                                                                                                                  + z +
a(1) +       '{'                                                                                                                              + z +
a(2) +             'static void ReadNumber(int start, int end)'                                                                               + z +
a(2) +             '{'                                                                                                                        + z +
a(3) +                   'int[] numbers = new int[10];'                                                                                       + z +
a(0)                                                                                                                                          + z +
a(3) +                   'try'                                                                                                                + z +
a(3) +                   '{'                                                                                                                  + z +
a(4) +                         'int i = 0;'                                                                                                   + z +
a(0)                                                                                                                                          + z +
a(4) +                         'while(i < 10)'                                                                                                + z +
a(4) +                         '{'                                                                                                            + z +
a(5) +                               'System.Console.Write("Enter integer number {0}: ", (i + 1).ToString());'                                + z +
a(5) +                               'numbers[i] = int.Parse(System.Console.ReadLine());'                                                     + z +
a(0)                                                                                                                                          + z +
a(5) +                               'if (i > 0 && numbers[i] < numbers[i - 1]) throw new System.ArgumentOutOfRangeException();'              + z +
a(5) +                               'else if (numbers[i] < start || numbers[i] > end) throw new System.ArgumentOutOfRangeException();'       + z +
a(0)                                                                                                                                          + z +
a(5) +                               'i++;'                                                                                                   + z +
a(4) +                         '}'                                                                                                            + z +
a(3) +                   '}'                                                                                                                  + z +
a(3) +                   'catch (System.FormatException)'                                                                                     + z +
a(3) +                   '{'                                                                                                                  + z +
a(4) +                         'System.Console.WriteLine("Wrong Format!");'                                                                   + z +
a(4) +                         'ReadNumber(start, end);'                                                                                      + z +
a(3) +                   '}'                                                                                                                  + z +
a(3) +                   'catch (System.ArgumentOutOfRangeException)'                                                                         + z +
a(3) +                   '{'                                                                                                                  + z +
a(4) +                         'System.Console.WriteLine("Out of range!");'                                                                   + z +
a(4) +                         'ReadNumber(start, end);'                                                                                      + z +
a(3) +                   '}'                                                                                                                  + z +
a(2) +             '}'                                                                                                                        + z +
a(0)                                                                                                                                          + z +
a(2) +             'static int InputNumber(string variable)'                                                                                  + z +
a(2) +             '{'                                                                                                                        + z +
a(3) +                   'string X;'                                                                                                          + z +
a(3) +                   'int x;'                                                                                                             + z +
a(0)                                                                                                                                          + z +
a(3) +                   'do'                                                                                                                 + z +
a(3) +                   '{'                                                                                                                  + z +
a(4) +                         'System.Console.Write("Enter the {0} value: ", variable);'                                                     + z +
a(4) +                         'X = System.Console.ReadLine();'                                                                               + z +
a(4) +                         'System.Console.WriteLine();'                                                                                  + z +
a(3) +                   '} while (!(int.TryParse(X, out x)));'                                                                               + z +
a(0)                                                                                                                                          + z +
a(3) +                   'return x;'                                                                                                          + z +
a(2) +             '}'                                                                                                                        + z +
a(0)                                                                                                                                          + z +
a(2) +             'static void Main()'                                                                                                       + z +
a(2) +             '{'                                                                                                                        + z +
a(3) +                   'ReadNumber(InputNumber("starting"), InputNumber("ending"));'                                                        + z +
a(2) +             '}'                                                                                                                        + z +
a(1) +       '}'                                                                                                                              + z +
a(0) + '}'                                                                                                                                    + z
);
exerciseThis[12][9] = new ExerciseInfo("12", "9",
"Write a method that takes as a parameter the name of a text file, reads the file and returns its content as string. What should the method do if and exception is thrown?",
a(0) + 'namespace My_First_Text_Reader_Program'                                                                                                                                                                + z +
a(0) + '{'                                                                                                                                                                                                     + z +
a(1) +       'class Program'                                                                                                                                                                                   + z +
a(1) +       '{'                                                                                                                                                                                               + z +
a(2) +             'static void Main()'                                                                                                                                                                        + z +
a(2) +             '{'                                                                                                                                                                                         + z +
a(3) +                   'try'                                                                                                                                                                                 + z +
a(3) +                   '{'                                                                                                                                                                                   + z +
a(4) +                         'string fileContent = '                                                                                                                                                         + z +
a(4) +                         'System.IO.File.ReadAllText(@"C:\\Users\\2700x\\Los Documentos I\\Dropbox\\Los Códigos\\Trabajos V.2\\04 - Learning C#\\C# exercises\\Chapter 12\\Exercise_12.9\\ElFile.txt");' + z +
a(4) +                         'System.Console.WriteLine(fileContent);'                                                                                                                                        + z +
a(3) +                   '}'                                                                                                                                                                                   + z +
a(3) +                   'catch (System.IO.FileNotFoundException e)'                                                                                                                                           + z +
a(3) +                   '{'                                                                                                                                                                                   + z +
a(4) +                         'string answer;'                                                                                                                                                                + z +
a(4) +                         'System.Console.WriteLine(e.Message);'                                                                                                                                          + z +
a(4) +                         'System.Console.WriteLine("More detail?");'                                                                                                                                     + z +
a(4) +                         'answer = System.Console.ReadLine();'                                                                                                                                           + z +
a(0)                                                                                                                                                                                                           + z +
a(4) +                         'if (answer == "y") System.Console.WriteLine(e);'                                                                                                                               + z +
a(3) +                   '}'                                                                                                                                                                                   + z +
a(2) +             '}'                                                                                                                                                                                         + z +
a(1) +       '}'                                                                                                                                                                                               + z +
a(0) + '}'                                                                                                                                                                                                     + z
);
exerciseThis[13] = new Array();
exerciseThis[13][0] = null;
exerciseThis[13][1] = null;
exerciseThis[13][2] = null;
exerciseThis[13][3] = null;
exerciseThis[13][4] = null;
exerciseThis[13][5] = new ExerciseInfo("13", "5",
"Write a program that detects how many times a substring is contained in the text.",
a(0) + 'namespace Detect_Substrings'                                                                                                                      + z +
a(0) + '{'                                                                                                                                                + z +
a(1) +       'class Program'                                                                                                                              + z +
a(1) +       '{'                                                                                                                                          + z +
a(2) +             'static int CountOccurrences(string text, string key)'                                                                                 + z +
a(2) +             '{'                                                                                                                                    + z +
a(3) +                   'int '                                                                                                                           + z +
a(3) +                   'index = text.IndexOf(key, 0),'                                                                                                  + z +
a(3) +                   'count = 0;'                                                                                                                     + z +
a(0)                                                                                                                                                      + z +
a(3) +                   'while (index != -1)'                                                                                                            + z +
a(3) +                   '{'                                                                                                                              + z +
a(4) +                         'count++;'                                                                                                                 + z +
a(4) +                         'index = text.IndexOf(key, ++index);'                                                                                      + z +
a(3) +                   '}'                                                                                                                              + z +
a(0)                                                                                                                                                      + z +
a(3) +                   'return count;'                                                                                                                  + z +
a(2) +             '}'                                                                                                                                    + z +
a(2) +             'static void Main()'                                                                                                                   + z +
a(2) +             '{'                                                                                                                                    + z +
a(3) +                   'string'                                                                                                                         + z +
a(3) +                   'text = "We are living in a yellow submarine. We don\'t have anything else. " +'                                                 + z +
a(3) +                   '"Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",'                       + z +
a(3) +                   'keyword = "in";'                                                                                                                + z +
a(0)                                                                                                                                                      + z +
a(3) +                   'System.Console.WriteLine("\\"{0}\\" appears {1} times.", keyword, CountOccurrences(text.ToLower(), keyword).ToString());'       + z +
a(2) +             '}'                                                                                                                                    + z +
a(1) +       '}'                                                                                                                                          + z +
a(0) + '}'                                                                                                                                                + z
);
exerciseThis[13][6] = new ExerciseInfo("13", "6",
"A text is given. Write a program that modifies the casing of letters to uppercase at all places in the text surrounded by <upcase> and </upcase> tags. Tags cannot be nested.",
a(0) + 'namespace Uppercase'                                                                                                                                                               + z +
a(0) + '{'                                                                                                                                                                                 + z +
a(1) +       'class Program'                                                                                                                                                               + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'static void Main()'                                                                                                                                                    + z +
a(2) +             '{'                                                                                                                                                                     + z +
a(3) +                   'System.Text.StringBuilder '                                                                                                                                      + z +
a(3) +                   'htmlText = new System.Text.StringBuilder("See that <upcase>this is the part</upcase> to <upcase>modify</upcase>.");'                                             + z +
a(3) +                   'string'                                                                                                                                                          + z +
a(3) +                   'openUp = "<upcase>",'                                                                                                                                            + z +
a(3) +                   'closeUp = "</upcase>";'                                                                                                                                          + z +
a(3) +                   'int'                                                                                                                                                             + z +
a(3) +                   'openUpIndex = htmlText.ToString().IndexOf(openUp);'                                                                                                              + z +
a(0)                                                                                                                                                                                       + z +
a(3) +                   'while (openUpIndex != -1)'                                                                                                                                       + z +
a(3) +                   '{'                                                                                                                                                               + z +
a(4) +                         'int'                                                                                                                                                       + z +
a(4) +                         'openUpLastIndex = openUpIndex + openUp.Length - 1,//inclusively'                                                                                           + z +
a(4) +                         'closeUpIndex = htmlText.ToString().IndexOf(closeUp),'                                                                                                      + z +
a(4) +                         'closeUpLastIndex = closeUpIndex + closeUp.Length - 1;//inclusively'                                                                                        + z +
a(0)                                                                                                                                                                                       + z +
a(4) +                         'System.Console.WriteLine("Original text: " + htmlText.ToString());'                                                                                        + z +
a(4) +                         '//for (int i = 0; i < htmlText.Length; i++) System.Console.Write((i % 10).ToString());'                                                                    + z +
a(4) +                         '//System.Console.WriteLine("\\n" + openUp + " starts at {0} ends at {1} while " + closeUp + " starts at {2} and ends at {3}.",'                            + z +
a(4) +                         '//openUpIndex.ToString(), openUpLastIndex.ToString(), closeUpIndex.ToString(), closeUpLastIndex.ToString());'                                              + z +
a(4) +                         'System.Console.WriteLine("Substring within the tags: " + htmlText.ToString().Substring(openUpLastIndex + 1, (closeUpIndex - 1 - openUpLastIndex)));'       + z +
a(0)                                                                                                                                                                                       + z +
a(4) +                         'htmlText.Replace(htmlText.ToString().Substring(openUpLastIndex + 1, (closeUpIndex - 1 - openUpLastIndex)),'                                                + z +
a(4) +                         'htmlText.ToString().Substring(openUpLastIndex + 1, (closeUpIndex - 1 - openUpLastIndex)).ToUpper());'                                                      + z +
a(4) +                         'System.Console.WriteLine("ToUpper() modification: " + htmlText.ToString());'                                                                               + z +
a(0)                                                                                                                                                                                       + z +
a(4) +                         'htmlText.Remove(openUpIndex, openUp.Length);'                                                                                                              + z +
a(4) +                         'htmlText.Remove(closeUpIndex - openUp.Length, closeUp.Length);'                                                                                            + z +
a(4) +                         'System.Console.WriteLine("Without the tags: " + htmlText.ToString());'                                                                                     + z +
a(0)                                                                                                                                                                                       + z +
a(4) +                         'openUpIndex = htmlText.ToString().IndexOf(openUp);'                                                                                                        + z +
a(3) +                   '}'                                                                                                                                                               + z +
a(2) +             '}'                                                                                                                                                                     + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(0) + '}'                                                                                                                                                                                 + z
);
exerciseThis[13][7] = new ExerciseInfo("13", "7",
"Write a program that reads a string from the console (20 characters maximum) and if shorter complements it right with \"*\" to 20 characters.",
a(0) + 'namespace _20_Characters_String'                                                                                              + z +
a(0) + '{'                                                                                                                            + z +
a(1) +       'class Program'                                                                                                          + z +
a(1) +       '{'                                                                                                                      + z +
a(2) +             'static void Main()'                                                                                               + z +
a(2) +             '{'                                                                                                                + z +
a(3) +                   'try'                                                                                                        + z +
a(3) +                   '{'                                                                                                          + z +
a(4) +                         'System.Console.Write("Enter text: ");'                                                                + z +
a(4) +                         'System.Text.StringBuilder text = new System.Text.StringBuilder(System.Console.ReadLine(), 20);'       + z +
a(0)                                                                                                                                  + z +
a(4) +                         'if (text.ToString().Length > 20) throw new System.ArgumentOutOfRangeException();'                     + z +
a(4) +                         'else'                                                                                                 + z +
a(4) +                         '{'                                                                                                    + z +
a(5) +                               'for (int i = text.Length; i < 20; i++) text.Append("*");'                                       + z +
a(4) +                         '}'                                                                                                    + z +
a(0)                                                                                                                                  + z +
a(4) +                         'System.Console.WriteLine("Modify text: " + text.ToString());'                                         + z +
a(0)                                                                                                                                  + z +
a(3) +                   '}'                                                                                                          + z +
a(3) +                   'catch (System.ArgumentOutOfRangeException)'                                                                 + z +
a(3) +                   '{'                                                                                                          + z +
a(4) +                         'System.Console.WriteLine("Text length greater than 20 characters.");'                                 + z +
a(3) +                   '}'                                                                                                          + z +
a(2) +             '}'                                                                                                                + z +
a(1) +       '}'                                                                                                                      + z +
a(0) + '}'                                                                                                                            + z
);
exerciseThis[13][8] = new ExerciseInfo("13", "8",
"Write a program that converts a given string into the form of array of Unicode escape sequences in the format used in the C# language. Sample input: \"Test\". Result: \"\\u0054\\u0065\\u0073\\u0074\".",
a(0) + 'namespace Convert_to_Unicode'                                                                 + z +
a(0) + '{'                                                                                            + z +
a(1) +       'class Program'                                                                          + z +
a(1) +       '{'                                                                                      + z +
a(2) +             'static void Main()'                                                               + z +
a(2) +             '{'                                                                                + z +
a(3) +                   'string e = "Test";'                                                         + z +
a(0)                                                                                                  + z +
a(3) +                   'System.Console.Write("Input: {0} \\t Result: ", e);'                        + z +
a(3) +                   'foreach (char c in e) System.Console.Write("\\\\u{0:x4}", (ushort)c);'      + z +
a(0)                                                                                                  + z +
a(3) +                   'System.Console.WriteLine();'                                                + z +
a(2) +             '}'                                                                                + z +
a(1) +       '}'                                                                                      + z +
a(0) + '}'                                                                                            + z
);
exerciseThis[13][9] = new ExerciseInfo("14", "9",
"Write a program that encrypts a text by applying XOR (excluding or) operation between the given source characters and given cipher code. The encryption should be done by applying XOR between the first letter of the text and the first letter of the code, the second letter of the text and the second letter of the code, etc. until the last letter of the code, then goes back to the first letter of the code and the next letter of the text. Print the result as a series of Unicode escape characters \\xxxx. Sample source text: \"Test\". Sample cipher code: \"ab\". The result should be the following: \"\\u0035\\u0007\\u0012\\u0016\".",
a(0) + 'namespace Encrypts_a_Text'                                                               + z +
a(0) + '{'                                                                                       + z +
a(1) +       'class Program'                                                                     + z +
a(1) +       '{'                                                                                 + z +
a(2) +             'static void Main()'                                                          + z +
a(2) +             '{'                                                                           + z +
a(3) +                   'string '                                                               + z +
a(3) +                   'text = "Test", '                                                       + z +
a(3) +                   'code = "ab";'                                                          + z +
a(0)                                                                                             + z +
a(3) +                   'System.Console.Write("Encrypted text: ");'                             + z +
a(0)                                                                                             + z +
a(3) +                   'for(int i = 0, j = 0; i < text.Length; i++)'                           + z +
a(3) +                   '{'                                                                     + z +
a(4) +                         'System.Console.Write("\\\\u{0:x4}", (text[i] ^ code[j]));'       + z +
a(0)                                                                                             + z +
a(4) +                         'if (j == 1) j = 0;'                                              + z +
a(4) +                         'else j++;'                                                       + z +
a(3) +                   '}'                                                                     + z +
a(0)                                                                                             + z +
a(3) +                   'System.Console.WriteLine();'                                           + z +
a(0)                                                                                             + z +
a(2) +             '}'                                                                           + z +
a(1) +       '}'                                                                                 + z +
a(0) + '}'                                                                                       + z
);
exerciseThis[13][10] = new ExerciseInfo("13", "10",
"Write a program that extracts from a text all sentences that contain a particular word. We accept that the sentences are separated from each other by the character \".\" and the words are separated from one another by a character which is not a letter.",
a(0) + 'namespace Extract_Some_Sentences'                                                                                                         + z +
a(0) + '{'                                                                                                                                        + z +
a(1) +       'class Program'                                                                                                                      + z +
a(1) +       '{'                                                                                                                                  + z +
a(2) +             'static void Main()'                                                                                                           + z +
a(2) +             '{'                                                                                                                            + z +
a(3) +                   'string '                                                                                                                + z +
a(3) +                   'text = "We are living in a yellow submarine. " +'                                                                       + z +
a(3) +                   '"We don\'t have anything else. Inside the submarine is very tight. " +'                                                 + z +
a(3) +                   '"So we are drinking all the day. We will move out of it in 5 days. " +'                                                 + z +
a(3) +                   '"In it I am happy!";'                                                                                                   + z +
a(3) +                   'char[] '                                                                                                                + z +
a(3) +                   'dot = { \'.\' };'                                                                                                       + z +
a(3) +                   'string[] '                                                                                                              + z +
a(3) +                   'piecesOfText = text.Split(dot, System.StringSplitOptions.RemoveEmptyEntries);'                                          + z +
a(0)                                                                                                                                              + z +
a(3) +                   'for (int i = 0; i < piecesOfText.Length; i++)'                                                                          + z +
a(3) +                   '{'                                                                                                                      + z +
a(4) +                         'System.Text.StringBuilder'                                                                                        + z +
a(4) +                         'piece = new System.Text.StringBuilder(piecesOfText[i]);'                                                          + z +
a(4) +                         'int'                                                                                                              + z +
a(4) +                         'index = piece.ToString().ToLower().IndexOf("in");'                                                                + z +
a(0)                                                                                                                                              + z +
a(4) +                         'try'                                                                                                              + z +
a(4) +                         '{'                                                                                                                + z +
a(5) +                               'while (index != -1)'                                                                                        + z +
a(5) +                               '{'                                                                                                          + z +
a(6) +                                     'if (!System.Char.IsLetter(piece[index - 1]) && !System.Char.IsLetter(piece[index + 2]))'              + z +
a(6) +                                     '{'                                                                                                    + z +
a(7) +                                           'System.Console.WriteLine(piece.ToString().TrimStart() + ".");'                                  + z +
a(6) +                                     '}'                                                                                                    + z +
a(0)                                                                                                                                              + z +
a(6) +                                     'index = piece.ToString().ToLower().IndexOf("in", ++index);'                                           + z +
a(5) +                               '}'                                                                                                          + z +
a(4) +                         '}'                                                                                                                + z +
a(4) +                         'catch(System.IndexOutOfRangeException)'                                                                           + z +
a(4) +                         '{'                                                                                                                + z +
a(5) +                               'if (!System.Char.IsLetter(piece[index + 2])) System.Console.WriteLine(piece.ToString() + ".");'             + z +
a(4) +                         '}'                                                                                                                + z +
a(3) +                   '}'                                                                                                                      + z +
a(2) +             '}'                                                                                                                            + z +
a(1) +       '}'                                                                                                                                  + z +
a(0) + '}'                                                                                                                                        + z
);
exerciseThis[13][11] = new ExerciseInfo("13", "11",
"A string is given, composed of several \"forbidden\" words separated by commas. Also a text is given, containing those words. Write a program that replaces the forbidden words with asterisks.",
a(0) + 'namespace Replace_with_astericks'                                                                                                                                                                 + z +
a(0) + '{'                                                                                                                                                                                                + z +
a(1) +       'class Program'                                                                                                                                                                              + z +
a(1) +       '{'                                                                                                                                                                                          + z +
a(2) +             'static void Main()'                                                                                                                                                                   + z +
a(2) +             '{'                                                                                                                                                                                    + z +
a(3) +                   'System.Text.StringBuilder'                                                                                                                                                      + z +
a(3) +                   'text = new System.Text.StringBuilder("Microsoft announced its next generation C# compiler today. It uses advanced parser and special optimizer for the Microsoft CLR."),'       + z +
a(3) +                   'asterisks = new System.Text.StringBuilder();'                                                                                                                                   + z +
a(0)                                                                                                                                                                                                      + z +
a(3) +                   'System.Console.WriteLine(text.ToString());'                                                                                                                                     + z +
a(0)                                                                                                                                                                                                      + z +
a(3) +                   'string[] forbiddenWords = { "C#", "CLR", "Microsoft" };'                                                                                                                        + z +
a(0)                                                                                                                                                                                                      + z +
a(3) +                   'for(int i = 0; i < forbiddenWords.Length; i++)'                                                                                                                                 + z +
a(3) +                   '{'                                                                                                                                                                              + z +
a(4) +                         'for (int s = 0; s < forbiddenWords[i].Length; s++) asterisks.Append("\*");'                                                                                                + z +
a(4) +                         'text.Replace(forbiddenWords[i], asterisks.ToString());'                                                                                                                   + z +
a(4) +                         'asterisks.Clear();'                                                                                                                                                       + z +
a(3) +                   '}'                                                                                                                                                                              + z +
a(0)                                                                                                                                                                                                      + z +
a(3) +                   'System.Console.WriteLine("Modify:\\n" + text.ToString());'                                                                                                                      + z +
a(2) +             '}'                                                                                                                                                                                    + z +
a(1) +       '}'                                                                                                                                                                                          + z +
a(0) + '}'                                                                                                                                                                                                + z
);
exerciseThis[13][12] = null;
exerciseThis[13][13] = new ExerciseInfo("13", "13",
"Write a program that parses an URL in following format: [protocol]://[server]/[resource]. It should extract from the URL the protocol, server and resource parts.",
a(0) + 'namespace Parses_an_URL'                                                                                                                     + z +
a(0) + '{'                                                                                                                                           + z +
a(1) +       'class Program'                                                                                                                         + z +
a(1) +       '{'                                                                                                                                     + z +
a(2) +             'static void Main()'                                                                                                              + z +
a(2) +             '{'                                                                                                                               + z +
a(3) +                   'string'                                                                                                                    + z +
a(3) +                   'url = @"http:/www.cnn.com/video";'                                                                                         + z +
a(3) +                   'Non_Regex.NonRegexClass.NonRegex(url);'                                                                                    + z +
a(3) +                   'System.Console.WriteLine("\\n\\n\\nUsing Regex...");'                                                                      + z +
a(3) +                   'UsingRegex.UsingRegexClass.UseRegex(url);'                                                                                 + z +
a(2) +             '}'                                                                                                                               + z +
a(1) +       '}'                                                                                                                                     + z +
a(0) + '}'                                                                                                                                           + z +
a(0)                                                                                                                                                 + z +
a(0) + 'namespace Non_Regex'                                                                                                                         + z +
a(0) + '{'                                                                                                                                           + z +
a(1) +       'class NonRegexClass'                                                                                                                   + z +
a(1) +       '{'                                                                                                                                     + z +
a(2) +             'public static void NonRegex(string urlText)'                                                                                     + z +
a(2) +             '{'                                                                                                                               + z +
a(3) +                   'char[]'                                                                                                                    + z +
a(3) +                   'seprators = { \':\', \'/\' };'                                                                                             + z +
a(3) +                   'string[]'                                                                                                                  + z +
a(3) +                   'ulrChunks = urlText.Split(seprators, System.StringSplitOptions.RemoveEmptyEntries),'                                       + z +
a(3) +                   'ulrComponents = { "protocol", "server", "resource" };'                                                                     + z +
a(0)                                                                                                                                                 + z +
a(3) +                   'System.Console.WriteLine("URL: " + urlText);'                                                                              + z +
a(3) +                   'for (int i = 0; i < ulrComponents.Length; i++)'                                                                            + z +
a(3) +                   '{'                                                                                                                         + z +
a(4) +                         'System.Console.WriteLine("[{0}]=\\"{1}\\"", ulrComponents[i], ulrChunks[i]);'                                        + z +
a(3) +                   '}'                                                                                                                         + z +
a(2) +             '}'                                                                                                                               + z +
a(1) +       '}'                                                                                                                                     + z +
a(0) + '}'                                                                                                                                           + z +
a(0)                                                                                                                                                 + z +
a(0) + 'namespace UsingRegex'                                                                                                                        + z +
a(0) + '{'                                                                                                                                           + z +
a(1) +       'public class UsingRegexClass'                                                                                                          + z +
a(1) +       '{'                                                                                                                                     + z +
a(2) +             'public static void UseRegex(string urlText)'                                                                                     + z +
a(2) +             '{'                                                                                                                               + z +
a(3) +                   '//http:/www.cnn.com/video'                                                                                                 + z +
a(3) +                   'string '                                                                                                                   + z +
a(3) +                   'urlProtocol = @"\\bhttp\\b",'                                                                                              + z +
a(3) +                   'urlServer = @"\\bw*\\.\\w+\\.\\w+\\b",'                                                                                    + z +
a(3) +                   'urlResource = @"\\b\\w*\\b$",'                                                                                             + z +
a(3) +                   'protocol = System.Text.RegularExpressions.Regex.Match(urlText, urlProtocol).Value,'                                        + z +
a(3) +                   'server = System.Text.RegularExpressions.Regex.Match(urlText, urlServer).Value,'                                            + z +
a(3) +                   'resource = System.Text.RegularExpressions.Regex.Match(urlText, urlResource).Value ;'                                       + z +
a(0)                                                                                                                                                 + z +
a(3) +                   'System.Console.WriteLine("[protocol] = {0}\\n[server] = {1}\\n[resource] = {2}", protocol, server, resource);'             + z +
a(2) +             '}'                                                                                                                               + z +
a(1) +       '}'                                                                                                                                     + z +
a(0) + '}'                                                                                                                                           + z
);
exerciseThis[13][14] = null;
exerciseThis[13][15] = null;
exerciseThis[13][16] = null;
exerciseThis[13][17] = null;
exerciseThis[13][18] = null;
exerciseThis[13][19] = new ExerciseInfo("13", "19",
"Write a program that extracts all e-mail addresses from a text. These are all substrings that are limited on both sides by text end or separator between words and match the shape <sender>@<host>…<domain>.",
a(0) + 'namespace Extract_an_email__First_using_regex_'                                                    + z +
a(0) + '{'                                                                                                 + z +
a(1) +       'class Program'                                                                               + z +
a(1) +       '{'                                                                                           + z +
a(2) +             'static void Main()'                                                                    + z +
a(2) +             '{'                                                                                     + z +
a(3) +                   'string text = "Please contact us by phone (+001 222 222 222) or " +'             + z +
a(3) +                   '"by email at example@gmail.com or at test.user@yahoo.co.uk. This is " +'         + z +
a(3) +                   '"not email: test@test. This also: @gmail.com. Neither this: a@a.b.",'            + z +
a(3) +                   'emailPattern = @"\\b[\\w\\.+-]+@[\\w-]+(\\.[\\w-]+)?\\.\\w{2,}\\b";'             + z +
a(3) +                   'System.Text.RegularExpressions.Regex'                                            + z +
a(3) +                   'rgx = new System.Text.RegularExpressions.Regex(emailPattern);'                   + z +
a(0)                                                                                                       + z +
a(3) +                   'foreach (System.Text.RegularExpressions.Match match in rgx.Matches(text))'       + z +
a(3) +                   'System.Console.WriteLine("Found \'{0}\' at position {1}",'                       + z +
a(3) +                   'match.Value, match.Index);'                                                      + z +
a(2) +             '}'                                                                                     + z +
a(1) +       '}'                                                                                           + z +
a(0) + '}'                                                                                                 + z
);
exerciseThis[13][20] = new ExerciseInfo("13", "20",
"Write a program that extracts from a text all dates written in format DD.MM.YYYY and prints them on the console in the standard format for Canada.",
a(0) + 'namespace Extracts_Date_in_mm.dd.yyyy'                                                                                                         + z +
a(0) + '{'                                                                                                                                             + z +
a(1) +       'class Program'                                                                                                                           + z +
a(1) +       '{'                                                                                                                                       + z +
a(2) +             'static void Main()'                                                                                                                + z +
a(2) +             '{'                                                                                                                                 + z +
a(3) +                   'string'                                                                                                                      + z +
a(3) +                   'text = "I was born at 14.06.1980. My sister was born at 3.7.1984. " +'                                                       + z +
a(3) +                   '"In 5/1999 I graduated my high school. The law says (see section 7.3.12) " +'                                                + z +
a(3) +                   '"that we are allowed to do this (section 7.4.2.9).",'                                                                        + z +
a(3) +                   'dateFormat = @"\\b\\d{1,2}\\.\\d{1,2}\\.\\d{4,4}\\b";'                                                                       + z +
a(0)                                                                                                                                                   + z +
a(3) +                   'foreach(System.Text.RegularExpressions.Match match in System.Text.RegularExpressions.Regex.Matches(text, dateFormat))'       + z +
a(3) +                   'System.Console.WriteLine("Date: {0}", match);'                                                                               + z +
a(2) +             '}'                                                                                                                                 + z +
a(1) +       '}'                                                                                                                                       + z +
a(0) + '}'                                                                                                                                             + z
);
exerciseThis[13][21] = new ExerciseInfo("13", "21",
"Write a program that extracts from a text all words which are palindromes, such as \"ABBA\", \"lamal\", \"exe\".",
a(0) + 'namespace Palindormes_from_a_webpage'                                                                                                                                                                                                                                   + z +
a(0) + '{'                                                                                                                                                                                                                                                                      + z +
a(1) +       'class Program'                                                                                                                                                                                                                                                    + z +
a(1) +       '{'                                                                                                                                                                                                                                                                + z +
a(2) +             'static void Main()'                                                                                                                                                                                                                                         + z +
a(2) +             '{'                                                                                                                                                                                                                                                          + z +
a(3) +                   'string '                                                                                                                                                                                                                                              + z +
a(3) +                   'htmlText = WebpageDownload.DownloadClass.DocHTML("https://www2.cs.arizona.edu/icon/oddsends/palinsen.htm");'                                                                                                                                          + z +
a(3) +                   'System.Text.RegularExpressions.Regex '                                                                                                                                                                                                                + z +
a(3) +                   'html_CODE_NoTags = new System.Text.RegularExpressions.Regex("(?<=(<CODE>)).*(<BR>)(?=(</CODE>))", System.Text.RegularExpressions.RegexOptions.Singleline), //Selects the sentences within the <CODE> and </CODE>. One long string.'                   + z +
a(3) +                   'html_BR_NoTags = new System.Text.RegularExpressions.Regex(".*[^&](?=(<BR>))"); //Selects each sentece. For some reason, [^&] skips empty lines.'                                                                                                      + z +
a(3) +                   'System.Text.RegularExpressions.MatchCollection '                                                                                                                                                                                                      + z +
a(3) +                   'matches = html_BR_NoTags.Matches(html_CODE_NoTags.Match(htmlText).Value); //All Lines(Matches)! Individual strings.'                                                                                                                                  + z +
a(3) +                   'System.Text.StringBuilder[] '                                                                                                                                                                                                                         + z +
a(3) +                   'lines = new System.Text.StringBuilder[matches.Count]; //To store all lines (matches).'                                                                                                                                                                + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(3) +                   '//Cleaning all lines.'                                                                                                                                                                                                                                + z +
a(3) +                   '//Takes out """ and the tag "<BR>".'                                                                                                                                                                                                                  + z +
a(3) +                   'for (int i = 0; i < matches.Count; i++)'                                                                                                                                                                                                              + z +
a(3) +                   '{'                                                                                                                                                                                                                                                    + z +
a(4) +                         'lines[i] = new System.Text.StringBuilder(); //Creates the object StringBuilder to store a line from the Matches.'                                                                                                                               + z +
a(4) +                         'lines[i].Append(matches[i]); //Stores the line \'i\'.'                                                                                                                                                                                          + z +
a(4) +                         'lines[i].Replace(""", ""); //Drops """.'                                                                                                                                                                                                        + z +
a(4) +                         'lines[i].Replace("<BR>", ""); //Drops "<BR>".'                                                                                                                                                                                                  + z +
a(3) +                   '}'                                                                                                                                                                                                                                                    + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(3) +                   'System.Text.RegularExpressions.Regex'                                                                                                                                                                                                                 + z +
a(3) +                   'aWord = new System.Text.RegularExpressions.Regex(@"\\b[\\w\']+\\b"); //Regex to match a word in a text.'                                                                                                                                              + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(3) +                   'for(int j = 0; j < lines.Length; j++)'                                                                                                                                                                                                                + z +
a(3) +                   '{'                                                                                                                                                                                                                                                    + z +
a(4) +                         'int'                                                                                                                                                                                                                                            + z +
a(4) +                         'lengthOfSentence = System.Text.RegularExpressions.Regex.Match(lines[j].ToString(), @"\\w[?!\\).]?\\)?$").Index, '                                                                                                                               + z +
a(4) +                         'pos = 0,'                                                                                                                                                                                                                                       + z +
a(4) +                         'wordCounter = 1;'                                                                                                                                                                                                                               + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(4) +                         'System.Console.WriteLine("Sentence #{0}: {1}", (j + 1).ToString(), lines[j].ToString().Trim());'                                                                                                                                                + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(4) +                         'while(pos < lengthOfSentence)'                                                                                                                                                                                                                  + z +
a(4) +                         '{'                                                                                                                                                                                                                                              + z +
a(5) +                               'System.Text.StringBuilder'                                                                                                                                                                                                                + z +
a(5) +                               'sentence = new System.Text.StringBuilder(lines[j].ToString()),'                                                                                                                                                                           + z +
a(5) +                               'word = new System.Text.StringBuilder(aWord.Match(sentence.ToString(), pos).Value.ToString());'                                                                                                                                            + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(5) +                               'System.Console.Write("Word #{0}: {1}", wordCounter.ToString(), word);'                                                                                                                                                                    + z +
a(5) +                               'System.Console.WriteLine("\\t" + CheckPalindrome(word.ToString()));'                                                                                                                                                                      + z +
a(5) +                               'pos = sentence.ToString().IndexOf(word.ToString(), pos) + word.Length;'                                                                                                                                                                   + z +
a(5) +                               'wordCounter++;'                                                                                                                                                                                                                           + z +
a(4) +                         '}'                                                                                                                                                                                                                                              + z +
a(4) +                         'System.Console.WriteLine();'                                                                                                                                                                                                                    + z +
a(3) +                   '}'                                                                                                                                                                                                                                                    + z +
a(2) +             '}'                                                                                                                                                                                                                                                          + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(2) +             'static string CheckPalindrome(string word)'                                                                                                                                                                                                                 + z +
a(2) +             '{'                                                                                                                                                                                                                                                          + z +
a(3) +                   'int'                                                                                                                                                                                                                                                  + z +
a(3) +                   'leftChar = 0,'                                                                                                                                                                                                                                        + z +
a(3) +                   'rightChar = word.Length - 1;'                                                                                                                                                                                                                         + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(3) +                   'while (char.ToLower(word[leftChar]) == char.ToLower(word[rightChar]))'                                                                                                                                                                                + z +
a(3) +                   '{'                                                                                                                                                                                                                                                    + z +
a(4) +                         'leftChar++;'                                                                                                                                                                                                                                    + z +
a(4) +                         'rightChar--;'                                                                                                                                                                                                                                   + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(4) +                         'if (leftChar >= rightChar) return "Palindrome";'                                                                                                                                                                                                + z +
a(3) +                   '}'                                                                                                                                                                                                                                                    + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(3) +                   'return null;'                                                                                                                                                                                                                                         + z +
a(2) +             '}'                                                                                                                                                                                                                                                          + z +
a(1) +       '}'                                                                                                                                                                                                                                                                + z +
a(0) + '}'                                                                                                                                                                                                                                                                      + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(0) + 'namespace WebpageDownload'                                                                                                                                                                                                                                              + z +
a(0) + '{'                                                                                                                                                                                                                                                                      + z +
a(1) +       'class DownloadClass'                                                                                                                                                                                                                                              + z +
a(1) +       '{'                                                                                                                                                                                                                                                                + z +
a(2) +             'public static string DocHTML(string url)'                                                                                                                                                                                                                   + z +
a(2) +             '{'                                                                                                                                                                                                                                                          + z +
a(3) +                   'try'                                                                                                                                                                                                                                                  + z +
a(3) +                   '{'                                                                                                                                                                                                                                                    + z +
a(4) +                         'System.Net.WebClient client = new System.Net.WebClient();'                                                                                                                                                                                      + z +
a(4) +                         'return client.DownloadString(url);'                                                                                                                                                                                                             + z +
a(3) +                   '}'                                                                                                                                                                                                                                                    + z +
a(3) +                   'catch (System.Net.WebException e)'                                                                                                                                                                                                                    + z +
a(3) +                   '{'                                                                                                                                                                                                                                                    + z +
a(4) +                         'System.Console.WriteLine("Fali!\\n{0}", e.Message.ToString());'                                                                                                                                                                                 + z +
a(3) +                   '}'                                                                                                                                                                                                                                                    + z +
a(0)                                                                                                                                                                                                                                                                            + z +
a(3) +                   'return null;'                                                                                                                                                                                                                                         + z +
a(2) +             '}'                                                                                                                                                                                                                                                          + z +
a(1) +       '}'                                                                                                                                                                                                                                                                + z +
a(0) + '}'                                                                                                                                                                                                                                                                      + z
);
exerciseThis[14] = new Array();
exerciseThis[14][0] = null;
exerciseThis[14][1] = null;
exerciseThis[14][2] = null;
exerciseThis[14][3] = null;
exerciseThis[14][4] = null;
exerciseThis[14][5] = null;
exerciseThis[14][6] = null;
exerciseThis[14][7] = new ExerciseInfo("14", "7",
"Add a static method in class StudentTest, which creates several objects of type Student and store them in static fields. Create a static property of the class to access them. Write a test program, which displays the information about them in the console.",
a(0) + 'class Student'                                                                                                                                                                                                     + z +
a(0) + '{'                                                                                                                                                                                                                 + z +
a(1) +       'public static int '                                                                                                                                                                                          + z +
a(1) +       'numStds = 0;'                                                                                                                                                                                                + z +
a(1) +       'private string'                                                                                                                                                                                              + z +
a(1) +       'name = null, lastName = null, course = null, subject = null, university = null, email = null, phoneNum = null;'                                                                                              + z +
a(0)                                                                                                                                                                                                                       + z +
a(1) +       'public Student() : this("[unknow name]")'                                                                                                                                                                    + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public Student(string name) : this(name, "[unknow lastName]")'                                                                                                                                               + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'this.name = name;'                                                                                                                                                                                     + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public Student(string name, string lastName) : this(name, lastName, "[unknow course]")'                                                                                                                      + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'this.name = name;'                                                                                                                                                                                     + z +
a(2) +             'this.lastName = lastName;'                                                                                                                                                                             + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public Student(string name, string lastName, string course) : this(name, lastName, course, "[unknow subject]")'                                                                                              + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'this.name = name;'                                                                                                                                                                                     + z +
a(2) +             'this.lastName = lastName;'                                                                                                                                                                             + z +
a(2) +             'this.course = course;'                                                                                                                                                                                 + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public Student(string name, string lastName, string course, string subject) : this(name, lastName, course, subject, "[unknow university]")'                                                                  + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'this.name = name;'                                                                                                                                                                                     + z +
a(2) +             'this.lastName = lastName;'                                                                                                                                                                             + z +
a(2) +             'this.course = course;'                                                                                                                                                                                 + z +
a(2) +             'this.subject = subject;'                                                                                                                                                                               + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public Student(string name, string lastName, string course, string subject, string university) : this(name, lastName, course, subject, university, "[unknow email]")'                                        + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'this.name = name;'                                                                                                                                                                                     + z +
a(2) +             'this.lastName = lastName;'                                                                                                                                                                             + z +
a(2) +             'this.course = course;'                                                                                                                                                                                 + z +
a(2) +             'this.subject = subject;'                                                                                                                                                                               + z +
a(2) +             'this.university = university;'                                                                                                                                                                         + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public Student(string name, string lastName, string course, string subject, string university, string email) : this(name, lastName, course, subject, university, email, "[unknow phoneNumber]")'             + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'this.name = name;'                                                                                                                                                                                     + z +
a(2) +             'this.lastName = lastName;'                                                                                                                                                                             + z +
a(2) +             'this.course = course;'                                                                                                                                                                                 + z +
a(2) +             'this.subject = subject;'                                                                                                                                                                               + z +
a(2) +             'this.university = university;'                                                                                                                                                                         + z +
a(2) +             'this.email = email;'                                                                                                                                                                                   + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public Student(string name, string lastName, string course, string subject, string university, string email, string phoneNum)'                                                                               + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'this.name = name;'                                                                                                                                                                                     + z +
a(2) +             'this.lastName = lastName;'                                                                                                                                                                             + z +
a(2) +             'this.course = course;'                                                                                                                                                                                 + z +
a(2) +             'this.subject = subject;'                                                                                                                                                                               + z +
a(2) +             'this.university = university;'                                                                                                                                                                         + z +
a(2) +             'this.email = email;'                                                                                                                                                                                   + z +
a(2) +             'this.phoneNum = phoneNum;'                                                                                                                                                                             + z +
a(0)                                                                                                                                                                                                                       + z +
a(2) +             'numStds++;'                                                                                                                                                                                            + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(0)                                                                                                                                                                                                                       + z +
a(1) +       'public string Name'                                                                                                                                                                                          + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'get { return this.name; }'                                                                                                                                                                             + z +
a(2) +             'set { this.name = value; }'                                                                                                                                                                            + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public string LastName'                                                                                                                                                                                      + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'get { return this.lastName; }'                                                                                                                                                                         + z +
a(2) +             'set { this.lastName = value; }'                                                                                                                                                                        + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public string Course'                                                                                                                                                                                        + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'get { return this.course; }'                                                                                                                                                                           + z +
a(2) +             'set { this.course = value; }'                                                                                                                                                                          + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public string Subject'                                                                                                                                                                                       + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'get { return this.subject; }'                                                                                                                                                                          + z +
a(2) +             'set { this.subject = value; }'                                                                                                                                                                         + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public string University'                                                                                                                                                                                    + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'get { return this.university; }'                                                                                                                                                                       + z +
a(2) +             'set { this.university = value; }'                                                                                                                                                                      + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public string Email'                                                                                                                                                                                         + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'get { return this.email; }'                                                                                                                                                                            + z +
a(2) +             'set { this.email = value; }'                                                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(1) +       'public string PhoneNum'                                                                                                                                                                                      + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'get { return this.phoneNum; }'                                                                                                                                                                         + z +
a(2) +             'set { this.phoneNum = value; }'                                                                                                                                                                        + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(0)                                                                                                                                                                                                                       + z +
a(1) +       'public void StudentInfo()'                                                                                                                                                                                   + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'System.Console.WriteLine('                                                                                                                                                                             + z +
a(2) +             '$"Name: {this.name} {this.lastName}\\n" +'                                                                                                                                                             + z +
a(2) +             '$"Course: {this.course}\\n" +'                                                                                                                                                                         + z +
a(2) +             '$"Subject: {this.subject}\\n" +'                                                                                                                                                                       + z +
a(2) +             '$"University: {this.university}\\n" +'                                                                                                                                                                 + z +
a(2) +             '$"email: {this.email}\\n" +'                                                                                                                                                                           + z +
a(2) +             '$"phone number: {this.phoneNum}");'                                                                                                                                                                    + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(0) + '}'                                                                                                                                                                                                                 + z +
a(0)                                                                                                                                                                                                                       + z +
a(0) + 'public enum Universities { PR, OH };'                                                                                                                                                                              + z +
a(0)                                                                                                                                                                                                                       + z +
a(0) + 'class Program'                                                                                                                                                                                                     + z +
a(0) + '{'                                                                                                                                                                                                                 + z +
a(1) +       'static void Main()'                                                                                                                                                                                          + z +
a(1) +       '{'                                                                                                                                                                                                           + z +
a(2) +             'Student std1 = new Student("eric", "rivera");'                                                                                                                                                         + z +
a(0)                                                                                                                                                                                                                       + z +
a(2) +             'System.Console.WriteLine(std1.Name + " " + std1.LastName);'                                                                                                                                            + z +
a(0)                                                                                                                                                                                                                       + z +
a(2) +             'std1.Name = System.Console.ReadLine();'                                                                                                                                                                + z +
a(0)                                                                                                                                                                                                                       + z +
a(0)                                                                                                                                                                                                                       + z +
a(2) +             'System.Console.WriteLine(std1.Name);'                                                                                                                                                                  + z +
a(0)                                                                                                                                                                                                                       + z +
a(2) +             'System.Console.WriteLine(Student.numStds);'                                                                                                                                                            + z +
a(0)                                                                                                                                                                                                                       + z +
a(2) +             'std1.University = Universities.PR.ToString();'                                                                                                                                                         + z +
a(0)                                                                                                                                                                                                                       + z +
a(2) +             'std1.StudentInfo();'                                                                                                                                                                                   + z +
a(1) +       '}'                                                                                                                                                                                                           + z +
a(0) + '}'                                                                                                                                                                                                                 + z
);
exerciseThis[14][8] = null;
exerciseThis[14][9] = null;
exerciseThis[14][10] = null;
exerciseThis[14][11] = null;
exerciseThis[14][12] = null;
exerciseThis[14][13] = null;
exerciseThis[14][14] = null;
exerciseThis[14][15] = null;
exerciseThis[14][16] = null;
exerciseThis[14][17] = null;
exerciseThis[14][18] = null;
exerciseThis[14][19] = new ExerciseInfo("14", "19",
"Create a class GSMCallHistoryTest, with which to test the functionality of the class GSM, from task 12, as an object of type GSM. Then add to it a few phone calls (Call). Display information about each phone call. Assuming that the price per minute is 0.37, calculate and display the total cost of all calls. Remove the longest conversation from archive with phone calls and calculate the total price for all calls again. Finally, clear the archive.",
a(0) + 'class Cellphone'                                                                                                                                                                   + z +
a(0) + '{'                                                                                                                                                                                 + z +
a(1) +       'public enum Battery { Li_Ion = 100, NiMH = 200, NiCd = 300 }'                                                                                                                + z +
a(1) +       'private Battery battery = default;'                                                                                                                                          + z +
a(1) +       'private string'                                                                                                                                                              + z +
a(1) +       'model = null,'                                                                                                                                                               + z +
a(1) +       'manufacture = null,'                                                                                                                                                         + z +
a(1) +       'price = null,'                                                                                                                                                               + z +
a(1) +       'owner = null,'                                                                                                                                                               + z +
a(1) +       'display = null;'                                                                                                                                                             + z +
a(1) +       'private uint callCounter = 0;'                                                                                                                                               + z +
a(1) +       'public static uint cellphoneCount = 0;'                                                                                                                                      + z +
a(1) +       'private Call[] callHistory = null;'                                                                                                                                          + z +
a(0)                                                                                                                                                                                       + z +
a(1) +       'public Cellphone() : this("[unknow model]")'                                                                                                                                 + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public Cellphone(string model) : this(model, "[unknow manufacture]")'                                                                                                        + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'this.model = model;'                                                                                                                                                   + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public Cellphone(string model, string manufacture) : this(model, manufacture, "[unknow price]")'                                                                             + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'this.model = model;'                                                                                                                                                   + z +
a(2) +             'this.manufacture = manufacture;'                                                                                                                                       + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public Cellphone(string model, string manufacture, string price) : this(model, manufacture, price, "[unknow owner]")'                                                        + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'this.model = model;'                                                                                                                                                   + z +
a(2) +             'this.manufacture = manufacture;'                                                                                                                                       + z +
a(2) +             'this.price = price;'                                                                                                                                                   + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public Cellphone(string model, string manufacture, string price, string owner) : this(model, manufacture, price, owner, "[unknow display]")'                                 + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'this.model = model;'                                                                                                                                                   + z +
a(2) +             'this.manufacture = manufacture;'                                                                                                                                       + z +
a(2) +             'this.price = price;'                                                                                                                                                   + z +
a(2) +             'this.owner = owner;'                                                                                                                                                   + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public Cellphone(string model, string manufacture, string price, string owner, string display) : this(model, manufacture, price, owner, display, default)'                   + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'this.model = model;'                                                                                                                                                   + z +
a(2) +             'this.manufacture = manufacture;'                                                                                                                                       + z +
a(2) +             'this.price = price;'                                                                                                                                                   + z +
a(2) +             'this.owner = owner;'                                                                                                                                                   + z +
a(2) +             'this.display = display;'                                                                                                                                               + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public Cellphone(string model, string manufacture, string price, string owner, string display, Battery battery)'                                                             + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'this.model = model;'                                                                                                                                                   + z +
a(2) +             'this.manufacture = manufacture;'                                                                                                                                       + z +
a(2) +             'this.price = price;'                                                                                                                                                   + z +
a(2) +             'this.owner = owner;'                                                                                                                                                   + z +
a(2) +             'this.display = display;'                                                                                                                                               + z +
a(2) +             'this.battery = battery;'                                                                                                                                               + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'cellphoneCount++;'                                                                                                                                                     + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'callHistory = new Call[3];'                                                                                                                                            + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(0)                                                                                                                                                                                       + z +
a(1) +       'public string Model'                                                                                                                                                         + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'get { return this.model; }'                                                                                                                                            + z +
a(2) +             'set { this.model = value; }'                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public string Manufacture'                                                                                                                                                   + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'get { return this.manufacture; }'                                                                                                                                      + z +
a(2) +             'set { this.manufacture = value; }'                                                                                                                                     + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public string Price'                                                                                                                                                         + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'get { return this.price; }'                                                                                                                                            + z +
a(2) +             'set { this.price = value; }'                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public string Owner'                                                                                                                                                         + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'get { return this.owner; }'                                                                                                                                            + z +
a(2) +             'set { this.owner = value; }'                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public string Display'                                                                                                                                                       + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'get { return this.display; }'                                                                                                                                          + z +
a(2) +             'set { this.display = value; }'                                                                                                                                         + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public Battery BatteryType'                                                                                                                                                  + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'get { return this.battery; }'                                                                                                                                          + z +
a(2) +             'set { this.battery = value; }'                                                                                                                                         + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(0)                                                                                                                                                                                       + z +
a(1) +       'public void printCellInfo()'                                                                                                                                                 + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'System.Console.Write('                                                                                                                                                 + z +
a(2) +             '$"Model: {this.model}\\n" +'                                                                                                                                           + z +
a(2) +             '$"Monufacture: {this.manufacture}\\n" +'                                                                                                                               + z +
a(2) +             '$"Price: {this.price}\\n" +'                                                                                                                                           + z +
a(2) +             '$"Owner: {this.owner}\\n" +'                                                                                                                                           + z +
a(2) +             '$"Display: {this.display}\\n" +'                                                                                                                                       + z +
a(2) +             '$"Battery: {this.battery}\\n"'                                                                                                                                         + z +
a(2) +             ');'                                                                                                                                                                    + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public string CallHistory(Cellphone mobile, uint? i = null)'                                                                                                                 + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'System.Console.WriteLine($"Mobile: {this.model}");'                                                                                                                    + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'if (i != null) return this.callHistory[(int)i].PrintCallInfo();'                                                                                                       + z +
a(2) +             'else'                                                                                                                                                                  + z +
a(2) +             '{'                                                                                                                                                                     + z +
a(3) +                   'System.Text.StringBuilder all = new System.Text.StringBuilder();'                                                                                                + z +
a(0)                                                                                                                                                                                       + z +
a(3) +                   'for(int index = 0; index < this.callHistory.Length; index++)'                                                                                                    + z +
a(3) +                   '{'                                                                                                                                                               + z +
a(4) +                         'all.Append(this.callHistory[index].PrintCallInfo());'                                                                                                      + z +
a(3) +                   '}'                                                                                                                                                               + z +
a(3) +                   'return all.ToString();'                                                                                                                                          + z +
a(2) +             '}'                                                                                                                                                                     + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public void MakeCall(string recipient)//#####################################INDEXES need to push'                                                                           + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'if(this.callHistory[callCounter % 3] != null) this.callHistory[callCounter % 3] = null;'                                                                               + z +
a(2) +             'this.callHistory[callCounter % 3] = new Call(System.DateTime.Now, recipient);'                                                                                         + z +
a(2) +             'this.callCounter++;'                                                                                                                                                   + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public void Hang()'                                                                                                                                                          + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'this.callHistory[(callCounter - 1) % 3].EndTime = System.DateTime.Now.TimeOfDay;'                                                                                      + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public void DeleteAll()'                                                                                                                                                     + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'this.callHistory = null;'                                                                                                                                              + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public void Delete(uint index)'                                                                                                                                              + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'this.callHistory[index] = null;'                                                                                                                                       + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(0) + '}'                                                                                                                                                                                 + z +
a(0)                                                                                                                                                                                       + z +
a(0) + 'class Call'                                                                                                                                                                        + z +
a(0) + '{'                                                                                                                                                                                 + z +
a(1) +       'public static uint callCounter = 0;'                                                                                                                                         + z +
a(1) +       'private string recipient = null;'                                                                                                                                            + z +
a(1) +       'private System.DateTime callDate = default;'                                                                                                                                 + z +
a(1) +       'private System.TimeSpan startTime = default, endTime = default;'                                                                                                             + z +
a(0)                                                                                                                                                                                       + z +
a(1) +       'public Call(System.DateTime callDate, string recipient)'                                                                                                                     + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'callCounter++;'                                                                                                                                                        + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'this.callDate = callDate;'                                                                                                                                             + z +
a(2) +             'this.startTime = callDate.TimeOfDay;'                                                                                                                                  + z +
a(2) +             'this.recipient = recipient;'                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(0)                                                                                                                                                                                       + z +
a(1) +       'public System.TimeSpan EndTime'                                                                                                                                              + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'set { this.endTime = value; }'                                                                                                                                         + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(0)                                                                                                                                                                                       + z +
a(1) +       'public System.TimeSpan callLength()'                                                                                                                                         + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'return this.endTime - this.startTime;'                                                                                                                                 + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(1) +       'public string PrintCallInfo()'                                                                                                                                               + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'return'                                                                                                                                                                + z +
a(2) +             '$"Date: {this.callDate}\\n" +'                                                                                                                                         + z +
a(2) +             '$"Start Time: {this.startTime}\\n" +'                                                                                                                                  + z +
a(2) +             '$"End Time: {this.endTime}\\n" +'                                                                                                                                      + z +
a(2) +             '$"Duration: {this.callLength()}\\n" +'                                                                                                                                 + z +
a(2) +             '$"To: {this.recipient}\\n";'                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(0) + '}'                                                                                                                                                                                 + z +
a(0)                                                                                                                                                                                       + z +
a(0) + 'class Program'                                                                                                                                                                     + z +
a(0) + '{'                                                                                                                                                                                 + z +
a(1) +       'static void Main()'                                                                                                                                                          + z +
a(1) +       '{'                                                                                                                                                                           + z +
a(2) +             'Cellphone cell1 = new Cellphone();'                                                                                                                                    + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'cell1.printCellInfo();'                                                                                                                                                + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'System.Console.WriteLine("Number of cellphones: " + Cellphone.cellphoneCount.ToString());'                                                                             + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'cell1.MakeCall("eric1");'                                                                                                                                              + z +
a(2) +             'cell1.Hang();'                                                                                                                                                         + z +
a(2) +             'cell1.MakeCall("eric2");'                                                                                                                                              + z +
a(2) +             'cell1.Hang();'                                                                                                                                                         + z +
a(2) +             'cell1.MakeCall("eric3");'                                                                                                                                              + z +
a(2) +             'cell1.Hang();'                                                                                                                                                         + z +
a(2) +             'cell1.MakeCall("eric4");'                                                                                                                                              + z +
a(2) +             'cell1.Hang();'                                                                                                                                                         + z +
a(2) +             'System.Console.WriteLine(cell1.CallHistory(cell1, 0));'                                                                                                                + z +
a(2) +             'System.Console.WriteLine(cell1.CallHistory(cell1, 1));'                                                                                                                + z +
a(2) +             'System.Console.WriteLine(cell1.CallHistory(cell1, 2));'                                                                                                                + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'System.Console.WriteLine(cell1.CallHistory(cell1));'                                                                                                                   + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'Cellphone cell2 = new Cellphone("el");'                                                                                                                                + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'cell2.printCellInfo();'                                                                                                                                                + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'System.Console.WriteLine("Number of cellphones: " + Cellphone.cellphoneCount.ToString());'                                                                             + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'cell2.MakeCall("eric1");'                                                                                                                                              + z +
a(2) +             'cell2.Hang();'                                                                                                                                                         + z +
a(2) +             'cell2.MakeCall("eric2");'                                                                                                                                              + z +
a(2) +             'cell2.Hang();'                                                                                                                                                         + z +
a(2) +             'cell2.MakeCall("eric3");'                                                                                                                                              + z +
a(2) +             'cell2.Hang();'                                                                                                                                                         + z +
a(2) +             'cell2.MakeCall("eric4");'                                                                                                                                              + z +
a(2) +             'cell2.Hang();'                                                                                                                                                         + z +
a(2) +             'System.Console.WriteLine(cell2.CallHistory(cell2, 0));'                                                                                                                + z +
a(2) +             'System.Console.WriteLine(cell2.CallHistory(cell2, 1));'                                                                                                                + z +
a(2) +             'System.Console.WriteLine(cell2.CallHistory(cell2, 2));'                                                                                                                + z +
a(0)                                                                                                                                                                                       + z +
a(2) +             'System.Console.WriteLine(cell2.CallHistory(cell2));'                                                                                                                   + z +
a(1) +       '}'                                                                                                                                                                           + z +
a(0) + '}'                                                                                                                                                                                 + z
);
exerciseThis[14][20] = new ExerciseInfo("14", "20",
"There is a book library. Define classes respectively for a book and a library. The library must contain a name and a list of books. The books must contain the title, author, publisher, release date and ISBN-number. In the class, which describes the library, create methods to add a book to the library, to search for a book by a predefined author, to display information about a book and to delete a book from the library.",
(0) + 'class Book'                                                                                                                                            + z +
a(0) + '{'                                                                                                                                                     + z +
a(1) +       'public static uint bookCounter = 0;'                                                                                                             + z +
a(1) +       'private string'                                                                                                                                  + z +
a(1) +       'title = null,'                                                                                                                                   + z +
a(1) +       'author = null,'                                                                                                                                  + z +
a(1) +       'publisher = null,'                                                                                                                               + z +
a(1) +       'isbn = null;'                                                                                                                                    + z +
a(1) +       'private System.DateTime releaseDate = default;'                                                                                                  + z +
a(0)                                                                                                                                                           + z +
a(1) +       'public Book() : this("[unknow title]")'                                                                                                          + z +
a(1) +       '{'                                                                                                                                               + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public Book(string title) : this(title, "[unknow author]")'                                                                                      + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'this.title = title;'                                                                                                                       + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public Book(string title, string author) : this(title, author, "[unknow publisher]")'                                                            + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'this.title = title;'                                                                                                                       + z +
a(2) +             'this.author = author;'                                                                                                                     + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public Book(string title, string author, string publisher) : this(title, author, publisher, "[unknow ISBN]")'                                    + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'this.title = title;'                                                                                                                       + z +
a(2) +             'this.author = author;'                                                                                                                     + z +
a(2) +             'this.publisher = publisher;'                                                                                                               + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public Book(string title, string author, string publisher, string isbn) : this(title, author, publisher, isbn, default)'                         + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'this.title = title;'                                                                                                                       + z +
a(2) +             'this.author = author;'                                                                                                                     + z +
a(2) +             'this.publisher = publisher;'                                                                                                               + z +
a(2) +             'this.isbn = isbn;'                                                                                                                         + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public Book(string title, string author, string publisher, string isbn, System.DateTime releaseDate)'                                            + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'this.title = title;'                                                                                                                       + z +
a(2) +             'this.author = author;'                                                                                                                     + z +
a(2) +             'this.publisher = publisher;'                                                                                                               + z +
a(2) +             'this.isbn = isbn;'                                                                                                                         + z +
a(2) +             'this.releaseDate = releaseDate;'                                                                                                           + z +
a(0)                                                                                                                                                           + z +
a(2) +             'bookCounter++;'                                                                                                                            + z +
a(1) +       '}'                                                                                                                                               + z +
a(0)                                                                                                                                                           + z +
a(1) +       'public string Title'                                                                                                                             + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'get { return this.title; }'                                                                                                                + z +
a(2) +             'set { this.title = value; }'                                                                                                               + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public string Author'                                                                                                                            + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'get { return this.author; }'                                                                                                               + z +
a(2) +             'set { this.author = value; }'                                                                                                              + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public string Publisher'                                                                                                                         + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'get { return this.publisher; }'                                                                                                            + z +
a(2) +             'set { this.publisher = value; }'                                                                                                           + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public string ISBN'                                                                                                                              + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'get { return this.isbn; }'                                                                                                                 + z +
a(2) +             'set { this.isbn = value; }'                                                                                                                + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public System.DateTime ReleaseDate'                                                                                                              + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'get { return this.releaseDate; }'                                                                                                          + z +
a(2) +             'set { this.releaseDate = value; }'                                                                                                         + z +
a(1) +       '}'                                                                                                                                               + z +
a(0) + '}'                                                                                                                                                     + z +
a(0)                                                                                                                                                           + z +
a(0) + 'class Library'                                                                                                                                         + z +
a(0) + '{'                                                                                                                                                     + z +
a(1) +       'private uint bookCounter = 0;'                                                                                                                   + z +
a(1) +       'private const uint LIBCAPACITY = 3;'                                                                                                             + z +
a(1) +       'private readonly string LIBRARYNAME = null;'                                                                                                     + z +
a(1) +       'private Book[] books = null;'                                                                                                                    + z +
a(0)                                                                                                                                                           + z +
a(1) +       'public Library(string libraryName)'                                                                                                              + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'this.LIBRARYNAME = libraryName;'                                                                                                           + z +
a(0)                                                                                                                                                           + z +
a(2) +             'books = new Book[LIBCAPACITY];'                                                                                                            + z +
a(1) +       '}'                                                                                                                                               + z +
a(0)                                                                                                                                                           + z +
a(1) +       'public string LibraryName'                                                                                                                       + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'get { return this.LIBRARYNAME; }'                                                                                                          + z +
a(1) +       '}'                                                                                                                                               + z +
a(0)                                                                                                                                                           + z +
a(1) +       'public void AddBook(Book book)'                                                                                                                  + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'if (bookCounter < LIBCAPACITY)'                                                                                                            + z +
a(2) +             '{'                                                                                                                                         + z +
a(3) +                   'books[bookCounter] = book;'                                                                                                          + z +
a(0)                                                                                                                                                           + z +
a(3) +                   'bookCounter++;'                                                                                                                      + z +
a(2) +             '}'                                                                                                                                         + z +
a(2) +             'else System.Console.WriteLine("Sorry library is full.");'                                                                                  + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public void RemoveBook(uint location)'                                                                                                           + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'if (location >= 0 && location <= 2)'                                                                                                       + z +
a(2) +             '{'                                                                                                                                         + z +
a(3) +                   'books[location] = null;'                                                                                                             + z +
a(0)                                                                                                                                                           + z +
a(3) +                   'for (int i = 0; i < bookCounter - 1; i++) books[i] = books[i + 1];'                                                                  + z +
a(0)                                                                                                                                                           + z +
a(3) +                   'bookCounter--;'                                                                                                                      + z +
a(2) +             '}'                                                                                                                                         + z +
a(2) +             'else System.Console.WriteLine("Invalid location.");'                                                                                       + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public void SearchByAuthor(string author)'                                                                                                       + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'bool found = false;'                                                                                                                       + z +
a(0)                                                                                                                                                           + z +
a(2) +             'for(int i = 0; i < bookCounter; i++)'                                                                                                      + z +
a(2) +             '{'                                                                                                                                         + z +
a(3) +                   'if (books[i].Author == author)'                                                                                                      + z +
a(3) +                   '{'                                                                                                                                   + z +
a(4) +                         'System.Console.WriteLine("Book found in location number {0}.", i.ToString());'                                                 + z +
a(4) +                         'found = true;'                                                                                                                 + z +
a(4) +                         'break;'                                                                                                                        + z +
a(3) +                   '}'                                                                                                                                   + z +
a(2) +             '}'                                                                                                                                         + z +
a(2) +             'if(!found) System.Console.WriteLine("Book not found.");'                                                                                   + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public void BookInfo(uint? location = null)'                                                                                                     + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'if(location == null) for(int i = 0; i < bookCounter; i++) PrintBookInfo(books[i]);'                                                        + z +
a(2) +             'else if (location >= 0 && location <= 2) PrintBookInfo(books[(int)location]);'                                                             + z +
a(2) +             'else System.Console.WriteLine("Invalid location.");'                                                                                       + z +
a(1) +       '}'                                                                                                                                               + z +
a(1) +       'public void PrintBookInfo(Book b)'                                                                                                               + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'System.Console.Write('                                                                                                                     + z +
a(2) +             '$"Title: {b.Title}\\n" +'                                                                                                                  + z +
a(2) +             '$"Author: {b.Author}\\n" +'                                                                                                                + z +
a(2) +             '$"Publisher: {b.Publisher}\\n" +'                                                                                                          + z +
a(2) +             '$"ISBN: {b.ISBN}\\n" +'                                                                                                                    + z +
a(2) +             '$"Release Date: {b.ReleaseDate.ToString()}\\n");'                                                                                          + z +
a(1) +       '}'                                                                                                                                               + z +
a(0) + '}'                                                                                                                                                     + z +
a(0)                                                                                                                                                           + z +
a(0) + 'class Program'                                                                                                                                         + z +
a(0) + '{'                                                                                                                                                     + z +
a(1) +       'static void Main()'                                                                                                                              + z +
a(1) +       '{'                                                                                                                                               + z +
a(2) +             'Library '                                                                                                                                  + z +
a(2) +             'lib1 = new Library("eric"), '                                                                                                              + z +
a(2) +             'lib2 = new Library("ash");'                                                                                                                + z +
a(0)                                                                                                                                                           + z +
a(2) +             'lib1.AddBook(new Book());'                                                                                                                 + z +
a(0)                                                                                                                                                           + z +
a(2) +             'lib2.AddBook(new Book("La Teta", "ashly"));'                                                                                               + z +
a(0)                                                                                                                                                           + z +
a(2) +             'lib1.BookInfo();'                                                                                                                          + z +
a(2) +             'System.Console.WriteLine();'                                                                                                               + z +
a(2) +             'lib2.BookInfo();'                                                                                                                          + z +
a(2) +             'System.Console.WriteLine();'                                                                                                               + z +
a(0)                                                                                                                                                           + z +
a(2) +             'Book elBook = new Book("Rama", "Pepe", "Yauco", "8339", System.DateTime.Now);'                                                             + z +
a(0)                                                                                                                                                           + z +
a(2) +             'lib1.AddBook(elBook);'                                                                                                                     + z +
a(2) +             'lib1.AddBook(elBook);'                                                                                                                     + z +
a(0)                                                                                                                                                           + z +
a(2) +             'lib2.AddBook(elBook);'                                                                                                                     + z +
a(2) +             'lib2.AddBook(new Book("hey!"));'                                                                                                           + z +
a(0)                                                                                                                                                           + z +
a(2) +             'lib1.BookInfo();'                                                                                                                          + z +
a(2) +             'System.Console.WriteLine();'                                                                                                               + z +
a(2) +             'lib2.BookInfo();'                                                                                                                          + z +
a(2) +             'System.Console.WriteLine();'                                                                                                               + z +
a(0)                                                                                                                                                           + z +
a(2) +             'lib1.BookInfo(2);'                                                                                                                         + z +
a(2) +             'System.Console.WriteLine();'                                                                                                               + z +
a(2) +             'lib2.BookInfo(5);'                                                                                                                         + z +
a(2) +             'System.Console.WriteLine();'                                                                                                               + z +
a(2) +             'lib2.BookInfo(0);'                                                                                                                         + z +
a(2) +             'System.Console.WriteLine();'                                                                                                               + z +
a(0)                                                                                                                                                           + z +
a(2) +             'lib2.RemoveBook(90);'                                                                                                                      + z +
a(2) +             'lib2.RemoveBook(0);'                                                                                                                       + z +
a(0)                                                                                                                                                           + z +
a(2) +             'lib2.BookInfo();'                                                                                                                          + z +
a(2) +             'System.Console.WriteLine();'                                                                                                               + z +
a(0)                                                                                                                                                           + z +
a(2) +             'lib1.SearchByAuthor("Pepe");'                                                                                                              + z +
a(2) +             'lib1.SearchByAuthor("ashly");'                                                                                                             + z +
a(0)                                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                               + z +
a(0) + '}'                                                                                                                                                     + z
);
exerciseThis[15] = new Array();
exerciseThis[15][0] = null;
exerciseThis[15][1] = new ExerciseInfo("15", "1",
"Write a program that reads a text file and prints its odd lines on the console.",
a(0) + 'class Program'                                                                                       + z +
a(0) + '{'                                                                                                   + z +
a(1) +       'static void Main()'                                                                            + z +
a(1) +       '{'                                                                                             + z +
a(2) +             'string fileName = "someLines.txt";'                                                      + z +
a(0)                                                                                                         + z +
a(2) +             'try'                                                                                     + z +
a(2) +             '{'                                                                                       + z +
a(3) +                   'System.IO.StreamReader reader = new System.IO.StreamReader(fileName);'             + z +
a(0)                                                                                                         + z +
a(3) +                   'using (reader)'                                                                    + z +
a(3) +                   '{'                                                                                 + z +
a(4) +                         'bool oddLine = true;'                                                        + z +
a(4) +                         'System.Text.StringBuilder line;'                                             + z +
a(0)                                                                                                         + z +
a(4) +                         'do'                                                                          + z +
a(4) +                         '{'                                                                           + z +
a(5) +                               'line = new System.Text.StringBuilder(reader.ReadLine());'              + z +
a(5) +                               'if (oddLine) System.Console.WriteLine(line.ToString());'               + z +
a(5) +                               'oddLine = !oddLine;'                                                   + z +
a(4) +                         '} while (reader.Peek() != -1) ;'                                             + z +
a(3) +                   '}'                                                                                 + z +
a(2) +             '}'                                                                                       + z +
a(2) +             'catch(System.IO.FileNotFoundException)'                                                  + z +
a(2) +             '{'                                                                                       + z +
a(3) +                   'System.Console.WriteLine("Can\'t find the file {0}", fileName);'                   + z +
a(2) +             '}'                                                                                       + z +
a(2) +             'catch(System.IO.IOException)'                                                            + z +
a(2) +             '{'                                                                                       + z +
a(3) +                   'System.Console.WriteLine("It went wrong all the way!");'                           + z +
a(2) +             '}'                                                                                       + z +
a(1) +       '}'                                                                                             + z +
a(0) + '}'                                                                                                   + z
);
exerciseThis[15][2] = new ExerciseInfo("15", "2",
"Write a program that joins two text files and records the results in a third file.",
a(0) + 'class Program'                                                                                                          + z +
a(0) + '{'                                                                                                                      + z +
a(1) +       'static void Main()'                                                                                               + z +
a(1) +       '{'                                                                                                                + z +
a(2) +             'string textOne = "textOne.txt", textTwo = "textTwo.txt";'                                                   + z +
a(0)                                                                                                                            + z +
a(2) +             'try'                                                                                                        + z +
a(2) +             '{'                                                                                                          + z +
a(3) +                   'System.IO.StreamWriter writer = new System.IO.StreamWriter("textThree.txt", false);'                  + z +
a(3) +                   'System.IO.StreamReader readerOne = new System.IO.StreamReader(textOne);'                              + z +
a(3) +                   'System.IO.StreamReader readerTwo = new System.IO.StreamReader(textTwo);'                              + z +
a(0)                                                                                                                            + z +
a(3) +                   'using(readerOne)'                                                                                     + z +
a(3) +                   'using(readerTwo)'                                                                                     + z +
a(3) +                   'using(writer)'                                                                                        + z +
a(3) +                   '{'                                                                                                    + z +
a(4) +                         'writer.WriteLine(readerOne.ReadToEnd().ToString() + "\\n" + readerTwo.ReadToEnd().ToString());' + z +
a(3) +                   '}'                                                                                                    + z +
a(0)                                                                                                                            + z +
a(3) +                   'System.Console.WriteLine("DONE!");'                                                                   + z +
a(2) +             '}'                                                                                                          + z +
a(2) +             'catch'                                                                                                      + z +
a(2) +             '{'                                                                                                          + z +
a(3) +                   'System.Console.WriteLine("Handling the exception(s)!");'                                              + z +
a(2) +             '}'                                                                                                          + z +
a(1) +       '}'                                                                                                                + z +
a(0) + '}'                                                                                                                      + z
);
exerciseThis[15][3] = new ExerciseInfo("15", "3",
"Write a program that reads the contents of a text file and inserts the line numbers at the beginning of each line, then rewrites the file contents.",
a(0) + 'class Program'                                                                                                                           + z +
a(0) + '{'                                                                                                                                       + z +
a(1) +       'static void Main()'                                                                                                                + z +
a(1) +       '{'                                                                                                                                 + z +
a(2) +             'string fileName = "textFile.txt";'                                                                                           + z +
a(0)                                                                                                                                             + z +
a(2) +             'try'                                                                                                                         + z +
a(2) +             '{'                                                                                                                           + z +
a(3) +                   'using(System.IO.StreamReader reader = new System.IO.StreamReader(fileName))'                                           + z +
a(3) +                   '{'                                                                                                                     + z +
a(4) +                         'uint lineCounter = 0;'                                                                                           + z +
a(0)                                                                                                                                             + z +
a(4) +                         'while(reader.Peek() != -1)'                                                                                      + z +
a(4) +                         '{'                                                                                                               + z +
a(5) +                               'lineCounter++;'                                                                                            + z +
a(5) +                               'System.Text.StringBuilder line = new System.Text.StringBuilder(reader.ReadLine().ToString());'             + z +
a(0)                                                                                                                                             + z +
a(5) +                               'using(System.IO.StreamWriter temp = new System.IO.StreamWriter("temp.txt", true))'                         + z +
a(5) +                               '{'                                                                                                         + z +
a(6) +                                     'temp.WriteLine($"Line number {lineCounter.ToString()}: {line.ToString()}");'                         + z +
a(5) +                               '}'                                                                                                         + z +
a(4) +                         '}'                                                                                                               + z +
a(0)                                                                                                                                             + z +
a(3) +                   '}'                                                                                                                     + z +
a(0)                                                                                                                                             + z +
a(3) +                   'if (System.IO.File.Exists("textFileOG.txt")) System.IO.File.Delete("textFileOG.txt");'                                 + z +
a(0)                                                                                                                                             + z +
a(3) +                   'System.IO.File.Copy(fileName, "textFileOG.txt");'                                                                      + z +
a(0)                                                                                                                                             + z +
a(3) +                   'using (System.IO.StreamWriter rewritingReader = new System.IO.StreamWriter(fileName, false))'                          + z +
a(3) +                   '{'                                                                                                                     + z +
a(4) +                         'using (System.IO.StreamReader readingTemp = new System.IO.StreamReader("temp.txt"))'                             + z +
a(4) +                         '{'                                                                                                               + z +
a(5) +                               'rewritingReader.Write(readingTemp.ReadToEnd().ToString());'                                                + z +
a(4) +                         '}'                                                                                                               + z +
a(3) +                   '}'                                                                                                                     + z +
a(3) +                   'System.IO.File.Delete("temp.txt");'                                                                                    + z +
a(2) +             '}'                                                                                                                           + z +
a(2) +             'catch(System.Exception e)'                                                                                                   + z +
a(2) +             '{'                                                                                                                           + z +
a(3) +                   'System.Console.WriteLine("A catch of an exception." + e.Message);'                                                     + z +
a(2) +             '}'                                                                                                                           + z +
a(1) +       '}'                                                                                                                                 + z +
a(0) + '}'                                                                                                                                       + z
);
exerciseThis[15][4] = new ExerciseInfo("15", "4",
"Write a program that compares two text files with the same number of rows line by line and prints the number of equal and the number of different lines.",
a(0) + 'class Program'                                                                                                     + z +
a(0) + '{'                                                                                                                 + z +
a(1) +       'static void Main()'                                                                                          + z +
a(1) +       '{'                                                                                                           + z +
a(2) +             'string fileOne = "fileOne.txt", fileTwo = "fileTwo.txt";'                                              + z +
a(0)                                                                                                                       + z +
a(2) +             'try'                                                                                                   + z +
a(2) +             '{'                                                                                                     + z +
a(3) +                   'using(System.IO.StreamWriter wrtOne = CreateATxtFile(fileOne))'                                  + z +
a(3) +                   'using(System.IO.StreamWriter wrtTwo = CreateATxtFile(fileTwo))'                                  + z +
a(3) +                   '{'                                                                                               + z +
a(4) +                         'WriteThreeRndLines(wrtOne, new System.Random(System.DateTime.Now.Millisecond));'           + z +
a(4) +                         'WriteThreeRndLines(wrtTwo, new System.Random(System.DateTime.Now.Millisecond));'           + z +
a(3) +                   '}'                                                                                               + z +
a(0)                                                                                                                       + z +
a(3) +                   'using(System.IO.StreamReader rdrOne = new System.IO.StreamReader(fileOne))'                      + z +
a(3) +                   'using(System.IO.StreamReader rdrTwo = new System.IO.StreamReader(fileTwo))'                      + z +
a(3) +                   '{'                                                                                               + z +
a(4) +                         'System.Console.WriteLine($"Printed: {fileOne}");'                                          + z +
a(4) +                         'PrintFile(rdrOne);'                                                                        + z +
a(4) +                         'System.Console.WriteLine($"Printed: {fileTwo}");'                                          + z +
a(4) +                         'PrintFile(rdrTwo);'                                                                        + z +
a(3) +                   '}'                                                                                               + z +
a(0)                                                                                                                       + z +
a(3) +                   'using(System.IO.StreamReader txtOne = new System.IO.StreamReader(fileOne))'                      + z +
a(3) +                   'using(System.IO.StreamReader txtTwo = new System.IO.StreamReader(fileTwo))'                      + z +
a(3) +                   '{'                                                                                               + z +
a(4) +                         'while(txtOne.Peek() != -1 || txtTwo.Peek() != -1)'                                         + z +
a(4) +                         '{'                                                                                         + z +
a(5) +                               'if (txtOne.ReadLine() == txtTwo.ReadLine()) System.Console.WriteLine("Equal.");'     + z +
a(5) +                               'else System.Console.WriteLine("Not equal.");'                                        + z +
a(4) +                         '}'                                                                                         + z +
a(3) +                   '}'                                                                                               + z +
a(2) +             '}'                                                                                                     + z +
a(2) +             'catch'                                                                                                 + z +
a(2) +             '{'                                                                                                     + z +
a(3) +                   'System.Console.WriteLine("Handling errors.");'                                                   + z +
a(2) +             '}'                                                                                                     + z +
a(1) +       '}'                                                                                                           + z +
a(0)                                                                                                                       + z +
a(1) +       'static System.IO.StreamWriter CreateATxtFile(string path)'                                                   + z +
a(1) +       '{'                                                                                                           + z +
a(2) +             'if (System.IO.File.Exists(path)) System.IO.File.Delete(path);'                                         + z +
a(0)                                                                                                                       + z +
a(2) +             'return new System.IO.StreamWriter(path);'                                                              + z +
a(1) +       '}'                                                                                                           + z +
a(0)                                                                                                                       + z +
a(1) +       'static void WriteThreeRndLines(System.IO.StreamWriter writer, System.Random rnd)'                            + z +
a(1) +       '{'                                                                                                           + z +
a(2) +             'byte counter = 0;'                                                                                     + z +
a(0)                                                                                                                       + z +
a(2) +             'while (counter < 3)'                                                                                   + z +
a(2) +             '{'                                                                                                     + z +
a(3) +                   'writer.WriteLine(rnd.Next(3));'                                                                  + z +
a(3) +                   'counter++;'                                                                                      + z +
a(2) +             '}'                                                                                                     + z +
a(0)                                                                                                                       + z +
a(2) +             'writer.Dispose();'                                                                                     + z +
a(2) +             'writer.Close();'                                                                                       + z +
a(1) +       '}'                                                                                                           + z +
a(0)                                                                                                                       + z +
a(1) +       'static void PrintFile(System.IO.StreamReader reader)'                                                        + z +
a(1) +       '{'                                                                                                           + z +
a(2) +             'while (reader.Peek() != -1) System.Console.WriteLine(reader.ReadLine().ToString());'                   + z +
a(0)                                                                                                                       + z +
a(2) +             'reader.Dispose();'                                                                                     + z +
a(2) +             'reader.Close();'                                                                                       + z +
a(1) +       '}'                                                                                                           + z +
a(0) + '}'                                                                                                                 + z
);
exerciseThis[15][5] = new ExerciseInfo("15", "5",
"Write a program that reads a square matrix of integers from a file and finds the sub-matrix with size 2 × 2 that has the maximal sum and writes this sum to a separate text file. The first line of input file contains the size of the recorded matrix (N). The next N lines contain N integers separated by spaces.",
a(0) + 'class Matrix'                                                                                                                                           + z +
a(0) + '{'                                                                                                                                                      + z +
a(1) +       'public Matrix(int N)'                                                                                                                             + z +
a(1) +       '{'                                                                                                                                                + z +
a(2) +             'this.Create(N);'                                                                                                                            + z +
a(1) +       '}'                                                                                                                                                + z +
a(0)                                                                                                                                                            + z +
a(1) +       'private void Create(int N)'                                                                                                                       + z +
a(1) +       '{'                                                                                                                                                + z +
a(2) +             'if (System.IO.File.Exists("MatrixFile.txt")) System.IO.File.Delete("MatrixFile.txt");'                                                      + z +
a(0)                                                                                                                                                            + z +
a(2) +             'System.Random rnd = new System.Random();'                                                                                                   + z +
a(0)                                                                                                                                                            + z +
a(2) +             'using (System.IO.StreamWriter matrix = new System.IO.StreamWriter("MatrixFile.txt"))'                                                       + z +
a(2) +             '{'                                                                                                                                          + z +
a(3) +                   'for(int i = 0; i < N; i++)'                                                                                                           + z +
a(3) +                   '{'                                                                                                                                    + z +
a(4) +                         'for (int j = 0; j < N; j++)'                                                                                                    + z +
a(4) +                         '{'                                                                                                                              + z +
a(5) +                               'matrix.Write(rnd.Next(20).ToString() + ((j == N - 1) ? "\\n" : " "));'                                                    + z +
a(4) +                         '}'                                                                                                                              + z +
a(3) +                   '}'                                                                                                                                    + z +
a(2) +             '}'                                                                                                                                          + z +
a(1) +       '}'                                                                                                                                                + z +
a(0) + '}'                                                                                                                                                      + z +
a(0)                                                                                                                                                            + z +
a(0) + 'class Program'                                                                                                                                          + z +
a(0) + '{'                                                                                                                                                      + z +
a(1) +       'static int[,] GSumMatrix = null;'                                                                                                                 + z +
a(1) +       'static int theSum = 0;'                                                                                                                           + z +
a(1) +       'static void Main()'                                                                                                                               + z +
a(1) +       '{'                                                                                                                                                + z +
a(2) +             'System.Console.Write("Size: ");'                                                                                                            + z +
a(2) +             'int size = System.Convert.ToInt16(System.Console.ReadLine());'                                                                              + z +
a(2) +             'try'                                                                                                                                        + z +
a(2) +             '{'                                                                                                                                          + z +
a(3) +                   'Matrix matrixObj = new Matrix(size);'                                                                                                 + z +
a(3) +                   'int[,] matrixArr = new int[size, size];'                                                                                              + z +
a(3) +                   'System.Console.WriteLine("Opiening...");'                                                                                             + z +
a(3) +                   'System.Diagnostics.Process.Start("MatrixFile.txt");'                                                                                  + z +
a(0)                                                                                                                                                            + z +
a(3) +                   'using (System.IO.StreamReader reader = new System.IO.StreamReader("MatrixFile.txt"))'                                                 + z +
a(3) +                   '{'                                                                                                                                    + z +
a(4) +                         'int row = 0;'                                                                                                                   + z +
a(4) +                         'while (reader.Peek() != -1)'                                                                                                    + z +
a(4) +                         '{'                                                                                                                              + z +
a(5) +                               'System.Text.StringBuilder rowLine = new System.Text.StringBuilder(reader.ReadLine().ToString());'                         + z +
a(5) +                               'System.Console.WriteLine(/*$"ROW: {*/rowLine/*}"*/);'                                                                     + z +
a(5) +                               'string[] entries = rowLine.ToString().Split(\' \', \'\\n\');'                                                             + z +
a(5) +                               'for (int col = 0; col < matrixArr.GetLength(0); col++)'                                                                   + z +
a(5) +                               '{'                                                                                                                        + z +
a(6) +                                     '//System.Console.WriteLine($"[{row}, {col}] = {entries[col]}");'                                                    + z +
a(6) +                                     'matrixArr[row, col] = System.Convert.ToInt32(entries[col]);'                                                        + z +
a(5) +                               '}'                                                                                                                        + z +
a(5) +                               'row++;'                                                                                                                   + z +
a(4) +                         '}'                                                                                                                              + z +
a(3) +                   '}'                                                                                                                                    + z +
a(0)                                                                                                                                                            + z +
a(3) +                   'if (size > 2) SubMatrixes(matrixArr, size);'                                                                                          + z +
a(3) +                   'else'                                                                                                                                 + z +
a(3) +                   '{'                                                                                                                                    + z +
a(4) +                         'GSumMatrix = matrixArr;'                                                                                                        + z +
a(4) +                         'theSum = GreatestEntriesSum(matrixArr);'                                                                                        + z +
a(3) +                   '}'                                                                                                                                    + z +
a(0)                                                                                                                                                            + z +
a(3) +                   'System.Console.WriteLine($"2D Sub-Matrix with greatest sum of {theSum} is...");'                                                      + z +
a(3) +                   'PrintMatrix(GSumMatrix);'                                                                                                             + z +
a(2) +             '}'                                                                                                                                          + z +
a(2) +             'catch (System.Exception e)'                                                                                                                 + z +
a(2) +             '{'                                                                                                                                          + z +
a(3) +                   'System.Console.WriteLine("Problem: {0}", e);'                                                                                         + z +
a(2) +             '}'                                                                                                                                          + z +
a(1) +       '}'                                                                                                                                                + z +
a(0)                                                                                                                                                            + z +
a(1) +       'static void PrintMatrix(int[,] mtx)'                                                                                                              + z +
a(1) +       '{'                                                                                                                                                + z +
a(2) +             'for (int i = 0; i < mtx.GetLength(0); i++)'                                                                                                 + z +
a(2) +             '{'                                                                                                                                          + z +
a(3) +                   'for (int j = 0; j < mtx.GetLength(1); j++)'                                                                                           + z +
a(3) +                   '{'                                                                                                                                    + z +
a(4) +                         'System.Console.Write(mtx[i, j].ToString() + ((j == mtx.GetLength(1) - 1) ? "\\n" : " "));'                                      + z +
a(3) +                   '}'                                                                                                                                    + z +
a(2) +             '}'                                                                                                                                          + z +
a(1) +       '}'                                                                                                                                                + z +
a(0)                                                                                                                                                            + z +
a(0)                                                                                                                                                            + z +
a(1) +       'static int GreatestEntriesSum(int[,] mtx)'                                                                                                        + z +
a(1) +       '{'                                                                                                                                                + z +
a(2) +             'int sum = 0;'                                                                                                                               + z +
a(0)                                                                                                                                                            + z +
a(2) +             'for (int i = 0; i < mtx.GetLength(0); i++)'                                                                                                 + z +
a(2) +             '{'                                                                                                                                          + z +
a(3) +                   'for (int j = 0; j < mtx.GetLength(1); j++)'                                                                                           + z +
a(3) +                   '{'                                                                                                                                    + z +
a(4) +                         'sum += mtx[i, j];'                                                                                                              + z +
a(3) +                   '}'                                                                                                                                    + z +
a(2) +             '}'                                                                                                                                          + z +
a(0)                                                                                                                                                            + z +
a(2) +             'return sum;'                                                                                                                                + z +
a(1) +       '}'                                                                                                                                                + z +
a(0)                                                                                                                                                            + z +
a(1) +       'static void SubMatrixes(int[,] matrix, int size)'                                                                                                 + z +
a(1) +       '{'                                                                                                                                                + z +
a(2) +             'int skipRow = 0, skipCol = matrix.GetLength(1) - 1;'                                                                                        + z +
a(2) +             'int[,] subMatrix = new int[size - 1, size - 1];'                                                                                            + z +
a(0)                                                                                                                                                            + z +
a(2) +             'while (skipRow < matrix.GetLength(0))'                                                                                                      + z +
a(2) +             '{'                                                                                                                                          + z +
a(3) +                   'while (skipCol >= 0)'                                                                                                                 + z +
a(3) +                   '{'                                                                                                                                    + z +
a(4) +                         '//System.Console.WriteLine($"Sub matrix {size - 1} X {size - 1}...");'                                                          + z +
a(4) +                         'int subRow = 0, subCol = 0;'                                                                                                    + z +
a(4) +                         'for (int row = 0; row < matrix.GetLength(0); row++)'                                                                            + z +
a(4) +                         '{'                                                                                                                              + z +
a(5) +                               'if (row == skipRow) continue;'                                                                                            + z +
a(5) +                               'else'                                                                                                                     + z +
a(5) +                               '{'                                                                                                                        + z +
a(0)                                                                                                                                                            + z +
a(6) +                                     'for (int col = 0; col < matrix.GetLength(1); col++)'                                                                + z +
a(6) +                                     '{'                                                                                                                  + z +
a(7) +                                           'if (col == skipCol) continue;'                                                                                + z +
a(7) +                                           'else'                                                                                                         + z +
a(7) +                                           '{'                                                                                                            + z +
a(8) +                                                 'subMatrix[subRow, subCol] = matrix[row, col];'                                                          + z +
a(8) +                                                 'subCol++;'                                                                                              + z +
a(8) +                                                 'if (subCol == subMatrix.GetLength(1))'                                                                  + z +
a(8) +                                                 '{'                                                                                                      + z +
a(9) +                                                       'subRow++;'                                                                                        + z +
a(9) +                                                       'subCol = 0;'                                                                                      + z +
a(8) +                                                 '}'                                                                                                      + z +
a(7) +                                           '}'                                                                                                            + z +
a(6) +                                     '}'                                                                                                                  + z +
a(5) +                               '}'                                                                                                                        + z +
a(4) +                         '}'                                                                                                                              + z +
a(4) +                         '//PrintMatrix(subMatrix);'                                                                                                      + z +
a(4) +                         'if (subMatrix.GetLength(0) > 2) SubMatrixes(subMatrix, size - 1);'                                                              + z +
a(4) +                         'else if (theSum < GreatestEntriesSum(subMatrix))'                                                                               + z +
a(4) +                         '{'                                                                                                                              + z +
a(5) +                               'GSumMatrix = new int[subMatrix.GetLength(0), subMatrix.GetLength(1)];'                                                    + z +
a(5) +                               'for (int i = 0; i < subMatrix.GetLength(0); i++)'                                                                         + z +
a(5) +                               '{'                                                                                                                        + z +
a(6) +                                     'for (int j = 0; j < subMatrix.GetLength(1); j++)'                                                                   + z +
a(6) +                                     '{'                                                                                                                  + z +
a(7) +                                           'GSumMatrix[i, j] = subMatrix[i, j];'                                                                          + z +
a(6) +                                     '}'                                                                                                                  + z +
a(5) +                               '}'                                                                                                                        + z +
a(5) +                               'theSum = GreatestEntriesSum(GSumMatrix);'                                                                                 + z +
a(4) +                         '}'                                                                                                                              + z +
a(4) +                         'skipCol--;'                                                                                                                     + z +
a(3) +                   '}'                                                                                                                                    + z +
a(3) +                   'skipRow++;'                                                                                                                           + z +
a(3) +                   'skipCol = matrix.GetLength(1) - 1;'                                                                                                   + z +
a(2) +             '}'                                                                                                                                          + z +
a(1) +       '}'                                                                                                                                                + z +
a(0) + '}'                                                                                                                                                      + z
);
exerciseThis[15][6] = new ExerciseInfo("15", "6",
"Write a program that reads a list of names from a text file, arranges them in alphabetical order, and writes them to another file. The lines are written one per row.",
a(0) + 'class Reader'                                                                                                                                      + z +
a(0) + '{'                                                                                                                                                 + z +
a(1) +       'private readonly uint numOfLines = 0;'                                                                                                       + z +
a(1) +       'private readonly string path = null;'                                                                                                        + z +
a(1) +       'private string[] arrayList = null;'                                                                                                          + z +
a(0)                                                                                                                                                       + z +
a(1) +       'public Reader(string path)'                                                                                                                  + z +
a(1) +       '{'                                                                                                                                           + z +
a(2) +             'this.path = path;'                                                                                                                     + z +
a(2) +             'this.numOfLines = LineCounter();'                                                                                                      + z +
a(1) +       '}'                                                                                                                                           + z +
a(0)                                                                                                                                                       + z +
a(1) +       'public string GetPath'                                                                                                                       + z +
a(1) +       '{'                                                                                                                                           + z +
a(2) +             'get { return this.path; }'                                                                                                             + z +
a(1) +       '}'                                                                                                                                           + z +
a(1) +       'public uint GetNumberOfLines'                                                                                                                + z +
a(1) +       '{'                                                                                                                                           + z +
a(2) +             'get { return this.numOfLines; }'                                                                                                       + z +
a(1) +       '}'                                                                                                                                           + z +
a(0)                                                                                                                                                       + z +
a(1) +       'public string[] GetArrayList'                                                                                                                + z +
a(1) +       '{'                                                                                                                                           + z +
a(2) +             'get { return this.arrayList; }'                                                                                                        + z +
a(1) +       '}'                                                                                                                                           + z +
a(0)                                                                                                                                                       + z +
a(1) +       'private uint LineCounter()'                                                                                                                  + z +
a(1) +       '{'                                                                                                                                           + z +
a(2) +             'uint counter = 0;'                                                                                                                     + z +
a(0)                                                                                                                                                       + z +
a(2) +             'using (System.IO.StreamReader read = new System.IO.StreamReader(this.path))'                                                           + z +
a(2) +             '{'                                                                                                                                     + z +
a(3) +                   'while (read.ReadLine() != null) counter++;'                                                                                      + z +
a(2) +             '}'                                                                                                                                     + z +
a(0)                                                                                                                                                       + z +
a(2) +             'return counter;'                                                                                                                       + z +
a(1) +       '}'                                                                                                                                           + z +
a(0)                                                                                                                                                       + z +
a(1) +       'public void SeeText()'                                                                                                                       + z +
a(1) +       '{'                                                                                                                                           + z +
a(2) +             'using (System.IO.StreamReader read = new System.IO.StreamReader(this.path))'                                                           + z +
a(2) +             '{'                                                                                                                                     + z +
a(3) +                   'while (read.Peek() != -1) System.Console.WriteLine(read.ReadLine().ToString());'                                                 + z +
a(2) +             '}'                                                                                                                                     + z +
a(1) +       '}'                                                                                                                                           + z +
a(0)                                                                                                                                                       + z +
a(1) +       'public void ToArray()'                                                                                                                       + z +
a(1) +       '{'                                                                                                                                           + z +
a(2) +             'uint i = 0;'                                                                                                                           + z +
a(0)                                                                                                                                                       + z +
a(2) +             'this.arrayList = new string[this.numOfLines];'                                                                                         + z +
a(0)                                                                                                                                                       + z +
a(2) +             'using (System.IO.StreamReader read = new System.IO.StreamReader(this.path))'                                                           + z +
a(2) +             '{'                                                                                                                                     + z +
a(3) +                   'while (read.Peek() != -1)'                                                                                                       + z +
a(3) +                   '{'                                                                                                                               + z +
a(4) +                         'this.arrayList[i] = read.ReadLine().ToString();'                                                                           + z +
a(4) +                         'i++;'                                                                                                                      + z +
a(3) +                   '}'                                                                                                                               + z +
a(2) +             '}'                                                                                                                                     + z +
a(1) +       '}'                                                                                                                                           + z +
a(0)                                                                                                                                                       + z +
a(1) +       'public void Sort()'                                                                                                                          + z +
a(1) +       '{'                                                                                                                                           + z +
a(2) +             'for(int i = 0; i < this.arrayList.Length - 1; i++)'                                                                                    + z +
a(2) +             '{'                                                                                                                                     + z +
a(3) +                   'for (int j = i + 1; j < this.arrayList.Length; j++)'                                                                             + z +
a(3) +                   '{'                                                                                                                               + z +
a(4) +                         'int idx = 0, aLength = this.arrayList[i].Length, bLength = this.arrayList[j].Length;'                                      + z +
a(4) +                         'char a = this.arrayList[i][idx], b = this.arrayList[j][idx];'                                                              + z +
a(0)                                                                                                                                                       + z +
a(4) +                         'while(a == b)'                                                                                                             + z +
a(4) +                         '{'                                                                                                                         + z +
a(5) +                               '//System.Console.WriteLine($"a: {a} b: {b}");'                                                                       + z +
a(0)                                                                                                                                                       + z +
a(5) +                               'idx++;'                                                                                                              + z +
a(0)                                                                                                                                                       + z +
a(5) +                               'if(idx == System.Math.Min(aLength, bLength) - 1)'                                                                    + z +
a(5) +                               '{'                                                                                                                   + z +
a(6) +                                     'if (aLength > bLength) GrabPushPlace(i, j);'                                                                   + z +
a(6) +                                     'break;'                                                                                                        + z +
a(5) +                               '}'                                                                                                                   + z +
a(5) +                               'else'                                                                                                                + z +
a(5) +                               '{'                                                                                                                   + z +
a(6) +                                     'a = this.arrayList[i][idx];'                                                                                   + z +
a(6) +                                     'b = this.arrayList[j][idx];'                                                                                   + z +
a(5) +                               '}'                                                                                                                   + z +
a(4) +                         '}'                                                                                                                         + z +
a(0)                                                                                                                                                       + z +
a(0)                                                                                                                                                       + z +
a(4) +                         'if (a > b) GrabPushPlace(i, j);'                                                                                           + z +
a(3) +                   '}'                                                                                                                               + z +
a(2) +             '}'                                                                                                                                     + z +
a(0)                                                                                                                                                       + z +
a(2) +             'void GrabPushPlace(int i, int j)'                                                                                                      + z +
a(2) +             '{'                                                                                                                                     + z +
a(3) +                   '//System.Console.WriteLine($"i: {i} j: {j}\\n" +'                                                                                + z +
a(3) +                   '//$"array[i] = {this.arrayList[i]}\\n" +'                                                                                        + z +
a(3) +                   '//$"array[j] = {this.arrayList[j]}");'                                                                                           + z +
a(3) +                   '//Grab'                                                                                                                          + z +
a(3) +                   'string first = this.arrayList[j];'                                                                                               + z +
a(3) +                   'int minIdx = j;'                                                                                                                 + z +
a(0)                                                                                                                                                       + z +
a(3) +                   '//Push'                                                                                                                          + z +
a(3) +                   'while (minIdx > i)'                                                                                                              + z +
a(3) +                   '{'                                                                                                                               + z +
a(4) +                         'this.arrayList[minIdx] = this.arrayList[minIdx - 1];'                                                                      + z +
a(4) +                         'minIdx--;'                                                                                                                 + z +
a(3) +                   '}'                                                                                                                               + z +
a(0)                                                                                                                                                       + z +
a(3) +                   '//Place'                                                                                                                         + z +
a(3) +                   'this.arrayList[i] = first;'                                                                                                      + z +
a(2) +             '}'                                                                                                                                     + z +
a(0)                                                                                                                                                       + z +
a(2) +             'System.Console.WriteLine("Sorted...");'                                                                                                + z +
a(2) +             'foreach (string str in this.arrayList) System.Console.WriteLine(str);'                                                                 + z +
a(1) +       '}'                                                                                                                                           + z +
a(0)                                                                                                                                                       + z +
a(1) +       'public void SaveAsTxt()'                                                                                                                     + z +
a(1) +       '{'                                                                                                                                           + z +
a(2) +             'if (System.IO.File.Exists("List of Names (Sorted).txt")) System.IO.File.Delete("List of Names (Sorted).txt");'                         + z +
a(0)                                                                                                                                                       + z +
a(2) +             'using(System.IO.StreamWriter write = new System.IO.StreamWriter("List of Names (Sorted).txt"))'                                        + z +
a(2) +             '{'                                                                                                                                     + z +
a(3) +                   'for(int i = 0; i < this.arrayList.Length; i++) write.WriteLine(arrayList[i]);'                                                   + z +
a(2) +             '}'                                                                                                                                     + z +
a(1) +       '}'                                                                                                                                           + z +
a(0) + '}'                                                                                                                                                 + z +
a(0)                                                                                                                                                       + z +
a(0) + 'class Program'                                                                                                                                     + z +
a(0) + '{'                                                                                                                                                 + z +
a(1) +       'static void Main()'                                                                                                                          + z +
a(1) +       '{'                                                                                                                                           + z +
a(2) +             'try'                                                                                                                                   + z +
a(2) +             '{'                                                                                                                                     + z +
a(3) +                   'Reader List = new Reader("List of Names.txt");'                                                                                  + z +
a(0)                                                                                                                                                       + z +
a(3) +                   'List.ToArray();'                                                                                                                 + z +
a(3) +                   'List.SeeText();'                                                                                                                 + z +
a(3) +                   'List.Sort();'                                                                                                                    + z +
a(3) +                   'List.SaveAsTxt();'                                                                                                               + z +
a(0)                                                                                                                                                       + z +
a(3) +                   'System.Console.Write("Open file? (y/n)");'                                                                                       + z +
a(3) +                   'if (System.Console.ReadLine() == "y") System.Diagnostics.Process.Start("List of Names (Sorted).txt");'                           + z +
a(2) +             '}'                                                                                                                                     + z +
a(2) +             'catch (System.IO.FileNotFoundException exception)'                                                                                     + z +
a(2) +             '{'                                                                                                                                     + z +
a(3) +                   'System.Console.WriteLine("FileNotFoundException:\\n" +'                                                                          + z +
a(3) +                   'exception.Message + "\\n" +'                                                                                                     + z +
a(3) +                   '"More details? (Y/N)");'                                                                                                         + z +
a(3) +                   'if (System.Console.ReadLine() == "Y") System.Console.WriteLine(exception.ToString());'                                           + z +
a(2) +             '}'                                                                                                                                     + z +
a(1) +       '}'                                                                                                                                           + z +
a(0) + '}'                                                                                                                                                 + z
);
exerciseThis[15][7] = null;
exerciseThis[15][8] = null;
exerciseThis[15][9] = null;
exerciseThis[15][10] = new ExerciseInfo("15", "10",
"Write a program that extracts from an XML file the text only (without the tags).",
a(0) + 'class Program'                                                                                                                                                                           + z +
a(0) + '{'                                                                                                                                                                                       + z +
a(1) +       'static void Main()'                                                                                                                                                                + z +
a(1) +       '{'                                                                                                                                                                                 + z +
a(2) +             'try'                                                                                                                                                                         + z +
a(2) +             '{'                                                                                                                                                                           + z +
a(3) +                   'Reader txtFile = new Reader("XML File.txt");'                                                                                                                          + z +
a(0)                                                                                                                                                                                             + z +
a(3) +                   'txtFile.SeeText();'                                                                                                                                                    + z +
a(3) +                   'txtFile.ToArray();'                                                                                                                                                    + z +
a(0)                                                                                                                                                                                             + z +
a(3) +                   'for(int i = 0; i < txtFile.GetNumberOfLines; i ++)'                                                                                                                    + z +
a(3) +                   '{'                                                                                                                                                                     + z +
a(4) +                         'System.Text.StringBuilder '                                                                                                                                      + z +
a(4) +                         'lineNoTags = new System.Text.StringBuilder(System.Text.RegularExpressions.Regex.Replace(txtFile.GetArrayList[i].Trim().ToString(), "<[^>]+>", ""));'             + z +
a(0)                                                                                                                                                                                             + z +
a(4) +                         'if(lineNoTags.ToString() != "") System.Console.WriteLine(lineNoTags.ToString());'                                                                                + z +
a(3) +                   '}'                                                                                                                                                                     + z +
a(2) +             '}'                                                                                                                                                                           + z +
a(2) +             'catch'                                                                                                                                                                       + z +
a(2) +             '{'                                                                                                                                                                           + z +
a(3) +                   'System.Console.WriteLine("Something Wrong Has Happened!");'                                                                                                            + z +
a(2) +             '}'                                                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                                 + z +
a(0) + '}'                                                                                                                                                                                       + z +
a(0)                                                                                                                                                                                             + z +
a(0) + 'class Reader'                                                                                                                                                                            + z +
a(0) + '{'                                                                                                                                                                                       + z +
a(1) +       'private readonly uint numOfLines = 0;'                                                                                                                                             + z +
a(1) +       'private readonly string path = null;'                                                                                                                                              + z +
a(1) +       'private string[] arrayList = null;'                                                                                                                                                + z +
a(0)                                                                                                                                                                                             + z +
a(1) +       'public Reader(string path)'                                                                                                                                                        + z +
a(1) +       '{'                                                                                                                                                                                 + z +
a(2) +             'this.path = path;'                                                                                                                                                           + z +
a(2) +             'this.numOfLines = LineCounter();'                                                                                                                                            + z +
a(1) +       '}'                                                                                                                                                                                 + z +
a(0)                                                                                                                                                                                             + z +
a(1) +       'public string GetPath'                                                                                                                                                             + z +
a(1) +       '{'                                                                                                                                                                                 + z +
a(2) +             'get { return this.path; }'                                                                                                                                                   + z +
a(1) +       '}'                                                                                                                                                                                 + z +
a(1) +       'public uint GetNumberOfLines'                                                                                                                                                      + z +
a(1) +       '{'                                                                                                                                                                                 + z +
a(2) +             'get { return this.numOfLines; }'                                                                                                                                             + z +
a(1) +       '}'                                                                                                                                                                                 + z +
a(0)                                                                                                                                                                                             + z +
a(1) +       'public string[] GetArrayList'                                                                                                                                                      + z +
a(1) +       '{'                                                                                                                                                                                 + z +
a(2) +             'get { return this.arrayList; }'                                                                                                                                              + z +
a(1) +       '}'                                                                                                                                                                                 + z +
a(0)                                                                                                                                                                                             + z +
a(1) +       'private uint LineCounter()'                                                                                                                                                        + z +
a(1) +       '{'                                                                                                                                                                                 + z +
a(2) +             'uint counter = 0;'                                                                                                                                                           + z +
a(0)                                                                                                                                                                                             + z +
a(2) +             'using (System.IO.StreamReader read = new System.IO.StreamReader(this.path))'                                                                                                 + z +
a(2) +             '{'                                                                                                                                                                           + z +
a(3) +                   'while (read.ReadLine() != null) counter++;'                                                                                                                            + z +
a(2) +             '}'                                                                                                                                                                           + z +
a(0)                                                                                                                                                                                             + z +
a(2) +             'return counter;'                                                                                                                                                             + z +
a(1) +       '}'                                                                                                                                                                                 + z +
a(0)                                                                                                                                                                                             + z +
a(1) +       'public void SeeText()'                                                                                                                                                             + z +
a(1) +       '{'                                                                                                                                                                                 + z +
a(2) +             'using (System.IO.StreamReader read = new System.IO.StreamReader(this.path))'                                                                                                 + z +
a(2) +             '{'                                                                                                                                                                           + z +
a(3) +                   'while (read.Peek() != -1) System.Console.WriteLine(read.ReadLine().ToString());'                                                                                       + z +
a(2) +             '}'                                                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                                 + z +
a(0)                                                                                                                                                                                             + z +
a(1) +       'public void ToArray()'                                                                                                                                                             + z +
a(1) +       '{'                                                                                                                                                                                 + z +
a(2) +             'uint i = 0;'                                                                                                                                                                 + z +
a(0)                                                                                                                                                                                             + z +
a(2) +             'this.arrayList = new string[this.numOfLines];'                                                                                                                               + z +
a(0)                                                                                                                                                                                             + z +
a(2) +             'using (System.IO.StreamReader read = new System.IO.StreamReader(this.path))'                                                                                                 + z +
a(2) +             '{'                                                                                                                                                                           + z +
a(3) +                   'while (read.Peek() != -1)'                                                                                                                                             + z +
a(3) +                   '{'                                                                                                                                                                     + z +
a(4) +                         'this.arrayList[i] = read.ReadLine().ToString();'                                                                                                                 + z +
a(4) +                         'i++;'                                                                                                                                                            + z +
a(3) +                   '}'                                                                                                                                                                     + z +
a(2) +             '}'                                                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                                 + z +
a(0)                                                                                                                                                                                             + z +
a(1) +       'public void Sort()'                                                                                                                                                                + z +
a(1) +       '{'                                                                                                                                                                                 + z +
a(2) +             'for(int i = 0; i < this.arrayList.Length - 1; i++)'                                                                                                                          + z +
a(2) +             '{'                                                                                                                                                                           + z +
a(3) +                   'for (int j = i + 1; j < this.arrayList.Length; j++)'                                                                                                                   + z +
a(3) +                   '{'                                                                                                                                                                     + z +
a(4) +                         'int idx = 0, aLength = this.arrayList[i].Length, bLength = this.arrayList[j].Length;'                                                                            + z +
a(4) +                         'char a = this.arrayList[i][idx], b = this.arrayList[j][idx];'                                                                                                    + z +
a(0)                                                                                                                                                                                             + z +
a(4) +                         'while(a == b)'                                                                                                                                                   + z +
a(4) +                         '{'                                                                                                                                                               + z +
a(5) +                               '//System.Console.WriteLine($"a: {a} b: {b}");'                                                                                                             + z +
a(0)                                                                                                                                                                                             + z +
a(5) +                               'idx++;'                                                                                                                                                    + z +
a(0)                                                                                                                                                                                             + z +
a(5) +                               'if(idx == System.Math.Min(aLength, bLength) - 1)'                                                                                                          + z +
a(5) +                               '{'                                                                                                                                                         + z +
a(6) +                                     'if (aLength > bLength) GrabPushPlace(i, j);'                                                                                                         + z +
a(6) +                                     'break;'                                                                                                                                              + z +
a(5) +                               '}'                                                                                                                                                         + z +
a(5) +                               'else'                                                                                                                                                      + z +
a(5) +                               '{'                                                                                                                                                         + z +
a(6) +                                     'a = this.arrayList[i][idx];'                                                                                                                         + z +
a(6) +                                     'b = this.arrayList[j][idx];'                                                                                                                         + z +
a(5) +                               '}'                                                                                                                                                         + z +
a(4) +                         '}'                                                                                                                                                               + z +
a(0)                                                                                                                                                                                             + z +
a(0)                                                                                                                                                                                             + z +
a(4) +                         'if (a > b) GrabPushPlace(i, j);'                                                                                                                                 + z +
a(3) +                   '}'                                                                                                                                                                     + z +
a(2) +             '}'                                                                                                                                                                           + z +
a(0)                                                                                                                                                                                             + z +
a(2) +             'void GrabPushPlace(int i, int j)'                                                                                                                                            + z +
a(2) +             '{'                                                                                                                                                                           + z +
a(3) +                   '//System.Console.WriteLine($"i: {i} j: {j}\\n" +'                                                                                                                      + z +
a(3) +                   '//$"array[i] = {this.arrayList[i]}\\n" +'                                                                                                                              + z +
a(3) +                   '//$"array[j] = {this.arrayList[j]}");'                                                                                                                                 + z +
a(3) +                   '//Grab'                                                                                                                                                                + z +
a(3) +                   'string first = this.arrayList[j];'                                                                                                                                     + z +
a(3) +                   'int minIdx = j;'                                                                                                                                                       + z +
a(0)                                                                                                                                                                                             + z +
a(3) +                   '//Push'                                                                                                                                                                + z +
a(3) +                   'while (minIdx > i)'                                                                                                                                                    + z +
a(3) +                   '{'                                                                                                                                                                     + z +
a(4) +                         'this.arrayList[minIdx] = this.arrayList[minIdx - 1];'                                                                                                            + z +
a(4) +                         'minIdx--;'                                                                                                                                                       + z +
a(3) +                   '}'                                                                                                                                                                     + z +
a(0)                                                                                                                                                                                             + z +
a(3) +                   '//Place'                                                                                                                                                               + z +
a(3) +                   'this.arrayList[i] = first;'                                                                                                                                            + z +
a(2) +             '}'                                                                                                                                                                           + z +
a(0)                                                                                                                                                                                             + z +
a(2) +             'System.Console.WriteLine("Sorted...");'                                                                                                                                      + z +
a(2) +             'foreach (string str in this.arrayList) System.Console.WriteLine(str);'                                                                                                       + z +
a(1) +       '}'                                                                                                                                                                                 + z +
a(0)                                                                                                                                                                                             + z +
a(1) +       'public void SaveAsTxt()'                                                                                                                                                           + z +
a(1) +       '{'                                                                                                                                                                                 + z +
a(2) +             'if (System.IO.File.Exists("List of Names (Sorted).txt")) System.IO.File.Delete("List of Names (Sorted).txt");'                                                               + z +
a(0)                                                                                                                                                                                             + z +
a(2) +             'using(System.IO.StreamWriter write = new System.IO.StreamWriter("List of Names (Sorted).txt"))'                                                                              + z +
a(2) +             '{'                                                                                                                                                                           + z +
a(3) +                   'for(int i = 0; i < this.arrayList.Length; i++) write.WriteLine(arrayList[i]);'                                                                                         + z +
a(2) +             '}'                                                                                                                                                                           + z +
a(1) +       '}'                                                                                                                                                                                 + z +
a(0) + '}'                                                                                                                                                                                       + z
);
exerciseThis[16] = new Array();
exerciseThis[16][0] = null;
exerciseThis[16][1] = new ExerciseInfo("16", "1",
"Write a program that reads from the console a sequence of positive integer numbers. The sequence ends when empty line is entered. Calculate and print the sum and the average of the sequence. Keep the sequence in List<int>.",
a(0) + 'using System.Linq;'                                                                                                                + z +
a(0)                                                                                                                                       + z +
a(0) + 'class Program'                                                                                                                     + z +
a(0) + '{'                                                                                                                                 + z +
a(1) +       'static void Main()'                                                                                                          + z +
a(1) +       '{'                                                                                                                           + z +
a(2) +             'try'                                                                                                                   + z +
a(2) +             '{'                                                                                                                     + z +
a(3) +                   'System.Collections.Generic.List<int> posInt = new System.Collections.Generic.List<int>();'                       + z +
a(3) +                   'Program prgm = new Program();'                                                                                   + z +
a(3) +                   'int? n;'                                                                                                         + z +
a(0)                                                                                                                                       + z +
a(3) +                   'while(true)'                                                                                                     + z +
a(3) +                   '{'                                                                                                               + z +
a(4) +                         'n = prgm.EnterNumber();'                                                                                   + z +
a(0)                                                                                                                                       + z +
a(4) +                         'if (n == null) break;'                                                                                     + z +
a(4) +                         'else if (n < 1) throw new System.ApplicationException("Negative value you are not allow to pass.");'       + z +
a(4) +                         'else posInt.Add((int)n);'                                                                                  + z +
a(3) +                   '}'                                                                                                               + z +
a(0)                                                                                                                                       + z +
a(3) +                   'if(posInt.Count > 0)'                                                                                            + z +
a(3) +                   '{'                                                                                                               + z +
a(4) +                         'int sum = 0;'                                                                                              + z +
a(0)                                                                                                                                       + z +
a(4) +                         'for (int i = 0; i < posInt.Count; i++)'                                                                    + z +
a(4) +                         '{'                                                                                                         + z +
a(5) +                               'System.Console.Write(posInt[i].ToString() + " ");'                                                   + z +
a(5) +                               'sum += posInt[i];'                                                                                   + z +
a(4) +                         '}'                                                                                                         + z +
a(0)                                                                                                                                       + z +
a(4) +                         'System.Console.WriteLine("\\n" +'                                                                          + z +
a(4) +                         '$"Sum: {sum}\\n" +'                                                                                        + z +
a(4) +                         '$"Average: {sum / posInt.Count}");'                                                                        + z +
a(3) +                   '}'                                                                                                               + z +
a(2) +             '}'                                                                                                                     + z +
a(2) +             'catch(System.ApplicationException e)'                                                                                  + z +
a(2) +             '{'                                                                                                                     + z +
a(3) +                   'System.Console.WriteLine(e.Message);'                                                                            + z +
a(2) +             '}'                                                                                                                     + z +
a(2) +             'catch'                                                                                                                 + z +
a(2) +             '{'                                                                                                                     + z +
a(3) +                   'System.Console.WriteLine("hey");'                                                                                + z +
a(2) +             '}'                                                                                                                     + z +
a(1) +       '}'                                                                                                                           + z +
a(0)                                                                                                                                       + z +
a(1) +       'int? EnterNumber()'                                                                                                          + z +
a(1) +       '{'                                                                                                                           + z +
a(2) +             'System.Text.StringBuilder num = new System.Text.StringBuilder();'                                                      + z +
a(2) +             'int? x = null;'                                                                                                        + z +
a(2) +             'bool positive = true;'                                                                                                 + z +
a(0)                                                                                                                                       + z +
a(2) +             'do'                                                                                                                    + z +
a(2) +             '{'                                                                                                                     + z +
a(3) +                   'int n = 0;'                                                                                                      + z +
a(0)                                                                                                                                       + z +
a(3) +                   'if (!positive) System.Console.WriteLine("Wrong input.");'                                                        + z +
a(0)                                                                                                                                       + z +
a(3) +                   'System.Console.WriteLine("Enter a positive integer: ");'                                                         + z +
a(3) +                   'num.Clear();'                                                                                                    + z +
a(3) +                   'num.Append(System.Console.ReadLine());'                                                                          + z +
a(0)                                                                                                                                       + z +
a(3) +                   'if (num.ToString() == "") return x;'                                                                             + z +
a(0)                                                                                                                                       + z +
a(3) +                   'positive = int.TryParse(num.ToString(), out n);'                                                                 + z +
a(0)                                                                                                                                       + z +
a(3) +                   'if(positive) x = n;'                                                                                             + z +
a(0)                                                                                                                                       + z +
a(2) +             '} while (!positive);'                                                                                                  + z +
a(0)                                                                                                                                       + z +
a(2) +             'return x;'                                                                                                             + z +
a(1) +       '}'                                                                                                                           + z +
a(0) + '}'                                                                                                                                 + z
);
exerciseThis[16][2] = new ExerciseInfo("16", "2",
"Write a program, which reads from the console N integers and prints them in reversed order. Use the Stack<int> class.",
a(0) + 'class Program'                                                                                                             + z +
a(0) + '{'                                                                                                                         + z +
a(1) +       'static void Main()'                                                                                                  + z +
a(1) +       '{'                                                                                                                   + z +
a(2) +             'int? x;'                                                                                                       + z +
a(2) +             'bool numberIn = true;'                                                                                         + z +
a(2) +             'System.Collections.Generic.Stack<int> nums = new System.Collections.Generic.Stack<int>();'                     + z +
a(0)                                                                                                                               + z +
a(2) +             'do'                                                                                                            + z +
a(2) +             '{'                                                                                                             + z +
a(3) +                   'do'                                                                                                      + z +
a(3) +                   '{'                                                                                                       + z +
a(4) +                         'if (!numberIn) System.Console.WriteLine("Wrong Input.");'                                          + z +
a(0)                                                                                                                               + z +
a(4) +                         'x = null;'                                                                                         + z +
a(0)                                                                                                                               + z +
a(4) +                         'System.Console.Write("number: ");'                                                                 + z +
a(0)                                                                                                                               + z +
a(4) +                         'System.Text.StringBuilder input = new System.Text.StringBuilder(System.Console.ReadLine());'       + z +
a(0)                                                                                                                               + z +
a(4) +                         'if (input.ToString() == "") break;'                                                                + z +
a(4) +                         'else if (int.TryParse(input.ToString(), out int y))'                                               + z +
a(4) +                         '{'                                                                                                 + z +
a(5) +                               'x = y;'                                                                                      + z +
a(5) +                               'nums.Push((int)x);'                                                                          + z +
a(5) +                               'numberIn = true;'                                                                            + z +
a(4) +                         '}'                                                                                                 + z +
a(4) +                         'else numberIn = false;'                                                                            + z +
a(0)                                                                                                                               + z +
a(3) +                   '} while (!numberIn);'                                                                                    + z +
a(0)                                                                                                                               + z +
a(2) +             '} while (x != null);'                                                                                          + z +
a(0)                                                                                                                               + z +
a(2) +             'System.Console.WriteLine("Numbers entered in reversed order...");'                                             + z +
a(2) +             'while(nums.Count > 0)'                                                                                         + z +
a(2) +             '{'                                                                                                             + z +
a(3) +                   'System.Console.Write(nums.Pop() + " ");'                                                                 + z +
a(2) +             '}'                                                                                                             + z +
a(2) +             'System.Console.WriteLine();'                                                                                   + z +
a(0)                                                                                                                               + z +
a(1) +       '}'                                                                                                                   + z +
a(0) + '}'                                                                                                                         + z
);
exerciseThis[16][3] = null;
exerciseThis[16][4] = null;
exerciseThis[16][5] = new ExerciseInfo("16", "5",
"Write a program, which removes all negative numbers from a sequence.",
a(0) + 'class Program'                                                                                                   + z +
a(0) + '{'                                                                                                               + z +
a(1) +       'static void Main()'                                                                                        + z +
a(1) +       '{'                                                                                                         + z +
a(2) +             'System.Collections.Generic.List<int> nums = new System.Collections.Generic.List<int>();'             + z +
a(2) +             'System.Random rnd = new System.Random(System.DateTime.Now.Millisecond);'                             + z +
a(2) +             'int n;'                                                                                              + z +
a(0)                                                                                                                     + z +
a(2) +             'do'                                                                                                  + z +
a(2) +             '{'                                                                                                   + z +
a(3) +                   'System.Console.Write("Enter quantity of numbers to be entered: ");'                            + z +
a(2) +             '} while (!int.TryParse(System.Console.ReadLine(), out n));'                                          + z +
a(0)                                                                                                                     + z +
a(2) +             'for(int i = 0; i < n; i++)'                                                                          + z +
a(2) +             '{'                                                                                                   + z +
a(3) +                   'nums.Add(rnd.Next(100) - rnd.Next(100));'                                                      + z +
a(2) +             '}'                                                                                                   + z +
a(0)                                                                                                                     + z +
a(2) +             'foreach (int x in nums) System.Console.WriteLine(x);'                                                + z +
a(0)                                                                                                                     + z +
a(2) +             'for(int i = 0; i < nums.Count; i++)'                                                                 + z +
a(2) +             '{'                                                                                                   + z +
a(3) +                   'if (nums[i] < 0)'                                                                              + z +
a(3) +                   '{'                                                                                             + z +
a(4) +                         'nums.RemoveAt(i);'                                                                       + z +
a(4) +                         'i--;'                                                                                    + z +
a(3) +                   '}'                                                                                             + z +
a(2) +             '}'                                                                                                   + z +
a(0)                                                                                                                     + z +
a(2) +             'System.Console.WriteLine("After negatives been removed...");'                                        + z +
a(2) +             'foreach (int x in nums) System.Console.WriteLine(x);'                                                + z +
a(0)                                                                                                                     + z +
a(1) +       '}'                                                                                                         + z +
a(0) + '}'                                                                                                               + z
);

//To exercise html page.
//The list of the exercise.
//The first for-loop runs over the firts index of the array, the chanpters.
//The second runs throughout the exercises in that chapter.
for(chpt = 0; chpt < exerciseThis.length; chpt++) {
  //exerciseThis[chpt] is the chapter
  for(exer = 0; exer < exerciseThis[chpt].length; exer++) {
    //exerciseThis[chpt].length is the number of exercise in the chapter
    if(exerciseThis[chpt][exer] != null) {
      //Check is the exercise exits.
      let exerciseList = document.createElement("li");
      let exerciseItem = document.createElement("a");
        exerciseItem.setAttribute("class", "content link_text");
        exerciseItem.setAttribute(
          "href", "chapters/chp" + exerciseThis[chpt][exer].chapter + ".html#exercise-btn_" + exerciseThis[chpt][exer].chapter + "." + exerciseThis[chpt][exer].exercise
        );//#exercise-btn_chpt.exer
      let exerciseId = document.createTextNode("Chapter " + exerciseThis[chpt][exer].chapter + " - Exercise " + exerciseThis[chpt][exer].exercise);

      exerciseItem.appendChild(exerciseId);
      exerciseList.appendChild(exerciseItem);

      document.getElementById("exercise-list").appendChild(exerciseList);
    }
  }
}
