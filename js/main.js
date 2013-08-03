(function() {
  var infoHide, infoShow, menuHide, menuShow, refreshFrame, resetUrl, urlHide, urlShow;

  resetUrl = function() {
    return $("#param .sub").removeClass("active");
  };

  refreshFrame = function() {
    $("#frame").contentWindow.location.reload(true);
    return resetUrl();
  };

  menuShow = function() {
    $("#visib").removeClass("active");
    return $("nav").animate({
      marginTop: 0
    }, 200);
  };

  menuHide = function() {
    $("nav").animate({
      marginTop: -29
    }, 200);
    return $("#visib").addClass("active");
  };

  urlShow = function() {
    $("#param a").addClass("selected");
    return $("#param .sub").addClass("active");
  };

  urlHide = function() {
    $("#param a").removeClass("selected");
    return $("#param .sub").removeClass("active");
  };

  infoShow = function() {
    return $("#info-window").fadeIn(200);
  };

  infoHide = function() {
    return $("#info-window").fadeOut(200);
  };

  $(window).bind("load resize", function() {
    var heightW, widthW;
    heightW = $(window).height();
    widthW = $(window).width();
    return $("#resize-browser .size").html("<span class=\"number\">" + widthW + "</span><span class=\"x\">x</span><span class=\"number\">" + heightW + "</span>");
  });

  $("#container").bind("load resize", function() {
    var heightF, widthF;
    heightF = $("#container").height();
    widthF = $("#container").width();
    return $("#resize-frame .size").html("<span class=\"number\">" + widthF + "</span><span class=\"x\">x</span><span class=\"number\">" + heightF + "</span>");
  });

  $(document).ready(function() {
    var OSName;
    $("a.intro").click(function() {
      urlShow();
      return false;
    });
    $("#screen a").not(".tablet, .mobile").click(function() {
      var $contain, $thisHref, heightF, thisHrefClass, widthF;
      thisHrefClass = $(this).attr("class");
      $thisHref = $(this);
      $contain = $("#container");
      $("#screen li").removeClass("selected");
      $thisHref.parent("li").addClass("selected");
      $contain.removeClass().addClass("ui-resizable");
      if (thisHrefClass === "computer") {
        $contain.addClass("computer");
        $(".option").removeClass("active");
        $("#screen li").removeClass("selected-section");
      } else if (thisHrefClass === "laptop") {
        $contain.addClass("laptop");
        $(".option").removeClass("active");
        $("#screen li").removeClass("selected-section");
      } else if (thisHrefClass === "tablet-portrait") {
        $contain.addClass("tablet-portrait");
        $(".mobile-option").removeClass("active");
      } else if (thisHrefClass === "tablet-landscape") {
        $contain.addClass("tablet-landscape");
        $(".mobile-option").removeClass("active");
      } else if (thisHrefClass === "mobile-portrait") {
        $contain.addClass("mobile-portrait");
        $(".tablet-option").removeClass("active");
      } else if (thisHrefClass === "mobile-landscape") {
        $contain.addClass("mobile-landscape");
        $(".tablet-option").removeClass("active");
      }
      heightF = $("#container").height();
      widthF = $("#container").width();
      $("#resize-frame .size").html("<span class=\"number\">" + widthF + "</span><span class=\"x\">x</span><span class=\"number\">" + heightF + "</span>");
      return false;
    });
    $("#screen a.tablet, #screen a.mobile").hover(function() {
      var $thisHref, thisHrefClass;
      thisHrefClass = $(this).attr("class");
      $thisHref = $(this);
      $("#screen li").removeClass("selected-section");
      $thisHref.parent("li").addClass("selected-section");
      if (thisHrefClass === "tablet") {
        $(".option").removeClass("active");
        $(".tablet-option").addClass("active");
        return $contain.addClass("tablet-option");
      } else if (thisHrefClass === "mobile") {
        $(".option").removeClass("active");
        $(".mobile-option").addClass("active");
        return $contain.addClass("mobile-option");
      }
    });
    $("#refresh a, #visib a").click(function() {
      var thisHrefClass;
      thisHrefClass = $(this).attr("class");
      if (thisHrefClass === "refresh") {
        refreshFrame();
      } else if (thisHrefClass === "visib") {
        menuHide();
      } else if (thisHrefClass === "unvisib") {
        menuShow();
      }
      return false;
    });
    $("#param a").click(function() {
      if (!$(this).is(".selected")) {
        urlShow();
      } else {
        urlHide();
      }
      return false;
    });
    $("#info a").click(function() {
      infoShow();
      return false;
    });
    $("p.close").click(function() {
      infoHide();
      return false;
    });
    $('#target').submit(function() {
      var url;
      url = $("input#url").val();
      $("#frame").attr("src", url);
      urlHide();
      $("ul#screen").fadeIn();
      $("iframe").addClass("showed").removeClass("masked");
      $("#intro").addClass("masked").removeClass("showed");
      return false;
    });
    OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") !== -1) {
      OSName = "Windows";
    }
    if (navigator.appVersion.indexOf("Mac") !== -1) {
      OSName = "MacOS";
    }
    if (navigator.appVersion.indexOf("X11") !== -1) {
      OSName = "UNIX";
    }
    if (navigator.appVersion.indexOf("Linux") !== -1) {
      return OSName = "Linux";
    }
  });

  $(document).keyup(function(e) {
    /*
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
    */

  });

  if (e.keyCode === 82 && e.ctrlKey) {
    resetUrl();
  }

  if (e.keyCode === 73 && e.ctrlKey) {
    infoShow();
  }

  if (e.keyCode === 27) {
    infoHide();
    urlHide();
  }

  if (e.keyCode === 85 && e.ctrlKey) {
    urlShow();
  }

  if (e.keyCode === 40 && e.ctrlKey) {
    menuShow();
  }

  menuHide()(e.keyCode === 38 && e.ctrlKey ? (e.keyCode === 13 && e.shiftKey ? refreshFrame() : void 0, e.keyCode === 52 && e.ctrlKey ? alert("keycode size 1") : void 0, e.keyCode === 53 && e.ctrlKey ? alert("keycode size 2") : void 0, e.keyCode === 54 && e.ctrlKey ? alert("keycode size 3") : void 0, e.keyCode === 55 && e.ctrlKey ? alert("keycode size 4") : void 0, e.keyCode === 56 && e.ctrlKey ? alert("keycode size 5") : void 0, e.keyCode === 57 && e.ctrlKey ? alert("keycode size 6") : void 0) : void 0);

}).call(this);
