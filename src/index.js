const messages = [
  "Oscar",
  "Karen",
  "Hugo",
  "Diego",
  "Kevin",
  "Daniel",
  "Sofia"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()* messages.length)];
  console.log(message);
};

module.exports = {randomMsg};