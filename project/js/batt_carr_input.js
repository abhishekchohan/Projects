function ask(s)
{
    let carrier = "Koodo";
    if(s=='b')
    {
        var battery = parseInt(prompt("What is the battery percentage ?",'70'));
        document.getElementById('batteryy').innerHTML = ''+ battery +'';
        if(battery>80)
        {
            document.getElementById('battery_img').src = './res/lock/battery.png';
        }
        else if(battery <= 80 && battery >= 50)
        {
            document.getElementById('battery_img').src = './res/lock/battery50-80.png';
        }
        else if(battery < 50 && battery >20)
        {
            document.getElementById('battery_img').src = './res/lock/battery21-49.png';
        }
        else
        {
            document.getElementById('battery_img').src = './res/lock/battery1-20.png';
        }
    }
    if(s=='c')
    {
        carrier = prompt("What is your Carrier ?",'Koodo');
    }
    document.getElementById('carrierr').innerHTML = '' + carrier[0].toUpperCase() + carrier.slice(1) + '';
}