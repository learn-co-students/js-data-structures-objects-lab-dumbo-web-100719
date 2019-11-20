// Write your solution in this file!
const driver ={}

let updateDriverWithKeyAndValue= (driver, key, value) => {
   return Object.assign({}, driver, {[key]: value})
}

let destructivelyUpdateDriverWithKeyAndValue= (driver, key, value) => {
   driver[key] = value
   return driver
}

let deleteFromDriverByKey= (driver, key) => {
   const newDriver = Object.assign({}, driver)
   delete newDriver[key]
   return newDriver
}

let destructivelyDeleteFromDriverByKey= (driver, key) => {
   delete driver[key]
   return driver
}
