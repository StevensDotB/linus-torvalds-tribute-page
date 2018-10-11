$(document).ready(function(){
	$( ".btn")
  .on( "mouseenter", function() {
		if($(this).hasClass('active-ann')){
			$( "span", this ).text( "~# ./read_annoucement.sh" );
		}
		else {
			$( "span", this ).text( "~# ./read_biography.sh" );
		}
  })
  .on( "mouseleave", function() {
		if($(this).hasClass('active-ann')){
			$( "span", this ).text( "Annoucement" );
		}
		else {
			$( "span", this ).text( "Biography" );
		}
  });
	
	/* Active annoucement message */
	$(".active-ann").click(function(){
    $(".ann-wrap").removeClass("hide");
	});
	/* Close annoucement message */
	$(".close-ann").click(function(e){
			$(".ann-wrap").addClass("hide");
	});
});