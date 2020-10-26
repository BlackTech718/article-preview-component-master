// Show Social box when share button is clicked
var share_btn = document.getElementsByClassName("grid-container__share-btn");
var share_box = document.getElementsByClassName("grid-container__social");
share_btn[0].children[0].addEventListener('click',function(){
    if(share_box[0].classList.contains('open')){
        share_box[0].classList.remove('open')
    }else{
        share_box[0].classList.add('open');
    }
});