$('body').css('display','none');
	$(document).ready(function() {
        //fade in website
		$('body').fadeIn(5000);
        
        //on a tag click event
		$('a').on('click',function(event){
			var thetarget = this.getAttribute('target')
            var thehref = this.getAttribute('href')
            //if the target is opening in a new window
			if ((thetarget != "_blank") && (thehref != "#")){			
				event.preventDefault();
				$('body').fadeOut(3000, function(){
					//alert(thehref)
					window.location = thehref					
				});
			}
		});
	});
	setTimeout(function(){
		$('body').fadeIn();
	},1000)

