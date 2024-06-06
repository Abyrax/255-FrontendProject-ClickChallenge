$(function() {   
    // Time Counter
    var timer = setInterval(incCounter, 1000) ;    
    var counter = parseInt($("#counter").text()) ;
    var counter2 = parseInt($("#counter2").text()) ;
    var score = parseInt($("#score").text()) ;
    var hiscore= parseInt($("#hiscore").text()) ;
    function incCounter(counter) {   
        var counter = parseInt($("#counter").text()) ;               
        if (counter > 0)
            counter-- ;
        if (counter2 > 0)
            counter2-- ;    
        localStorage.setItem("counter", counter)
        $("#counter").text(counter)
        $("#counter2").text(counter2)
        $("#hiscore").text(hiscore)
        $("#blackdiv").fadeOut(4000)
        $("#gameover").fadeOut(100)
        $("#playagain").fadeOut(100)

        if(counter <=0){
            $("#gameover").fadeIn(1) 
            $("#playagain").fadeIn(1)
            hiscore=score;
            $("#hiscore").text(hiscore)

            $.confetti.start();
            setTimeout(() => {
             $.confetti.stop();
            }, 2000)
            $(this).remove()
        }           
      
    }    
    
    //creating black tiles    
    var Tilecou = 0;
    var counter = parseInt($("#counter").text()) ;        
    var i, j ;
    window.setInterval(function() {           
            //do{
        if(Tilecou < 4 && counter>0){       
            j = Math.floor(Math.random() * 4) ;
            i = Math.floor(Math.random() * 4) ;                        
            $("#" + i + j).css('background', 'black') ;
            $("#" + i + j).removeClass("cells");
            $("#" + i + j).addClass("black");
                Tilecou++; }               
            //}while(Tilecou <=3)      
    }, 1000) ;  
   
    //$('.black').click(function() {
        $('.cells').click(function() {
            move(1000);    
            $(this).css("background", "white");  
            $(this).addClass("cells");              
            score++;
            Tilecou--;
            $("#score").text(score) ;
                    
    })  ;       
    
    function move(delay) {
        var bar = document.getElementById("insidebar");
        var end = Date.now() + delay;
        var frame = () => {
          var timeleft = Math.max(0, end - Date.now());
          bar.style.width = (100*timeleft)/delay + '%';           
          if (timeleft === 0) return;
          requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      }
   


});