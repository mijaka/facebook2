let database = [
{
	username:"mia",
	password:"iamthebest"
},
{
	username:"olive",
	password:"123"
},
{
	username:"car",
	password:"345"
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
	for (let i=0; i< database.length; i++){
		if (database[i].username === username && database[i].password === password){
			console.log(newsFeed);
		} else {
			alert("sorry, we don`t know you");
		}
	}


	// if (user === database[0].username && pass === database[1].password){
	//	console.log(newsFeed);
	// } else {
	//	alert("sorry, you are not a person");
	// }
}