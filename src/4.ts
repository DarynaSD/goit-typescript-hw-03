class Key {
    private signature = Math.random();
    public getSignature(): number {
        return this.signature;
  }
}

class Person {
    constructor(private key: Key) { }
    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    constructor(public key: Key) { }
    public door: boolean;
    public tenants: Person[];

    public comeIn(man: Person): void | never {
        this.door ? this.tenants.push(man) : alert(new Error('Door is closed'));
    };

    public abstract openDoor(personKey: Key): void;

}

class MyHouse extends House {
    public  openDoor(personKey: Key): void{
        this.door = this.key.getSignature === personKey.getSignature
    }
}





//
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};