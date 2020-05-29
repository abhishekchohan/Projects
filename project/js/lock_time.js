function gettime()
{
    const mon = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let today = new Date();
    let month = today.getMonth();
    let day = today.getDay();
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    hour = checkTime(hour,1);
    minute = checkTime(minute,0);
    document.getElementById('displaytime').innerHTML = hour + ':' + minute;
    document.getElementById('info').innerHTML = days[day] + ', ' + mon[month] + ' ' + date;
    setTimeout(gettime, 500);
}
function checkTime(i,j)
{
    if(j==1 && i==0)
    {
        i=12;
    }
    else if(j==1 && i>12)
    {
        i = i-12;
        return i;
    }
    else if (i < 10)
    {
        i = "0" + i;
    }
    return i;
}

function play() {
    var audio = document.getElementById("audio");
    document.getElementById("seek").max = audio.duration;
    if (audio.paused)
    {
        audio.play();
        document.getElementById('playPause').src = "./res/audio/pause.png";
        audio.volume = document.getElementById('vol').value;
    }
    else
    {
        audio.pause();
        document.getElementById('playPause').src = "./res/audio/play.png";
    }
    timedur();
}

function timedur()
{
    var dur = document.getElementById('curtimepos');
    var durLeft = document.getElementById('timeleft');
    var sec = Math.round(audio.currentTime);
    var min = Math.floor(sec/60);
    var dsec = Math.round(audio.duration);
    dsec = dsec-sec;
    const dmin = Math.floor(dsec/60);
    if(sec>59)
    {
        sec = sec%60;
    }
    if(dsec>59)
    {
        dsec = dsec%60;
    }
    if(sec<10)
    {
        sec = '0' + sec;
    }
    if(dsec==60)
    {
        dmin--;
    }
    if(dsec<10)
    {
        dsec = '0' + dsec;
    }
    dur.innerHTML= min + ':' + sec;
    durLeft.innerHTML= '-' + dmin +':'+ dsec;
    document.getElementById('seek').value = audio.currentTime;
    if(audio.currentTime==audio.duration)
    {
        document.getElementById('playPause').src = "./res/audio/play.png";
    }
    setTimeout(timedur, 1000);
}

function volume()
{
    var vol = document.getElementById('vol').value;
    var audio = document.getElementById("audio");
    audio.volume = vol;
}

function seek()
{
    var seek = document.getElementById('seek');
    var audio = document.getElementById("audio");
    audio.currentTime = seek.value;
}

function musicfileSelect()
{
    var file = document.getElementById("musicfile");
    file.click();
    file.onchange = () => {
        var name = file.value.split('fakepath\\')[1];
        document.getElementById('upload').submit();
    }
}