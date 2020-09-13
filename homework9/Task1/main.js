/*     
    Переделайте слайдер так, чтобы он сдвигал
    фото слева направо и справа налево
*/

const imagesData = [
	'https://wallpapers.net/clear-road-nature/download/800x480.jpg',
	'https://www.setaswall.com/wp-content/uploads/2018/05/Mountains-In-The-Summer-Wallpaper-800x480.jpg',
	'https://img3.goodfon.ru/original/800x480/5/b7/siluet-chelovek-meditaciya.jpg',
	'https://img5.goodfon.ru/original/800x480/7/e6/pole-leto-groza.jpg'
];

const dom = {
	btnNext : document.querySelector('.btn-next'),
	btnPrev	: document.querySelector('.btn-prev'),
	imgContainer : document.querySelector('.images'),
	cur : 0,
	imgWidth : 800 // Изменил свойство imgHeight (объекта dom) - высоту одной картинки на imgWidth - ширину 1-ой картинки
};


dom.imgContainer.innerHTML = imagesData.map(url=>`<img src="${url}" alt="slider image">`).join('');

dom.btnNext.addEventListener('click',()=>changeImage());
dom.btnPrev.addEventListener('click',()=>changeImage('prev'));

function changeImage(dir = 'next'){
	if(dir == 'next'){
		dom.cur++;
		if(dom.cur >= imagesData.length){
			dom.cur = 0;
		}
	}else{
		dom.cur--;
		if(dom.cur < 0){
			dom.cur = imagesData.length - 1;
		}
	}	
	
	dom.imgContainer.style.right = 1 * dom.imgWidth * dom.cur + 'px'; // Изменил в формуле -1 на 1 и dom.imgHeight на imgWidth = так как при сдвиге слева-направо или справа-налево мы двигаемся по оси Х с нуля до максимально вправо и назад (имеется ввиду движение вправо на ширину следующей картинки, также и влево)
	dom.btnNext.innerText = `${dom.cur + 1}: Next`;
	dom.btnPrev.innerText = `${dom.cur + 1}: Prev`;
}

/* 
Вопросы:

*/