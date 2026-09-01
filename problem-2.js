// function getDayType(day){
//     if(day === "Friday" && "staturday"){
//         return "Weekend"
//     } else if(day === "Sunday" && "Monday" && "Tuesday" && "Wednesday" && "Thursday"){
//         return 	"Working Day"
//     }
//     return "Invalid Day"
// }

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

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));
console.log(getDayType("sunday"));
