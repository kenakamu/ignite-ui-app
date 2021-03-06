export class User {
    public image: string
    public name: string
    public id: number
    public birthdate: Date
    public gender: Gender
    public userRank: number
    public isAdmin: boolean
    public backgroundImage: string
    
    constructor(image: string, name: string, id: number, birthdate: Date,
    gender: Gender, userRank: number, isAdmin: boolean, backgroundImage: string ) {
        this.image = image;
        this.name = name;
        this.id = id;
        this.birthdate = birthdate;
        this.gender = gender;
        this.userRank = userRank;
        this.isAdmin = isAdmin;
        this.backgroundImage = backgroundImage;
    }
}

export enum Gender {
    Male = 1,
    Female,
    Other,
}