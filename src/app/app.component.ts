import {Component, OnInit} from '@angular/core';

import {Art} from './art';
import { HttpService } from './http.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.index.html',
    styleUrls: ['./app.style.css'],
	providers: [HttpService]
})
// Все используемые сервисы должны быть определены в коллекции providers.
// После этого мы можем задействовать встроенный в Angular механизм dependency injection и получить объект сервиса в конструкторе компонента
export class AppComponent implements OnInit { 

    // arts: Art[] = [];
     selectedImageUrl: string = '../assets/1.jpg';
    selectedTitle: string = 'Постоянство памяти';
     selectedAuthor: string = "Сальвадор Дали";
     selectedYear: number = 1931;
     selectedLocation: string = "Нью-Йоркский музей современного искусства";

     
    // ngOnInit(){
    //     this.arts = this.dataService.getData();
    // }

    onSelectImage(imageUrl: string, title: string, author: string, year: number, location: string) {
        this.selectedImageUrl = imageUrl;
        this.selectedTitle = title;
        this.selectedAuthor = author;
        this.selectedYear = year;
        this.selectedLocation = location;
    }

    arts: Art[];
    error: any;
    constructor(private httpService: HttpService) { }
    ngOnInit() {
        this.httpService.getData().subscribe(
            { 
                next: (data: Art[]) => this.arts = data["artsList"]               
            });                
    }
}
