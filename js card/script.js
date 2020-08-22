var models = [
    {
        name : 'Amarok',
        image : 'img/amarok.jpg',
        link : 'https://www.sahibinden.com/arazi-suv-pickup-volkswagen-amarok'
    },
    {
        name : 'Hilux',
        image : 'img/hilux.jpg',
        link : 'https://www.sahibinden.com/arazi-suv-pickup-toyota-hilux'
    },
    {
        name : 'L200',
        image : 'img/L200.jpg',
        link : 'https://www.sahibinden.com/arazi-suv-pickup-mitsubishi-l-200'
    },
    {
        name : 'MersedeX',
        image : 'img/mercedesX.jpg',
        link : 'https://www.sahibinden.com/arazi-suv-pickup-mercedes-benz-x'
    },
    {
        name : 'Ranger',
        image : 'img/ranger.jpg',
        link : 'https://www.sahibinden.com/arazi-suv-pickup-ford-ranger'
    }
]

var index = 3;
var slaytCount = models.length;

showSlide(index);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);

});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);

});

function showSlide(i){

    index = i;

    if( i < 0) {
        index = slaytCount - 1;
    }
    if( i >= slaytCount){
        index = 0;
    }


    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);
}


