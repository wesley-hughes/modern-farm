

// Define a variable in this module whose initial value is an empty array.

// This array will store all of the plants that are growing in the field. 
// Do not export the array.

// In the module, define and export a function named addPlant.

// The addPlant function must accept a seed object as input. 
// ==> so seedObj will be parameter

// The function will add the seed to the field 
// (How do you add something to an array? Do you remember the method for it?).
// ==> .push ex: plainsInField.push("item to add to array")
// ***** need to add seedObj to plantsInField empty Array... will use .push
// plantsInField.push(seedObj) should work????
let plantsInField= []

export const addPlant = (seedObj) => {

if (Array.isArray(seedObj)){
    for (const seed of seedObj) {
        plantsInField.push(seed)
    }
}
else { plantsInField.push(seedObj)
}
return plantsInField
}

// Define and export a function named usePlants that returns a 
// copy of the array of plants.

export const usePlants = () => {
return plantsInField
}


// Be aware that when planting corn, 
// an array of objects will be provided instead of a single object 
// like all the other type of seeds. Investigate the Array.isArray 
// method to check if corn got passed in, or one of the others.
