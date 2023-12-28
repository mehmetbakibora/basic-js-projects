class Music{
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music ('Paint The Town Red', 'Doja Cat', 'Doja Cat- Paint The Town Red.jpg', 'Doja Cat - Paint The Town Red (Official Video).mp3'),
    new Music ('Way Down We Go ', 'KALEO ','KALEO - Way Down We Go (Official.jpg', 'Kaleo - Way Down We Go (Official Video).mp3'),
    new Music (' RESTORAN ', 'MOTIVE','MOTIVE - RESTORAN (Official Audi.jpg', 'MOTIVE - RESTORAN (Official Audio).mp3'),
    new Music ('Kapın Her Çalındıkça', 'HAKTAN','Haktan - Kapın Her Çalındıkça.jpg', 'HAKTAN  -  KAPIN HER ÇALINDIKÇA.mp3'),
]