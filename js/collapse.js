const collapse = document.querySelectorAll(".collapsible");
console.log(collapse);
for(let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener('click', function(){
        let attr = this.closest('.phones__item')
        this.classList.toggle("activeColl")
        let content = this.nextElementSibling
    
    if(content.style.display === 'block') {
        content.style.display = 'none' 
        attr.style = `z-index:1;`
        
    }else {
        content.style.display = 'block' 
        attr.style = `z-index:999;`
    }
    }) 
}
