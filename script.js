document.getElementById('menu').addEventListener('click', function (event) {
    if(event.target.tagName === 'A'){

        //Активация меню
        document.querySelectorAll('.menu__link').forEach(element => {
            element !== event.target ?
                element.classList.remove('menu__link--active') : element.classList.add('menu__link--active')
  
        });   
        //Скролл к блоку
        let target = event.target.getAttribute('href'); 

       document.querySelector(target) ? 
            document.querySelector(target).scrollIntoView({ behavior: 'smooth'}) : window.scroll({top: 0, left: 0, behavior: 'smooth'})
          
            event.preventDefault();
    }
});
//Слайдер
document.querySelectorAll('.slider__control').forEach(element =>{
   
        element.addEventListener('click',function(event){
       
            document.querySelectorAll('.slider__item').forEach(element => {
                element.style = '';
                element.classList.toggle('slider__item--active')
                
                element.style[event.target.dataset.control] = '-1000px'
                setTimeout( function () {
                    element.style[event.target.dataset.control] = '0'
                        
                }, 0 );
               
                if(element.classList.contains('slider__item--active')){
                    element.closest('.slider').style.backgroundColor = element.dataset.color; 
                    element.closest('.slider').style.borderColor = element.dataset.color; 
                }
            })
        })
})

document.querySelectorAll('.slider__item--botton-vertical,.slider__item--botton-horizont').forEach(element => {
    element.addEventListener('click', (element) => {
       element.target.parentElement.classList.toggle('switch-off')
        
        //element.target.parentElement.classList.toggle('slider__item--switch-off');
    })
    console.log(element);
})
//Контакты
document.getElementById('contact-form').addEventListener('submit',function(event){
    let letter = document.createElement('div');

   
    document.getElementById('contact-form').querySelectorAll('input,textarea').forEach(element =>{

   
            if(element.dataset.field === 'subject'){
                let p = document.createElement('p')
                    p.innerHTML =  element.value ? 'Тема: ' +  element.value :  'Без темы'
                letter.append(p);
            }

            if(element.dataset.field === 'description'){
                let p = document.createElement('p')
                    p.innerHTML =  element.value ?  'Описание: ' +  element.value :  'Без описания'
                letter.append(p);
            }

       
      //  if(element.data)
    })
    document.querySelector('[data-modal-body]').append(letter);
    document.querySelector('[data-modal]').style.display = 'flex'
  
    event.preventDefault();
})

document.querySelector('[data-modal-close]').addEventListener('click',function(event){
    document.querySelector('[data-modal]').style.display = 'none'
    document.querySelector('[data-modal-body]').innerHTML = '';
    document.getElementById('contact-form').querySelectorAll('input,textarea').forEach(element =>{
        if(element.getAttribute('type') !== 'submit'){
            element.value = ''

        }
})
});

document.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
   

        if(window.scrollY < 600 ){
            clear();
                document.querySelector('[href="#home"]').classList.add('menu__link--active')
        }
        if(window.scrollY > 600 && window.scrollY < 1100){
            clear();
                document.querySelector('[href="#services"]').classList.add('menu__link--active')
        }
        if(window.scrollY > 1100 && window.scrollY < 1990){
            clear();

            document.querySelector('[href="#portfolio"]').classList.add('menu__link--active')
        }
        if(window.scrollY > 1990 && window.scrollY < 2725){
            clear();
            document.querySelector('[href="#about"]').classList.add('menu__link--active')
        }
        if(window.scrollY > 2725){
            clear();
            document.querySelector('[href="#contact"]').classList.add('menu__link--active')
        }
        

    
});

function clear(){
    document.querySelectorAll('.menu__link').forEach(element => {
 
            element.classList.remove('menu__link--active');

    }); 
}


class TagsPortfolio{
    tagsListSelector = '[data-js-tags] a';
    portfolioListSelector = '[data-js-portfolio] a'
    nodesTagsList = [];
    nodesPortfolioList = []
    constructor() {
        this.nodesTagsList = document.querySelectorAll(this.tagsListSelector);
            this.nodesTagsList.forEach(element => {
                element.onclick = this.handlerTags.bind(this); 
            });
        this.nodesListPortfolio = document.querySelectorAll(this.portfolioListSelector)
            this.nodesListPortfolio.forEach(element => {
                element.onclick = this.handlerPortfolio.bind(this);
            })
      }
    handlerPortfolio(event){

        this.nodesListPortfolio.forEach(element => {
            element.classList[event.currentTarget === element ? 'add' : 'remove']('portfolio-list__link--active')
         }) 

        event.preventDefault();
    }
    handlerTags(event){
    
        this.setActiveClass(event).shufflePorfolio()
        event.preventDefault();
    }
    activePortfolio(){
        
    }
    shufflePorfolio(){
        let shufflePorfolio = [...document.querySelector('.portfolio-list').children].sort((a, b) => 0.5 - Math.random());
        document.querySelector('.portfolio-list').innerHTML = '';

        document.querySelector('.portfolio-list').append(...shufflePorfolio);
        return this;
    }

    setActiveClass(){
        this.nodesTagsList.forEach(element => {
                event.target === element ?
                    element.classList.add('tags__item--active') : element.classList.remove('tags__item--active')

        }) 
        return this;
    }
}
new TagsPortfolio();

