# Affix

Doesn't need `jquery`. Works with pure `AngularJs`.

***How to use*** <br />
- Include the directive from `directive.js` with your own directives;
- You must have a parent element with `id="affix"` and the directive `affix-me`;
- You must have an child element;
- Include the `css` class `.affix`;

The code for both (directive, body and css style) can be found in the 2 files on the project. `index.html` (DOM and CSS) and `directive.js` (directive code).

Currently you can only have one affixed element per page (due to the ID). Somehow it's not working if i set: <br />
`var affixElement = element;`

If anyone knows how to fix this, it would be great!

***To do***
It would be nice to have something to check if the element reached the bottom of the page, or the end of it's parent element, and then stop the affix on the top and apply it at the bottom.<br />
In my case, i have a 400px footer and the affix element always overlap a little on the footer.<br />
If anyone can help with this, it would be great!

Note: I'm not an advanced user in `javascript/AngularJs`, this code was built with a lot of research and a lot of try/errors. So if anyone could help with this, it would be great.

The reason why i did this is because i didn't found a simple affix effect without using Jquery or other external library.
