class Animal{
	public void walk(){
		System.out.println("I am walking");
	}
}


class Dog extends Animal{
	
	//code need to be added
    public void Bark(){
        System.out.println("Dog is barking");
    }
}

class Cat extends Animal{
	public void meow(){
		 System.out.println("Cat is Meow");
	}
}

public class Inheritance {
	public static void main(String args[]){

		  Dog dog = new Dog();
		  dog.walk();
		  dog.bark();
		Cat cat = new Cat();
		cat.walk();
		cat.meow();
	      
		
	   }
	}
