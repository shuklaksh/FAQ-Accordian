const arrowClick = document.getElementsByClassName("arrow");
const ans = document.getElementsByClassName("answer");
const qsn = document.querySelectorAll(".question");


for(let i = 0; i < arrowClick.length; i++) {
    qsn[i].addEventListener('click', function(){
        if(ans[i].style.display == 'block'){
            ans[i].style.display = 'none';
            qsn[i].style.fontWeight = 'lighter';
            arrowClick[i].classList.remove('rotate');
        }
        else{
            ans[i].style.display = 'block';
            ans[i].style.visibility = 'visible';
            arrowClick[i].classList.add('rotate');
            qsn[i].style.fontWeight = 'bold';
        }
        
        
    })
}