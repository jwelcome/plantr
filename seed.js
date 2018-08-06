const models = require('./models');

models.db.sync({
  force: true
})
.then(() => {
  console.log('this works');
  models.db.close();
})
.catch(err => {
  console.log(err);
  models.db.close();
})

