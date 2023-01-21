function dtime(){
		var Stime=new Date(),
		Sday=Stime.getDate(),
		Shour=Stime.getHours(),
		Sminutes=Stime.getMinutes(),
		Ssecond=Stime.getSeconds(),
		
		Ntime= new Date();
		Nday=Ntime.getDate();
		Nyear=Ntime.getFullYear();
		Nmonth=Ntime.getMonth()+1;
		Nhour=Ntime.getHours();
		Nmintues=Ntime.getMinutes();
		Nsecond=Ntime.getSeconds();
		hhour=37-Shour,
		
		//if(hhour>=24){var hhour=hhour-24};

		Etime=new Date();
			if(hhour>=24){
				Etime.setMonth(1-1),
				Etime.setDate(22+1-1);
			}
			else
				Etime.setMonth(1-1),
				Etime.setDate(22-1);
			
			if(Nmonth>=6){
				Etime.setFullYear(Nyear+1);
				Ayear = Nyear + 1;

			}
			else Etime.setFullYear(Nyear);
		Eday=Etime.getDate(),
		
		day=Math.floor((Etime-Stime)/1000/60/60/24) ,/*求模*/
		
		
		hminutes=59-Sminutes;
		second=60-Ssecond;
		if(hhour>=24){var hhour=hhour-24};
		if(second==60){var hminutes=hminutes+1};
		if(second==60){var second=0};
		var lhour=day*24+hhour;
		var lminutes=lhour*60+hminutes;
		var lsecond=lminutes*60+second;
		var ltime=lsecond/3600;
		ltime=ltime.toFixed(3);
		if(lsecond<=100000&&lsecond>=0){
			if(lsecond>=10000){var lsecond="0"+lsecond}
			else if(lsecond>=1000&&lsecond<10000){var lsecond="00"+lsecond}
			else if(lsecond>=100&&lsecond<1000){var lsecond="000"+lsecond}
			else if(lsecond>=10&&lsecond<100){var lsecond="0000"+lsecond}
			else if(lsecond<10){var lsecond="00000"+lsecond}
			document.getElementById("daoji").innerHTML="距离新年还有"+lsecond+"秒"
			}
		else if(lsecond>100000){document.getElementById("daoji").innerHTML="距离新年还有"+ltime+"小时"}
		else if(lsecond>=-10&&lsecond<0){document.getElementById("daoji").innerHTML="距离新年还有+"000000"+"秒"}
		else {
			var lsecond=lsecond*-1;
			document.getElementById("daoji").innerHTML="新年快乐！";
			};
		//var dao=day*24+hhour*60+hminutes*60+second;
		//document.getElementById("daoji").innerHTML="距离寒假还有<br>"+ltime+"小时";
		//if(second>=60){var second=second-60}
		/*if(second<10){var second="0"+second}
		else var second =second;
		if(hminutes<10){var minutes="0"+hminutes}
		else var minutes =hminutes;
		if(hhour<10){var hour="0"+hhour}
		else var hour =hhour;
		if(Nhour<8){day=day-1;}else day=day;
		document.getElementById("time").innerHTML=day+"天"+hour+"时"+minutes+"分"+second+"秒";
		if(Nmonth<10){Nmonth="0"+Nmonth}else Nmonth = Nmonth;
		if(Nday<10){Nday="0"+Nday}else Nday = Nday;
		if(Nsecond<10){Nsecond="0"+Nsecond}else Nsecond=Nsecond;
		if(Nmintues<10){Nmintues="0"+Nmintues}else Nmintues=Nmintues;
		if(Nhour<10){Nhour="0"+Nhour}else Nhour=Nhour;
		document.getElementById("ntime").innerHTML=Nmonth+"月"+Nday+"日"+Nhour+":"+Nmintues+":"+Nsecond;
*/
}

setInterval(function () {
	dtime();
}, 1000);