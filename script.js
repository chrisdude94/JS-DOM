function GetValue()
{
    var myarray= new Array("Ludwig the Accursed","Amygdala","Mergo's Nurse", "Cleric Beast", "Lady Maria", "Shadows of Yharnam", "Lady Maria", "Living Failures", "Blood-starved Beast");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}

let myarray= "Ludwig the Accursed" 