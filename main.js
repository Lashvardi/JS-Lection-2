// ? ობიექტი Object

// * Javascript-ში ობიექტი არის ერთგვარი კონტეინერი რომელიც შეიცავს თავის თვისებებს და მეთოდებს (ფუნქციებს)
// * მაგალითად თუ გვაქვს ობიექტი სახელით cars ობიექტის შიგნით გვექნება მანქანის მოდელი, ფერი, წელი და სხვა თვისებები.
// * ობიექტი არის Key Value ტიპის: სადაც Key არის ჩვენი მნიშვნელობის ანუ Values- გასაღები.
// * მაგ:


//! ცვლადის ტიპები
let string = "სტრინგი";

//! boolean არის ორი ტიპის true/false
//? 0/1
let boolean = true;
let boolean1 = false;


let number = 123;
let number1 = 123.123;

//! undefined ელოდება რაღაცას მაგრამ არ არის მინიჭებული, ვერ ხვდება რა არის
// undefined;

//! უბრალოდ არაფერი, სიცარიელე
// let null1 = null;

let MercedesCar = {
    //? model არის Key
    //? "Mercedes" არის Value
    // ! აუცილებლად დავწეროთ მძიმე როდესაც ახალ თვისებას ვაცხადებთ!
    model: "Toyota",
    Type: "SUV",
    color: "Blue",
    manufactureYear: 2017,
    isUsed: true,
    imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallqwrqwrqwrqwrery_slide/public/images/car-reviews/first-drives/legacy/1-mercedes-benz-s500-2020-fd-hero-front.jpg?itok=er7o06-j",
    imageAlt : "აქ უნდა იყოს მანქანის მოდელის ფოტო"
}

//? ჩვენს ამ ობიექტში (MercedesCar-ში) Key-ები (გასაღებები) იქნება

//* model
//* color
//* manufactureYear
//* isUsed

//? მნიშნველობები კი (Values)
//* "Mercedes"
//* "Black"
//* 2017
//* true

//todo: გამოვიტანოთ მთლიანად ობიექტი
//ხრიკი: Console.table -ით ჩვენი ობიექთი შეგვიძლია ცხრილის სახით გამოვიტანოთ
console.table(MercedesCar);


// todo: გამოვიტანოთ მანქანის მოდელი
console.log(`მოდელი გადანიჭებამდე: ${MercedesCar.model}`);
// MercedesCar.model = "BMW";
console.log(`მოდელი გადანიჭების მერე: ${MercedesCar.model}`);

// todo: გამოვიტანოთ დანარჩენი თვისებები
console.log(MercedesCar.color);
console.log(MercedesCar.manufactureYear);
console.log(MercedesCar.isUsed);

// წამოვიღოთ html-დან
let carTitle = document.getElementById("car-title");
let carColor = document.getElementById("car-color");
let carType = document.getElementById("car-type");
let carYear = document.getElementById("car-year");
let carImage = document.getElementById("car-image");

carTitle.innerHTML = MercedesCar.model;
carColor.innerHTML = MercedesCar.color;
// ხრიკი რომლითაც დინამიურად შეგვიძლია შევცვალოთ ტექსტის ფერი, იმაზე თუ რაფერის არის ჩემი მანქანა
carColor.style = `color: ${MercedesCar.color}`;
carType.innerHTML = MercedesCar.Type;
carYear.innerHTML = MercedesCar.manufactureYear;
carImage.src = MercedesCar.imageUrl;
carImage.alt = MercedesCar.imageAlt;

let toyotaCamry = {
    brand: "Toyota",
    model: "Camry",
    color: "Red",
    manufactureYear: 2019,
    engineStarted: false,
    startEngine: function() {
        // this გვაძლევს საშუალებას რომ ვემშუავოთ ობიექტში არსებულ ცვლადებს.
        this.engineStarted = true;
        // this მეშვეობით შეგვიძლია მიწვდეთ ამ ობიექტში არსებული ცვლადებს
        console.log(`ძრავა ჩაირთო მანქანისთვის ${this.brand} ${this.model} ვრუმ ვრუუმ`);
    },
    stopEngine: function () { 
        this.engineStarted = false;
        console.log(`ძრავა გაჩერდა მანქანისთვის ${this.brand} ${this.model}`);
    } 
}

// console.log(toyotaCamry);


// მივწვდეთ ამ ობიექტში არსებულ ფუნქციებს
toyotaCamry.startEngine();
console.log(`ამჟამინდელი ძრავის მდგომარეობა: ${toyotaCamry.engineStarted}`);



// აბრუნებს ობიექტის ყველა გასაღებს
// console.log(Object.keys(toyotaCamry))
// console.log(Object.values(toyotaCamry))

//! მასივები (Arrays)
// ? მასივებიც ერთგვარი ობიექტები არიან.
// ? პროგრამირებაში თვლა იწყება 0-დან
let numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers)

//? ასე შეგვიძლია მიწვდეთ მასივის ელემენტებს (ინდექსით)
console.log(`მეხუთე ინდექსზე მდგომი რიცხვი არის ${numbers[5]}`)

// array -ში შეგვიძლია ნებისმიერი ტიპის მონაცემი ჩავამატოთ
let array = ["სტრინგი", 123, true, null, undefined, {name: "გიო"}, [1,2,3,4,5,6,7,8,9,10]];

console.log(array);

//! ობიექტების მასივი
let usersData = [
    //* ეს დგას მასივის პირველ ინდექსზე (0-ზე)
    {
        userName: "giorgi",
        userLastName: "kalandia",
        userAge: 20,
        userPhoneNumber: "555 55 55 55",
        userAddress: "Tbilisi, Georgia",
        userImage: "https://www.w3schools.com/howto/img_avatar.png",
        userImageAlt: "აქ უნდა იყოს მომხმარებლის ფოტო",
        userIdentificationNumber: "12345678910"
    },
    //* ეს დგას მასივის მეორე ინდექსზე (1-ზე)
    {
        userName: "Mariami",
        userLastName: "Mariamadze",
        userAge: 25,
        userPhoneNumber: "123 23 44 133",
        userAddress: "Kutaisi, Georgia",
        userImage: "https://www.w3schools.com/howto/img_avatar.png",
        userImageAlt: "აქ უნდა იყოს მომხმარებლის ფოტო",
        userIdentificationNumber: "01020304050"
    },
    //* ეს დგას მასივის მესამე ინდექსზე (2-ზე)
    {
        userName: "Aleksandre",
        userLastName: "Beridze",
        userAge: 26,
        userPhoneNumber: "412 23 44 133",
        userAddress: "Gori, Georgia",
        userImage: "https://www.w3schools.com/howto/img_avatar.png",
        userImageAlt: "აქ უნდა იყოს მომხმარებლის ფოტო",
        userIdentificationNumber: "05040302010"
    }
]

console.log(usersData);

console.log(`${usersData[0].userName} ${usersData[0].userLastName}`)
console.log("==============")
console.log(`${usersData[1].userName} ${usersData[1].userLastName}`)
console.log("==============")
console.log(`${usersData[2].userName} ${usersData[2].userLastName}`)
console.log("==============")

let userNameLastname = document.getElementById("user-name-lastname");
let userAge = document.getElementById("user-age");
let userPhoneNumber = document.getElementById("user-phone-number");
let userAddress = document.getElementById("user-address");
let userImage = document.getElementById("user-image");
let userIdentificationNumber = document.getElementById("user-identification-number");

userNameLastname.innerText = `${usersData[1].userName} ${usersData[1].userLastName}`;
userAge.innerText = usersData[1].userAge;
userPhoneNumber.innerText = usersData[1].userPhoneNumber;
userAddress.innerText = usersData[1].userAddress;
userImage.src = usersData[1].userImage;
userImage.alt = usersData[1].userImageAlt;
userIdentificationNumber.innerText = usersData[1].userIdentificationNumber;

