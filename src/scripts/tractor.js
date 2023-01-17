

// In this module, define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter).
import { createPlan } from './plan.js'
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"

// "yearlyPlan" will be parameter

// The plan is an array. It contains 3 arrays representing the rows in the field to be plants.
//  Figure out how to iterate both the parent array and the child arrays.

// nested for loop???

// // Example growing plan. Actual plan is bigger.
// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"]
// ]
// As you iterate the row of food types to be planted, 
// invoke the corresponding factory function 
// (e.g. if the food type is 
// "Asparagus", invoke the createAsparagus function to get an asparagus seed).
// Take that seed and add it to the array 
// // of plants in the field module.

// addPlant(corn)
// addPlant(potato)
// addPlant(soybean)
// addPlant(sunflower)
// addPlant(wheat)
// addPlant(asparagus)

export const plantSeeds = (yearlyPlan) => {
    let plantsInField= []
    for (const row of yearlyPlan) {
        for (const plant of row) {
            if (plant === "Corn") {
                let corn = createCorn()
                for (const oneCorn of corn)
                addPlant(oneCorn)
            }      
            else if (plant === "Potato") {
                let potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (plant === "Soybean") {
                let soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (plant === "Sunflower") {
                let sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (plant === "Wheat") {
                let wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
            else if (plant === "Asparagus") {
                let asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
        }
    }
    return plantsInField
}