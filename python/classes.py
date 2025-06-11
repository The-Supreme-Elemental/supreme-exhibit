class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def display_info(self):
        print(f"This car is a {self.year} {self.make} {self.model}.")

my_car = Car("Toyota", "Camry", 2025)
my_car.display_info()
print()

class Dog:
    def __init__(self, name, breed, age):
        self.name = name
        self.breed = breed
        self.age = age

    def bark(self):
        print(f"Bark! My name is {self.name}, and I am a {self.age} year old {self.breed}.")

my_dog = Dog("Ranger", "mastiff", 3)
my_dog.bark()
print()

class Creature:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
        self.level = 1
        self.xp = 30
        self.armor_class = 1

    def level_up(self):
        self.level += 1
        self.xp *= 2
        self.armor_class += 5
    
    def beginner_status(self):
        print(f"My liege, my name is {self.name}, and I am a Level {self.level} {self.breed} with an armor class of "
              f"{self.armor_class} and a xp total of {self.xp}")

    def leveled_status(self):
        print(f"My king, I have returned from the mission you sent me on. I have learned much, and I am now level {self.level} with an armor class of {self.armor_class} and an xp total of {self.xp}")
        
the_creature = Creature("Solphim", "Phyrexian")
the_creature.beginner_status()
the_creature.level_up()
the_creature.leveled_status()


        