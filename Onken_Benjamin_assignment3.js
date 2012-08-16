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
//Method Accessor
var host = {
	name: "Benjamin",
	favoriteFish: "Pike",
	home: "Omaha"
};
var myName = host.name;
//Global Properties

var pike = true;
var howFarFromCamp = [15, "miles"];
var gas = 2;

//One big object with my functions inside
var dayOnTheLake = 
{
// Method with Argument Boolean with Nested Conditional and BACK and Return Boolean
findANewSpot: function(newSpot)
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
},
//Method with For Loop, While Loop, Nested Loop, local variables, BACK,accessor
baitLeft: function()
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
},
//Method with number argument, string argument, array argument
boatGas: function(gasLevel,gasType,distanceBack)
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


},
//Method with array argument, number argument, return number, math
distanceFromCamp: function(gasLevel,distanceBack)
{
	howFarwWeCanGo = distanceBack[0] - gasLevel;
	return(howFarwWeCanGo);
},

//Method with boolean argument, conditional, return array
boatTow: function(canSomeoneTow)
{
	if(canSomeoneTow == true)
	{
		towInfo = ["Thomas", 55, "quick."];
		return(towInfo);
	}
	else
	{
		towInfo = ["No one", 0, "as fast as you can swim."];
		return(towInfo);
	};
},


//Object with Properties String, Number, Object -> Boolean, String.
dinnerActivities:
{
	mainCourse: "Steak",
	numberOfPeople: 4,
	dessert:
	{
		haveRoom: false,
		whatType: "Cheesecake"
	}
}


};




//Story time




console.log("Hey my name is " + myName);
console.log("Are we catching any fish here?");
dayOnTheLake.findANewSpot(false);
//Conditional
if (catchingFish == true)
{
	console.log("We are catching a lot of fish here!");
};
	console.log("How much bait do we have left?");
dayOnTheLake.baitLeft();
//for loop with Math, Method Accessor
for (var i = jsonData.fish.length - 1; i >= 0; i--) 
{
	var difFromRec = jsonData.fish[i].worldrecord - jsonData.fish[i].biggestCaught;
	console.log("Our biggest " + jsonData.fish[i].type + " caught today was " + difFromRec + "lbs away from a World Record!");
};
//argument Number, String, Array
dayOnTheLake.boatGas(gas,"Unleaded",howFarFromCamp);
console.log(statusMessage);
//argument Number, Array
dayOnTheLake.distanceFromCamp(gas,howFarFromCamp);
console.log("We can go " + howFarFromCamp[0] + " " + howFarFromCamp[1] + " until we run out of gas! We will be " + howFarwWeCanGo + " " + howFarFromCamp[1] + " away still.");
//argument boolean
dayOnTheLake.boatTow(true);
console.log(towInfo[0] + " can tow us back. The cost will be " + towInfo[1] + " dollars. The speed will be " + towInfo[2]);

//Conditional
console.log("Tonight our main course will be " + dayOnTheLake.dinnerActivities.mainCourse + ". We have enough for " + dayOnTheLake.dinnerActivities.numberOfPeople + " people.");
if (dayOnTheLake.dinnerActivities.dessert.haveRoom == true)
{
	console.log("We will be having " + dayOnTheLake.dinnerActivities.dessert.whatType + " for dessert tonight!");
}
else
{
	console.log("Too bad you are too full for dessert!");
};















