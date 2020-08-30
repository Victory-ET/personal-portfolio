// const TypeWriter = function(txtElement, words, wait = 3000){
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex=0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeletng = false;
// }

// //type method
// TypeWriter.prototype,type = function(){
//  // current index of word
//  const current = this.wordIndex % this.words.length;
//  //Get full text of current word
//  const fulltxt = this.words[current];
//  console.log(current);

//  // check if deleting
//  if(this.isDeletng){
//      //remove char
//      this.txt = fulltxt.substring(0, this.txt.length -1);

//  }else{
//      //add char
//      this.txt = fulltxt.substring(0, this.txt.length +1);

//  }

//  //insert txt into element
//  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

//  // initial type speed
//  let typeSpeed = 300;
//  if(this.isDeletng){
//      typeSpeed/=2;
//  }

//  //if word is complete
//  if(!this.isDeletng && this.txt ===fulltxt){
//      //make pause at end
//      typeSpeed = this.wait;
//      //set delete to true
//      this.isDeletng=true;
//  }else if(()=> this.isDeletng && this.txt ===''){
//      this.isDeletng=false;
//      //move to the next word
//      this.wordIndex++;
//      //pause before start typing
//      typeSpeed=500;
//  }
//  setTimeout(() => this.type(), typeSpeed);
 
// }



//Es6 class
class TypeWriter{
    constructor(txtElement, words,wait=3000){
        this.txtElement=txtElement;
        this.words = words;
        this.txt='';
        this.wordIndex=0;
        this.wait=parseInt(wait, 10);
        this.type();
        this.isDeleting=false;
    }
    type(){
         // current index of word
        const current = this.wordIndex % this.words.length;
         //Get full text of current word
        const fulltxt = this.words[current];
        // console.log(current);

        // check if deleting
        if(this.isDeleting){
            //remove char
            this.txt = fulltxt.substring(0, this.txt.length -1);

        }else{
            //add char
            this.txt = fulltxt.substring(0, this.txt.length +1);

        }

        //insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

        // initial type speed
        let typeSpeed = 300;
        if(this.isDeleting){
            typeSpeed/=2;
        }

        //if word is complete
        if(!this.isDeleting && this.txt ===fulltxt){
            //make pause at end
            typeSpeed = this.wait;
            //set delete to true
            this.isDeleting=true;
        }else if(this.isDeleting && this.txt ===''){
            this.isDeleting=false;
            //move to the next word
            this.wordIndex++;
            //pause before start typing
            typeSpeed=500;
        }
        setTimeout(() => this.type(), typeSpeed);
        

    }
}


//init on doom load
document.addEventListener('DOMContentLoaded', init);

//init app
function init(){
    const txtElement = document.querySelector('.text-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //init typewriter
    new TypeWriter(txtElement, words, wait);
}
