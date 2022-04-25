function distanceFromHqInBlocks(distance){
    if(distance > 34 && distance <= 43 ){
        return 1
    } else if (distance <= 50 ){
        return 8
    } else if (distance >= 34 ){
        return 8
    } 
    
    // return Math.abs(distance - 42)
    
}

function distanceFromHqInFeet (ft){
    if(ft > 34 && ft <= 43 ){
        return 264
    }else if (ft <= 50){
        return 2112
    }else if (ft <= 34){
        return 2112
    }

}

function distanceTravelledInFeet (first, second){
    const result = (second-first)*264;
    return result >= 0 ? result : -1*result;
}

function calculatesFarePrice (first, second) {
    //                      true/fales               this will happen       otherwise this happen
    const distanceInFeet = (second-first)*264 > 0 ? (second-first)*264 : (second-first)*-264;
    
    if(distanceInFeet <= 400) {
        return 0;
        //else if( distanceInFeet <= 2000)
    } else if(distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet-400)*0.02;
    } else if(distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    } else if(distanceInFeet > 2500) {
        return 'cannot travel that far';
    }
}