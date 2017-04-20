
MyData = new Mongo.Collection("myData");


if (MyData.find().count() === 0) {
  _.each(_.range(25), function() {
    MyData.insert({
      name: faker.name.findName(),
      image: faker.image.people() + "?" + Random.hexString(24),
      details: faker.lorem.sentence()
    })
  })
}
