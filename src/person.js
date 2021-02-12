console.log('person.js is running');

export const isAdult = (x) => {
    if (x >= 18){
        return "You are an Adult!";
    } else {
        return "You still have a little growing up to do!"
    }
}

export const canDrink = (x) => {
    if (x >= 21){
        return "Pull up and let's have a cold one!";
    } else {
        return "Not today Sport!"
    }
}

const isSenior =(x) => {
    if(x >= 65){
        return  x + ", This person is a Senior Citizen.";
    }
    else {
        return  x + ", This person is not a Senior Citizen....Yet.";
    }
}

export default isSenior;