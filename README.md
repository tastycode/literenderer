# LiteRenderer

LiteRenderer is a templating engine for javascript. 
It is designed to make dealing with javascript templating less like dealing with strings and more like dealing with javascript.

## Using

LiteRenderer has a single function display(tree,el) where tree is a javascript object and el is a jQuery element to attach the rendered tree too. LiteRenderer#display returns @el with the rendered @tree attached.

The tree is traversed, each element is a hash with a single key which will be the tag name. The value is a hash containing anything to be passed to jQuery's element creator. E.g. 

  {a:{
    href:"http://www.google.com",
    hover:[
      function() { alert("over") },
      function() { alert("out") }
    ]
  }
 
Is the same as 

  $("<a>",{
    href:"http://www.google.com",
    hover:[
      function() { alert("over") },
      function() { alert("out") }
    ]
  });

A special key "*" is used for children. The tree passed to LiteRenderer.display must contain a root element descending from an object containing only children. e.g.
  
  {'*':[]}

To render

  <h1>Welcome</h1>
  <hr/>
  <p>
    This is a paragraph
  </p>

The equivalent code would be 

  var tree = {'*':[
    {h1: {text:"Welcome"}},
    {hr: {}},
    {p:  {text:"This is a paragraph"}} 
  ]}

This may not seem like a big deal, but it feels right. There is no concatenation, just pure javascript. For more complex examples check out literenderer_demo.htm 


