import { Civic } from "./creational/proptotype-pattern"

const civic = new Civic({doors: 4, engine: 'V6', color: 'black', autopilot: false})
console.table(civic)