console.log("Hello World!");
let firstName = "John", lastName = "Smith";
let age = "30";
let hobbies = ["Biking", "Mountain Climbing", "Swimming"];
let workAddress = {houseNumber:'32', street: 'Washington', city: 'Lincoln', state: 'Nebraska'};

function printUserInfo(){

	console.log("Firstname: " +firstName);
	console.log("Lastname: " +lastName);
	console.log("Age: " +age);
	console.log("Hobbies:");
	console.log(hobbies);
	console.log("WorkAddress:");
	console.log(workAddress);
}
printUserInfo(firstName, lastName, age);

function returnFunction(){
	return firstName + lastName + age + hobbies + workAddress;
}

console.log(firstName+ " " + lastName + " is " + age + " years of age.");
console.log("This was printed inside of the function");

console.log(hobbies);
console.log("This was printed inside of the function");

let isMarried = true;
console.log("The value of isMarried is:" +isMarried);

