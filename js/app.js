addEventListener('DOMContentLoaded', function(){
    var gallerybox1 = document.querySelector('.gallery-box1');
    var gallerybox2 = document.querySelector('.gallery-box2');
    var name1 = document.querySelector('.product-name1');
    var name2 = document.querySelector('.product-name2');

    gallerybox1.addEventListener('mouseover', function() {
        name1.classList.add('hide');
    });

    gallerybox1.addEventListener('mouseout', function() {
        name1.classList.remove('hide');
    });

    gallerybox2.addEventListener('mouseover', function() {
        name2.classList.add('hide');
    });

    gallerybox2.addEventListener('mouseout', function() {
        name2.classList.remove('hide');
    });
    //Slider krzesła

    var leftarrow = document.querySelector('.left-arrow');
    var rightarrow = document.querySelector('.right-arrow');
    var slideimg = document.querySelector('.slideimg');

        slideimg.classList.add('slider');
        
    var list = slideimg.querySelector('ul').children;
    var index = 0;
        list[index].classList.add('visible');

    rightarrow.addEventListener('click', function(){

        list[index].classList.remove('visible');
        index += 1;
        if(index > 2) {
            index = 0;
        }
        list[index].classList.add('visible');
});

    leftarrow.addEventListener('click', function(){

        list[index].classList.remove('visible');
        index -= 1;
        if(index < 0) {
            index = 0;
        }
        list[index].classList.add('visible');
    });
});
