/*console.log("Hello world!");

class customer{
    name;
    age;
    address;

    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

let customer1 = new customer("John", 30, "123 Main St");
console.log(customer1);

//---------------------------------------------------

let customer2 = {
    name: "John",
    age: 25,
    address: "New York",
    salary: 50000,
    items: [
        {
            id: 1,
            name: "item1",
            price: 100,
            variants: [
                {
                    id: 1,
                    name: "variant1",
                    price: 10
                },
                {
                    id: 2,
                    name: "variant2",
                    price: 20
                    
                }
            ]
        }, {
            id: 2,
            name: "item2",
            price: 200
        }, {
            id: 3,
            name: "item3",
            price: 300
        }
    ],
    father: {
        name: "Doe",
        age: 50,
        address: "New York"
    }
};
console.log(customer2.name);
console.log(customer2.age);
console.log(customer2.address);
console.log(customer2.salary);
console.log(customer2.items[2].name);
console.log(customer2.father.name);
console.log(customer2.items[0].variants[1]);*/

// document.write("hii");
// document.write("<h1>hello</h1>");
// console.log(document.URL);
// document.write("<h1>hello</h1>");

// let heading = document.getElementById("heading");

// console.log(heading);

// heading.innerText = "shenal";

// let Heading1 = document.getElementById("changeHeading1");
// let Heading2 = document.getElementById("changeHeading2");

// // heading.innerText = "shenal";

// let number = 0
// function changeHeading1() {
//     heading.innerText = "number :" + (++number);
//     console.log("Clicked");
    
// }
// function changeHeading2(){
//     heading.innerText = "number :" +( --number);
//     console.log("Clicked");
// }

// function changeHeading(){
//     let textInput = document.getElementById("textInput")
//     console.log(textInput.value);

//     heading.innerText = textInput.value;
// }

// function sum(){
//     let number1 = document.getElementById("textInput1")
//     let number2 = document.getElementById("textInput2")
//     let sum = (parseInt(number1.value) + parseInt(number2.value));
//     output.innerText = sum   
// }

// function mines(){
//     let number1 = document.getElementById("textInput1")
//     let number2 = document.getElementById("textInput2")
//     let minus = (parseInt(number1.value) - parseInt(number2.value));
//         output.innerText = minus
// }

// let output = document.getElementById("output");

let customerList = [];

// function btnAddCustomerOnAction(){
//     let txtName = document.getElementById("txtName").value;
//     let txtAddress = document.getElementById("txtAddress").value;
//     let txtAge = document.getElementById("txtAge").value;
//     let txtEmail = document.getElementById("txtEmail").value;
//     let txtSalary = document.getElementById("txtSalary").value;

//     let customer = {
//         name:textName,
//         address:txtAddress,
//         age:txtAge,
//         email:txtEmail,
//         salary:txtSalary
//     }
//     customerList.push(customer);
//     console.log(customerList);
// }

function loadTable(){
    let tblCustomers = document.getElementById("tblCustomers");

    tblCustomers.innerHTML+=`<tr>
            <td>Saman</td>
            <td>Walana</td>
            <td>15</td>
            <td>saman@email.com</td>
            <td>750000</td>
        </tr>`

    console.log(tblCustomers);
    
}


