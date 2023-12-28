var models =[
    {
        name : 'Audi A3 Sedan',
        image: 'img/audi_a3_sedan.jpg',
        link: 'http://www.arabalar.com.tr/audi/a3/2023/sedan-1-5-s-line',
    },
    {
        name : 'BMW M Sedan',
        image: 'img/BMW_M_Sedan.jpg',
        link: 'http://www.arabalar.com.tr/bmw/m-serisi/2015/m3',
    },
    {
        name : 'Fiat Egea',
        image: 'img/fiat_egea_sedan.jpg',
        link: 'http://www.arabalar.com.tr/fiat/egea/2023/1-3-multijet-urban',
    },
    {
        name : 'Honda Civic',
        image: 'img/honda_civic.jpg',
        link: 'http://www.arabalar.com.tr/honda/civic/2020/1-6-elegance-cvt',
    },
    {
        name : 'Mersedes-Benz C Serisi',
        image: 'img/mercedes_c.jpg',
        link: 'http://www.arabalar.com.tr/mercedes/c-serisi/2021/c200-1-5-exclusive',
    },
    {
        name : 'Renault Clio',
        image: 'img/renault_clio.jpg',
        link: 'http://www.arabalar.com.tr/renault/clio/2023/1-0-icon-x-tronic',
    },
]

var index = 0;
var slaytcount = models.length;
var interval;

var settings  = {
    duration  : '1000',
    random : false,
};



init(settings);

document.querySelector('.fa-arrow-left').addEventListener('click', function(){
    index--;
    showslider(index);
});
document.querySelector('.fa-arrow-right').addEventListener('click', function(){
    index++;
    showslider(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})



function init(settings){
    var prev;
     
    interval= setInterval(function(){

        if(settings.random){
            do{
                index = Math.floor(Math.random() * slaytcount);
            }
            while(index == prev){
                prev = index;
            }
        }
        else{
            if(slaytcount == index + 1){
                index = -1;
            }
            showslider(index);
            index++;
        }
        showslider(index);

    },settings.duration)
};




function showslider (i){

    i = index;

    if(i<0){
        index = slaytcount -1;
    };

    if(i>= slaytcount){
        index = 0;
    };



    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}



