// Type predicates are functions that retrun a boolean value . they are use to narrow the type of a variable .type predicates are used in type guards


type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}


function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return " fish food"
    }
    else {
        pet
        return"bird Food"
    }
}

console.log(getFood);