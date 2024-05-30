const imageUrls = [
    'https://bellavitaorganic.com/cdn/shop/files/Group_364.png?v=1716894864&width=300',
    'https://bellavitaorganic.com/cdn/shop/files/Group_366_1.png?v=1716921196&width=300',
    'https://bellavitaorganic.com/cdn/shop/files/Group_363.png?v=1716921196&width=300',
    'https://bellavitaorganic.com/cdn/shop/files/Group_365.png?v=1716894947&width=300',
    'https://bellavitaorganic.com/cdn/shop/files/Group_362.png?v=1716921196&width=300'
];

const cardTexts = [
    'LUXURY PERFUMES',
    'BODY WASHES',
    'BODY LOTIONS',
    'BODY DEOS',
    'GIFT SETS'
];

const cardsDiv = document.getElementById('cards');

imageUrls.forEach((url, index) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const img = document.createElement('img');
    img.src = url;
    img.alt = `Image ${index + 1}`;

    const pText = document.createElement('p');
    pText.textContent = cardTexts[index];

    cardDiv.appendChild(img);
    cardDiv.appendChild(pText);

    cardsDiv.appendChild(cardDiv);
});
