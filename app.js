// let stu = {
//     firstName : "mohammad",
//     lastName : "akasha",
//     class : 12,
//     courseInProcess : ["web-development"],
//     getFullName : function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(stu.getFullName());
// console.log(`${stu["firstName"]} ${stu.courseInProcess} ${stu["lastName"]}`);

// stu.lastName = "Ahmed Khan";

// console.log(`${stu.lastName}`);

// for (let key in stu){
//     console.log(key , stu[key]);
// }

// function DataOfStu (firstName,lastName,age,gender){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.getName = function () {
//         return `${this.firstName} ${this.lastName}`
//         }
// }

// let contruc = new DataOfStu ("ghulam","Qadir","35","male");

// console.log(contruc);
// contruc.lastName = "qadri"
// console.log(contruc);
// contruc.age = "28";

// console.log(contruc);
//  for (let key in contruc){
//     document.writeln(`<h2> ${key} ${contruc[key]} </h2>` );
//  }
// console.log(contruc.getName());

let shopItems = [
  {
    Name: "cookie",
    Price: 80,
    Quantity: 10,
  },
  {
    Name: "Juice",
    Price: 40,
    Quantity: 6,
  },
  {
    Name: "Patties",
    Price: 25,
    Quantity: 9,
  },
  {
    Name: "chips",
    Price: 20,
    Quantity: 25,
  },
  {
    Name: "bread",
    Price: 55,
    Quantity: 10,
  },
];

shopItems.forEach((item) => {
  item.totalPrice = item.Price * item.Quantity;
});

let totalOfAllItems = 0;

shopItems.forEach((item) => {
  totalOfAllItems += item.totalPrice;
});

shopItems.forEach((item) => {
  console.log(`${item.Name} : ${item.totalPrice}`);
});
console.log(`total price of all item is ${totalOfAllItems} `);

for (let i = 0; i < shopItems.length; i++) {
  console.log(shopItems[i]);
}

let obj = {
  name: "ahmed",
  email: "www.Example@.com",
  password: "01234",
  age: 23,
  city: "karachi",
  gender: "male",
  country: "pakistan",
};

if ("age" in obj && "country" in obj) {
  console.log(
    `yes age available in obj ${obj.age} and country available in obj ${obj.country}`
  );
} else {
  console.log("both not availbe");
}
if ("firstName" in obj && "lastName" in obj) {
  console.log(
    `yes age available ${obj.firstName} and country available ${obj.lastName}`
  );
} else {
  console.log(`first and last name both not available`);
}

function studentsData(firstName, lastName, age, course, rollNo) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.joinCourse = course;
  this.rollNo = rollNo;
}

let student1 = new studentsData(
  "ahmed",
  "khan",
  "22",
  "graphic designing",
  "191212"
);
let student2 = new studentsData(
  "umair",
  "baloch",
  "30",
  "Laptop Repairing",
  "191212"
);
let student3 = new studentsData("ghulam", "qadir", "32", "R-O plant", "191212");
let student4 = new studentsData("kashan", "ahmed", "20", "python", "191212");
let student5 = new studentsData(
  "shahzaib",
  "shaheen",
  "22",
  "artificial intelligence",
  "191212"
);
let student6 = new studentsData(
  "jawaid",
  "miandad",
  "52",
  "bike-repairing",
  "191212"
);
let student7 = new studentsData(
  "waseem",
  "akram",
  "42",
  "graphic-designing",
  "191212"
);
let student8 = new studentsData(
  "babar",
  "azam",
  "27",
  "web-development",
  "191212"
);

console.log(
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8
);

let form = document.getElementById("adding");
form.addEventListener("submit", function(eve) {
  eve.preventDefault();
});

let name = document.getElementById("name");
let gender = document.getElementsByName("gender")
let address = document.getElementById("address");
let edu = document.getElementById("education");
let pro = document.getElementById("profession");


let records = [];


function getData() {
  let recordBtn = document.getElementById("btn-record")
  let getName = name.value;
  let getedu = edu.value;
  let getProfession = pro.value
  let getAddress = address.value;
 let getGender;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
     getGender = gender[i].value;
      break;
    }
  }

  let $data = new checkPopulation(getName,getGender,getAddress,getedu,getProfession);

  if (getAddress !== "" && getName !== "" && getGender !== ""){
    records.push($data);
    console.log(records)
    recordBtn.removeAttribute("disabled")
    // localStorage.setItem("record",JSON.stringify(records))
  }else{
    alert("please enter value first")
  }
  }


function checkPopulation(name, gender, address, education, profession) {
  this.Name = name;
  this.Gender = gender;
  this.Address = address;
  this.Education = education;
  this.Profession = profession;
}

function showDisplay () {
  console.log(records)
  let displayDiv = document.getElementById("display")
  let displayRecords = "";
  
  for (let i = 0 ; i <  records.length ;i++){
    displayRecords +=  `
   <h2>
    name : ${records[i].Name}    
    <br> 
    <br>
    gender : ${records[i].Gender}    
    <br>
    <br>
    address : ${records[i].Address}    
    <br>
    <br>
    education : ${records[i].Education}    
    <br>
    <br>
    profession : ${records[i].Profession}    
     </h2>
    `
  }
  displayDiv.innerHTML = displayRecords;
}

// if (localStorage.getItem("records")){
//   records = JSON.parse(localStorage.getItem("records"));
// }