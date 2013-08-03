#
#
# Local toolkit for responsive 
#
#


resetUrl = ->
	$("#param .sub").removeClass "active"


refreshFrame = ->
	$("#frame").contentWindow.location.reload true
	resetUrl()


menuShow = ->
	$("#visib").removeClass "active"
	$("nav").animate
		marginTop: 0
	, 200


menuHide = ->
	$("nav").animate
		marginTop: -29
	, 200
	$("#visib").addClass "active"


urlShow = ->
	$("#param a").addClass "selected"
	$("#param .sub").addClass "active"


urlHide = ->
	$("#param a").removeClass "selected"
	$("#param .sub").removeClass "active"


infoShow = ->
	$("#info-window").fadeIn 200


infoHide = ->
	$("#info-window").fadeOut 200






# browser resize
$(window).bind "load resize", ->
	heightW	= $(window).height()
	widthW	= $(window).width()

	$("#resize-browser .size").html "<span class=\"number\">" + widthW + "</span><span class=\"x\">x</span><span class=\"number\">" + heightW + "</span>"


# iframe resize
$("#container").bind "load resize", ->
	heightF	= $("#container").height()
	widthF	= $("#container").width()

	$("#resize-frame .size").html "<span class=\"number\">" + widthF + "</span><span class=\"x\">x</span><span class=\"number\">" + heightF + "</span>"







$(document).ready ->

	# intro
	$("a.intro").click ->
		urlShow()
		false



	# resize iframe
	#$("#container").resizable()



	# viewport size
	$("#screen a").not(".tablet, .mobile").click ->
		thisHrefClass	= $(this).attr "class"
		$thisHref 		= $(this)
		$contain 		= $("#container")


		$("#screen li").removeClass "selected"
		$thisHref.parent("li").addClass "selected"


		$contain.removeClass().addClass "ui-resizable"

		if thisHrefClass is "computer" 
			$contain.addClass "computer"
			$(".option").removeClass "active"
			$("#screen li").removeClass "selected-section"
		
		else if thisHrefClass is "laptop" 
			$contain.addClass "laptop"
			$(".option").removeClass "active"
			$("#screen li").removeClass "selected-section"
		
		else if thisHrefClass is "tablet-portrait" 
			$contain.addClass "tablet-portrait"
			$(".mobile-option").removeClass "active"
		
		else if thisHrefClass is "tablet-landscape" 
			$contain.addClass "tablet-landscape"
			$(".mobile-option").removeClass "active"
		
		else if thisHrefClass is "mobile-portrait" 
			$contain.addClass "mobile-portrait"
			$(".tablet-option").removeClass "active"
		
		else if thisHrefClass is "mobile-landscape" 
			$contain.addClass "mobile-landscape"
			$(".tablet-option").removeClass "active"


		heightF	= $("#container").height()
		widthF	= $("#container").width()

		$("#resize-frame .size").html "<span class=\"number\">" + widthF + "</span><span class=\"x\">x</span><span class=\"number\">" + heightF + "</span>"

		false



	# sub option
	$("#screen a.tablet, #screen a.mobile").hover ->
		thisHrefClass	= $(this).attr "class"
		$thisHref 		= $(this)


		$("#screen li").removeClass "selected-section"
		$thisHref.parent("li").addClass "selected-section"


		if thisHrefClass is "tablet" 
			$(".option").removeClass "active"
			$(".tablet-option").addClass "active"
			$contain.addClass "tablet-option" 
		
		else if thisHrefClass is "mobile" 
			$(".option").removeClass "active"
			$(".mobile-option").addClass "active"
			$contain.addClass "mobile-option" 
		#false



	# last buttons
	$("#refresh a, #visib a").click ->
		thisHrefClass = $(this).attr "class"

		if thisHrefClass is "refresh"
			refreshFrame()
		else if thisHrefClass is "visib"	
			menuHide()
		else if thisHrefClass is "unvisib"
			menuShow()
		false



	$("#param a").click ->
		unless $(this).is ".selected" 
			urlShow()
		else								
			urlHide()
		false



	# info window
	$("#info a").click ->
		infoShow()
		false

	$("p.close").click ->
		infoHide()
		false



	# url input + save url
	#$("input#url").on "propertychange paste keyup", ->
	$('#target').submit ->
		url = $("input#url").val()

		$("#frame").attr("src", url)
		urlHide()
		$("ul#screen").fadeIn()

		$("iframe").addClass("showed").removeClass("masked")
		$("#intro").addClass("masked").removeClass("showed")

		false



	# os detection
	OSName = "Unknown OS"
	OSName = "Windows" unless navigator.appVersion.indexOf("Win") is -1 
	OSName = "MacOS" unless navigator.appVersion.indexOf("Mac") is -1 
	OSName = "UNIX" unless navigator.appVersion.indexOf("X11") is -1 
	OSName = "Linux" unless navigator.appVersion.indexOf("Linux") is -1
	#alert('Your OS: '+OSName)







#keyboard shortcuts
$(document).keyup (e) ->
    
    #enter : save url
   	###
    if $("#param .sub").hasClass "active"
	    if e.keyCode is 13
	    	console.log "enter"
	    	$("a.param").removeClass "selected"
	    	$("#param .sub").removeClass "active"
	    	$("#intro").removeClass("showed").addClass "masked"
			$("iframe").removeClass("masked").addClass "showed"
			#$("ul#screen").fadeIn()

			setTimeout (->
				console.log "enter 300"
				#$("#intro").hide()
				#$("iframe").show()
				#$("ul#screen").fadeIn()
			), 300
	###
	    


    #ctrl+R : reset url
	resetUrl() if e.keyCode is 82 and e.ctrlKey


	#ctrl+I : show/ esc : hide info
	infoShow() if e.keyCode is 73 and e.ctrlKey

	if e.keyCode is 27
		infoHide() 
		urlHide()


	#ctrl+U : show url
	urlShow() if e.keyCode is 85 and e.ctrlKey


    #keydown : show/ keyup : hide nav
	menuShow() if e.keyCode is 40 and e.ctrlKey
	menuHide() if e.keyCode is 38 and e.ctrlKey
		

    #shift+enter : refresh frame
    refreshFrame() if e.keyCode is 13 and e.shiftKey
    	

    #viewport size
    alert "keycode size 1" if e.keyCode is 52 and e.ctrlKey
    alert "keycode size 2" if e.keyCode is 53 and e.ctrlKey
    alert "keycode size 3" if e.keyCode is 54 and e.ctrlKey
    alert "keycode size 4" if e.keyCode is 55 and e.ctrlKey
    alert "keycode size 5" if e.keyCode is 56 and e.ctrlKey
    alert "keycode size 6" if e.keyCode is 57 and e.ctrlKey
    	


