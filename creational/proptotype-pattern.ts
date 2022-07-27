// Base prototype
abstract class Shape {
  x: number
  y: number
  color: string

  constructor(source: Shape){
    this.x = source.x
    this.y = source.y
    this.color = source.color
  }

  abstract clone(): Shape
}

// Exmaple of concrete proptotype
class Rectangle extends Shape {
  width: number
  height: number
  constructor(source: Rectangle){
    super(source)
    this.width = source.width
    this.height = source.height
  }
  clone(): Shape {
    return new Rectangle(this)
  }
  
}

// Another prototype example but now with cars
abstract class Car {
  doors: number
  engine: string
  color: string
  
  constructor(source:  Omit<Car, 'clone'>){
    this.doors = source.doors
    this.engine = source.engine
    this.color = source.color
  }
  abstract clone(): Car
}
// Another concrete prototype example
class Civic extends Car {
  autopilot: boolean
  constructor(source: Omit<Civic, 'clone'>){
    super(source)
    this.autopilot = source.autopilot
  }
  clone(): Car {
    return new Civic(this)
  }
}

const civic = new Civic({autopilot: false, color: 'black', doors: 4, engine: 'V6' })
console.log('civic', civic)
const clonedCivic = civic.clone()
console.log('cloned', clonedCivic)
