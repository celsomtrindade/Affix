# Affix

Doesn't need `jQuery`. Works with pure `AngularJs`.

## How to use

- Include the directive from `directive.js` with your own directives;
- You must have a parent element with directive `affix-me`;
- You must have a child element, this is the one to be fixed;
- Include the `css` class `.affix`;
 
## Options

### Default

This code will affix the element the scroll position is equal to its original distance from top.

    <div class="parentElement" affix-me>
        <div class="childElement></div>
    </div>
    
    
### Custom offset

This code will affix the element when you scroll at a custom distance from the top.
i.e.: 200 //Or other value;

    <div class="parentElement" affix-me offset-top="200">
      <div class="childElement></div>
    </div>

The code for both (directive, body and css style) can be found in the 2 files on the project. `index.html` (DOM and CSS) and `directive.js` (directive code).

<hr />
### To do
It would be nice to have something to check if the element reached the bottom of the page, or the end of it's parent element, and then stop the affix on the top and apply it at the bottom.<br />
In my case, i have a 400px footer and the affix element always overlap a little on the footer.<br />
If anyone can help with this, it would be great!

Note: I'm not an advanced user in `javascript/AngularJs`, this code was built with a lot of research and a lot of try/errors. So if anyone could help with this, it would be great.

The reason why i did this is because i didn't found a simple affix effect without using Jquery or other external library.
