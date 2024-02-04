HTML:
1. Heading elements - <h1> to <h6> tags.
2. Paragraph elements - <p></p>
3. Self closing tags - <hr/> & <br/>
4. List elements - Ordered and unordered lists.
    Unordered List: - One of the most famous. Creates bullet points. Order of items do not matter.
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>

    Ordered List - If the order of the list items matter then:
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
5. Nesting and Identation: - For instance you can list list items inside an unordered or ordered list as above. One can also nest a list inside another list. This is when identation becomes key in your code so by looking at your code you can easily tell the code has multiple lists, lists inside lists for readability.
6. Anchor Tag - Uses <a></a> however it is not an active anchor tag unless the href attribute is added into it as:
   <a href="http://www.google.com">This is a link to Google</a>
   An attribute adds more information e.g what the link should be redirecting to.
   Attributes can be either tag specific eg href or global e.g draggable=true

7. Image Tag - <img /> is a self closing tag/void element. Similar to the anchor tag, it must have an attribute for it to work as expected. Should be as below:
   <img src="url" />
   Tells where the image location.
   After the url, you can specify the size of the image as:
   <img src="https://picsum.photos/200"/> The 200 means the image will be in a 200 * 200 square.
   Other attribute is alt - for alternative text description. This can be used by the screen reader used by the blind/ people with visual imparament.
   On the image you can use jpg, png or even gifs

8. To be a good programmer you need to make coding a habbit. Can achieve this by marking a line on your calendar.
9. Computer File Path - Think of it as a unique location in a computer hard drive. Can redirect someone to a file or a folder.
    a. Absolute File paths - Is a file path relative to the root of the computer.
    b. Relative File paths - More useful in web development. It is relative to something. If writing our code in the project folder, we write it relative to the location we are writting our code. They are usually shorter. Better since if the project folder is moved, the relative path will still be valid.
    c. Some other characters that make it easier to navigate include:
        ../ - Means go back a level then go to whichever path you want to navigate to. Travel up the tree,
        ./ -  stay in the current directory. Better approach that accessing the file without the ./ since the direct approach may not work at times.
10. Webpages - Different content can be captured in different pages. The file path navigation and anchor tag concepts plays a key role when it comes to naviagting to the different pages. 
    The public folder usually contains all the pages that are not the home page.

11. HTML Boilerplate - Helps understand the structure of html files. Similar to a letter structure, HTML files should follow a specific structure, famously reffered to as the HTML boilerplate:
    
<!DOCTYPE html>  - The declaration helps the browser know the version of html the code was written in. (this is for html 5)
<html lang="en"> - Is the html element. lang is the language of the text within the the htm tag.
    <head> - Important information about our website that will allow the site render correctly is placed here. Won't be displayed to the user. No content goes here. Includes meta tag and title.
        <meta charset="UTF-8"> - Ensures the characters in the site get displayed correctly. Some might not allow emoji, or symbols like division, the meta tag controls this. UTF-8 is one of the common one to use.
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> - Defines how the website should be displayed relative to the screen it is being displayed on.
        <title>My Website</title> - Gets displayed on the tab bar.
    </head>
    <body> - Where all the website content goes. Content and structure basically goes here.
        <h1>Hello World!</h1> - Sample content.
    </body>
</html>

12. Webhosting - Is the process of making your website available to any one over the internet. The entire project must be put on a web server connected to the internet.
13. Capstone projects - When interviewing any developer, one looks at their portfolio and what they have been able to do. Github plays a key role for from it one can tell the developer's portfolio and their activities. How often they have been uploading code to github.  Capstone projects will allow test your skills and at the end, one would have done lot's of personal projects that will standout from  everyone else inspite taking a similar course or been in the sam boot camp.
14. CSS - Stands for cascading style sheet where cascading refers to the approach of creating the styling in some sort of a water fall starting with the general styling to the most specific styling. Style Sheet - is a language similar to the markup language in html. There are different types of style sheet languages but for our case we will consider the cascading style sheet.
    Initially, In HTML 3 for formating and styling, various tags were added including, center, font, border etc which have since been deprecated. With such the code was a bit messed up and would be impossible to differentiate the content from the styling. This saw the recommendation of use of CSS to allow the separation of styling from content.
15. Adding CSS - We can add css in either of the three ways:
    1.  Inline - <tag style="css"> - Goes to the opening line of the tag. Uses the style attribute which has the property and the value of the property. e.g: <html style="background: blue"> </html>. This is however very tedious when working with several elements. It is therefore not recommended. - Used when targeting a single element
    2.  Internal - <style>css</style> - Done using special html tag called the style element:
            <html>
                <head>
                    <style>
                    html {
                        background: red;
                    }
                    </style>
                </head>
            </html>
            This can be used on any of the elements. All you need to add is a selector. The selector comes before the openning and closing curly braces. In the above the selector is html.
            -Used when targeting a single webpage.
    3.  External - <link href="style"> - With this approach, a file is created purely for creating all the styling and then called in between the <head></head> element. to add the css to the main file:
        <html>
            <head>
                <link rel = "stylesheet" href = "./styles.css">
            </head>
        </html>
    - Used when targeting an entire website with all its multiple web pages.
  
16. CSS Selectors - Through the property and value we can specify css rules. A CSS selector is the part that bundles the rules together e.g h1 in the below css:
    h1 {
        color: blue
    }
    - A CSS Selector is the path that selects the html in order to apply whichever rule that goes into the curly braces. 
    - An element selctor - selects/targets a specific html tag. It will select all elements of the selected tag.
    - Class selectors - use a . and any random name as the selector. e.g.
        .red-text {
            color: red
        }

        A class can then be added as an attribute to your elements for ablove: <h2 class="red-text">Red</h2>
        A class selector is really versatile for anables you to manipulate different elements in your web pages.
    - Id Selector - Uses the hash tag. It selects all the elements with a particular id attribute. Works similar to the class selector.
    - The difference btn the class and id selectors is:
      - The class selector can be added to many elements while the id selector should be applied to one element in a single html file. So if you have multiple <h2> elements and would like to add some different styling, the id selector would be best suited.
    - Attribute selector - We can add multiple attributes to an html tag e.g., <h1 id="" class="" draggable=""> etc. We can select elements that have particular attributes using below notation:
        h1[draggable] {
            color: red
        }
    this will select all h1 elements with attribute draggable and set the color to red.
    One can also be more specific and check the value of the property draggable as:

    <p draggable="true">Drag Me</p>
    <p draggable="false">Con't Drag Me</p>

    The css:
        p[draggable="false"] {
            color: red;
        }

    - Universal selector uses the asterisk. Which basically select all where the style sheet is active:
        * {
            color: red
          }

17. CSS Color properties - formated as property:value e.g., background-color:red or color:blue. These are name colors that can be found on the developer documentation on 
    https://developer.mozilla.org/en-us/docs/web/CSS/named-color. 
    
    As much as there are multiple colors available, you might want to work with a particular color palettes. One of the most popular ones being color hunt:
    https://colorhunt.co

    A free tool created by designers for designers shows the colors that work together perfectly. The colors have numbers and letters referred to as hexadecimal used to represent longer numbers. E.g purple can be represented as #5D3891 = rgb(93,56,145). The code can be used as an alternative to the name as:
        h1 {
            color: #5D3891
        }
    
18. Font Size - we can change various properties on our elements. For font we can use various properties including:
    1.  font-weight - can either be normal or bold. e.g., h1 {font-weight: normal}
            Bolder/Lighter - It can also be changed relative to the parent by using keewords bolder or lighter as values. Lighter less the weight by 100 while bolder makes it bolder by 100
            number - can also use a number between 100 and 900 to specify how bold you want it to be. 1q00 being the lighest and 900 the boldest.
    2.  font-size - can be changed as h1 {font-size:20px}. 1px = 1/96th inch or 0.26 mm which is absolutely tiny. Can also be represented in:
        a. points (1pt = 1/72nd inch or 0.35mm). 
        b. 1em - 100% of parent. This means if we set an <h1> tag to a font-size of 1em, and it is wrapped around a body tag with font-size:20px then the font-size of the <h1> will be 20px. if 2em then h1 will be set to 40px.
            <body style = "font-size: 20px">
                <h1 style = "font-size: 1em"> Hello World </h1>
            </body>

        c. 1rem - 100% of root. Works similar to the 1em but instead of being relative to the parent, it is relative to the root of the html file. With the html boiler plate, the root is always set to <html></html>. For 1rem, a change on its parent does not affect its size but if the root in this case the <html> tag font-size is changed, it will translate to an automatic change on the rem font sizes.

        Recommended to use the rem instead of using the em to avoid the confusion as a result of change of the size of elements.

    3.  font-family - Determines what you want your text to look like. e.g, font-family: Helvetica, sans-serif. 
        The first which is a Helvetica, is a mac font which might not be supported in some operating systems. Therefore, often in addition to the font name, a second value (generic font type). The san-serif usually has no decorations at the bottom but the edges of the letters are always at right angles. This means Mac users will see the Helvetica font while windows users will see an equivalent to Helvetica which in this case is sans-serif.

        if the type has more than one word e.g., Times New Roman, it must be specified in between double quotes to tell css there are spaces in the font family. Times New Roman being a serif, the backup should be set as so.

        To use a specific custom font in your project:
        Navigate to https://fonts.google.com/ select the specific font then click on it then click to select the specific weight that you intend to us. This will create specific links that you can then copy into the header section of your project and then use the fonts to your liking.
        Some of the generic fonts include:
            a. Helvetica
            b. arial
            c. Serif
            d. Sans serif
            e. cursive
            f. Monospace
            g. Fantasy

    4. Text Align - with this you can align text to the left, center, right, start (when you have text that is written from right to left e.g., in arabic) or end. Can check it out on MDN Docs.
    
 19. Inspecting CSS - When inspecting elements, one can easily play around with the styling, by adding new css elements, or modifying the already in place css. However, this does not affect the original source code. Can best be used to test out new features before effecting them on actual code.
    - When inspecting elements, on styles you will notice some of the css striked through. This is mostly because they have been overwritten by other custom code. If the custom styling for say the anchor tag is removed, then the default code is automatically activated.
    - To know they kind of formating applied to you code without the cancelled lines of code, use the computed tab of the inspected elements.
    - Sometimes you may come across a website you really like and would love to get an overview of what the styling is. To access such info, click the three dots on the developer tools (Not the chrome one), then click on more tools then click on CSS overview. This will show the background colors on your web page, the various fonts in use 

20. The Box Model (Margin, Padding and Border) - The three together with width and height form a very important concept known as the box model. Every element in a website is a box that can be changed by changing the width and height. 
    In adjusting, you can either use pixels or percentages. Can also set a border on the box with 3 values separated by space e.g., border: 10px solid black. Changing the border size does not change the size of the box. The border grows outwards and not inward. Can set different boarder values using the border-top, border-bottom etc. Or use the value border-with 0px 10px 20px 30px - This works in a clockwise marner starting at the top with 0px and the last value being assigned to the left as 30px.

    Can also set the top and bottom, left and right using the format:
        boarder-width: 0px 20px; - Top and bottom will be set to 0px while the other will be set to 20px.

    Padding - To the box, if padding is set to 20px, it will push the border out by 20px. The hight and width of the box does not change.
    Margin - is the part that is outside of the boarder. The margin is between the boarder and any other element on the screen. 
    
    From the outmost, the box model is as below:

                    Margin
                      |
                    border
                      |
                    Padding
                      |
        height & Width containing the content

    Padding and margin functions similar to the border styling  can use margin, margin-top, margin-bottom and margin-width 0px 10px 20px 30px. Same to padding.

    Other than boxes created by elements, we can also create our own elements. We use the content Division Element - DIV as <div> </div>
    They can take as many elements as you'd wish. This are usually invisible on the website and can at times be difficult to debug. To dubug such, you can use a free chrome extension <Pesticide Chrome Extension>. This will help diagnose what is wrong with your box model when it goes wrong.

    For p tags by default the element has a margin of 1em. If no margin is needed, always good practice to set the margin to zero for all <p></p>

    if not sure how any of the elements works, if you hover on it, VS code has a way of redirecting you to the MDN Docs where you can learn more about the element.
    
21. The cascading aspect of CSS comes out when you have multiple conflicting rules targetting the same element we must determine which one is way up on the hirarchy. The most important is usually the one the user sees on the screen. There are 4 types to consider when it comes to importance and within each there are different levels of importance as can be seen in "./Snips/CSS Order of Importance.png"
    1. Position - Here we check whether a rule is at a higher position or lower position in the css relative to the other rules: Consider:
        li {
            color: red;
            color: blue;
        }
    The blue will be the one seen in the screen since the lowest is the most important.

    2. Specificity - on specificity there is some sort of hirarchy when it comes to the various available option. At the very top and least important is:
        - Element say <li>
        - Class say .first-class
        - Attribute say li[draggable]
        - id say #first-id
    The id will take presidence over the rest and is considered the most important. The element basically applys to all <li>s while the class will apply to any element assigned the class name. The Attribute will check any whose attribute is set to draggble but since in a page convention dictates you should have only each element with a specific id, then it is the least identifier and hence the most specific and important.
    3. Type - This refers to the type of css. Below is their order from the least to the most important:
        - External css
        - Internal css
        - Inline css
    The inline css will override the rest of the css types
    4. Importance - a property can be assigned a value with the important keyward assigned to it. Consider:
    li {
        color: red;
        color: green !important;
    }

    the color of the <li> will be set to green since marked as so.

    Of the four, position is the least important type while the Importance is the most important and will tramp the rest of the types if set al together.

22. Combining CSS Selectors to target specifc elements to style - in some instances, you might be reqquired to assign a  different color to some elements in your code. Consider:
    
    <div class="box">
        <p>Yellow</p>
        <div class="inner-box">
            <h1>Yellow</h1>
            <p> white </p>
        </div>
        <p>Yellow</p>
    </div>
    
    The above can be styled using the css below:
    p {
        color: yellow;
    }
    .inner-box {
        Bankground-color: red;
    }

    .white-text {
        color: whhite
    }

    them add the class to any <p> to be that should be  white in color.

    However, so your code doesn't get cluttered with so many classes you can compine various selectors and still achieve the same goal. The above can instead be written as:

    p {
        color: yellow;
    }
    .inner-box {
        Bankground-color: red;
    }
    
    .inner-box p {
        color: whhite
    }
    
    Combiners:
    1. Coma <,>
    If multiple other elements are to be formatted similar to this element then you can add them separated by a coma. as:
    
    selector, selector, ... {

    }

    .inner-box p, h1 {
        color: white;
    }

    2. Right angle bracket '>' 
    Can be used to select the child to the element. On this you first specify the parent followed by the angle bracket then the child. The styling/relationship is one generation deep as:
    
    selector > selector {

    }

    e.g.,
    .box > p {
        color: firebrick;
    }

    3. Descendant combination <" ">
    Apply to a descendant of left side i.e.,

    selector selector {

    }

    e.g.,
    .box li {
        color: blue;
    }

    4. Chaining Selectors
    Apply where all selectors are true

    selectorselector {

    }

    For instance if you have several h1s in your code styled as below:
    <h1 id-"title" class="big heading">Hello world</h1>

    then to be very specific to such h1s you can use the chaining selector e.g.,

    h1#title.big.heading {

    }

    when using chaining, always start with the element. Starting with a class or an id selector might treat the chained styling as a class or id due to the . and # at the begining. There should be no spaces in between.

    5. combining combiners
    Imagine you wanted to select something that has an ancestor but then use chaining method woith a specifc selector in the format:

    selector selectorselector {

    }

    e.g.,
    
    ul p.done{
        font-size: 0.5rem;
    }

23. CSS Position (Relative, Absolute, Fixed and Static Positioning)
    - Static position - Is usually the default positioning of an element on a browser. Adding the left and top properties to the css with position set to static does not change anything. It is positioned right below whichever element that came before it. set as:
        div {
            position: static
        }
    - Relative Positioning - This is the positioning of an element relative to its default position on the browser. Set as:
        div {
            position: relative;
            left: 50px;
            top: 50 px
        }

    This is not set relative to any other element by relative to its default position. The above will be 50px from the left and shifted down by 50px.

    - Absolute Positioning - Position relative to the nearest positioned ancestor or top left corner of webpage i.e., If the ancestor does not have a position property, then the positioning will be relative to the top left corner of your web page.
      - Z-index - for instance with the absolute position, the box by default sits on top of other divs / elements on the browser. The Z-index comes in when you do not want it to sit on top of other elements. by default the z-index is set to 0. Vhanging it to negative will perfom the trick for you.
    - Fixed Positioning - Is relative to the top left corner of yourbrowser window. It is somehow similar to the absolute until you start scrolling. On scrolling the position remains static and does not change while absolute moves with the page.

SECTION 8: ADVANCED CSS
24. CSS Display - By default, when an element is added to a webpage, it covers the entire width. However, in some instances one may wish to have them side by side. or style some word within a p tag. Consider:
    <h2>Harry</h>
    <h2>Potter</h>

This will be shown as two lines. This is because by default the display property is set to block. 
    h2 {
        display:block;
    }

To have them on one line, this property must be set to inline:
    h2 {
        display: inline;
    }

To change the styling of a word(s) in between a p tag, we use the <span></span> tag. It can be used in between any elements.

There are three types of display values:
   1. Block - display: block takes the entire width, if you have another element it will go below it.
   2. Inline - display: inline takes multiple elements until it can no longer fit in the width of the webpage then go to the next line. You can't set the width and height of the inline it will adjust to the length of the word.
   3. inline-block - is a blend of the two and it allows set the height and width and the inline bit allows add elements go to the same line. Changing the block will help change the layout of our website.
   4. None - display: none - This makes the element disappear. Useful when you have a button or checkoff an element on the todo list and want it to disappear.

Allows for responsiveness- Very key.

25. CSS Float - wrapping text using float and clear.
    If we want our text to wrap around another element we will require the float property.
    Assuming you have an <img> tag followed by a <p> tag, if one of the float: left property is added to the <img> tag, then part of the text in the <p> tag will be added to the right of the image then the rest go under it. No value to be set on the <p> tag.

    <img/>
    <p>text.......</p>

    style.css:
    img {
        float: right
    }

    text will be formatted as:

    <img>...................................
    ........................................
    ........................................

    The opposite applies if the value was set to right.

    In a case where you have a footer, it may look weird if it was to float next to the rest of the text. Convention dictates that it should be below the rest of the content. We therefore need to clear the floating effect for the footed tag as:

    footer {
        cleare: left;
    }

    This will clear anything that is floating.

    In modern development we do not use the float feature to achieve the various designs. We can instead make use of Flex, Grid, bootstrap and lots of other things better than float. Only use float when wrapping text around an image but not on everything else.

26. How to Create Responsive Websites: 
    This days there are different screensizes so it can respond to changes on the screen size. There are various ways to do this, including:
    - Media Queries
    - CSS Grid
    - CSS Flexbox
    - External Frameworks e.g. Bootstrap
    
    1. Media Queries
        This is used as a selector. e.g.,
            @media (max-width: 600px) {
                /*CSS for screens below or equal to 600px */
            }

        This says look into the braces and apply the css when displaying on a screen equal to or less than 600px.

    2. CSS Grid:
        Divs can be used to create a grid with different containers and in different formarts. The end result/layout dictates the number of divs to be created. where each can be given the same class say card but each receives a different style. They are then all wrapped withing a parent css that has the property display set to grid. e.g:

        <div class="grid-container">
            <div class="first card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </div>

        And the css set to:

        .grid-container {
            display: none;
            grid-template-columns: 1fr 1fr //defines that we will have two columns both 1 fraction. equal in size
            grid-template-rows: 100px 200px 200px // top row height 100px while the rest are 200px 
            gap:30px //There should be a gap of 30px btn each row and column.
        }

        .first {
            grid-column: span 2; //Change the first div so the column can span two columns. Achieves full width
        }

        .card {
            background-color: blue
        }

    3. CSS Flexbox
        If grid is something that applies to 2D layauts, where you have columns and rows, flexbox allows create 1D layouts where you either want things laid out in horizontally or vertically as boxes then you are likely to use flexbox. e.g:

        <div class="flex-container">
            <div class="first card"></div>
            <div class="second card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </div>

        .flex-container {
            display: none;
        }

        .card {
            background: blue;
            border: 30px solid white;
            height: 100px;
            flex: 1;
        }

        .first {
            flex: 2;
        }

        .second {
            flex: 0.5;
        }

        This is about dividing the width and height by some ratio you specify. And because everything is a ratio and a percentage then it will always be responsive. Works the size by getting a percentage of the total width.


    4. Bootstrap Framework
        It is a framework because it is external to css. They have written extensive CSS code with predefined styling. Bootstrap is built on top of flex boxes and divide you webpage into 12 division system. e.g:

        <div class="container>
            <div class="row">
                <div class="card col-6"> //Picks the first half of your page - 6 of the 13 sections
                    Card
                </div>
                <div class="card col-2"> //Takes 2 of the columns
                    Card
                </div>
                <div class="card col-4"> //Takes 4 of the remaining columns
                    Card
                </div>
            </div>
        </div>

        This adjusts accordingly when working with smaller devices.

27. Media Queries
    Used to set the styling for different screen sizes. Can set use to set the max-width or min-width:

    1. Max-width 
        @media (max-width: 600px) {
            h1 {
                font-size: 25px
            }
        }

        The above code will apply on a screen size less than or equal to 600px whereas the code below will target bigger screens with this minimum width.

    2. min-width
        @media (min-width: 600px) {
            h1 {
                font-size: 25px
            }
        }

        Can also target a specific size as:

    3. Combined
        @media (min-width: 600px) and (max-width: 900px) {
            /* Styles for screens between 600px and 900px */
        }

        The two can still be flipped as:

        @media (max-width: 600px) and (min-width: 900px) {
            /* Styles for screens between 600px and 900px */
        }

        This will apply similar styling to anything less than or equal to 600px and above 900px.

     4.  Device
        Might use screen to mean all screens whose alternative is print. Used when printing your screen. Not recommended to have this in your code. It takes the format:

            @media screen(orientation: landscape) {
                /* Styles for landscape orientation */
            }

    This are the most used.

SECTION 9: FLEX BOX
28. Display Flex
    In earlier years a 3 column layout could be created using html tables and css defining the width for each of the columns as:

    1. Table for layout
    <table>
        <tr>
            <td class = "col1">...</td>
            <td class = "col2">...</td>
            <td class = "col3">...</td>
        </tr>
    </table>

    CSS:
    .col1 {
        width: 25%
    }
    .col2 {
        width: 25%
    }
    .col3 {
        width: 25%
    }

    This created a 3 column layout on the browser. The table is very much in use today but when basically displaying data as opposed to layout design.

    2. Display: inline, block
    After the tables, the display property was introduced. And would be set to inline, block and inline-block which would stack the divs next to each other as long as there was space on the screen. However this could not allign content properly on the  screen. Depending on the length of the content some divs could be larger than others and need positioning to place them correctly.

    3. Float - Most relied on between 2005 and 2010. Used to float images and text by having them float left so they are stucked next to each other. Has several hacks that can be used to accomplish various layouts. But no longer the best tool to use. Only use it when floating images to the right or left of text.
    
    4. Instead of the crazy hacks that come with the three above to achieve a complex layout various tools exist that heldp simplify this. Using Flexbox. Grid and bootstraps perfom the magic in a simplified manner.

    All you need to do is wrap your text inside a container and then target the container to the css and set the display to flex as:

    <div class = "container">
        <div class="one">...</div>
        <div class="Two">...</div>
        <div class="Three">...</div>
    </div>

    style.css:

    .container {
        display: flex
        gap: 10px
    }

    When you set the display to flex, it must be thought of a different entity from the default display: inline and block.

    Different elements have different default display values. A div and p tags are full length block, Span and img are inline displays by default. When you have them all within the flex system, the previous default display formating will be ignored and they will all be laid out by flex box. The width inside the flex box will be based on the content size. You could use the gap property to separate the elements/content.

    A flex box is by default 100% width and behaves similar to a block. If you do not want it to take the entire block, you can use the inline-flex to allow it take as much space as it needs and allow more elements to be added to the right.

29. Flex Direction 
    The default html flow is from left to right and top to bottom. When using flex value on display the elements will be laid in row format from left to right. This is because by default the direction is set to row. The row is the main axis from left to right till there is no more space then added to the bottom. Therefore the cross axis is from top to bottom.

    If set the flex-direction to column, all items in the flexable container will be from top to bottom because this changes Main axis to top to bottom. The cross axis now changes to left to right. The cross axis matters when we want to continue configuring the flex prtoperty.

    It is key to remember the direction for this affects the other flex properties e.g flex-basis. If set to 100px, for row it will increase the width of the element while for the column it will adjust the height. The properties will flex along the main axis.

    Note: The Flex-basis property only works of assigned to the child of the container element. Therefore to cover only the required space, you use the inline-flex and to have it flow from top to bottom, set the flex-direction to column. The two are to be set on the container class / parent. Then use a separate class to add in the flex-basis of 100px.

30. Flex Layout: (Align, Justify and wrap)
    The focus will be on, what is the default behaviour of flex box, and what can you change to make it what you want it to be?
    Is the property going to be in the child i.e the flex item or to the parent i.e the container?

    If you set a property that should go to the parent in the child it will not work. 

    Properties:
    - Order: If you want to reorder the divs then you can easily use the order property to position the div in a specific position e.g., order: 9. The default is set to order: 0.
    - flex-wrap: Used when you run out of space in the main axis. The default behaviour does automatically move content to the next like so something might be pushed off the page. This is because the default value is set to nowrap. This makes the layout not so responsive and some content may not be visible Changing the value to wrap will work the magic. e.g.,

        flex-wrap: wrap.
    
    - Justify-content: is set on the parent container.Sets the distribution of main items across the main axis. The values can:
        flex-start - aligns the text from left to right
        flex-end - the text floats to the right
        center - position the content in the center of your web page
        dspace-between - Equally distributes the content on the webpage.
    - Align-items - Sets the distribution across the cross axis as opposed to justify that distributes along the main axis. For align item then the height must be set as:
  
        height: 70vh where vh is the Viewport height which is the height of the window.

    The values can be set to:
        flex-start - pushes the content to the very top of the view port
        flex-end - pushes the content to the very bottom of the view port
        center - places it at the center

    This only works when wrap is value is left as default or set to nowrap.

    If you want to align one of the many items in the container, then you can use the align-self: flex-start value to manipulate a particular item. This will make the item separate from the group and stand out.
    For options :

    https://css-tricks.com/snippets/css/a-guide-to-flexbox/

    - Align-content - Simialr to align-items but works when the flex-wrap is set to wrap.

    One can also set the flow of the flexbox using the flex-flow property. This property can combine two values one for the direction and the other for the kind of wrap e.g., 

        flex-flow: column wrap;

31. Flex Sizng:
    When the display is set to flex, it automatically sets the various elements next to each other up until the entire view port is used up. Sometimes you may want to customize how each item within the flexbox is sized. The sizing is done on a priority basis in the order below:
    1. min-width/max-width
    2. Flex-basis which also depend on the direction, whether row or column
    3. Width if the main axis is set to default/row. It will consider the height if the flex direction is set to column.
    4. Content width - Content width is the width that allows a word to be lined next to each other. If minimized, then the contnet width is the maximum length of the longest word in the page.
    
    If an item in the flex box has several elements alligned next to each other,  if you minimize the screen and the value is not set to inline-flex, each element will be minimized to the size of its longest word. This is the content width. It will shrink until the maximum width is reached then the content will be pushed off the screen as you shrink the page further. 
    The max-width looks at the longest possible line of the  text while the min-width looks at the longests word.

    Width - if set to say 100px, while shrinking the page, it will try to conform to this setting and so if 4 items 100px, then the container has to be 400px. This will observe the minimum side but if shrinking further it will ignore the width and dynamically shrink till it gets to the min-width. If the screen ios bigger than 400px, then it will conform to the width of 100px for each.
    
    Flex-basis - Effectively deternes the width of each item. If you have both width and flex-basis, the width will be ignored and each will be set to 200px. On reducing it, it will shrink to the minimum basis. If have the flex-basis, there is no need to add the width.

    Min-width / max-width - There is a default min-width and max-width as explained above. However you can also manually set the max-width and min-width. If you have a flex-basis and then set the max-width, the max-width takes presidency over flex-basis. If max < flex-basis then the max-width takes the day but if flex-basis is smaller, then the width will be set to the flex-basis.
    If you set the min-width to 300px, then the width will be set to the minimum width. If min-width is larger than flex-basis, the it picks the min-width.

    The properties can be set to zero by setting it as:
    flex-basis: 100px;
    flex-grow: 0;
    flex-shrink: 0;
    
    If you set the flex-grow to 1 and there is plenty of space to grow, then it will grow each item till the entire width of the conteiner is filled. But when shrinking, it can only shrink upto 100px then the items will go off the screen. The opposite happens with flex-shrink: 1. If both are on then the flex-basis will be ignored.

    The default for flex-basis is auto which looks at the amount of content in the items and give more width to those will large content and smaller to that with smaller content. If you want it set to equal, then set it as flex-basis: 0.

    A short hand way to write the above is:
    flex: 1 1 0; - Where the first is grow, shrink and the last is the flex basis. Can be simplified to 
    flex: 1. With such an approach you can create some sort of a ratio of how our elements will respond responsively. can have the 1st to 1 the second to 2 and the third 3. This will be the ratio to all.

SERCTION 10: GRID
32. Display: Grid
    With flexbox you can create various layouts. However, it may not be best placed to create complex layout that seem to have different hight while still on the horizontal axis for instance. This saw to introduction of the grid system.

    The difference is as below:
    A flexbox can be thought of as a tool that allows allign content in a one dimentional line whereas Grid can be used to lay contnent in a two dimentional grid.

    The two tools have their strenghts and weeknesses and most a times developers will use this tool along other tools depending on the need. Can use a grid and still use flexboxes within the grid element. Can have a flexbox inside a grid and a grid inside the flex box.

    With Grid, everything lines up with each other on a row and column basis. The gaps between each element match up with each other which is not the case on flex box. see:

    https://appbrewery.github.io/grid-vs-flexbox/

    The syntax is as below:

    .container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr 1fr;
        gap: 10px;
    }

    The grid-template-columns specifies the ratio on the size of columns to be created. The above example will create two columns with the first column half the size of the second column.
    The grid-template-rows - specify the ratio on the rows. The above will basically have the two rows set to an equal size regardless of the content it holds.

33. Grid Sizing:
    It is common to see the grid-template rows and columns set to rem, or px. The challenge with using this approach is that the page/the layout won't be responsive. 

    1. Fixed Size.
    May also come accross: grid-template 100px 200px / 400px 800px which basically are the row values and column values written in short hand. Preferred that if in the learning stage, use the row and columns separately for ease in debugging.

    2. Auto Size:
    grid-template-rows: 100px auto - Will set the first row to 100px and the second will try to fit whatever content is in the second row.
    grid-template-columns: 200px auto - Will set the first column to 200px then the second column will take the remaining portio of the screen to make it 100% of the veiw port. See:

    https://appbrewery.github.io/grid-sizing/

    3. Fractional Size:
    
    grid-template-rows: 1fr 2fr
    grid-template-columns: 1fr 2fr

    uses fractions for sizes. e.g first row to be half of the second and same to the columns. This is responsive. If the content of the second is huge then if it expands, the first row will also expand so to maintain the ratios. It content in the first row or any other in that matter doesn't matter.

    
    4. MinMax Size
    
    grid-template-rows: 200px 400px;
    grid-template-columns: 200px minmax(400px, 800px)

    Can define the minimum width and maximum width we want our columns to be. That is when we have enough space, we can have the second column's width up to 800px and while shrinking it can reduce to upto 400px. e.g. if working with an image.

    5. Repeat:
    
    grid-template-rows: repeat(2, 200px); /*Similar to 200px 200px*/
    grid-template-columns: repeat(2, 100px);

    Instead of repeating the number of columns multiple times, one can use the repeat keyword as above. By specifying the number of times you want the size which is the second parameter to be repeated.

    depending on the number of items, the gris starts from the top left then doubles back and continues along the second row if having a 2 * 3 i.e, 2 rows and 3 columns to which you want to fit 4 elements, then the first row will have 3 of the items and the last one will go to row 2 column 1. The other two columns of the 2nd row will remain empty.

    If you have more items than what you've defined your grid to be say a 2 * 2 grid and yet you have 5 items, all the other elements that get added will be added based on their contnent size and will try match the existing column width. If you contnet is to grow over time, you can use the grid-auto-rows and grid-auto-columns to automatically add in new rows and columns to your grid e.g.,

    .grid-container {
        display: grid
        grid-template-rows: 200px 200px;
        grid-template-columns: 200px 200px;
        grid-auto-rows: 300px;
    }

    Dev Tools:
    We can use it to see what is happening. From the developer tool, one can easily tell whether the kind of layout in use. By clicking the developer tools, and on elements, if using grid, then this will be shown as with the keyword: grid. Under layout, you can also change the values to see the show lines to extend the grid or even the color of the grid labling.

34. Grid Placement:
    Terms;
    1. Grid Container - Contains all the items.
    2. Grid Items - All items placed inside the grid.
    3. Tracks - These are the resulting rows and columns in the grid i.e row tracks and column tracks.
    4. Grid-Cells - the smallest units in the grid. Sit between columns and rows. Can use multiple cells to create a grid item. Each two columns to create one grid items.
    5. Grid lines - Lines that separate the tracks. Both the horizontal and vertical lines. Can only controll the grid lines using the gap property to specify its height or width.

    By default, if the height of the page is not specified, then the grid takes up as much space as is the size of the content. To have it utiliza the screen size, specify the height as

    height: 100vh where vh is the viewport height.

    To have the items span various columns and rows on the grid, the grid-column property is used for columns. For instance to have it take two columns you set it as:

    grid-column: span 2. 

    The above is short hand for two grid properties:

    grid-column-start: span 2;
    grid-column-end: auto;

    Other than using the span 2 value, one can also use the line numbers to specify the start and end column. Since the columns are named from 1,2,3,4... then any of the number can be set.

    The columns are also named using -ve numbers from right to left. The -ve numbers can also be used as values.

    But is is not recommended to use the -ve numbers. The positive numbers are better to use. Only use the -ve when necessary e.g targeting the very last column in a long or dynamic grid.

    Grid-column: Span 2 - tells the cell to start where it is supposed to start and span by the number of columns we specify.

    In some instances the divs to be placed in the grid might not be following each other in html to how you want them to appear in the grid. And similar to flexbox, all the items have an order of zero. To have one promoted or appear after the rest, set its order to 1. This makes it the left most on the grid.

    Other than promoting the item, you can still use the grid column and row lines to place it at a specific position. e.g., 

    .astoronaut {
        background-color: #03989E;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    This gives it the exact coordinate of where to have it positioned. The short hand for the above is:

    .astoronaut {
        background-color: #03989E;
        grid-area: 2 / 1 / 3 / 3; /*The order starts with the grid row start, grid column start, grid row end and the last grid column end.*/
    }

    One of the other difference btw Grid and Flexbox is that grid allows you overlay items. This can be done by positioning them as below:

    .cowboy {
        background-color: #00B9FF;
        grid-area: 1 / 1 / 2 / 3;
    }

    .astronaut {
        background-color: #03989E;
        grid-area: 2 / 1 / 3 / 3;
    }

    .book {
        background-color: #E5833180;
        grid-area: 1 / 2 / 3 / 4;
    }

    NOTE: When using hex code for colors, the first 6 characters represent the color while the last one is for transparency. hence #E5833180; i.e., R G B and alpha.

    grid-column can also be written as: grid-column 4 / 6 implying the columns start at line 4 and spans to two columns. grid-column: 4 / span 2 works the same way as the earlier.

SECTION 11: BOOTSTRAP
35. What is Bootstrap
    It is one of the many external CSS layout systems. It is a framework created in 2010 by two twitter developers. Can be added into your project to use the prebuild classes.
    One of the reasons it took off is the use of the 12 column layout system built on the flexbox system that helps make the page very responsive.

    By adding the classes to HTML we don't have to worry about having to write the css but just to know the kind of classes to use. 

    Because bootstrap is open source, its code is available on github Can view the predefined css.

    The most common CSS frameworks are:
    - Bootstrap
    - foundation
  
    Howeever, there are many others like:
      -  tailwind 
      -  MUI
      -  etc
  
    But bootstrap takes upto 79% in terms of its usability compared to the rest of them.

    As much as it is highly used, 75.9% of websites still use vanilla CSS.

    For quick development, we can use the frameworks so we don't have to spend lots of time in design.

    Pros:
    1. Easy and first to use with the ton of prebuilt components
    2. Consistent styling across your system
    3. Browser compatibilty since they've been pretested
    
    Cons:
    1. Class blow - HTML should be for structure and CSS for style. Using external CSS, we have to add the external classes to the divs and you end up with alot of styling going into the actual html file which looks alot less clean than approaching it using grid and flex boxes.
    2. Customization - Won't have control over all the pixel and layout.
    
    When to use bootstraP:
    - When developing a mobile first website that should be delivered on quickly.
    
    When not to use it:
    - When doing a complex custom website on which you want full control over each element and layout, it is not a good idea to use bootstrap.
  
    How to use it:
    By using CDN. i.e., use the link tag in the header section of your website. Pulls the bootstrap from the closest server that has the called bootstrap framework.

36. Bootstrap Layout: 12 Column System
    It is made up of three components"
    - Div Container
    - Div row
    - Items laid out using the column system as:

    <div class="container">
        <div class="row">
            <div class="col">Hello</div>
        </div>
    </div>

    With multiple columns, bootstrap give them equal spacing across the entire width.

    a. Bootstrap container:
    The bootstrap container is responsive. A div with class container can be set to respond to various screen sizes i.e.:
      1. Extra Small <576px - Covers 100% of the view port width
      2. Small >= 576px - Covers 540px 0f view port width
      3. Medium >= 768px - Covers 720px 0f view port width
      4. Large >= 992px - Covers 960px 0f view port width
      5. X-Large >= 1200px - Covers 1140px 0f view port width
      6. XX-Large >= 1400px - Covers 1320px 0f view port width
    
    This can be adjusted depending on the specified container class. The classes can be:
      1. .Container - is the default
      2. .Container-sm - similar to the default - (mobile phones)
      3. .Container-md - Takes 100% of with on the Extra small and Small screen sizes (ipad)
      4. .Container-lg - Takes 100% width on the Extra small, small and medium screen sizes (laptop)
      5. .Container-xl - Takes 100% width for all except x-large and xx-large screen sizes (desktop)
      6. .Container-xxl - Takes 100% of width except for the XX-Large screen sizes (TV)
      7. .Container-fluid - Takes 100% on all screen sizes
    
    Can checkout the Bootstrap Container snip for more details.
    In most cases, the container and container-fluid are most used.

    b. Sized Columns:
    Used to specify how many of the columns you want to use for each div on a percentage basis. Could be set to:
    - col-2 - which is 2 out of 12 of the width
    - col-4 - Which is 4 out of the 12 columns
    - col-6 - which is 6 out of the 12 columns
  
    In Code:
    <div class=container>
        <div class="row">
            <div class="col-2">Hello</div>
            <div class="col-4">Hello</div>
            <div class="col-6">Hello</div>
        </div>
    </div>
    
    c. Bootstrap Breakpoints:
    Can be categorized as:
        Breakpoint                  Class infix     Dimensions           Can apply to
      1. Extra Small                  None            <576px    Screens with length longer that width
      2. Small                        sm              >=576px       Mobile devises e.g phones
      3. Medium                       md              >=768px             Ipad
      4. Large                        lg              >=992px             Laptop
      5. Extra Large                  xl              >=1200px            Desktop
      6. Extra extra large            xxl             >=1400px       TV or larger devices.
    
    We can use the class infix to specify the target devices. For cols can use:
    col-sm, col-lg, col-xl etc.

    With breakpoints, we do not need media queries since the breakpoints will allow the webpage to adjust to fit into the current screen size. 

    Consider:

    <div class=container>
        <div class="row">
            <div class="col-sm-2">Hello</div>
            <div class="col-sm-4">Hello</div>
            <div class="col-sm-6">Hello</div>
        </div>
    </div>

    WHat the above code means is that for a small screen and above, assign the ratio of 2:4:6 on the viewport width. For a screen size less than a mobile device, then the system automatically defaults to 100% width for each of the divs i.e., defaults to the col class which has 100% width.

    if no number is defined, the divs will automatically distribute equally. I.e eaach will be assigned a number 4.

    d. Multiple Breakpoints
    One can define a div to take up different sizes on different screens. This can be e.g.,
    
    <div class="col-sm-12 col-md-8 col-lg-4"></div>

    With such, the div will take 4 columns in a large screen, 8 columns in a medium screen and 12 columns in a small screened device.

    e. Mix & Match
    If it was to be set as below:

    <div class=container>
        <div class="row">
            <div class="col-2">Hello</div>
            <div class="col-4">Hello</div>
            <div class="col">Hello</div>
        </div>
    </div>

    It will take up 2/12, 4/12, and the last will automatically adjust to fill up the remaining space.

    When applying the screensizes, always consider the point at which the trransfromation is to happen. An example from the exercise site: 

        https://appbrewery.github.io/bootstrap-layout/

    <!-- Modify the HTML below to make the indigo boxes behave like the blue ones. -->
      <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-2 col-xxl-1">Column 1</div>
        <div class="col-md-6 col-lg-8 col-xl-10 col-xxl-11">Column 2</div>
      </div>

    You must not define the default 12 column layout. It is effected by default.

37. Bootstrap Components:
    1. Buttons
    Uses the following classes:
    - btn btn-primary
    - btn btn-secondary
    - btn btn-success
    - btn btn-danger
    - btn btn-warning
    - btn btn-info
    - btn btn-light
    - btn btn-dark
    - btn btn-link
  
  Each has a different color and by calling them together with the btn class automatically styles your button.
  To read through the components checkout the link below:
  https://getbootstrap.com/docs/5.3/components/buttons/

  2. Card:
   Can be copied from the components page in bootstrap. On the card you can replace some of the parts so it can fit your need.
   A sample is as below:

   <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
   </div>

   3. Navs
   Yet another common component.
   Bootstrap has defioned various Navbars that you can checkout and use on a need basis. Checkout the link:
   https://getbootstrap.com/docs/5.3/components/navbar/

   Can checkout more samples in the examples section of the documentation under headers:
   https://getbootstrap.com/docs/5.3/examples/headers/

   When starting out, copy and pasting the bootstrap code, it may seem broken. The main reason could be that the two CDN links (CSS for styling and Javascript for functionality purposes) that must be added to the header section and at the very end of the body section respectively, have not been added. Therefore there is need to always ensure this is done prior to adding the bootstrap components.

   Icons:
   Bootstrap also includes a set of Icons that one can checkout and use in their websites. You can find them under the icons section:
   https://icons.getbootstrap.com/

   Can also search through them then copy the SVG  to your code or download the icon into your code then add the img to your code.

   Copying code from bootstrap examples section:
   1. Navigate to the examples section then find the kind of design you'd like to use in your code. 
   2. Inspect elements then hover on the code till the entire area of interest is highlighted.
   3. Right click on the outermost div, right click on it then copy then copy element.

  Sometimes the copied code might be rednered differently from where it has been copied. This is because the source or the bootstrap example could be having some custom css. which you can view under the elements section and paste to your custom css.

  4. Carousel:
   Can read more on this under the components section.
   https://getbootstrap.com/docs/5.3/components/carousel/

   Can then choose one from teh available examples that fits your need.

 5. Snippets:
   They are really handy because they allow pick a style and add it to your website.   

 6. Spacing:
   In addition to the layout classes in bootstrap, bootstrap also has utility classes and one of the important ones:
        They are named using the format: {property}{sides}-{size} e.g

        mt-5 = Margin top 5.
        mb-2 => Margin bottom set to size 2.

        To set top and bottom you use the y axis while for the left right we use the x axis.

        e.g: my-3 - Margin for y axis is to set it to three.

        Read more
        https://getbootstrap.com/docs/5.3/utilities/spacing/

 7. Dark Mode:
   You can add the dark mode to your website by one property to the html tag. Check the bootstrap docs > Customize > Color modes. 
   https://getbootstrap.com/docs/5.3/customize/color-modes/
   
   Achieved by:

   <html lang="en" data-bs-theme="dark">

   With bootstrap, we can get various themes that we can utilize in our design and implementations. You can pay for any theme and use it in oall your developments. Some of the available templates can be accessed in the links below:

   1. https://www.w3schools.com/bootstrap/bootstrap_templates.asp - Simple to use
   2. https://themes.getbootstrap.com/ -  Paid for themes.
   3. Can also google for free bootstrap themes.


SECTION 12: WEB DESIGN SCHOOL - CREATE A WEBSITE THAT PEOPLE LOVE
38. Introduction to web design:
   Design can alway provide a three times improvement on the value of your product especially if the design is elavating.
   Web design principles are key at this stage. We are to cover:
   - Color theory
   - typography
   - User Interface design
   - User Experience Design.
  This are the 4 pilars of web design.


39. Understanding Color Theory:
    Imagine of a scenario where you have a  brown FLOWERS logo and a pink PAINTBALL. They both look ugly and might not be easy to tell the mesage being passed along. But if the two are flipped then it would make sense.
    You should be aware of the mood of your color palletes. The predominant color tells a story to the users.
    - Red - Love. Energy. Intensity. (e.g., red cars on a red background).
    - Yellow - Joy. Intellect. Attention. (It is attension grapping. Cannot miss an advert in yellow). If to be looked at for alot longer, might not be the best color to go buy.
    - Green - Freshness. Safetey. Growth. (E.g., grocery companies, that this product is edible etc)
    - Blue - Stability. Trust. Serenity. (E.g., companies that need to potray they are trust worthy and that they won't run away with your money e.g., Paypal etc)
    - Purple - Royalty. Wealth. Femininity. 
  
    Should consider the message you are passing to the user before choosing the color to go by.
    1. Analogous Colours - Designers would rely on scientific ways of combining color. e.g., two colors next to each other in a color wheel (See snips > Color wheel image). They always work well together. The color pallete is always good on the navigation bar and body. Not good when you want your website to standout.
    2. Complementary colours - You are better of taking two colors opposite to each other on the color wheel if you want the site to stand out. This creates the pop due to the crashing pallete. E.g green and red in a meet stand. For complementary colors, you should not use complementary/clashing colors on text. Instead use it on logos and icones
    3. Triadic - Using an equilateral triangle. Can also draw a perfect square on the wheel.
    
    You can try out the various color combinations on the website:

    https://color.adobe.com/create/color-wheel

    Can drag it on the wheel to get the combination that fits the mood of your project then pick the hexcode.

    Can also use the Colorhunt.co site to get the colors:

    https://colorhunt.co/


40. Typography
    Fonts do matter and need to learn how to combine them to make the project/website stand out.
    Of all fonts, you need to know:
    - Serif - which has little feet at the end of their central beams. The design with this looks authoritative or serious also alittle bit older. Can be used for letter head for a legal country or for architecture company. Cna id the oldest and modern by looking at the difference btn the thickest and thinnest parts of the letter. It gets more and more exaggerated as you get to the morden serif fonts. 
    - San-Serif - has no feet. They are right angled. It makes it more approachable, novel and conteporary. A highly readable. Mostly used on the body to make it easy to read.
    
    Different fonts communicate different moods:
    - Serif - Traditional, stable, respectable
    - Sans-serif - Sensible, simple, straightforward
    - Script - Personal, Creative, Elegant
    - Display - Firendly, Loud, Amusing
    - Modern - Stylish, Chic, Smart.
  
    Once in a while you come across sites where people use 10 font types. It is recommended to:
    1. Stick two fonts in one designs. 
    2. Go for fonts with similar moods and time era
    3. Contrast - If heading is serif then body a san serif. Creates more interest.
    4. Weights - To create contrast in you design.

41. Manage ATTENTION with effective User Interface (UI) Design
    We are always drown to bigger, bolder, squerer things. With this knowledge we can define hirarchy. If you mix the weighting, then it will make the important information get conveyed over first. E.g whose birthday when it is and where.
    1. Color - Use different colors, mute some and let the main content standout e.g the green Add To Cart is a way of attracting the user to complete the transaction.

    2. Size - Also Coinbase:
        Seems to communicate:
            You can buy and sell cryptocurrency
            Can capture your email and get started.

    3. Layout - Think of the layout of your website by mixing your site with pictures, different highrachy etc this makes your website standout. The content should not be too long or too short, it should be JUST RIGHT to make it interesting to read to get more.
    4. Alignment - If the alignement of the the title and body is set right, then the sites looks way better. If you can reduce the number of the lines on all things on the design and id a line that goes through the beggining of all lines, it makes the design more coherrent and looks more professional. see Alignement snips > Alignment. Even without considering other design aspects, by just doing the allignment right, the site looks way better than one that ain't.
    5. White Space - The empty space around text or elements. By injecting white space, it makes everything suddenly look more expensive.Just by the white space, it makes the design minimalized and elevated.
    6. Audience - It depends on your auduence. Like a children advert: snips > Children design. Should be made exiting. Always design it for the audience. Have flexibility so not to create one style all the time. Different design for teenagers and medical staff.
    
 42. User Experience (UX) Design:
    Design is usually what we think looks good where as the user experience is invisible. Makes everything easy and effortless.
    Think of:
    1. Simplicity - Reduce the links, chop up content, some bit of video and different layouts. Make it simple.
    2. Consistency - Keep the design and functionality of your product consistent. e.g the search bars if not consistent, then the users will have to relearn the navigation and this leads to bad UX. Good practice to use the same design.
    3. Reading pattern - Common practice to read left to right, top to bottom. Ensure the eye is accomodated. Think of how people naturally use the website and accomodate them.
    4. All Platform design - think of mobile. A website mobile responsive is really key. Website should re-render itself by size. Reduce the banners and don't scale it up massively before the user can access content. Run lots of tests to get feedback.
    5. Don't use you powers for evil - Patterns that make the user perfom an action you don't really want. E.g on Amazon, the proceed to checkout with Express Delivery stands out from the normal delivery ooption. Good design is about helping people do what they want to do and giving them a good experience while they are at it.
    
43. Web Design in Practice:
    We can design and put into practive the 4 principles of design i.e, color, typology UI, UX into practice by using available tools e.g., canva.com an online graphics editing program.
    Try design a hotel website:

  














    
    



    
    


    