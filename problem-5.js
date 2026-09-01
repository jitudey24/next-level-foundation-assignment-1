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
console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 70, 12));
