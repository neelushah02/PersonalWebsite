var click1 = document.getElementById('script_1');
var counter1 = 2;
var onButtonClick1 = function()
{ 
    counter1=counter1+1;
    if (counter1%2==1) 
    {
        var poem1 = document.getElementById('poem_1');
        poem1.innerHTML = 'rāt kī udāsī caḍhtī jaise dīvār par kāī <br> pīchā nā choḍe ātī jaise sānjh meñ parchāī <br> nīnd kā ābhārī hooñ ke dīvār se sar muḍāe <br> nīnd kā ābhārī hooñ ke sānjh meñ battī jalāe <br><br>';
        
    }
    else
    {
        var poem1 = document.getElementById('poem_1');
        poem1.innerHTML = 'रात की उदासी चढ़ती जैसे दीवार पर काई <br> पीछा ना छोड़े आती जैसे साँझ में परछाई  <br> नींद का आभारी हूँ के दीवार से सर मुड़ाए <br> नींद का आभारी हूँ के साँझ में बत्ती जलाए। <br><br>';
    }           
}
click1.addEventListener('click', onButtonClick1);

var click2 = document.getElementById('script_2');
var counter2 = 2;
var onButtonClick2 = function()
{ 
    counter2=counter2+1;
    if (counter2%2==1) 
    {
        var poem2 = document.getElementById('poem_2');
        poem2.innerHTML = 'diloñ ke ulajhane ke liye do dil to hone chahiye <br> visāl kyā ham pyār ke kābil to hone chahiye <br><br>';
        
    }
    else
    {
        var poem2 = document.getElementById('poem_2');
        poem2.innerHTML = 'दिलों के उलझने के लिए दो दिल तो होने चाहिए <br> विसाल क्या हम प्यार के काबिल तो होने चाहिए <br><br>';
    }           
}
click2.addEventListener('click', onButtonClick2);
