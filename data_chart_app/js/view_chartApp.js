export default class ChartAppView{
    constructor(getUsers, getAgesChart, getGenderChart, getDuplicateNamesChart, getSurnamesLengthChart, getBirthYearChart) {
        this.start_phrase = document.querySelector('.starter_phrase'); // Стартовая фраза
        this.start_arrowAnim = document.querySelector('.arrowAnim'); // Стартовая анимация-обьяснение что делать
        this.finish_loader = document.querySelector('lottie-player'); // Визуальное подтверждение что пользователи загрузились после нажатия Generate users
        this.btn_side = document.querySelector('.side_button'); // Кнопка открывающая боковое меню
        this.nav_side = document.querySelector('.side__diagram_menu'); // Боковое меню
        this.diagramTitle = document.querySelector('.diagram__title'); // Заголовок диаграммы 
        this.btn_getUsers = document.querySelector('.btn_get_users'); // Кнопка получения 1000 юзеров
        this.btn_minMaxAgeStat = document.querySelector('.btn_minMaxAgeStat'); // Кнопка вывода статистики мин/макс возраста
        this.btn_genderStat = document.querySelector('.btn_genderStat'); // Кнопка вывода статистики мужчин/женщин
        this.btn_sameNameStat = document.querySelector('.btn_sameNameStat'); // Кнопка вывода статистики совпадающих имён
        this.btn_surNameLengthStat = document.querySelector('.btn_surNameLengthStat'); // Кнопка вывода статистики длины фамилий 
        this.btn_birthYearStat = document.querySelector('.btn_birthYearStat'); // Кнопка вывода статистики годов рождения пользователей        
        
        this.btn_getUsers.addEventListener('click', () => {
            getUsers();
            this.finish_loader.play();
            setTimeout(() => {              // Вешаем обработку кликов на кнопку Generate users, в случае клика, загружаем юзеров методом getUsers(), включаем анимацию успешной загрузки и выключаем через 1.3 секунды
                this.finish_loader.stop();
            }, 1300)
        }); 
        this.btn_minMaxAgeStat.addEventListener('click', getAgesChart); 
        this.btn_genderStat.addEventListener('click', getGenderChart);
        this.btn_sameNameStat.addEventListener('click', getDuplicateNamesChart);
        this.btn_surNameLengthStat.addEventListener('click', getSurnamesLengthChart); // Если кликнуто по одной из кнопок вызвается соответствующий метод получения диаграммы из ChartAppController 
        this.btn_birthYearStat.addEventListener('click', getBirthYearChart);
        this.btn_side.addEventListener('click', () => {
            this.nav_side.classList.toggle('active');
            this.btn_side.classList.toggle('active');       //Если нажато на кнопку бокового меню, вешаются классы active на кнопку и само меню(при повторном нажатии классы убераются) и скрывается стартовая анимация
            this.start_arrowAnim.style = 'display: none;';
        });
    }

    getChart(arbitraryChart) { // метод генерации экземпляра Chart для дальнейшего создания диаграммы в зависимости от переданного объекта arbitraryChart                  
        if(!arbitraryChart || arbitraryChart.data.labels.length === 0) return; // Если объект произвольной диаграммы не получен или длина свойства labels равняется нулю (необходимый костыль для обхода диаграммы количества полов) прервать создание диаграммы (на экране диаграмма не отрисуется - сделано для того чтобы до генерации юзеров, при нажатии на кнопки ничего не происходило)
        this.diagramTitle.innerHTML = arbitraryChart.title; // Назначаем заголовку h1 title полученный из пришедшего объекта arbitraryChart
        this.start_phrase.style = 'display: none;';        // При генерации первой диаграммы, уберается стартовая фраза
        document.getElementById('myChart').remove();        
        const divDiagram = document.querySelector('.diagram');
        divDiagram.insertAdjacentHTML("afterbegin", "<canvas id='myChart'></canvas>");   // строчки 22,23,24 необходимы для того чтобы диаграммы не накладывались одна на одну, а отрисовывались все по отдельности
        const ctx = document.getElementById('myChart').getContext('2d');    
        const chart = new Chart(ctx, arbitraryChart);
        setTimeout(() => {
            this.nav_side.classList.toggle('active');
            this.btn_side.classList.toggle('active'); // После выбора какой либо диаграммы, боковое меню скроется само через 100 мс
        }, 100)   
        return chart; // Возвращаем экземпляр диаграммы
    }   
}