class Sound {
    makeSound(): void {
    console.log('Making animal sound');
    }
}

class Bike extends Sound {
    makeSound(): void {
    console.log('superBike');
    }
}

class Car extends Sound {
    makeSound(): void {
    console.log('superCar');
    }
}

let sound: Sound;

sound = new Bike();
sound.makeSound();

sound = new Car();
sound.makeSound();