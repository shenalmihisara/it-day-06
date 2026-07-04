console.log("Hello world!");

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
console.log(customer2.items[0].variants[1]);