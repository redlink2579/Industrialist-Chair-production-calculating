import {minuteconvert, cyclecalculation} from "funclibs.js"

const doc = document
const Treesinput = doc.getElementById("Trees")
const sawmill1input = doc.getElementById("Sawmill1")
const sawmill2input = doc.getElementById("Sawmill2")

let tree = parseInt(Treesinput.value)
const cycle = 20.5
let sawmill1 = parseInt(sawmill1input.value)
let sawmill2 = parseInt(sawmill2input.value)
let Firstcycle = null
let secondcycle = null
let thirdcycle = null
let finalresult = null

function production(tree, cycle, sawmill1, sawmill2) {
    const log = tree * 2
    let cutlog = 0
    let chunkplank = 0
    let plank = 0
    let realtime = 0
    let time = 0
    let alltime = []
    let totalcycle = []

    cutlog = log * 2
    chunkplank = cutlog
    plank = chunkplank * 2

    for (let i = 0; i <= 3 ; i++) {
        const arrcycle = [Firstcycle,secondcycle,thirdcycle,finalresult]
        if (!arrcycle[i] == null) {
            arrcycle[i] = null
        }
    }

    for (let i = 0; i < 3; i++) {
        const th = ["First", "Second", "Third"]
        const wood = ["Log", "Cut log", "Chunk plank"]
        const woodnum = [log, cutlog, chunkplank]
        const sawmill = [sawmill1, sawmill2, sawmill2]
        const arrcycle = [Firstcycle,secondcycle,thirdcycle]
        realtime = (woodnum[i] * cycle) / sawmill[i]
        totalcycle.push(cyclecalculation(realtime))
        alltime.push(realtime)
        time = minuteconvert(realtime, cycle)
        arrcycle[i] = "Time/Cycle : " + time + "/" + cyclecalculation(realtime, cycle) + " Cycle | " + wood[i] + " : " + woodnum[i] + " | Total cycles = " + totalcycle.reduce(function (x, y) {return x + y;}, 0)
        console.log(arrcycle[i])
    }

    let sum = alltime.reduce(function (x, y) {
        return x + y;
    }, 0)
    time = minuteconvert(sum)
    finalresult = "Total time/Cycle : " + time + "/" + totalcycle.reduce(function (x, y) {return x + y;}, 0) + " Cycle | Plank : " + plank + " | Sawmills : " + Math.round(sawmill1 + sawmill2)
    console.log(finalresult)
}

function createresult(a) {
    const doc = document
    const newh3 = doc.createElement("h3")
    const newresult = doc.createTextNode(a)
    newh3.appendChild(newresult)
    doc.body.insertBefore(newh3)
}

doc.getElementById("calculate").addEventListener('click', e => {
    tree = parseInt(Treesinput.value)
    sawmill1 = parseInt(sawmill1input.value)
    sawmill2 = parseInt(sawmill2input.value)
    production(tree, cycle, sawmill1, sawmill2)
})
