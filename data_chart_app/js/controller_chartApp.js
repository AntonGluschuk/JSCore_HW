import ChartAppModel from './model_chartApp.js';
import ChartAppView from './view_chartApp.js'

export default class ChartAppController{
    constructor() {
        this.model = new ChartAppModel(this.usersMediator); // передаём метод посредник в модель
        this.view = new ChartAppView(this.getUsers, this.getAgesChart,
                                     this.getGenderChart, this.getDuplicateNamesChart,
                                     this.getSurnamesLengthChart, this.getBirthYearChart,
                                     this.getDynamicChart); // для того чтобы получать пользователей по клику нужно передать view наш мудрёный метод getUsers (переходим во view для отслеживания нити выполнения)        
        this.users = [];      // Сохранение текущих юзеров в конструкторе для дальнешей передачи их методам создания диаграмм                  
    }

    getUsers = () => {
        this.model.loadUsers();   // Метод привязанный к ChartAppController вызывает метод модели loadUsers() - (нужно перейти в модель чтобы проследить нить выполнения)                
    }

    usersMediator = users => this.users = users; // После возврата из this.model.loadUsers() в методе getUsers мы попадаем сюда и возвращаем полученных юзеров (вся эта махинация необходима для того чтобы забирать данные из промиса который возвращает fetch в последнем вызове then) дальшей идём к строчке №7
    
    getAgesChart = () => {   
        this.view.getChart(this.model.makeAgesChart(this.users));
    }

    getGenderChart = () => {    
        this.view.getChart(this.model.makeGenderChart(this.users));
    }
    
    getDuplicateNamesChart = () => {
        this.view.getChart(this.model.makeDuplicateNamesChart(this.users)); // Методы получения всех 5 диаграм (внутри вызывается метод view получения диаграммы из (в скобках вызывается метод модели с созданием соответствующей диаграммы (которому передаются текующие юзеры)))
    }

    getSurnamesLengthChart = () => {
        this.view.getChart(this.model.makeSurnamesLengthChart(this.users));
    }

    getBirthYearChart = () => {
        this.view.getChart(this.model.makeBirthYearChart(this.users));
    }

    getDynamicChart = () => {        
        this.view.dynamicChart(this.model.getDynamicDiagram());    
        this.view.handleDynamicData(this.model.getDataForDynamic(this.users)); // Метод генерации пустой диаграммы и получение данных для динамического заполнения
    }   
}