const models = require('./models');

models.db.sync({
  force: true
})
.then(() => {
  console.log('this works');
  const veggies = models.Vegetable.bulkCreate([{
    name: 'carrot',
    color: 'orange',
    planted_on: Date.now()
  }, {name: 'lettuce', color: 'green', planted_on: Date.now()},
  {name: 'radish', color: 'red', planted_on: Date.now()}])
  return veggies;
})
.then((veggies) => {
  console.log('veggies', veggies)
  return models.Gardener.create({name: 'juliet', age: 24, favorite_vegetable: veggies});
})
// .then((models.Gardener) =>
.catch(err => {
  console.log(err);
})
.finally(() => {
  models.db.close();
})

// function makeGardener(name, age){
//   const gardener = new models.Gardener({
//     name: name,
//     age: age
//   })
//   // const newGardeners = gardener;
//   // newGardeners.save();
// }

// const newGardener = gardener.then(() => console.log(gardener))

// function makeVegetables(name, color){
//   const newVeggie = models.Vegetable.create({
//     name: name,
//     color: color,
//     planted_on: Date.now()
//   })
// }

// makeVegetables('carrot', 'orange');
