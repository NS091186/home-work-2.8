//1. Поиск элементов и изменение содержимого:
//Создайте HTML-документ с элементами: заголовок ( <h1> ), абзац текста
//( <p> ), список ( <ul> с элементами <li> ).
//Подсказка: Используйте метод document.querySelector() для поиска
//заголовка и измените его текст с помощью свойства .innerText .
//Найдите все элементы списка с помощью document.querySelectorAll() и
//добавьте к их тексту порядковый номер с помощью цикла.

let text = document.getElementById('h1');
text.innerText = "Hello my frends!";
console.log(text);


function numLi () {
    let num = document.getElementsByTagName("li");
    
    for (let i = 0; i < num.length; i++) {
        num[i].innerHTML = i;
    }
}
console.log(numLi);


//2. Редактирование атрибутов:
//Добавьте на страницу изображение с атрибутом src .
//Подсказка: Для изменения атрибутов используйте метод .setAttribute() .
//Например, измените src у изображения на новый URL.
//Добавьте ссылку с атрибутом href , и через JS поменяйте её текст и URL с
//помощью setAttribute() и свойства .innerHTML .

let img = document.querySelector('img');
img.setAttribute('src', 'https://steamuserimages-a.akamaihd.net/ugc/5103172932219996638/4FE828816AAF7B0660DD1BD7C94EBD54C68EF692/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false');

img.src = 'https://steamuserimages-a.akamaihd.net/ugc/5103172932219996638/4FE828816AAF7B0660DD1BD7C94EBD54C68EF692/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false';

let newHref = document.querySelector('a');
newHref.setAttribute('href', 'https://translate.yandex.ru/');
newHref.href ='https://translate.yandex.ru/';

function changText(){
    document.getElementById("chahg").innerHTML ="Переводчик";
    }

//3. Манипуляции с элементами: //Создайте кнопку на странице. При нажатии на неё с помощью JavaScript
//добавляйте новый элемент списка в ранее созданный <ul> .
//Подсказка: Для добавления элемента используйте методы createElement() и
//appendChild() .
//Добавьте ещё одну кнопку, которая будет удалять последний элемент
//списка. Для удаления используйте метод .removeChild() .

document.querySelector('#newElem').addEventListener('click', () => {
    let newItem = document.createElement('li');
    newItem.textContent = 'Удали последний элемент!';
    document.querySelector('ul').appendChild(newItem);
});
  

  
    document.querySelector('#disNewElem').addEventListener('click', () => {    
    let deletNewItem = this.parentNode;
    let list = deletNewItem.parentNode;
    list.removeChild(listItem);
   
  });


//const list = document.querySelector('ul');// Получила элемент ul

//const newItem = document.createElement('li');// Создала новый элемент списка
//newItem.textContent = 'Get nice cheese';
//list.appendChild(newItem);//добавила в конец списка


//4. Манипуляции со стилями CSS:
//Добавьте к абзацу текста стиль через CSS (например, цвет текста, размер шрифта).
//Подсказка: Для изменения стилей через JavaScript используйте свойство
//element.style . Например, element.style.color = 'blue'; .
//Напишите JavaScript, который по нажатию на кнопку изменяет цвет текста абзаца на другой.
//Добавьте кнопку, которая будет скрывать или показывать абзац при каждом
//нажатии (используйте свойство display ).

let paragraf = document.querySelector("p");// получаем значение свойства color
console.log(paragraf.style.color);  // пустая строка// изменяем значение свойства color
paragraf.style.color = "red";// повторно получаем значение свойства color
console.log(paragraf.style.color);  
paragraf.style.fontSize = "30px";


document.getElementById('newColor').onclick = changeColor; 
let currentColor = "red";
function changeColor() { 
        if(currentColor == "red"){ 
           document.getElementById('pText').style.color = "green";
           currentColor = "green";
        } else {
           document.getElementById('pText').style.color = "red";
           currentColor = "red";
        } 
    }
   
    function switchText() {
        let btn = document.getElementById('delText'), text = document.getElementById('pText');
        if (btn.innerHTML === 'Показать') {
          text.style.display = 'block';
          btn.innerHTML = 'Скрыть текст';
        } else {
          text.style.display = 'none';
          btn.innerHTML = 'Показать';
        }
      }
      document.getElementById('delText').addEventListener('click', switchText, false);
 

      //5. Работа с геометрией элементов:
//Используя метод getBoundingClientRect() , определите координаты и размеры
//любого элемента на странице.
//Подсказка: Выведите размеры элемента с помощью console.log() , чтобы
//отладить и увидеть результат.
//Добавьте кнопку, которая будет выводить на экран ширину и высоту
//выбранного элемента, обновляя их при каждом нажатии.

let elem = document.querySelector("div");
let rect = elem.getBoundingClientRect();
for (const key in rect) {
  if (typeof rect[key] !== "function") {
    let para = document.createElement("p");
    //para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
  }
}
console.log(rect);
