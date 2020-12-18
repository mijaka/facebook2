let database = [
{
	username:"mia",
	password:"iamthebest"
}
];
let newsFeed=[
{
    username: "Bobby",
    timeline: "So tired from all that learning"
},
{
	username: "Roman",
	timeline: "I love React and Node"
}
];

let userNamePrompt = prompt("What`s your username?");
let passwordPrompt = prompt("What`s your password?");

function signIN(user, pass){
	if (user === database[0].username && pass === database[1].password){
		console.log(newsFeed);
	} else {
		alert("sorry, you are not a person");
	}
}