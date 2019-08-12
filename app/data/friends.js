var faker = require("faker");

var friends = [
  {
    name: faker.name.findName(),
    image_url: faker.internet.avatar(),
    scores: Array.from({ length: 10 }, () => Math.ceil(Math.random() * 5)),
  },
  {
    name: faker.name.findName(),
    image_url: faker.internet.avatar(),
    scores: Array.from({ length: 10 }, () => Math.ceil(Math.random() * 5)),
  },
  {
    name: faker.name.findName(),
    image_url: faker.internet.avatar(),
    scores: Array.from({ length: 10 }, () => Math.ceil(Math.random() * 5)),
  },
  {
    name: faker.name.findName(),
    image_url: faker.internet.avatar(),
    scores: Array.from({ length: 10 }, () => Math.ceil(Math.random() * 5)),
  },
  {
    name: faker.name.findName(),
    image_url: faker.internet.avatar(),
    scores: Array.from({ length: 10 }, () => Math.ceil(Math.random() * 5)),
  },
  {
    name: faker.name.findName(),
    image_url: faker.internet.avatar(),
    scores: Array.from({ length: 10 }, () => Math.ceil(Math.random() * 5)),
  },
  {
    name: faker.name.findName(),
    image_url: faker.internet.avatar(),
    scores: Array.from({ length: 10 }, () => Math.ceil(Math.random() * 5)),
  },
  {
    name: faker.name.findName(),
    image_url: faker.internet.avatar(),
    scores: Array.from({ length: 10 }, () => Math.ceil(Math.random() * 5)),
  },
  {
    name: faker.name.findName(),
    image_url: faker.internet.avatar(),
    scores: Array.from({ length: 10 }, () => Math.ceil(Math.random() * 5)),
  },
  {
    name: faker.name.findName(),
    image_url: faker.internet.avatar(),
    scores: Array.from({ length: 10 }, () => Math.ceil(Math.random() * 5)),
  }
];

module.exports = friends;
