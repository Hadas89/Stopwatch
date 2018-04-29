
		var msDisplay = document.querySelector('.milliseconds')
		var sDisplay = document.querySelector('.seconds')
		var mDisplay = document.querySelector('.minutes')
		ms = 0, s = 0 , m = 0
		isOn = false;
		
		console.log("check")	
		console.log('countdown is not running')
		console.log(isOn)
		

var clockUpdate  = {
	
	update: function () {
		isOn = true
		console.log('countdown is running')
		console.log(isOn)
		Interval = setInterval(function() {

			ms++;
			msDisplay.innerHTML = ms < 10 ?  "00" + ms : ms <100 ? "0" + ms: ms
			

			if (ms >= 300) {
				ms = 0;

					s++;
					sDisplay.innerHTML = s < 10 ?  "0" + s + ":" : s + ":"
					

					if (s >= 59) {
						s = 0;

						m++;
						mDisplay.innerHTML =  m < 10 ?  "0" + m + ":" : m + ":"

					}
			}
}, 1)
		},

	startCount : function () {

		if (isOn == false) {
			document.getElementsByTagName('button')[2].id = 'pausebutton'
			document.getElementsByTagName('button')[1].id = 'resetbutton'
			document.getElementsByTagName('button')[0].id = 'startbuttonclicked'
		clockUpdate.update() 
	} else {
		return
	}


},

	pauseCount : function () {
		isOn = false
		if (isOn == false) {
			document.getElementsByTagName('button')[2].id = 'resetbutton'
		document.getElementsByTagName('button')[1].id = 'pausebuttonclicked'
		document.getElementsByTagName('button')[0].id = 'startbutton'
	}
	console.log('countdown is not running')
	console.log(isOn)
	  clearInterval(Interval)
	 
},

	resetCount : function () {
		if (isOn == false) {

			document.getElementsByTagName('button')[2].id = 'resetbuttonclicked'
		document.getElementsByTagName('button')[1].id = 'pausebutton'
		document.getElementsByTagName('button')[0].id = 'startbutton'
	
	 clearInterval(Interval)
	document.querySelector('.milliseconds').innerHTML ="000"
	document.querySelector('.seconds').innerHTML = "00:"
	document.querySelector('.minutes').innerHTML = "00:"
	ms = 0, s = 0 , m = 0 
} else {
	return
}

	},
	
}



startbutton.addEventListener('click', clockUpdate.startCount)
pausebutton.addEventListener('click', clockUpdate.pauseCount)
resetbutton.addEventListener('click', clockUpdate.resetCount)


//*previous tries*


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
// var clockUpdate = {
	

// 	update: function () {
		
// 	thenMS = new Date().getMilliseconds()
// 	thenS = new Date().getSeconds()
// 	thenM = new Date().getMinutes()
// 	this.milliSeconds()
// 	this.Seconds()
// 	this.Minutes()
// 	},


// 	milliSeconds: function() {
// 		msInterval = setInterval(function() {
// 		ms = new Date().getMilliseconds()
	
// 		document.querySelector('.milliseconds').innerHTML = (this.thenMS + ms)
// 		}, 1)
// },


// 	Seconds: function() {
// 		sInterval = setInterval(function() {
// 		s = new Date().getSeconds()

// 		document.querySelector('.seconds').innerHTML = (s - this.thenS) + " : "
// 		}, 1)
// },

// 	Minutes: function() {
// 		mInterval = setInterval(function() {
// 		m = new Date().getMinutes()
		
// 		document.querySelector('.minutes').innerHTML = m - this.thenM + " :" 
// 		}, 1)
// },





//evolution of progress!
//12.4 this task is way to complicated in WDI, try somewhere else (good vids around including of 30dayschallenge 
//https://courses.wesbos.com/account/access/5a79a8df4ea3f06ee90376bf or https://www.youtube.com/results?search_query=stopwatch+javascript
//also before these videos try to create the stopwatch to display without the oo: (i will be for seconds x for minutes?)

//23/4 continue this app (alone) with the help of https://www.youtube.com/watch?v=jRhB1IG7uAw - oop so too difficult. try this https://www.youtube.com/watch?v=fF-vtP3sjPcas you progress
//check why setinterval only works when function is fully written inside it
//https://forum.freecodecamp.org/search?q=pomodoro%20difficult read - I imply from here that the stopwatch project is advanced FE

//25/4 try to tackle resuming from the last point on time, continue googling/wdi video lesson (currentTime = 0)

//26.4 complete app 

//27.4 solve the bug that it increase the pace every time start is clicked (already in progress by isOn variable) - done

//29.4 done for now -  add laps and more later on 