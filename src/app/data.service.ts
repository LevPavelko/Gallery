import {Art} from './art';
 
export class DataService{
 
 // В реальном приложении эти данные можно получать с сервера или из какого-либо внешнего хранилища.
	private data: Art[] =
        [
            { src: "../assets/1.jpg", name: "Постоянство памяти", author: "Сальвадор Дали", year: 1931, location: " Нью-Йоркский музей современного искусства" },
            { src: "../assets/2.jpeg", name: "Автопортрет", author: "Винсент ван Гог", year: 1889 , location: "Музей Орсе" },
            { src: "../assets/3.jpg", name: "Пшеничное поле с воронами", author: "Винсент ван Гог", year: 1890, location: "Музей Ван Гога" },
            { src: "../assets/4.jpg", name: "Танец под музыку времени", author: " Никола Пуссен", year: 1636 , location: "Собрание Уоллеса" },
            { src: "../assets/5.jpg", name: "Успение Богородицы", author: "Тициан", year: 1518  , location: "Собор Санта-Мария Глориоза деи Фрари" },
            { src: "../assets/6.jpg", name: "Герника", author: "Пабло Пикассо", year: 1937  , location: "Центр искусств королевы Софии" },
            { src: "../assets/7.png", name: "Сотворение Адама", author: "Микеланджело", year: 1511  , location: "Сикстинская капелла" }
            
        ];
    getData(): Art[] {
         
        return this.data;
    }
	
}