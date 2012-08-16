/*



*/
//JSON
var jsonData = 
{
//Property Array
	"fish": 
	[
		{
			"fishID": "01897",
			"type": "Northern Pike",
			"bait": "Bucktail",
			"numOfBait": 3,
			"biggestCaught": 22,
			"worldrecord": 63
		},
		{
			"fishID": "01898",
			"type": "Bass",
			"bait": "Worm",
			"numOfBait": 4,
			"biggestCaught": 7,
			"worldrecord": 22
		},
		{
			"fishID": "01899",
			"type": "Walleye",
			"bait": "Minnow",
			"numOfBait": 2,
			"biggestCaught": 9,
			"worldrecord": 22  
		}
	]
};
//Global Properties
var myName = "Benjamin";
var pike = true;
var howFarFromCamp = [15, "miles"];
var gas = 2;

// Function with Argument Boolean with Nested Conditional and BACK and Return Boolean
var findANewSpot = function(newSpot)
{
	if(newSpot == true)
	{
		console.log("We decided that we would find a new fishing spot!");

		if(pike == true)
		{
			console.log("We found a nice weed bed to fish for Pike!");
		}
		else
		{
			console.log("We found a nice spot with good structure for Walleye and Bass!");
		};
	}
	else
	{
		console.log("We will continue to fish here at our current spot!");
		catchingFish = true;
		return(catchingFish);
	};
};
//Function with For Loop, While Loop, Nested Loop, local variables, BACK
var baitLeft = function()
{
	for (var bNum = 2; bNum >= 0 && bNum <= 4; bNum--) 
	{

		while(jsonData.fish[bNum].numOfBait >= 0)
		{
		jsonData.fish[bNum].numOfBait--;
		baitRemaining = jsonData.fish[bNum].numOfBait + 1;

		console.log("We have " + baitRemaining + " " + jsonData.fish[bNum].bait + "s left!");

		};

	};
};
//function with number argument, string argument, array argument
var boatGas = function(gasLevel,gasType,distanceBack)
{
	//conditional with return string
	if(gasLevel >= distanceBack[0])
		{
			statusMessage = "Yay, we have enough " + gasType + " gas to get back to camp!";
			return(statusMessage);
		}
	else
		{
			statusMessage = "Just checked the gas gauge, Uh oh....";
			return(statusMessage);
		};


};
//function with array argument, number argument, return number, math
var distanceFromCamp = function(gasLevel,distanceBack)
{
	howFarwWeCanGo = distanceBack[0] - gasLevel;
	return(howFarwWeCanGo);
}



//Object with Properties String, Number, Object -> Boolean, String.
var dinnerActivities =
{
	mainCourse: "Steak",
	numberOfPeople: 4,
	dessert:
	{
		haveRoom: false,
		whatType: "Cheesecake"
	}
};













console.log("Are we catching any fish here?");
findANewSpot(false);
//Conditional
if (catchingFish == true)
{
	console.log("We are catching a lot of fish here!");
};
baitLeft();
//for loop with Math
for (var i = jsonData.fish.length - 1; i >= 0; i--) 
{
	var difFromRec = jsonData.fish[i].worldrecord - jsonData.fish[i].biggestCaught;
	console.log("Our biggest " + jsonData.fish[i].type + " caught today was " + difFromRec + "lbs away from a World Record!");
};
//argument Number, String, Array
boatGas(gas,"Unleaded",howFarFromCamp);
console.log(statusMessage);
//argument Number, Array
distanceFromCamp(gas,howFarFromCamp);
console.log("We can go " + howFarFromCamp[0] + " " + howFarFromCamp[1] + " until we run out of gas! We will be " + howFarwWeCanGo + " " + howFarFromCamp[1] + " away still.");
//Conditional
console.log("Tonight our main course will be " + dinnerActivities.mainCourse + ". We have enough for " + dinnerActivities.numberOfPeople + " people.");
if (dinnerActivities.dessert.haveRoom == true)
{
	console.log("We will be having " + dinnerActivities.dessert.whatType + " for dessert tonight!");
}
else
{
	console.log("Too bad you are too full for dessert!");
};















