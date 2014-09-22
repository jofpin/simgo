/*! Gumok v1.0.1 | (c) Copyright 2014 - Jose Pino, @jofpin | https://github.com/jofpin/gumok */
$(document).ready(function() {
  var app = "[core-app=\""+ nameApp +"\"]";
  var $gumok = {
    /**
     * add var nameApp = "here name your app";
     * You can assign direct values to a single element for example the label div etc.
     * I do not recommend to assign values to the label (title), because I'm not sure if it is effective in SEO with that tag
     * I use http://jsnice.org/ is great!
     */
    root : function(element, args) {
      var bGum = $(element).html();
      $(element).html($gumok.gdef(bGum, args)); /* bGum = body gum */
    },

    exptemplate : /\{{|}\}/, /* Expression of template gum */

    gdef : function(bGum, data) {
      var $unions  = bGum.split($gumok.exptemplate);
      var $counter = $unions.length;
      var id = 1;
      for (;id < $counter; id += 2) {
        if (data.hasOwnProperty($unions[id])) {
          $unions[id] = data[$unions[id]];
          console.log("These using Gumok > Happy code!"); 
        } else {
            console.log("Error in Template");
        }
      }
      var segs = $unions.join("");
      return segs;
    }
  };
  
/* App */
  $gumok.root($(app), {
    name : "Simgo",
    author : "Jose Pino",
    twitter : "https://twitter.com/jofpin",
    txt1 : "* This is a simple and attractive library will help you to write php code more clear and easy!",
    txt2 : "The library is fully documented, and is easy to understand, I'm looking for improving and facilitating the writing of php. Have to play with the programming languages ​​they are old and everything is part of history!",
    txt3 : "* By using Simgo, \"echo\" and other ugly things cease to exist!",
    url_repo : "https://github.com/jofpin/simgo"
  });
  /* End app */

function shareSimgo() {
  var $url = "https://github.com/jofpin/simgo";
  $("#twitter").on("click", function() {
    var body = window.open($(this).attr("href"), "", "height=480,width=560");
    return window.focus && body.focus(), false;
  });
  $(".btn_twitter").attr({
    "href" : "https://twitter.com/intent/tweet?text=Simgo. simplifies code writing your sexy and simple %23code.&url=" + $url + "&via=jofpin",
    "title" : "Share on" + " " + "Twitter"
  });
}
  shareSimgo();

});
