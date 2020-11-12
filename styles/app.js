// Show Social box when share button is clicked
var share_btn = document.getElementsByClassName("grid-container__share-btn")[0];
var share_box = document.getElementsByClassName("grid-container__social")[0];
var contact_box = document.getElementsByClassName("grid-container__contact")[0];
var share_small = document.getElementsByClassName("grid-container__share-btn")[1];
var arrow = document.getElementsByClassName('arrow')[0];

function myFunction(x) {
    if (x.matches) { // If media query matches
     share_btn.addEventListener('click',function(){
        if( share_box.classList.contains('close')){
            share_box.classList.remove('close');
            arrow.classList.remove('close');
        }else{
            share_box.classList.add('close');
            arrow.classList.add('close');
        }
    });
     share_small.addEventListener('click',function(){
        if(share_box.classList.contains('close')){
            share_box.classList.remove('close');
            arrow.classList.remove('close');
        }else{
            share_box.classList.add('close');
            arrow.classList.add('close');
        }
    }); 
    } else {
        share_btn.addEventListener('click',function(){
            if(contact_box.classList.contains('close')){
                contact_box.classList.remove('close');
                share_box.classList.add('close');
                arrow.classList.add('close');
            }else{
                contact_box.classList.add('close');
                share_box.classList.remove('close');
                arrow.classList.remove('close');
                

            }
        });
        share_small.addEventListener('click',function(){
            if(contact_box.classList.contains('close')){
                contact_box.classList.remove('close');
                share_box.classList.add('close');
                arrow.classList.add('close');
            }else{
                contact_box.classList.add('close');
                share_box.classList.remove('close');
                arrow.classList.remove('close');
            }
        });
    }
}
var x = window.matchMedia("(min-width: 400px)")
myFunction(x) // Call  function 
x.addListener(myFunction) // Attach listener function on state changes

