setInterval(ClockDisplay, 500);
function ClockDisplay()
{
	var time = new Date();
	var hr= time.getHours();
	var min= time.getMinutes();
	var sec= time.getSeconds();

 var Yashvi2='AM';
    if(hr>12)
    {
        Yashvi2='PM';
         hr=hr-12;
    }

    if(hr<10)
    {
        hr='0'+hr;
    }
    if(min<10)
    {
        min='0'+min;
    }
    if(sec<10)
    {
        sec='0'+sec;
    }


document.getElementById("clockid").innerHTML=hr+":"+min+":"+sec+" " + Yashvi2;



    
   


}

