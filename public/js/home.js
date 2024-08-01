
  

 // OBJECT: 'retype' controls the deletion and creation of new words
    var retype = {
        // ARRAY: 'retypePhrases' contains the words that will be switched
        //        The tool replaces the word contained within the element with the ID of 'retype'
        //        It works cleaner if neighboring words have different first letters.
        //        Spaces in phrases can cause a hiccup. Best practice to keep phrases as single words.
        retypePhrases: [
            'coder.',
            'designer.',
            'full stack developer.',

        ],
        index       : -1,
        elem        : document.getElementById('retype'),
        start       : function(){
            var _this = this;
            setTimeout( function(){
                _this.deleteLetter();
            }, 500 ); // Delay the start of a new word by 3 seconds
        },// END retype.start()
        deleteRepeat: function(){
            this.deleteLetter();
        },// END retype.deleteRepeat()
        deleteLetter: function(){
            var newWord = this.elem.innerHTML;
            if( newWord.length > 0 ){
                newWord = newWord.substring(0, newWord.length - 1);
                var _this = this;
                setTimeout( function(){
                    _this.elem.innerHTML = newWord;
                    _this.deleteRepeat();
                }, 75 );
            }else{
                this.newLetter();
            }// END if( newWord.length > 0 )
        },// END retype.deleteLetter()
        newRepeat   : function(){
            this.newLetter();
        },// END retype.newRepeat()
        newLetter   : function(){
            var newWord = this.elem.innerHTML;
            if( newWord.length === 0 ){
                this.index++;
                if( this.index >= this.retypePhrases.length ){
                    this.index = 0;
                }
            }// END if( newWord.length === 0 )
            var newLetters = this.retypePhrases[ this.index ];
            if( newLetters.length > newWord.length ){
                newLetters = newLetters.substring(0, ( newWord.length + 1 ) );
                var _this = this;
                // Add a slight random variation in retype time to make the letter typing seem more 'human'
                var time = Math.round( Math.random() * 100 ) + 100;
                setTimeout( function(){
                    _this.elem.innerHTML = newLetters;
                    _this.newLetter();
                }, time );
            }else{
                this.start();
                // Yep, this makes the retype an infinite loop
            }// END if( newLetters.length > newWord.length )
        }// END retype.newLetter()
    };
    
    retype.start();

    // OBJECT: 'retype' controls the deletion and creation of new words
    var retype2 = {
        // ARRAY: 'retypePhrases' contains the words that will be switched
        //        The tool replaces the word contained within the element with the ID of 'retype'
        //        It works cleaner if neighboring words have different first letters.
        //        Spaces in phrases can cause a hiccup. Best practice to keep phrases as single words.
        retype2Phrases: [
            'Anray Hayden.',


        ],
        index       : -1,
        elem        : document.getElementById('retype2'),
        start       : function(){
            var _this = this;
            setTimeout( function(){
                _this.deleteLetter();
            }, 500 ); // Delay the start of a new word by 3 seconds
        },// END retype.start()
        deleteRepeat: function(){
            this.deleteLetter();
        },// END retype.deleteRepeat()
        deleteLetter: function(){
            var newWord = this.elem.innerHTML;
            if( newWord.length > 0 ){
                newWord = newWord.substring(0, newWord.length - 1);
                var _this = this;
                setTimeout( function(){
                    _this.elem.innerHTML = newWord;
                    _this.deleteRepeat();
                }, 75 );
            }else{
                this.newLetter();
            }// END if( newWord.length > 0 )
        },// END retype.deleteLetter()
        newRepeat   : function(){
            this.newLetter();
        },// END retype.newRepeat()
        newLetter   : function(){
            var newWord = this.elem.innerHTML;
            if( newWord.length === 0 ){
                this.index++;
                if( this.index >= this.retype2Phrases.length ){
                    this.index = 0;
                }
            }// END if( newWord.length === 0 )
            var newLetters = this.retype2Phrases[ this.index ];
            if( newLetters.length > newWord.length ){
                newLetters = newLetters.substring(0, ( newWord.length + 1 ) );
                var _this = this;
                // Add a slight random variation in retype time to make the letter typing seem more 'human'
                var time = Math.round( Math.random() * 100 ) + 100;
                setTimeout( function(){
                    _this.elem.innerHTML = newLetters;
                    _this.newLetter();
                }, time );
            }else{
                this.start();
                // Yep, this makes the retype an infinite loop
            }// END if( newLetters.length > newWord.length )
        }// END retype.newLetter()
    };
    
    retype2.start();

    const div = document.querySelector(".circle");
    let offsetX,offSetY
     
    const move = (e) =>{
      div.style.left = `${e.clientX - offsetX -200}px`
       div.style.top = `${e.clientY - offsetX}px`
    }
     
    div.addEventListener("mousedown", (e) =>{
      offsetX = (e.clientX )- div.offsetLeft ;
       offsetX = e.clientY - div.offsetTop;
      document.addEventListener("mousemove",move)
      
    })
     
    document.addEventListener("mouseup" ,() =>{
      document.removeEventListener("mousemove",move)
    })
    
    const date = new Date().getFullYear()
    console.log(date);
    document.getElementById("date").innerHTML= "© " +date + " Anray Hayden"

    function hideElement () {
        var info = document.getElementById("hidden")
        if (info.style.display === "block") {
            info.style.display = "none";
            document.getElementById("onclick").innerHTML="Continue reading"
          } else {
        info.style.display = "block";
        document.getElementById("onclick").innerHTML="Collapse"
          }
    }