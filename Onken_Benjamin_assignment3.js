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
			"worldrecord": 63
		},
		{
			"fishID": "01898",
			"type": "Bass",
			"bait": "Worm",
			"worldrecord": 22
		},
		{
			"fishID": "01899",
			"type": "Walleye",
			"bait": "Minnow",
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
/*
var whatTypeOfFish = function(numberOfSpecies,typesOfFish)
{
	for (var difTypesFish = numberOfSpecies; difTypesFish >= 0 && difTypesFish <= 5; difTypesFish--) 
	{
		caughtSoFar++;
		output("So far we have caught " + caughtSoFar + " types of fish! The most recent was a " + typesOfFish[difTypesFish]);
	};
	return(caughtSoFar);
//
	output("Since we have 3 people in the boat, the maximum amount of fish we can keep for dinner is 9.");
	var fishReleased = 0;
	while(fishToKeep > 9)
	{
		fishToKeep--;
		fishReleased++;

		output("We have released " + fishReleased + " fish and still have " + fishToKeep + " fish left.");



	};
	fishCaught = fishToKeep;
	return(fishCaught);

};
*/









findANewSpot(true);

