//Cases that still need to be fixed:
//line 351
//3x(-6) + 6 -> 3x*-6 + 6
//Other lines
//3x*-6 -> -18x
//-3*-x -> 9x
//Multiplication of x's in the same term.
using System;

namespace Mathematical_Expressions
{
    class Program
    {
        static string MathExpression()
        {
            string expression;
            bool isMathExpr;

            do
            {
                isMathExpr = true;
                Console.Write("Enter a mathematical expression: ");
                expression = Console.ReadLine();
                if (expression == "") isMathExpr = false;
                else if (expression[0] == '*') isMathExpr = false;
                else if (expression[expression.Length - 1] == ' ' || expression[expression.Length - 1] == '(') isMathExpr = false;
                else if (!Char.IsDigit(expression[expression.Length - 1]) && !(expression[expression.Length - 1] == 'x' || expression[expression.Length - 1] == ')')) isMathExpr = false;
                else
                {
                    for (int i = 0; i < expression.Length; i++)
                    {
                        char c = expression[i];

                        if (!(Char.IsDigit(c) || c == '+' || c == '-' || c == '^' || c == 'x' || c == '*' || c == ' ' || c == '(' || c == ')')) { isMathExpr = false; break; }
                        else if (c == '+' && expression[i + 1] == ' ' && expression[i + 2] == c) { isMathExpr = false; break; }
                        else if (c == '^' && (i == 0 || expression[i - 1] != 'x' || (!Char.IsDigit(expression[i + 1]) && expression[i + 1] != '('))) { isMathExpr = false; break; }
                        else if (c == '*' && (i == 0 || !(Char.IsDigit(expression[i - 1]) && expression[i + 1] == 'x')))
                        {
                            isMathExpr = false;

                            char d = expression[i - 1], e = expression[i + 1];

                            if (d == ' ')
                            {
                                for (int h = i + 1; h < expression.Length; h++)
                                {
                                    if (expression[h] == ' ') continue;
                                    else if (expression[h] == 'x') { isMathExpr = true; break; }
                                }
                            }
                            else if (e == ' ')
                            {
                                for (int k = i + 2; k < expression.Length; k++)
                                {
                                    if (expression[k] == ' ') continue;
                                    else if (expression[k] == 'x') { isMathExpr = true; break; }
                                }
                            }
                            else if (d == 'x')
                            {
                                if (Char.IsDigit(e)) isMathExpr = true;
                                else if (e == '-' && Char.IsDigit(expression[i + 2])) isMathExpr = true;
                                else if (e == ' ')
                                {
                                    for (int m = i + 2; m < expression.Length; m++)
                                    {
                                        if (expression[m] == ' ') continue;
                                        else if (Char.IsDigit(expression[m])) { isMathExpr = true; break; }
                                        else if (expression[m] == '-' && Char.IsDigit(expression[m + 1])) { isMathExpr = true; break; }
                                    }
                                }
                            }
                            else if (e == '-' && (expression[i + 2] == 'x' || Char.IsDigit(expression[i + 2]))) isMathExpr = true;
                            else if (Char.IsDigit(d) && Char.IsDigit(e)) isMathExpr = true;
                        }
                        else if (c == '(')
                        {
                            isMathExpr = false;

                            char d = (i == 0) ? '\0' : expression[i - 1];
                            char e = expression[i + 1];

                            int openPrnts = 0, closedPrnts = 0;

                            if (i == 0 || Char.IsDigit(d) || d == 'x' || d == '*' || d == '-' || d == '+' || d == '^' || d == ' ')
                            {
                                openPrnts++;
                                if (!(e == ' ' || e == '^') && ((expression[i + 2] != ' ' && expression[i + 2] != ')') || (e != '-' && e != '+')))
                                {
                                    for (int u = i + 1; u < expression.Length; u++)
                                    {
                                        if (expression[u] == '(') openPrnts++;
                                        else if (expression[u] == ')')
                                        {
                                            char f = expression[u - 1];

                                            if (f != ' ' || f != '^' || f != '+' || f != '-' || f != '*') closedPrnts++;
                                        }
                                    }
                                }
                            }

                            if (openPrnts == closedPrnts) isMathExpr = true;
                        }
                    }
                }

                if (!isMathExpr) Console.WriteLine("Invalid math expression.");

            } while (!isMathExpr);

            return StandardForm(expression);
        }

        static string StandardForm(string expr)
        {
            int l = expr.Length;
            char[] stdExpr = new char[5 * l];

            for (int i = 0; i < l; i++) stdExpr[i] = expr[i];

            for (int i = 0; i < l; i++)
            {
                if (stdExpr[i] == ' ' && stdExpr[i + 1] == ' ')
                {
                    for (int h = i + 1; h < l - 1; h++) stdExpr[h] = stdExpr[h + 1];
                    i--;
                    l--;
                }
                else if ((stdExpr[i] == '+' || stdExpr[i] == '-') && (stdExpr[i + 1] == '+' || stdExpr[i + 1] == '-'))
                {
                    char a = stdExpr[i], b = stdExpr[i + 1];

                    if (a == b) stdExpr[i] = '+';
                    else stdExpr[i] = '-';

                    for (int h = i + 1; h < l - 1; h++) stdExpr[h] = stdExpr[h + 1];
                    i--;
                    l--;
                }
                else if (stdExpr[i] == '-' && stdExpr[i + 1] == ' ' && stdExpr[i - 2] != '+')
                {
                    l++;
                    stdExpr[i] = '+';
                    for (int h = l - 1; h > i + 2; h--) stdExpr[h] = stdExpr[h - 1];
                    stdExpr[i + 2] = '-';
                    i--;
                }
                else if (stdExpr[i] == '-' && stdExpr[i + 1] == ' ' && stdExpr[i - 2] == '+')
                {
                    for (int h = i + 1; h < l - 1; h++) stdExpr[h] = stdExpr[h + 1];
                    i--;
                    l--;
                }
                else if ((stdExpr[i] == '+' || stdExpr[i] == '-') && i != 0 && stdExpr[i - 1] != ' ')
                {
                    if (stdExpr[i] == '+' && stdExpr[i - 1] == '(')
                    {
                        for (int h = i; h < l - 1; h++) stdExpr[h] = stdExpr[h + 1];
                        i--;
                        l--;
                    }
                    else if (stdExpr[i] == '-' && stdExpr[i - 1] == '(')
                    {
                        if (i - 1 == 0)
                        {
                            for (int h = 0; h < l - 1; h++) stdExpr[h] = stdExpr[h + 1];
                            l--;
                        }
                        else if (i - 2 >= 0 && stdExpr[i - 2] == '-')
                        {
                            for (int h = i - 2; h < l - 3; h++) stdExpr[h] = stdExpr[h + 3];
                            l -= 3;
                        }
                        else
                        {
                            for (int h = i - 1; h < l - 1; h++) stdExpr[h] = stdExpr[h + 1];
                            l--;
                        }

                        for (int k = i - 1; k < l; k++)
                        {
                            if (stdExpr[k] == ')')
                            {
                                if (k == l - 1) stdExpr[k] = ' ';
                                else for (int t = k; t < l - 1; t++) stdExpr[t] = stdExpr[t + 1];
                                
                                if (i - 1 == 0 || k == l - 1) i -= 2;
                                else i -= 4;
                                
                                l--;
                                
                                break;
                            }
                        }
                    }
                    else
                    {
                        l++;
                        for (int h = l - 1; h > i; h--) stdExpr[h] = stdExpr[h - 1];
                        stdExpr[i] = ' ';
                        i--;
                    }
                }
                else if ((stdExpr[i] == '+' || stdExpr[i] == '-') && i > 1 && stdExpr[i - 2] != '+' && stdExpr[i + 1] != ' ')
                {
                    l++;
                    for (int h = l - 1; h > i + 1; h--) stdExpr[h] = stdExpr[h - 1];
                    stdExpr[i + 1] = ' ';
                    i--;
                }
                else if (stdExpr[i] == '*')
                {
                    char d = stdExpr[i - 1], e = stdExpr[i + 1];

                    if(d == ' ' && e == ' ')
                    {
                        stdExpr[i - 1] = stdExpr[i];
                        stdExpr[i] = stdExpr[i + 2];
                        for (int h = i + 1; h < l - 2; h++) stdExpr[h] = stdExpr[h + 2];
                        l -= 2;
                        i -= 2;
                    }
                    else if (d == ' ' ^ e == ' ')
                    {
                        for (int h = (d == ' ') ? i - 1 : i + 1; h < l - 1; h++) stdExpr[h] = stdExpr[h + 1];
                        l--;
                        if (d == ' ') i -= 2;
                        else i--;
                    }
                    else if (e == '-')
                    {
                        stdExpr[i + 1] = stdExpr[i]; //*
                        stdExpr[i] = stdExpr[i - 1]; //Digit d
                        stdExpr[i - 1] = e; //-
                    }
                    else if (Char.IsDigit(d) ^ Char.IsDigit(e))
                    {
                        for (int h = i; h < l - 1; h++) stdExpr[h] = stdExpr[h + 1];
                        l--;
                        i -= 2;
                    }
                    else if (Char.IsDigit(d) && Char.IsDigit(e)) 
                    {
                        int dDigitLength = 1, eDigitLength = 1;
                        int? m = null;

                        for (int u = i - 2; u >= 0; u--) { if (Char.IsDigit(stdExpr[u])) dDigitLength++; else break; }
                        for (int v = i + 2; v < l; v++) { if (Char.IsDigit(stdExpr[v])) eDigitLength++; else break; }

                        if (dDigitLength == 1 && eDigitLength == 1) m = (int)(Char.GetNumericValue(d) * Char.GetNumericValue(e));
                        else if (dDigitLength > 1 || eDigitLength > 1) 
                        {
                            int? x = null, y = null; 
                            string dValue = "", eValue = "";
                            bool xDigit = (dDigitLength > 1) ? true : false, yDigit = (eDigitLength > 1) ? true : false;

                            for (int h = i - dDigitLength, k = i + 1; ;)
                            {
                                if (h < i && xDigit)
                                {
                                    dValue += stdExpr[h].ToString();
                                    x = int.Parse(dValue);
                                    h++;
                                }
                                else
                                {
                                    if (x == null) x = (int)Char.GetNumericValue(d);
                                    xDigit = false;
                                }

                                if (k <= i + eDigitLength && yDigit)
                                {
                                    eValue += stdExpr[k].ToString();
                                    y = int.Parse(eValue);
                                    k++;
                                }
                                else
                                {
                                    if (y == null) y = (int)Char.GetNumericValue(e);
                                    yDigit = false;
                                }

                                if (!xDigit && !yDigit) break;
                            }

                            m = x * y;
                        }

                        string mValue = m.ToString();

                        if (m < 10)
                        {
                            stdExpr[i - 1] = mValue[0];

                            for (int h = i; h < l - 2; h++) stdExpr[h] = stdExpr[h + 2];
                            l -= 2;
                            i -= 2;
                        }
                        else
                        {
                            char[] holdTemp = new char[l];

                            for (int s = i + eDigitLength + 1; s < l; s++) holdTemp[s] = stdExpr[s];
                            //Storing the rest of the expression after the last digit of the second integer.

                            l += (mValue.Length - (1 + dDigitLength + eDigitLength));
                            //Subtract from the length of the expression the two integers and the '*'. Then add the product length.
                            for (int h = 0; h < mValue.Length; h++) stdExpr[(i - dDigitLength) + h] = mValue[h];
                            //From left to right starting with the frist index of the first integer, the product is added to the expression.  

                            for (int r = l - 1; r >= (i - dDigitLength) + mValue.Length; r--) stdExpr[r] = holdTemp[r + (1 + dDigitLength + eDigitLength - mValue.Length)];
                            //Starting from the last index (for stdExpre is the new 'l' value, for the holdTemp is the old 'l' value - the opposite of the modification in 'l += ...') until
                            //the next index to the rightmost digit of the product.
                        }
                    }
                }
                else if (stdExpr[i] == 'x')
                {
                    char d = (i != 0) ? stdExpr[i - 1] : '\0', e = (i != l - 1) ? stdExpr[i + 1] : '\0';

                    if(Char.IsDigit(e) && Char.IsDigit(d)) //34x12 -> 34*12x
                    {
                        stdExpr[i] = '*';
                        l++;
                        for (int h = i + 1; h < l; h++)
                        {
                            if (!Char.IsDigit(stdExpr[h]))
                            {
                                for (int k = l - 1; k > h; k--) stdExpr[k] = stdExpr[k - 1];
                                stdExpr[h] = 'x';
                                i--;
                                break;
                            }
                            else if (h == l - 1)
                            {
                                stdExpr[h] = 'x';
                                i--;
                            }
                        }
                    }
                    else if (Char.IsDigit(e) && !Char.IsDigit(d)) //x9 -> 9x
                    {
                        for (int h = i; h < l; h++)
                        {
                            if (Char.IsDigit(stdExpr[h + 1]) && h < l - 1) stdExpr[h] = stdExpr[h + 1];
                            else 
                            { 
                                stdExpr[h] = 'x';
                                i--;
                                break; 
                            }
                        }
                    }
                }
                else if (stdExpr[i] == '(')
                {
                    //3x*(-6)+6
                    //3x(-6)+6
                    //(3x)*6+6
                    //(3x)6+6
                }
            }

            string newExpr = "";

            for (int i = 0; i < l; i++) newExpr += stdExpr[i];

            return newExpr;
        }

        static void CollectTheTerms(string mathExpr, string[] storageTerms)
        {
            int t = 0;

            for (int i = 0; i < mathExpr.Length; i++)
            {
                char d = mathExpr[i];

                if (d == ' ' && mathExpr[i + 1] == '+') { t++; i += 2; }
                //an ' ' is never goin to happens at the last index
                else storageTerms[t] += d.ToString();
                //t wont be greater than storageTerms.Length
            }
        }

        static void Main()
        {
            string math = MathExpression();
            int numTerms = 1;

            for (int c = 0; c < math.Length; c++) if (math[c] == '+' && c != 0) numTerms++;

            string[] terms = new string[numTerms];

            CollectTheTerms(math, terms);

            Console.WriteLine("Standard form: {0}", math);

            for (int i = 0; i < terms.Length; i++) Console.WriteLine("Term {0}: {1}", (i + 1).ToString(), terms[i]);
        }
    }
}
