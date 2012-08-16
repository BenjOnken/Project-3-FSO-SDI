/*



*/

var jsonData = 
{
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
	],
	"boatMates":
	{
		"03901":
		{
			"name": "Jenny",
			"occupation": "Doctor",
			"favoriteFish": "Walleye"
		},
		"03904":
		{
			"name": "Chuck",
			"occupation": "Electrician",
			"favoriteFish": "Bass"
		}
	}
};

var myName = "Benjamin";
var pike = true;


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
	};
};

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

var dinnerActivities =
{
	mainCourse: "Steak",
	numberOfPeople: 4,
	vegetarians: false,
	dessert:
	{
		haveRoom: false,
		whatType: "Cheesecake"
	}
};








findANewSpot(true);
baitLeft();
for (var i = jsonData.fish.length - 1; i >= 0; i--) 
{
	var difFromRec = jsonData.fish[i].worldrecord - jsonData.fish[i].biggestCaught;
	console.log("Our biggest " + jsonData.fish[i].type + " caught today was " + difFromRec + "lbs away from a World Record!");
};

console.log("Tonight our main course will be " + dinnerActivities.mainCourse + ". We have enough for " + dinnerActivities.numberOfPeople + " people.");
if (dinnerActivities.dessert.haveRoom == true)
{
	console.log("We will be having " + dinnerActivities.dessert.whatType + " for dessert tonight!");
}
else
{
	console.log("Too bad you are too full for dessert!");
}














