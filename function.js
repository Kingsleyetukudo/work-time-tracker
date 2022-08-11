document.getElementById('daily-time').addEventListener('click', showDaily)

document.getElementById('weekly-time').addEventListener('click', showWeekly)

document.getElementById('monthly-time').addEventListener('click', showMonthly)

// Daily
function showDaily() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'data.json', true)

    xhr.onload = function() {
        if (this.status === 200){

            const daily = JSON.parse(this.responseText)
            
            //Work timing
            document.getElementById('here').innerHTML = `${daily[0].timeframes.daily.current}hrs`

            document.getElementById('previous').innerHTML = `Previous Day - ${daily[0].timeframes.daily.previous} hrs`

            //Play timing
            document.getElementById('here1').innerHTML = `${daily[1].timeframes.daily.current}hrs`

            document.getElementById('previous1').innerHTML = `Previous Day - ${daily[1].timeframes.daily.previous} hrs`

            //Study timing
            document.getElementById('here2').innerHTML = `${daily[2].timeframes.daily.current}hrs`

            document.getElementById('previous2').innerHTML = `Previous Day - ${daily[2].timeframes.daily.previous} hrs`

             //Exercise timing
             document.getElementById('here3').innerHTML = `${daily[3].timeframes.daily.current}hrs`

             document.getElementById('previous3').innerHTML = `Previous Day - ${daily[3].timeframes.daily.previous} hrs`

              //Social timing
            document.getElementById('here4').innerHTML = `${daily[4].timeframes.daily.current}hrs`

            document.getElementById('previous4').innerHTML = `Previous Day - ${daily[4].timeframes.daily.previous} hrs`

             //Self Care timing
             document.getElementById('here5').innerHTML = `${daily[5].timeframes.daily.current}hrs`

             document.getElementById('previous5').innerHTML = `Previous Day - ${daily[5].timeframes.daily.previous} hrs`
        } 
        
    }
    xhr.send()
}


// Weekly 
function showWeekly() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'data.json', true)

    xhr.onload = function() {
        if (this.status === 200){

            const weekly = JSON.parse(this.responseText)

            // //Work timing
            document.getElementById('here').innerHTML = `${weekly[0].timeframes.weekly.current}hrs`

            document.getElementById('previous').innerHTML = `Previous Week - ${weekly[0].timeframes.weekly.previous} hrs`

            //Play timing
            document.getElementById('here1').innerHTML = `${weekly[1].timeframes.weekly.current}hrs`

            document.getElementById('previous1').innerHTML = `Previous Week - ${weekly[1].timeframes.weekly.previous} hrs`

            //Study timing
            document.getElementById('here2').innerHTML = `${weekly[2].timeframes.weekly.current}hrs`

            document.getElementById('previous2').innerHTML = `Previous Week - ${weekly[2].timeframes.weekly.previous} hrs`

             //Exercise timing
             document.getElementById('here3').innerHTML = `${weekly[3].timeframes.weekly.current}hrs`

             document.getElementById('previous3').innerHTML = `Previous Week - ${weekly[3].timeframes.weekly.previous} hrs`

              //Social timing
            document.getElementById('here4').innerHTML = `${weekly[4].timeframes.weekly.current}hrs`

            document.getElementById('previous4').innerHTML = `Previous Week - ${weekly[4].timeframes.weekly.previous} hrs`

             //Self Care timing
             document.getElementById('here5').innerHTML = `${weekly[5].timeframes.weekly.current}hrs`

             document.getElementById('previous5').innerHTML = `Previous Week - ${weekly[5].timeframes.weekly.previous} hrs`
        } 
    }
    xhr.send()
}


// Monthly
function showMonthly() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'data.json', true)

    xhr.onload = function() {
        if (this.status === 200){

            const monthly = JSON.parse(this.responseText)

            // //Work timing
            document.getElementById('here').innerHTML = `${monthly[0].timeframes.monthly.current}hrs`

            document.getElementById('previous').innerHTML = `Previous Month - ${monthly[0].timeframes.monthly.previous} hrs`

            //Play timing
            document.getElementById('here1').innerHTML = `${monthly[1].timeframes.monthly.current}hrs`

            document.getElementById('previous1').innerHTML = `Previous Month - ${monthly[1].timeframes.monthly.previous} hrs`

            //Study timing
            document.getElementById('here2').innerHTML = `${monthly[2].timeframes.monthly.current}hrs`

            document.getElementById('previous2').innerHTML = `Previous Month - ${monthly[2].timeframes.monthly.previous} hrs`

             //Exercise timing
             document.getElementById('here3').innerHTML = `${monthly[3].timeframes.monthly.current}hrs`

             document.getElementById('previous3').innerHTML = `Previous Month - ${monthly[3].timeframes.monthly.previous} hrs`

              //Social timing
            document.getElementById('here4').innerHTML = `${monthly[4].timeframes.monthly.current}hrs`

            document.getElementById('previous4').innerHTML = `Previous Month - ${monthly[4].timeframes.monthly.previous} hrs`

             //Self Care timing
             document.getElementById('here5').innerHTML = `${monthly[5].timeframes.monthly.current}hrs`

             document.getElementById('previous5').innerHTML = `Previous Month - ${monthly[5].timeframes.monthly.previous} hrs`
        } 
    }
    xhr.send()
}



// Add active class to the current button (highlight it)
var header = document.getElementById("btn-con");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}



