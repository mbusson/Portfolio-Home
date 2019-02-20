// ANIMATIONS

$(document).ready(function(){

  TweenLite.to("#homescreen",2, {opacity:1, ease:Power2.easeInOut});  

  TweenLite.to("#footer",1.75, {opacity:0.8, delay:2, ease:Power4.easeIn});

  TweenLite.to("#menu",2, {top:0, delay:1, ease:Power2.easeInOut});

})



$(document).ready(function(){

// WORKS PAGE

function createWorksPage() {

  var i;

  i = 2;

  function updateNullDisplay() {
    if (i <= 1) {
      $("#imgprev").hide();
    } else if (i >= 15) {
      $("#imgnext").hide();
    } else {
      $("#imgprev").show();
      $("#imgnext").show();
    }
  }

  if (i < 16) {

    $("#worksscreen").append(

      '<div id="imageselector"><span class="imgselect" id="img1"> &#9632; </span><span class="imgselect" id="img2"> &#9632; </span><span class="imgselect" id="img3"> &#9632; </span><span class="imgselect" id="img4"> &#9632; </span><span class="imgselect" id="img5"> &#9632; </span><span class="imgselect" id="img6"> &#9632; </span><span class="imgselect" id="img7"> &#9632; </span><span class="imgselect" id="img8"> &#9632; </span><span class="imgselect" id="img9"> &#9632; </span><span class="imgselect" id="img10"> &#9632; </span><span class="imgselect" id="img11"> &#9632; </span><span class="imgselect" id="img12"> &#9632; </span><span class="imgselect" id="img13"> &#9632; </span><span class="imgselect" id="img14"> &#9632; </span><span class="imgselect" id="img15"> &#9632; </span></div><div><img src="http://lunadoz.com/works/' + ( i - 1 ) + '.png" alt="" id="imgprev"/></div><div><img src="http://lunadoz.com/works/' + i + '.png" alt="" id="imgmain"/></div><div><img src="http://lunadoz.com/works/' + ( i + 1 ) + '.png" alt="" id="imgnext"/></div><div><img src="http://lunadoz.com/works/' + ( i + 2 ) + '.png" height="300px" alt="" class="hiddenimg"/></div>'

    );

    // handling img indicator

    $('.imgselect').css('color', 'rgb(150,150,150)');

    var selectedimg = '#img' + i;

    $(selectedimg).css('color', 'rgb(5,5,5)');

  } else {

    i = 2;

  }

  $(".imgselect" ).click(function(){

    var imgnum = $(this).attr('id');
    i = imgnum.substr(3); i = Number(i);

    var iprev = (i-1); var inext = (i+1); 
    var ihid = (i+2);

    $('.imgselect').css('color', 'rgb(150,150,150)');
    $(this).css('color', 'rgb(5,5,5)');
    $("#imgprev").attr("src", 'http://lunadoz.com/works/' + iprev + '.png');
    $("#imgmain").attr("src", 'http://lunadoz.com/works/' + i + '.png');
    $("#imgnext").attr("src", 'http://lunadoz.com/works/' + inext + '.png');
    $(".hiddenimg").attr("src", 'http://lunadoz.com/works/' + ihid + '.png');

    updateNullDisplay();
  });

  $("#imgprev").click(function(){

    i--;
    var iprev = (i-1); var inext = (i+1);
    var ihid = (i+2);

    $("#imgprev").attr("src", 'http://lunadoz.com/works/' + iprev + '.png');
    $("#imgmain").attr("src", 'http://lunadoz.com/works/' + i + '.png');
    $("#imgnext").attr("src", 'http://lunadoz.com/works/' + inext + '.png');
    $(".hiddenimg").attr("src", 'http://lunadoz.com/works/' + ihid + '.png');

    // handling img indicator

    $('.imgselect').css('color', 'rgb(150,150,150)');
    var selectedimg = '#img' + i;
    $(selectedimg).css('color', 'rgb(5,5,5)');

    updateNullDisplay();
  });

  $("#imgnext").click(function(){

    i++;
    var iprev = (i-1); var inext = (i+1);
    var ihid = (i+2);

    $("#imgprev").attr("src", 'http://lunadoz.com/works/' + iprev + '.png');
    $("#imgmain").attr("src", 'http://lunadoz.com/works/' + i + '.png');
    $("#imgnext").attr("src", 'http://lunadoz.com/works/' + inext + '.png');
    $(".hiddenimg").attr("src", 'http://lunadoz.com/works/' + ihid + '.png');

    // handling img indicator

    $('.imgselect').css('color', 'rgb(150,150,150)');
    var selectedimg = '#img' + i;
    $(selectedimg).css('color', 'rgb(5,5,5)');

    updateNullDisplay();
  });
}



// ABOUT PAGE

function createAboutPage() {

    $("#aboutscreen").append(

      '<div><img id="imgabout" src="http://lunadoz.com/works/4.png"/></div><div id="textabout"><img id="abouttext" src="http://lunadoz.com/images/5- About me.jpg"><br/><br/><p>Born in 25.09.89 in Bregenz, Austria.</p><p>Bachelor in Psychology in Rome, Italy.</p><p>Diploma in Graphic design, Vienna, Austria.</p></div>'

  );

}



// CONTACT PAGE

function createContactPage() {

    $("#contactscreen").append(

      '<div><img id="imgcontact" src="http://lunadoz.com/works/contact.png"/></div><div id="textabout"><img id="contacttext" src="http://lunadoz.com/images/6- contact me.jpg"><br/><br/><a href="mailto:ludovica.schiariti@gmail.com">ludovica.schiariti@gmail.com</a><br/><br/><a href="https://www.instagram.com/lunadoz/">Instagram</a><br/><br/><a href="https://www.facebook.com/lunadoz12/">Facebook Page</a><br/></div>'

  );

}



// MENUS & BASE DIV CREATION

$('#menuhome').click(function(){

    TweenLite.to("#homelogo",1, {opacity:1, ease:Power2.easeInOut});

    if ($('#worksscreen').length != 0){

      TweenLite.to("#worksscreen",1, {opacity:0, ease:Power2.easeInOut});

      setTimeout(function(){

        $("#worksscreen").remove();

      }, 1000);

    }

    if ($('#aboutscreen').length != 0){

      TweenLite.to("#aboutscreen",1, {opacity:0, ease:Power2.easeInOut});

      setTimeout(function(){

        $("#aboutscreen").remove();

      }, 1000);

    }

    if ($('#contactscreen').length != 0){

      TweenLite.to("#contactscreen",1, {opacity:0, ease:Power2.easeInOut});

      setTimeout(function(){

        $("#contactscreen").remove();

      }, 1000);

    }

  $('.menuitem').removeClass("selecteditem");

  $('#menuhome').addClass("selecteditem");

});

$('#menuworks').click(function(){

    TweenLite.to("#homelogo",1, {opacity:0, ease:Power2.easeInOut});

    if ($('#aboutscreen').length != 0){

      TweenLite.to("#aboutscreen",1, {opacity:0, ease:Power2.easeInOut});

      setTimeout(function(){

        $("#aboutscreen").remove();

      }, 1000);

    }

    if ($('#contactscreen').length != 0){

      TweenLite.to("#contactscreen",1, {opacity:0, ease:Power2.easeInOut});

      setTimeout(function(){

        $("#contactscreen").remove();

      }, 1000);

    }

    if ($('#worksscreen').length == 0){

      $("#wrapper").append('<div id="worksscreen"></div>');

      createWorksPage();

      TweenLite.to("#worksscreen",1, {opacity:1, ease:Power2.easeInOut});

    }

  $('.menuitem').removeClass("selecteditem");

  $('#menuworks').addClass("selecteditem");

});

$('#menuabout').click(function(){

    TweenLite.to("#homelogo",1, {opacity:0, ease:Power2.easeInOut});

    if ($('#worksscreen').length != 0){

      TweenLite.to("#worksscreen",1, {opacity:0, ease:Power2.easeInOut});

      setTimeout(function(){

        $("#worksscreen").remove();

      }, 1000);

    }

    if ($('#contactscreen').length != 0){

      TweenLite.to("#contactscreen",1, {opacity:0, ease:Power2.easeInOut});

      setTimeout(function(){

        $("#contactscreen").remove();

      }, 1000);

    }

  if ($('#aboutscreen').length == 0){

      $("#wrapper").append('<div id="aboutscreen"></div>');

      createAboutPage();

      TweenLite.to("#aboutscreen",1, {opacity:1, ease:Power2.easeInOut});

    }

  $('.menuitem').removeClass("selecteditem");

  $('#menuabout').addClass("selecteditem");

});

$('#menucontact').click(function(){

    TweenLite.to("#homelogo",1, {opacity:0, ease:Power2.easeInOut});

    if ($('#worksscreen').length != 0){

      TweenLite.to("#worksscreen",1, {opacity:0, ease:Power2.easeInOut});

      setTimeout(function(){

        $("#worksscreen").remove();

      }, 1000);

    }

    if ($('#aboutscreen').length != 0){

      TweenLite.to("#aboutscreen",1, {opacity:0, ease:Power2.easeInOut});

      setTimeout(function(){

        $("#aboutscreen").remove();

      }, 1000);

    }

  if ($('#contactscreen').length == 0){

      $("#wrapper").append('<div id="contactscreen"></div>');

      createContactPage();

      TweenLite.to("#contactscreen",1, {opacity:1, ease:Power2.easeInOut});

    }

  $('.menuitem').removeClass("selecteditem");

  $('#menucontact').addClass("selecteditem");

});

})