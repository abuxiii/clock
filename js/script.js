const   hourArrow   = document.querySelector('.h'),
        minuteArrow = document.querySelector('.m'),
        secondArrow = document.querySelector('.s'),
        hoursBox    = document.querySelector('.hours'),
        minutesBox  = document.querySelector('.minutes');
        
function watch() {
    
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours   = time.getHours()
        
        minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
        secondArrow.style = `transform: rotate(${seconds * 6}deg)`
        hourArrow.style = `transform: rotate(${hours * 30}deg)`
        
        hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
        minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
        
        setTimeout(() => watch(), 1000)
        
}
watch()


// рекурсия - это когда функция запускает саму себя внутри
// setTimeout() - это функция которая запускает что то с указанной задержкой

// let i = 0;

// function qwerty() {
//     if(i < 10) {
//         console.log(i);
//         i++
//         setTimeout(() =>  qwerty(), 1000)
       
//     }
// }
// qwerty()


const links = document.querySelectorAll('.tabsItem') 
const tabs  = document.querySelectorAll('.tabsContentItem') 

console.log(links);

links.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}



function findSmall(arr) {
    
    arr.sort((a,b) => a - b)
    return arr[arr.length - 1]
}

console.log(findSmall([34,15,88,2]));
console.log(findSmall([34,-345,-1,100]));




document.addEventListener("DOMContentLoaded", function () {
    const stopwatchBtn = document.querySelector(".stopwatch__btn");
    const hoursElem = document.querySelector(".stopwatch__hours");
    const minutesElem = document.querySelector(".stopwatch__minutes");
    const secondsElem = document.querySelector(".stopwatch__seconds");
    const spanIndicator = document.querySelector(".tabsLink__span");

    let interval;
    let elapsedTime = 0;

    stopwatchBtn.addEventListener("click", function () {
        if (stopwatchBtn.textContent === "start") {
            startStopwatch();
        } else if (stopwatchBtn.textContent === "stop") {
            stopStopwatch();
        } else if (stopwatchBtn.textContent === "clear") {
            clearStopwatch();
        }
    });

    function startStopwatch() {
        stopwatchBtn.textContent = "stop";
        spanIndicator.classList.add("active"); 
        spanIndicator.classList.remove("active_clear"); 
        interval = setInterval(() => {
            elapsedTime++;
            updateStopwatch();
        }, 1000);
    }

    function stopStopwatch() {
        clearInterval(interval);
        stopwatchBtn.textContent = "clear";
        spanIndicator.classList.remove("active"); 
        spanIndicator.classList.add("active_clear"); 
    }

    function clearStopwatch() {
        elapsedTime = 0;
        updateStopwatch();
        stopwatchBtn.textContent = "start";
        spanIndicator.classList.remove("active", "active_clear"); 
    }

    function updateStopwatch() {
        let hours = Math.floor(elapsedTime / 3600);
        let minutes = Math.floor((elapsedTime % 3600) / 60);
        let seconds = elapsedTime % 60;

        hoursElem.textContent = hours;
        minutesElem.textContent = minutes;
        secondsElem.textContent = seconds;
    }
});






































