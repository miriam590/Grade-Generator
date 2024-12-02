// Challenge 2 : Speed Detector (Toy Problem)

function checkSpeed(speed){
    const speedLimit = 70;
    const kilometerPerSecond = 5;
    if(speed < 70){
        console.log("Ok.")
    }else{
        const points = Math.floor((speed-speedLimit)/kilometerPerSecond);
        if(points>12){
console.log("License Suspended.")
        }else{
            console.log(Demerit Points: ${points})
        }
    }
}
console.log(checkSpeed(210))