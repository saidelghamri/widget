

var container = document.getElementById('widget-content');

//slide function called every 10s
var autoPlay = setInterval(() => auto_paly(), 10000);

/*
*auto play slider Function
*/

 function auto_paly(){
    var container = document.getElementById('widget-content');
    var current_scroll_pos = container.scrollLeft;
    var element_scrollWidth = container.scrollWidth;
    var scrollStep = document.querySelector('.widget-card').scrollWidth;
    var content_width = (container.scrollLeft/container.scrollWidth)*200;

    if (content_width < 99) {

       widget_sideScroll(container,'right');
    }else{
       container.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });

    }

 }

//when hover on widget content auto slide disabled 
container.onmouseover = function(){
  if (autoPlay) {
    clearInterval(autoPlay)
  }
}

//when mouse not hover on content auto slide run again
container.onmouseout = function(){
  autoPlay = setInterval(() => auto_paly(), 10000)
}

//progress scroll charged when scroll on widget content
container.onscroll = function(){

  var width = (container.scrollLeft/container.scrollWidth)*200;
  document.getElementById("scrollbar").style.width = width+"%";

}


/*
*scroll right event
*/
var slide_forward = document.getElementById('right');

slide_forward.onclick = function () {

    //call function widget_sideScroll(element, direction)
    widget_sideScroll(container,'right' );
};

/*
*scroll left event
*/
var slide_backwards = document.getElementById('left');

slide_backwards.onclick = function () {

  //call function widget_sideScroll(element, direction)
    widget_sideScroll(container,'left');
};

/*
* slide function
* accept 2 params (elemnt, diirection)
*/
function widget_sideScroll(element,direction) {

   var scrollStep = document.querySelector('.widget-card').scrollWidth;
   var current_scroll_pos = container.scrollLeft;
   var element_scrollWidth = container.scrollWidth;

    if(direction == 'left'){
              
          if ((current_scroll_pos - scrollStep) <= 0) {
            element.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          } else {
            element.scrollTo({
              top: 0,
              left: (current_scroll_pos - scrollStep),
              behavior: 'smooth',
            });
           
          }

    }else {

            if ((current_scroll_pos + scrollStep) >= element_scrollWidth) {
         
              element.scrollTo({
                top: 0,
                left: element_scrollWidth,
                behavior: 'smooth'
              });
            } else {

              element.scrollTo({
                top: 0,
                left: (current_scroll_pos + scrollStep),
                behavior: 'smooth',
              });
            }

    }

}



