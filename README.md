simgo
=====

This is a simple and attractive library will help you to write php code more clear and easy!

The library is fully documented, and is easy to understand, I'm looking for improving and facilitating the writing of php. Have to play with the programming languages ​​they are old and everything is part of history!
* By using Simgo, "echo" and other ugly things cease to exist!

* View page - [http://jofpin.github.io/simgo/](http://jofpin.github.io/simgo/)

First, you have to include the library in your project. to use it!
```php
<?php
include "simgo.php"; // simgo on!
?>
```
go();
```php
// Example: "echo" It serves to print, but many people criticize it. here use go(""); printable!
$test = "Blue chickens";
go($test);
// simple text
go("Hi I'm chicken"); 
```

clean();
```php
// Example: This is the replacement of htmlentities but more strong against the Cross-site scripting (XSS)!
$xss = clean("<script>alert(1337);</script>");
go($xss); 
// or but it is better to use goClean(); When not using variables. This print direct!
goClean("<script>alert(1337);</script>");  /* = */ go(clean("<script>alert(1337);</script>"));

```

get(); & post("");
```php
// Example: It's boring to always write $_GET["chicken"]; or $_POST["chicken"]; This is already in the past. now is get("chicken"); and post("chicken");
$request = get("chicken");
go($request);
// a little sexy!
goGet("chicken");  /* GET printing /* = */ go(get("chicken"));
goPost("chicken"); /* POST printing /* = */ go(post("chicken"));

```

email();
```php
// Example: Protection of email to prevent spam-bots and sniff. ;)
$mail = email("chicken@example.com");
go($mail);
// When print direct!
goEmail("chicken@example.com"); /* = */ go(email("chicken@example.com"));

```

fus();
```php
// Example: Prevent sniffing of text, and also obfuscate! 3:
$text = fus("Insert text to protect");
go($text);
// When print direct!
goFus("Insert text to protect"); /* = */ go(fus("Insert text to protect"));

```


goHeader(); & redirect();
```php
// Example: Customization and replacement of header() by goHeader() 
goHeader("X-Frame-Options: DENY"); /* or */ goHeader("Location: http://example.com");

// with redirect(); everything changes
// Redirection to URL or directory
redirect("http://example.com"); /* directory */  redirect("test");

```

ajax();
```php
// Example: Support for AJAX requests php!
// used in this way, is more simple.
if (ajax()) {
    // your code here! :*
}

```

baseUrl(); & currentUrl();
```php
// Example: Management of "base url" and "current url"
baseUrl();
currentUrl();
// and ready!

```

* These two functions are information and documentation!

author(); & version();
```php
// author(); and goAuthor(); = Jose Pino
// version(); and goVersion(); = the version most recent simgo!

```

This is a drop of water, to facilitate the writing a bit of code and be happy! :D

## Happy code!

-------------

Copyright, 2014 by [Jose Pino](http://twitter.com/jofpin)

-------------
