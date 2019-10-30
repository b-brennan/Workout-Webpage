 
// Create Arrays of exercises to pick from for each body part
let compoundChest = ["Barbell Flat Bench Press", "Barbell Flat Bench Press", "Dumbbell Flat Bench Press", 
"Dumbbell Incline Bench Press"];
let chestExercises = ["Incline Dumbbell Flys", "Chest Press Machine", "Decline Bench Press", 
"Machine Flys", "Weighted Dips", "Push-Ups"]; 

let compoundLegs = ["Traditional Back Squat", "Front Squat", "Deadlifts"];
let legExercises = ["Leg Press", "Weighted Lunges", "Hip Thrusts", "Calf Raises", "Leg Extensions", 
"Leg Curls"];

let compoundBack = ["Weighted Pull-Ups", "Deadlifts"]
let backExercises = ["Pull-Ups", "Lat Pull-Downs", "Barbell Rows", "Singe-Arm Dumbell Rows", "T-bar Machine Rows"];

let compoundArms = ["Heavy Barbell Curls", "Heavy Dumbbell Curls"];
let armsExercises = ["Close-grip barbell press", "Wide-grip Barbell Curl", "Overhead Dumbell Extension", 
"Close-grip barbell Curl", "Decline Skull-Crushers", "Single-Arm Dumbell Curl"];

let compoundShoulders = ["Overhead Barbell Press", "Overhead Dumbell Press"];
let shoulderExercises = ["Rope Face Pulls", "Machine Side Lateral Raises", "Arnold Press", 
"Side Lateral Raises", "Dumbell Front Raises"];

// randomly select workouts given a specific body part array
function pickWorkout(cmpd, exer){
    let chestWorkout = "";

    let randomNum1 = randomNumber(cmpd.length);
    let randomNum2 = randomNumber(exer.length);
    let randomNum3 = randomNumber(exer.length);
    let randomNum4 = randomNumber(exer.length);
    while (randomNum2 == randomNum1 || randomNum3 == randomNum4 || randomNum1 == randomNum3 ||
        randomNum2 == randomNum4 || randomNum2 == randomNum3 || randomNum1 == randomNum4){
        randomNum2 = randomNumber(exer.length);
        randomNum3 = randomNumber(exer.length);
        randomNum4 = randomNumber(exer.length);
    }
    let cmpdExercise = cmpd[randomNum1];
    let exercise1 = exer[randomNum1];
    let exercise2 = exer[randomNum2];
    let exercise3 = exer[randomNum3];
    let exercise4 = exer[randomNum4];

    let exerciseArray = [cmpdExercise, exercise1, exercise2, exercise3, exercise4];

    chestWorkout += cmpdExercise;
    chestWorkout += ' 5x5, ';
    chestWorkout += exercise1;
    chestWorkout += ' 4x8-12, ';
    chestWorkout += exercise2;
    chestWorkout += ' 4x8-12, ';
    chestWorkout += exercise3;
    chestWorkout += ' 4x8-12, ';
    chestWorkout += exercise4 + ' 4x8-12';
    return chestWorkout;
}

// random number generator
function randomNumber(endVal){
    let ranNum = Math.floor((Math.random() * endVal)); 
    return ranNum;
}

// format display nicely
function formatDisplay(workoutList){
    let formattedList = "";
    for(let i = 0; i < workoutList.length; ++i){
        formattedList += (workoutList[i] + "\n");
    }
    return formattedList;
}

// display workout upon button click
function btnFunction() {
    if (document.getElementById("selectMuscle").value == "Chest"){
        document.getElementById("buttonDisplay").innerHTML = pickWorkout(compoundChest, chestExercises);
    }
    else if (document.getElementById("selectMuscle").value == "Back"){
        document.getElementById("buttonDisplay").innerHTML = pickWorkout(compoundBack, backExercises);;
    }
    else if (document.getElementById("selectMuscle").value == "Arms"){
        document.getElementById("buttonDisplay").innerHTML = pickWorkout(compoundArms, armsExercises);;
    }
    else if (document.getElementById("selectMuscle").value == "Legs"){
        document.getElementById("buttonDisplay").innerHTML = pickWorkout(compoundLegs, legExercises);
    }
    else {
        document.getElementById("buttonDisplay").innerHTML = pickWorkout(compoundShoulders, shoulderExercises);
    }

}
