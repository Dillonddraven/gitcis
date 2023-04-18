//Task 1
var arrayNames = new Array('John', 'Robert', 'Jimmy', 'Bonzo');
var arrayInstruments = [];
arrayInstruments[0] = "bass";
arrayInstruments[1] = "vocals";
arrayInstruments[2] = "guitar";
arrayInstruments[3] = "drums";
var stringMessage = "";
var intCount;
for (intCount = 0; intCount < arrayNames.length; intCount++)
{
stringMessage = stringMessage + arrayNames[intCount] + " plays " + arrayInstruments[intCount] +"\n";
}
alert(stringMessage);

//task 2
let stringTimesTable = "";
for (x= 1; x<=12; x++)
{
    for (y=1; y<=12; y++)
    {
        stringTimesTable = stringTimesTable + " " + x*y + " ";
    }
    stringTimesTable = stringTimesTable + "n"
}
alert(stringTimesTable)
let stringEvenTimes = ""
let arrayTimesTable = [];





for (x=0; x<=12; x++) //the outside the loop that has terms 0 to 12 
{
    arrayTimesTable[x] = [];
    for (y=0; y<=12; y++) //the inside loop that has terms 0 to 12 
    {
        arrayTimesTable[x][y] = x*y;

    }
}



//task 3


for (var a = 1; a <= 12; a++) {
    if (a % 2 === 0) {
        for (var b = 1; b <= 12; b++) {
            stringEvenTimes = stringEvenTimes + arrayTimesTable[a][b] + " ";
        }
        stringEvenTimes += "\n";
    }
}

alert(stringEvenTimes);


