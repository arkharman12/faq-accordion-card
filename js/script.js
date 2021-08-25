let questions = document.getElementsByClassName('accordion');

let i;
let numOpened = 0;

for(i=0;i<questions.length; i++) {
    
    questions[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let answer = this.nextElementSibling;
        
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            numOpened--;
        } else {
            if (numOpened > 0) {
                document.querySelectorAll(".accordion-content").forEach(a=>a.style.maxHeight = null);
                document.querySelectorAll(".accordion").forEach(a=>a.classList.remove('active'))
                this.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                numOpened++;
            }
        }
        
    });
    
}
