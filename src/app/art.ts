export class Art {
    src: string;
    name: string;
    author: string;
    year: number;
    location: string;
    
    constructor( src: string, name: string, author: string, year: number,  location: string) {

        this.src = src;
        this.name = name;
        this.author = author;
        this.year = year;
        this.location = location;
    }
}