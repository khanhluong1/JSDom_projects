const colors = ['yellow', 'green', 'blue', 'red', 'black', 'orange'];

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * colors.length);

  const body = document.body;
  body.style.backgroundColor = colors[random];
  console.log(random);
});
