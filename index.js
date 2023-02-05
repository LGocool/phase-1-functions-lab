// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const base = 42;
    let distance = someValue;
        if (distance < base ){
            return base - distance ;
        }
        else {
            return distance - base;
        } 
}


function distanceFromHqInFeet(someValue){
    let blocks2Feet = distanceFromHqInBlocks(someValue) * 264;
    return blocks2Feet ;
}

function distanceTravelledInFeet(start , destination){
    const totalDistance = (destination - start); // distance traveled in ft
    if (destination < start){ //if the distance is below return distance
        return ((start - destination)* 264) ;
    }
    else{
        return (totalDistance * 264);
    }
   
}

function calculatesFarePrice(start, destination){
    const freeSample = 0;
    const charge = 25;
    let fDistance = distanceTravelledInFeet(start,destination);
        if (fDistance < 400){
            return freeSample ;
        }
        else if (fDistance >= 400 && fDistance <= 2000){
            return(fDistance - 400) * 0.02  ;
        }
        else if (fDistance > 2500){
            return 'cannot travel that far' ;
        }
        else {
            return charge;
        }
    
    }