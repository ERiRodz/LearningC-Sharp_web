using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericClass
{
    class Program
    {
        static ClassN classN = new ClassN("N");
        /*private readonly*/ GenericClass<ClassN> classNT = new GenericClass<ClassN>(new ClassN("N"));

        ClassN classN2 = new ClassN("N2");
        GenericClass<ClassN> classN2T = new GenericClass<ClassN>(classN2);//passing the address of the object type ClassN
                                                                         //GenericClass is asking for the object itself
    }
}
