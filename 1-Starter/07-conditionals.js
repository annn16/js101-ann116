/* 
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects
*/

const person1 = {
  name: "Mike",
  age: 20,
  status: "resident",
};

const person2 = {
  name: "Jesica",
  age: 25,
  status: "tourist",
};

function checkVote(obj) {
  if (obj.age > 18 && obj.status === "resident") {
    console.log("You can go to vote");
  } else {
    console.log("You can not go to voteee");
  }
}

checkVote(person1);
checkVote(person2);
