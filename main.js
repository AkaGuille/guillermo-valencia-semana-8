const grid = document.querySelector('.grid');

fetch('https://apimocha.com/chevroletcars/cars')
    .then(response => response.json())
    .then(data => console.log(data));

fetch('https://apimocha.com/chevroletcars/cars')
  .then(response => response.json())
  .then(data => {
    data.forEach(cars => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${cars.image}" alt="${cars.descripton}">
        <h2>${cars.name}</h2>
        <h3>$ ${cars.price}</h3>
        <p>${cars.description}</p>

      `;
      grid.appendChild(card);
    });
  });