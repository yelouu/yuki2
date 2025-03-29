/*КОНФЕТТИ */
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = (Math.random() * 8 + 5) + 's';
  snowflake.style.width = (Math.random() * 30 + 30) + 'px';
  snowflake.style.height = (Math.random() * 50 + 20) + 'px';

  const confettiContainer = document.querySelector('.confetti-container');
  confettiContainer.appendChild(snowflake);

  snowflake.addEventListener('click', function() {
      snowflake.remove();
  });

  setTimeout(() => {
      snowflake.remove();
  }, 5000);
}

setInterval(createSnowflake, 300);

setInterval(createSnowflake, 300); /* это все js для падающих конфети<3 */

/* const keywordInput = document.getElementById('keywordInput');
const bracesImage = document.getElementById('bracesImage');
console.log("bracesImage:", bracesImage);
Я РАЗОБРАЛСЯ КАК ПОДКЛЮЧИТЬ ЭТО, НО УЖЕ СЛИШКОМ ПОЗДНО !!1! способ лучше ниже-->>>
*/

/*ВВОД СЛОВА(свайпа) */

const keywordInput = document.getElementById('keywordInput');
const bracesImage = document.getElementById('bracesImage');
const bracesImage2 = document.getElementById('bracesImage2');
const middleImage = document.getElementById('middleImage');
const imageContainer = document.querySelector('.image-container');

console.log("keywordInput:", keywordInput);
console.log("bracesImage:", bracesImage);
console.log("bracesImage2:", bracesImage2);
console.log("middleImage:", middleImage);
console.log("imageContainer:", imageContainer);

const keyword = "fghjk";
const middleImageURL = "images/gen.svg"; // первая пикча
const scrolledImageURL = "images/gen2.svg"; // вторая пикча
const scrolled2ImageURL = "images/gen3.svg"; // третья пикча
const scrollThreshold = 100; // порог для второго изображения
const scrollThreshold2 = 500; // порог для третьего изображения

keywordInput.addEventListener('input', function() {
    const inputValue = keywordInput.value.toLowerCase();

    if (inputValue === keyword) {
        bracesImage.style.marginLeft = "-40%";
        bracesImage2.style.marginLeft = "54.5%";

        // Задержка (милисек)
        setTimeout(() => {
            middleImage.src = middleImageURL;
            imageContainer.classList.add('show');
        }, 500); // полсекунды
    } else {
        bracesImage.style.marginLeft = "-6.5%";
        bracesImage2.style.marginLeft = "23%";

        middleImage.src = "";
        imageContainer.classList.remove('show');
        imageContainer.classList.remove('scrolled');
        imageContainer.classList.remove('scrolled2');
    }
});

/*СЛОВА В СКОБАХ */

window.addEventListener('scroll', function() {
    const inputValue = keywordInput.value.toLowerCase(); 

    if (window.scrollY > scrollThreshold2) {
        middleImage.src = scrolled2ImageURL; // третье изображение
        imageContainer.classList.remove('scrolled');
        imageContainer.classList.add('scrolled2');
        imageContainer.classList.add('show'); 
    } else if (window.scrollY > scrollThreshold) {
        middleImage.src = scrolledImageURL; // второе изображение
        imageContainer.classList.remove('scrolled2');
        imageContainer.classList.add('scrolled');
        imageContainer.classList.add('show'); 
    } else {
        imageContainer.classList.remove('scrolled'); // удаляем класс
        imageContainer.classList.remove('scrolled2');
        if (inputValue === keyword) {
            middleImage.src = middleImageURL;
            imageContainer.classList.add('show'); 
        } else {
            middleImage.src = "";
            imageContainer.classList.remove('show');
        }
    }
});

/*ЦЕНЗУРА censor */

const ghost = document.querySelector('.ghost');

document.addEventListener('keydown', function(event) {
  if (event.key === 'c' || event.key === 'C') {
    ghost.classList.add('revealed'); 
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'c' || event.key === 'C') {
    ghost.classList.remove('revealed'); 
  }
});

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d'); 

let isDrawing = false; 
let lastX = 0;
let lastY = 0;
let lineWidth = 5;
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; 
}
function draw(e) {
    if (!isDrawing) return; 

    ctx.beginPath(); 
    ctx.moveTo(lastX, lastY); 
    ctx.lineTo(e.offsetX, e.offsetY); 
    ctx.stroke(); 

    [lastX, lastY] = [e.offsetX, e.offsetY]; 
}
function stopDrawing() {
    isDrawing = false;

}
canvas.addEventListener('mousedown', startDrawing); 
canvas.addEventListener('mousemove', draw); 
canvas.addEventListener('mouseup', stopDrawing); 
canvas.addEventListener('mouseout', stopDrawing); 

