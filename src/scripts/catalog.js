import { harvestPlants } from './harvester.js'

export const catalog = (harvestedPlants) => {
    let htmlFoodString = ""
    for (const plant of harvestedPlants)
        htmlFoodString += `<section class="plant">${plant.type}</section>\n`
    return htmlFoodString
}