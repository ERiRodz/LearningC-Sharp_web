class Cellphone
{
    public enum Battery { Li_Ion = 100, NiMH = 200, NiCd = 300 }
    private Battery battery = default;
    private string
        model = null,
        manufacture = null,
        price = null,
        owner = null,
        display = null;
    private uint callCounter = 0;
    public static uint cellphoneCount = 0;
    private Call[] callHistory = null;

    public Cellphone() : this("[unknow model]")
    {
    }
    public Cellphone(string model) : this(model, "[unknow manufacture]")
    {
        this.model = model;
    }
    public Cellphone(string model, string manufacture) : this(model, manufacture, "[unknow price]")
    {
        this.model = model;
        this.manufacture = manufacture;
    }
    public Cellphone(string model, string manufacture, string price) : this(model, manufacture, price, "[unknow owner]")
    {
        this.model = model;
        this.manufacture = manufacture;
        this.price = price;
    }
    public Cellphone(string model, string manufacture, string price, string owner) : this(model, manufacture, price, owner, "[unknow display]")
    {
        this.model = model;
        this.manufacture = manufacture;
        this.price = price;
        this.owner = owner;
    }
    public Cellphone(string model, string manufacture, string price, string owner, string display) : this(model, manufacture, price, owner, display, default)
    {
        this.model = model;
        this.manufacture = manufacture;
        this.price = price;
        this.owner = owner;
        this.display = display;
    }
    public Cellphone(string model, string manufacture, string price, string owner, string display, Battery battery)
    {
        this.model = model;
        this.manufacture = manufacture;
        this.price = price;
        this.owner = owner;
        this.display = display;
        this.battery = battery;

        cellphoneCount++;

        callHistory = new Call[3];
    }

    public string Model
    {
        get { return this.model; }
        set { this.model = value; }
    }
    public string Manufacture
    {
        get { return this.manufacture; }
        set { this.manufacture = value; }
    }
    public string Price
    {
        get { return this.price; }
        set { this.price = value; }
    }
    public string Owner
    {
        get { return this.owner; }
        set { this.owner = value; }
    }
    public string Display
    {
        get { return this.display; }
        set { this.display = value; }
    }
    public Battery BatteryType
    {
        get { return this.battery; }
        set { this.battery = value; }
    }

    public void printCellInfo()
    {
        System.Console.Write(
            $"Model: {this.model}\n" +
            $"Monufacture: {this.manufacture}\n" +
            $"Price: {this.price}\n" +
            $"Owner: {this.owner}\n" +
            $"Display: {this.display}\n" +
            $"Battery: {this.battery}\n"
            );
    }
    public string CallHistory(Cellphone mobile, uint? i = null)
    {
        System.Console.WriteLine($"Mobile: {this.model}");

        if (i != null) return this.callHistory[(int)i].PrintCallInfo();
        else
        {
            System.Text.StringBuilder all = new System.Text.StringBuilder();

            for(int index = 0; index < this.callHistory.Length; index++)
            {
                all.Append(this.callHistory[index].PrintCallInfo());
            }
            return all.ToString();
        }
    }
    public void MakeCall(string recipient)//#####################################INDEXES need to push
    {
        if(this.callHistory[callCounter % 3] != null) this.callHistory[callCounter % 3] = null;
        this.callHistory[callCounter % 3] = new Call(System.DateTime.Now, recipient);
        this.callCounter++;
    }
    public void Hang()
    {
        this.callHistory[(callCounter - 1) % 3].EndTime = System.DateTime.Now.TimeOfDay;
    }
    public void DeleteAll()
    {
        this.callHistory = null;
    }
    public void Delete(uint index)
    {
        this.callHistory[index] = null;
    }
}

class Call
{
    public static uint callCounter = 0;
    private string recipient = null;
    private System.DateTime callDate = default;
    private System.TimeSpan startTime = default, endTime = default;

    public Call(System.DateTime callDate, string recipient)
    {
        callCounter++;

        this.callDate = callDate;
        this.startTime = callDate.TimeOfDay;
        this.recipient = recipient;
    }

    public System.TimeSpan EndTime
    {
        set { this.endTime = value; }
    }

    public System.TimeSpan callLength()
    {
        return this.endTime - this.startTime;
    }
    public string PrintCallInfo()
    {
        return
            $"Date: {this.callDate}\n" +
            $"Start Time: {this.startTime}\n" +
            $"End Time: {this.endTime}\n" +
            $"Duration: {this.callLength()}\n" +
            $"To: {this.recipient}\n";
    }
}