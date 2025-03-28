class Animal{
    Constructor(name,age){
        this.name = name;
        this.age = age;
    }
    makeSound(){
        return "Sound"
    }
}
class Dog extends Animal{
    Constructor(name,age,breed){
        super(name,age);
        this.breed = breed;
    }
    makeSound(){
        return "Woof-Woof"
    }
}
class Cat extends Animal{
    Constructor(name,age,color){
        super(name,age);
        this.color = color;
    }
    makeSound(){
        return "Mew-Mew"
    }
}
const Dogo = new Dog("Rex", 3, "German Shepherd");
const Cat = new Cat("Whiskers", 2, "Gray");
console.log(dog.name); 
console.log(dog.age); 
console.log(dog.breed); 
console.log(dog.makeSound()); 

console.log(cat.name); 
console.log(cat.age);
console.log(cat.color); 
console.log(cat.makeSound()); 
