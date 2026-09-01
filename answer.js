//problem-1
function describeValue (value){
    const type = typeof value;
   let valueType;
   if(value){
     valueType = "truthy"
   } else{
    valueType = "falsy"
   }
   return `${type} | ${valueType}`
}


//problem-2

function getDayType(day){
    const newDay = day.toLowerCase();
    switch(newDay){
        case "friday":
        case "saturday":
         return "Weekend"
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
         return  "Working Day"
        default:
         return "Invalid Day"
    }
}

//problem-3

function validateUsername(userName){
    if(userName.length < 4){
        return "Too Short"
    } else if(userName.includes(" ")){
        return "No Space Allowed"
    } else if(userName.toLowerCase().includes("admin")){
        return "Reserved Word"
    }
    return "Available"
}

//problem-4

function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let fare = 50;
    if(distance > 2){
        fare = fare + (distance - 2) * 15;
    }
    fare = fare + waitingMinutes * 2
    if(isNight){
        fare = fare +(fare * 0.2)
    }
    return fare
}

//problem-5

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;
    if(runsNeeded <= 0){
        return "Won"
    } else if(ballsLeft <= 0){
        return "Lost"
    }
   const requiredRate = (runsNeeded / ballsLeft) * 6
   if(requiredRate <= 6){
    return `Need ${runsNeeded} runs is ${ballsLeft} balls |"Comfortable"`
   } else if(requiredRate >6 && requiredRate <= 12){
    return `Need ${runsNeeded} runs is ${ballsLeft} balls |"Tough"`
   }
   return `Need ${runsNeeded} runs is ${ballsLeft} balls | "Almost Impossible"`
}
