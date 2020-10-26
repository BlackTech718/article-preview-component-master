// Show Social box when share button is clicked
var share_btn = document.getElementsByClassName("grid-container__share-btn")[0];
var share_box = document.getElementsByClassName("grid-container__social")[0];
var contact_box = document.getElementsByClassName("grid-container__contact")[0];
var share_small = document.getElementsByClassName("grid-container__share-btn")[1]

share_btn.addEventListener('click',function(){
    if(contact_box.classList.contains('close')){
        contact_box.classList.remove('close');
        share_box.classList.add('close');
    }else{
        contact_box.classList.add('close');
        share_box.classList.remove('close');
    }
});
share_small.addEventListener('click',function(){
    if(contact_box.classList.contains('close')){
        contact_box.classList.remove('close');
        share_box.classList.add('close');
    }else{
        contact_box.classList.add('close');
        share_box.classList.remove('close');
    }
});