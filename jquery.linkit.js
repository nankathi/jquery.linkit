/*
* name : Linkit
* author: Raj Ankathi
* version : 0.1.0
* licnese : MIT
*/

(function($){
  $.fn.linkIt = function(options){
        //alert(this.html());
       //Default settings
      var settings = $.extend({
        //whatever : null
          href : null,
          text : null,
          target : '_self'
      }, options);
      //alert(settings.whatever);
      
      //Validation
      if(settings.href == null ){
        console.log('You need an href option for linkit to work.');
          return this;
      }
      
      return this.each(function(){
        var object = $(this);
        
        if(settings.text == null){
            settings.text = object.text();  
        }
          
          object.wrap('<a target="' + settings.target +'" href="'+settings.href+'"></a>').text(settings.text);
      });
   }
 }(jQuery));