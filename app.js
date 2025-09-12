class person{
    name;
    age;
    occupation;
    message;

    constructor(name, age, occupation, message){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.message = message;
    }
    displayInfo(){
        console.log("Name:"+ this.name);
        console.log("Age: "+ this.name);
        console.log("Occupation: "+ this.occupation);
        console.log("Message: "+ this.message);
        console.log("-----------------------");
    }
    showName(){
    console.log(this.name);
}
    ShowMessage(){
        console.log(This.message);

    }
}

const person1 = new Person("Coco Martin" ,24,"Masahista","Ser, tapos napo");
const person2 = new Person("Victor Magtanggol",24,"Superhero","Arjooooooooooooo");

person1.displayInfo();
person2.displayInfo();

