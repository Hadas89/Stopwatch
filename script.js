console.log("check")


// var startCount = function () {
 
 
 
//  for (var i = 0; i < 59; i++) {
//   watch.innerText = "00:" + i
     
//  }
//   }



//function delayedCountAsync() {
 //timeoutID = window.setTimeout(startCount, 1000);
//}



// var startCount = function () {
// var now = Date.now()



//  count = setInterval( function () {
   
//    var then = Date.now(); // םינוש םידרט) לדבה ןיא תרחא יכ ינשה ינפל ץורי דחאש ידכ הז םינוש םירזאולקב םיאצמנ וישכעו זא םינתשמה 2ש הביסה) - closure


//   watch.innerText = "00:" + (Math.round((then-now)/1000) < 10 ? "0" : "") + Math.round((then-now)/1000)

//   if (Math.round((then-now)/1000) > 3) {
//   	// from here it starts to get messy so let's try to do it in another way
  	
  		
  	
//   }
  


 

//   }, 1000)
 
 


// }



// function clockUdate (minutes, seconds) {

// minutes = 0;
// seconds = 0;


// countSec = setInterval(function () { 
// 	seconds++;
// 	 console.log(seconds);
//  	if (seconds > 3) {
//  		seconds == 0
	
// 	var countMin = minutes++;
// 	 console.log(countMin)
// 	 setInterval(countMin,60*1000)
	
// 	}

// },1000)

// countMin = setInterval(function () { 
// 	setInterval(function () {seconds++;
// 	 console.log(seconds);}, 1000)

// 	var countMin = minutes++;
// 	 console.log(countMin)



// },60*1000)
var clockUpdate = {
	

	update: function () {
		
	thenMS = new Date().getMilliseconds()
	thenS = new Date().getSeconds()
	thenM = new Date().getMinutes()
	this.milliSeconds()
	this.Seconds()
	this.Minutes()
	},


	milliSeconds: function() {
		msInterval = setInterval(function() {
		ms = new Date().getMilliseconds()
	
		document.querySelector('.milliseconds').innerHTML = (this.thenMS + ms)
		}, 1)
},


	Seconds: function() {
		sInterval = setInterval(function() {
		s = new Date().getSeconds()

		document.querySelector('.seconds').innerHTML = (s - this.thenS) + " : "
		}, 1)
},

	Minutes: function() {
		mInterval = setInterval(function() {
		m = new Date().getMinutes()
		
		document.querySelector('.minutes').innerHTML = m - this.thenM + " :" 
		}, 1)
},

	
}







// }


var startCount = function () {

	
	clockUpdate.update()
}


var stopCount = function () {
	
 clearInterval(msInterval)
 clearInterval(sInterval)
 clearInterval(mInterval)

}

var resetCount = function () {
document.querySelector('.milliseconds').innerHTML =" 00"
document.querySelector('.seconds').innerHTML = "00 :"
document.querySelector('.minutes').innerHTML = "00 :"
}




startcount.addEventListener('click', startCount)
stopcount.addEventListener('click', stopCount)
resetcount.addEventListener('click', resetCount)


//12.4 this task is way to complicated in WDI, try somewhere else (good vids around including of 30dayschallenge 
//https://courses.wesbos.com/account/access/5a79a8df4ea3f06ee90376bf or https://www.youtube.com/results?search_query=stopwatch+javascript
//also before these videos try to create the stopwatch to display without the oo: (i will be for seconds x for minutes?)

//23/4 continue this app (alone) with the help of https://www.youtube.com/watch?v=jRhB1IG7uAw - oop so too difficult. try this https://www.youtube.com/watch?v=fF-vtP3sjPcas you progress
//check why setinterval only works when function is fully written inside it
//https://forum.freecodecamp.org/search?q=pomodoro%20difficult read - I imply from here that the stopwatch project is advanced FE

