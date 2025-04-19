
let btnSubmit = document.getElementById('btn-submit');
let btnOption = document.querySelectorAll('.btn-option');
const container2 = document.getElementById('thankyou-container')
    const content = document.getElementById('content')
let valueBtn = null

btnOption.forEach(botao => {
    botao.addEventListener('click',() => {
        valueBtn = botao.value
      
        
    })
    
});


btnSubmit.addEventListener('click',(e)=>{
    
    let numSelected = document.getElementById('numSelected');
    content.classList.add('activ')
    container2.classList.add('activ1')

    
    numSelected.innerText = valueBtn;
    e.preventDefault();
})