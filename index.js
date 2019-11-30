// Write your solution in this file!

let driver = {}

const updateDriverWithKeyAndValue = ( driver, key, value ) =>{
  return Object.assign({}, driver, {[key] : value})
}

const destructivelyUpdateDriverWithKeyAndValue = ( driver,key,value ) =>{
  driver[key] = value
  return driver
}

const deleteFromDriverByKey = (driver, key) =>{
  let newObject = Object.assign( {}, driver)
  delete newObject[key]
  return newObject
}

const destructivelyDeleteFromDriverByKey = ( driver, key ) =>{
  delete driver[key]
  return driver
}





// const matthews = {
//   name: 'Auston Matthews',
//   age: 23,
//   height: '193cm',
//   weight: '98kg',
//   points: 115,
//   goals: 65,
//   assists: 50
// }

// const matthewsTotalPoints = matthews.goals + matthews.assists

// // console.log(matthews.height)
// // console.log(matthews.goals)
// // console.log(matthews.points)
// // console.log(matthewsTotalPoints)

// // destructive method of reassining keys
// const destructivelyUpdateObject = (obj,key, value) =>{
//   return obj[key] = value
// }


// // less destructive ways


// // console.log(destructivelyUpdateObject(matthews, 'goals', 55))
// // console.log(matthews.goals)

// let matthewsKeys = Object.keys(matthews)
// // console.log(matthewsKeys)

// let obj1 = {eggs: 3}
// let obj2 = {flour: '1 Cup'}
// let obj3 = {sugar: '2 tsp'}

// // Object.assign => combines 2 or more objects into a single object
// let newCreatedObject = Object.assign( {}, obj1, obj2 , obj3 )
// console.log(newCreatedObject)

