import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'
console.log("Welcome to the main module")

// ORDER:
// 1.) PLAN (CREATEPLAN)
// 2.) SEEDS 
// 3.) FIELD (USEPLANTS)
// 4.) TRACTOR (PLANTSEEDS)
// 5.) HARVEST (HARVESTPLANTS)
// 6.) SELL HARVEST

let yearlyPlan = createPlan()

let tractor = plantSeeds(yearlyPlan)
let field = usePlants()
let harvester = harvestPlants(field)





// const asparagusSeed = createAsparagus()
// const addplant = addPlant(asparagusSeed)
// const test = usePlants(addplant)



//console.log(field)
// let testThree = harvestPlants(testTwo)
// console.log(testThree)

const parentHTMLElement = document.querySelector(".container")


parentHTMLElement.innerHTML = catalog(harvester)