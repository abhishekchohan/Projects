function clearnoti() {
    var elem = document.getElementById('notify');
    document.getElementById('clear').style.display = "none";
    setInterval(frame, 8);
    var pos = 0;
    function frame()
    {
        elem.style.width = (100-pos) + '%';
        if(pos<=25)
        {
            document.getElementById('nc').style.fontSize = (25-pos)+"px";
        }
        pos++;
        if(pos==50)
        {
            var x = document.querySelectorAll("div.noti");
            for(let k=0;k<x.length;k++)
            {
                x[k].innerHTML = "";
            }
        }
        if(pos==99)
        {
            var item = document.getElementById('notify');
            item.parentNode.removeChild(item);
        }
    }
}



// ~nc  (span to control notification center text details)



/*function songanim()
{
    const elem = document.querySelector('#mp_name').innerHTML;
    var name = elem;
    setInterval(fname, 40);
    function fname()
    {
            name = name.slice(1);
            document.getElementById('mp_name').innerHTML = name;
    }
    setTimeout(songanim, 1000);
}*/