var imgs = document.querySelectorAll('.item img');  //nodes
var lightBox = document.getElementById('lightBox');

for(var i=0 ; i<imgs.length ; i++){

    imgs[i].addEventListener('click' , function(){
        lightBox.style.display = 'flex';
    });
}

