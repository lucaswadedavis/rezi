# Rezi: Recursive CSS Compilation in the Browser

Rezi compiles a CSS style based on an input JSON object and injects it into the head of the document in a style tag with the 'rezi' ID.

Like so:

```js
    var sub1aStyle = {
      "color": "blue"
    };

    var sub1Style = {
      "font-size": "2em",
      "color": "red",
      ".sub1a": sub1aStyle
    };

    var bodyStyle = {
      "body": {
        "text-align": "center"
      },
      "div": {
        "border": "1px solid black",
        "margin": "10px"
      },
      ".sub1": sub1Style
    };

    rezi(bodyStyle);
```

The code above would comiple to the following CSS:

```css

 body {
text-align: center;
}
 div {
border: 1px solid black;
}
 div {
margin: 10px;
}
 .sub1 {
font-size: 2em;
}
 .sub1 {
color: red;
}
 .sub1 .sub1a {
color: blue;
}

```
which gets injected into the rezi CSS tag in the head of the document.