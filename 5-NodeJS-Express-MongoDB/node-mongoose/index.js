const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = 'mongodb://localhost:27017/nucampsite'; // 27017 is the default for mongodb, nucampsite is the database we created
const connect = mongoose.connect(url, {
  useCreateIndex: true, // these 3 options just avoid deprecation warnings
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => {
  console.log('Connected successfully to the server');
  const newCampsite = new Campsite({
    name: 'React Lake Campground',
    description: 'test'
  });

  newCampsite.save()
  .then(campsite => {
    console.log(campsite);
    return Campsite.find();
  })
  .then(campsites => {
    console.log(campsites);
    return Campsite.deleteMany();
  })
  .then(() => {
    return mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  })
});