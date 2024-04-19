//to-do(Copy and pasted): calculate time using this formulas for each Machine do Calculation(i)=(Machine output(i)/output time(i))/(Machine input(i+1)/Machine time(i+1))
//basically how it works (english-math-programming speak)
//then you just apply
//for each chain for each Machine(z) do Calculation(i)=(Machine output(i)/output time(i))/(Machine input(i+1)/Machine time(i+1))

//fetching number from webpage, don't touch unless I added new input or something
const doc = document
const Treesinput = doc.getElementById("Trees")
const sawmill1input = doc.getElementById("Sawmill1")
const sawmill2input = doc.getElementById("Sawmill2")

let tree = parseInt(Treesinput.value)
let sawmill1 = parseInt(sawmill1input.value)
let sawmill2 = parseInt(sawmill2input.value)

const cycle = 20.5 //Machine run-time per cycle

//For logging
let Firstcycle = null
let secondcycle = null
let thirdcycle = null
let finalresult = null

//Simple time convert (num > min/sec)
function minuteconvert(a) {
    function convertmin(a) {
        return a / 60
    }

    if (!convertmin(a) < 1.15) {
        if (convertmin(a) * 60 > 60) {
            return convertmin(a).toFixed(2) + " minute"
        } else {
            return a + " second"
        }
    } else {
        return 1.15 + " minute"
    }
}

//Cycle convert
function cyclecalculation(a) {
    return Math.ceil(a / 20.5)
}

//Main function logic
function production(tree, cycle, sawmill1, sawmill2) {
    //For calculating and logging(again)
    const log = tree * 2
    let cutlog = 0
    let chunkplank = 0
    let plank = 0
    let realtime = 0
    let time = 0
    let alltime = []
    let totalcycle = []

    //estimated output for each cycle
    cutlog = log * 2
    chunkplank = cutlog
    plank = chunkplank * 2

    //clearing log
    for (let i = 0; i <= 3 ; i++) {
        const arrcycle = [Firstcycle,secondcycle,thirdcycle,finalresult]
        if (!arrcycle[i] == null) {
            arrcycle[i] = null
        }
    }

    //Main loop
    for (let i = 0; i < 3; i++) {
        //All of this are for logging, No other purpose
        const th = ["First", "Second", "Third"]
        const wood = ["Log", "Cut log", "Chunk plank"]
        //Number array
        const woodnum = [log, cutlog, chunkplank]
        const sawmill = [sawmill1, sawmill2, sawmill2]
        const arrcycle = [Firstcycle,secondcycle,thirdcycle]
        realtime = (woodnum[i] * cycle) / sawmill[i]
        totalcycle.push(cyclecalculation(realtime))
        alltime.push(realtime)
        time = minuteconvert(realtime)
        arrcycle[i] = "Time/Cycle : " + time + "/" + cyclecalculation(realtime) + " Cycle | " + wood[i] + " : " + woodnum[i] + " | Total cycles = " + totalcycle.reduce(function (x, y) {return x + y;}, 0)
        console.log(arrcycle[i])
    }
    //Final logging
    let sum = alltime.reduce(function (x, y) {
        return x + y;
    }, 0)
    time = minuteconvert(sum)
    finalresult = "Total time/Cycle : " + time + "/" + totalcycle.reduce(function (x, y) {return x + y;}, 0) + " Cycle | Plank : " + plank + " | Sawmills : " + Math.round(sawmill1 + sawmill2)
    console.log(finalresult)
}

//Unused and commented out
//function createresult(a) {
//    const doc = document
//    const newh3 = doc.createElement("h3")
//    const newresult = doc.createTextNode(a)
//    newh3.appendChild(newresult)
//    doc.body.insertBefore(newh3)
//}

//What trigger the calculation(I took embassingly long time on this)
doc.getElementById("calculate").addEventListener('click', e => {
    tree = parseInt(Treesinput.value)
    sawmill1 = parseInt(sawmill1input.value)
    sawmill2 = parseInt(sawmill2input.value)
    production(tree, cycle, sawmill1, sawmill2)
})
