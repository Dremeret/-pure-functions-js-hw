 
const users = [
   {name: "Artur", eyeColor:"blue", age:13, gender:"man",isActive:true,email:"Artur@gmail.com"},
   {name: "Anya", eyeColor:"green",age:13, gender:"girl",isActive:false,email:"Anya@gmail.com"},
   {name: "Marie", eyeColor:"blue",age:14, gender:"girl",isActive:true,email:"Marie@gmail.com"},
   {name: "Dima", eyeColor:"green",age:13, gender:"man",isActive:false,email:"Dima@gmail.com"}
]

// 1
const names = users.map(user => user.name)
console.log(names)
// 2
const usersEye =users.filter(eye => eye.eyeColor == "blue")
const usersEyes =users.filter(eye => eye.eyeColor == "green")
console.log(usersEye)
console.log(usersEyes)
// 3
const userGender = users.filter(users => users.gender == "man" )
const userGenders = users.filter(users => users.gender == "girl" )
console.log(userGender)
console.log(userGenders)
// 4
const userActive = users.filter(users => users.isActive ==false)
console.log(userActive)
// 5
const findUsers = users.find(users=> users.email == "Dima@gmail.com")
console.log(findUsers)
// 6








