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


44. SECTION 14: INTRODUCTION TO JAVASCRIPT ES6
    Before chrome, safari, firefox, etc, there was Mosaic by Marc Andreessen who afterwards worked on netscape which at somepoint had 80% of market share back in the days.
    Netscape envisioned a future where the web was dynamic so the computer didn't have to send the requests to the server to perfom calculations then send back the reply.
    These necessitated the development of a scripting language to allow such computations. Netscape then hired Brendan Eich who then developed the scripting language in 10 days.

    The world has become so used to Javascript that if Javascript was disabled under settings > Site Settings > Javascript some applications like Youtube and netflix won't even load. The good side of it is that you get an ads free experience while browsing.

    Javascript was initially called LiveScript then microsft tried to reengineer it and came up with a JScript. The Europeans tried to standardize it hence the ECMA(European Computer Manufacturers Association) Script. More often you see different versions of Javascript referred to as ES6, 7 etc. The ES is from the ECMA Script.

    Just as scripts in plays, the Scripting languages does the same things. By writting the script, we tell the world what to do.

    What is the relationship between Java and JavaScript - JS was called JS because Java was common in the 90s as is Blockchain today.
    JavaScript is an interpretted PL in the same category as Python and Ruby - Were seen less serious and executed instructions line by line.
    Java is a compiled PL in the same category as C/C++, Swift - Considered serious and faster.

    JS was traditionally a frontend language but recently it is used on both back end and frontend and everything in between.
    It is the language that is supported by all the browsers.

    What is the best PL?
    Depends on what you want to develop. If IOS then learn SWIFT, if Android then Java, if Web then learn JS.

45. JavaScript Alerts - Adding behaviour to websites.
    One can use the console developer tool to add behavior to a website. However, one cannot add multiple lines to the console. One pressing enter, the first line is executed instead of allowing the user to add more lines of code. To add more lines you use the shift + enter.

    You can add Javascript in chrome using the Sources section of the developer tool. Under the section, click >> and select the Snippets section. Here you can create a new snippet and have it executed. Once done writting your code in the new snippet, click the Ctrl + Enter button at the bottom right to execute the code.
    
    The difference implies the console is majorly set for testing purposes and not for writing code.
    JS just like any other language has specific keyword that can be used. This can be accessed on the MDN web docs documentation by selecting JavaScript under technologies/References:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript

    Here you can for instance search for: Alert

    Will show:

    Window.alert("Hello world");

    The above is the full version. In most cases, most people will go with the shorter version which is:

    alert("Hello World!");

    See the components of this code: Snips > JS Function Components. 

    1. It is best practice to not leave spaces in between the key words and brackets and the content.
    2. When working with quotes, preferred to use double quotes.
    3. Also not best practice to write the code in word document then copy it into the your IDE. This is because the double quotes may be differently formatted on the word document and this might be different from what the IDE expects.

    For best practices you can check out the site below. Shows the principles of writing consistent, Idiomatic JavaScript:

    https://github.com/rwaldron/idiomatic.js

    More of like the Elements of Style guide book, the above is a live document that has been contributed to by many in the Javascript world. Consider going through it more often.
 
46. Data Types:
    alert("Hello") - The parts within the quotes is interpretted as string. Classifies the data to tell the computer how it is to interpret the data. String because it is a string of characters. Text that should not be interpretted as code.
    Numbers - No need for special characters.
    Boolean - Describes the true or false kind of data.


    typeof("Daniel") - Is another keyword that allows tell you the data type of the content within the bracket.

47. Javascript Variables:
    Allows commit some content or information to memory.
    This can be achieved using the prompt key word. Similar to the alert only that it allows the user to submit some feedback.
    The information won't be remembered unless attached to a specific variable.
    
    e.g.,

    prompt ("What is your name");

    If written in console and the user types in the name then press enter, the name cannot be retrieved. To allow one to access it, you can use a variable as below:

    var myName = "Daniel";

    The above creates a data container - myName which is equal to a value - Daniel.

    Everytime the computer encounters the var, the computer knows it has to create a new container called by myName and to that container a value Daniel is assigned and then with the semicolon the container is sealed/closed.

    Var stands for variable meaning you can vary the data in that container.

    Say:
        myName = "Onsombi"

    The computer will find the myName variable, takeout the name Daniel and replace it with Onsombi.

    The second time, you don't have to use the var keyword. Only used when declaring the variable for the first time.

    In some Interviews, enterviewers may want to test the candidate's thinking process. This is done by giving out an exercise and specific rules that users must abide to in their resolution.

    Example:
    var a = "3"
    var b = "8"

    rewrite the code so that the variable a holds the value "8".
    And variable b holds the value "3"

    Rules:
    Do NOT change any of the exisiting code.
    You are NOT allowed to type any number.
    You should NOT declare the variables a & b.

    Solution:
    var c = a;
    a = b;
    b = c;

48. Naming and Naming Conventions for Javascript Variables:
    If you clear the console, the activity does not clear the cache. One must hard reload the browser so to clear the cache, you must click the refresh icon on the top left side of the browser.

    You can use any variable name in JS. Just because JS does not care the name doesn't mean we don't care. Our variable should be easy to understand and need to make it understandable to other people that might interact with our code.
    1. Give the variable meaningful names.
    2. Cannot call a variable var i.e cannot use the keywords as variable names.
    3. Your variable name cannot begin with a number.
    4. Variables should not have a space.
    5. The names should only contain letters, numbers, dolar sign and an underscore.
    6. Name all variables using camelcasing. This helps avoid situations like www.therapistfinder.com which one may read as "the rapist finder" instead of "therapist finder".
    
 49. String Concatenation:
    
    "a" + " " + "b" = "a b";

50. String Lengths and Retrieving the Number of Characters:
    Can get the number of characters by using the length property:

    word.length

    e.g.,

    var name = "Daniel";

    name.length gives the number of characters in the name variable which will be 6 characters.

51. Slicing and Extracting Parts of a String:
    Say you wanted to add a feature that allows you to type in a specific number of characters. You should be able to do the count and slice off the other characters beyond the specified maximum number. Slicers help achieve this kind of functionality.

    var name = "Daniel";
    name.slice(0,1);

    This picks the first character in the string. The slicer counts from a zero and not from one.

    To get "Dan", then use you need 3 characters from position zero:

    name.slice(0,3);

    The synax is:
    variable.slice(Initial position, number of characters);

    Code can also be simplified. Consider:

    var enteredCharacters = prompt("Type your Tweet below:");
    enteredCharacters = enteredCharacters.slice(0,140);
    aleart(enteredCharacters);

    can be simplified as:
    alert(prompt("Type your Tweet below:").slice(0,140));

51. Challenge: Changing Casing in Text:
    ToUpperCase();
    
    Can change the string to uppercase using the format:
    word.ToUpperCase();

    can also change to lowercase:
    word.toLowerCase();

    One can therefor combine the various lessons learnt to change the first letter of the string to uppercase and the rest in lowercase.

52. Basic Arithmetic and the Modulo Operator in JavaScript:
    Working with numbers in JS is pretty straighforward especially with multiplication, division, subtraction and additions.
    The only operator alittle bit weird is the Modulo operator:

    var e = 9 % 6 = 3.

    The Modulo function gives the remainer of 9 divided by 6 gives since 6 goes to 9 once and the remainder is 3.

    E.g if want to check if a number is even or not, you can use the modulo example.

    If you have an experesion:

    var cost = 3 + 5 * 2

    Could be ambiguous but due to the presidence in programming, then the result will be 5 * 2 + 3 which equals to 13.

    If you intend to get a result equal to 16 then brackets should be introduced as:

    (3 + 5) * 2.

    Brackets make it abundantly clear what is expected.

53. Increment and Decrement Expressions:
    The above expressions exisit both in Math and in programing. However, the increment and decrement expressions only exist in programing.

    var x = 5 ;
    x = x + 1;

    The above can be changed to 
    Var x = 5;
    x++;

    The above is a increment expression while the x-- is the decrement.

    To increase by more than one then can use x += 2.

    The above works with +=, -=, *=, /=.

54. Functions Part 1: Creating and Calling Functions:
    Consider a robot working in your house. For it to perform its functions, all you have to do is give it instructions via code e.g., 

    alert("leavehouse");
    alert("moveRight");
    alert("moveRight");

    etc to move it back to the store. Lots of such functions need to be written everyday to instruct the robot.
    
    Instead of having to write the instructions daily, you can create a series of instructions package it and execute it everytime the robot should be instructed.

    You first start with the keyword function, give it a name, then within curly braces write the instructions.

    Functions are similar to the variable which creates a container, gives it a name to identify it, then put in all the instructions that should be caried out. When we want it executed each line of code is then executed.

    When calling the function, all you need to do is call the name of the function with some parenthesis and end it with a semicolon. This is a command.
    The rules and naming conventions of variables also apply here.

    It is good practice to indent any code within curly braces.
    No semicolon should be added after the closing curlybraces.

    Difference between console.log and alert is that the console.log is meant for the developer for debugging purposes while the alert is targeting the user.
    Sample code:

    function getMilk() {   
        console.log("leaveHouse");
        console.log("moveRight");
        console.log("moveRight");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveRight");
        console.log("moveRight");
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("enterHouse");
        }

    getMilk();

55. Functions Part 2: Parameters and Arguments:
    The earlier explained is the simplest version of the JS function. 
    What if you not only want to just get milk but also specify the number of bottles to be bought by the robot. You can pass the number of bottles as an argument when calling the function which expects one parameters. so when the buy milk section is executed, it will utilize the input to specify the number of bottles within the function. Say:

    function getMilk (bottles) {
        var cost = bottles * 1.5;
        //Do something with cost.
    }

    when working with such expressions, various methods are necessary for rounding down or up the results say after a division. To round down then you can use the Math.Floor() method.

56. Functions Part 3: Outputs & Return Values:
    Take the previous example where we could take in money and return an output. We use the return key word.
    For instance to return the remainer of the money spent, we can use the Modulo operator to return the remainder.

    The function can be assigned to a variable say change which is to hold the returned value:

    function getMilk (money) {
        return money % 1.5;
    }

    var change = getMilk(4); 

    An example is as below:

        function getMilk(Amount) {              
            console.log("leaveHouse");
            console.log("moveRight");
            console.log("moveRight");
            console.log("moveUp");
            console.log("moveUp");
            console.log("moveUp");
            console.log("moveUp");
            console.log("moveRight");
            console.log("moveRight");
            console.log("moveLeft");
            console.log("buy " + calcBottles(Amount, 1.5) + " bottles of milk");
            console.log("moveLeft");
            console.log("moveDown");
            console.log("moveDown");
            console.log("moveDown");
            console.log("moveDown");
            console.log("moveLeft");
            console.log("moveLeft");
            console.log("enterHouse");

            return Amount % 1.5; //Remainder of this division
        }

        function calcBottles(startingMoney, costPerBottle) {
        var numberOfBottles = Math.floor(startingMoney / costPerBottle);
        return numberOfBottles;
        }

        var change = getMilk(5);

        console.log(change);

        Instead of writing all code within the same function, multiple functions can be creared to handle various scenarios that return the output to the parent function.

SECTION 15: INTERMEDIATE JAVASCRIPT:
57. Random Number Generation in JavaScript: Building a Love Calculator:
    JS has a way to generate random numbers. Can use the Math.random() method.
    The number generate is between 0 to 0.9999 (to 16 decimal places). Igt never gets to 1.

    If wanted to roll a die, there are 6 posibilities. That is 1 to 6. We can achieve this by:

    var n = Math.random();
    n = n * 6; 

    Math.floor(n) // This will give numbers between 0 and 5.

    Since a die has numbers between 1 to 6, we can change the code to:

    n = (n * 6) + 1;

    The above is a pseudo random number generator. A computer is made of several switches of 0 and 1s. Depending on whether the switch is on or off, the computer does its work. It is difficult though to get randomness in a computer.

    There is a difference between Pseudo and random numbers. Can view:

    https://www.youtube.com/watch?v=GtOt7EBNEwQ

    For a die, since we need it as between 1 and 6, The Math.Random generates numbers between 0 to 0.5999999.
    The Math.Floor then converts the number to the nearest whole number on the lower end by rounding it down. Adding 1 ensures we have numbers 1 to 6 and not 0 to 5.

    Example:

    var crusher = prompt('Hello Lover, Enter your name:');
    var crushie = prompt("Enter the crushie name: ");

    var propMapenzi = Math.floor((Math.random() * 100)) + 1;

    alert("You Mapenzi probability is " + propMapenzi + "%.");

58. Control STatements: Using If-Else Conditionals & Logic:
    We might want to execute different block of code depending on the score of the above computation. We can do this using conditionals.
    This is by using IF - checks if the first condition is met. Else - gives an alternative since the first condition was not met. e.g.,

    if (track === "clear") {
        goStraight();
    } else {
        turnRight();
    }

    example:

    if (propMapenzi > 70) {
        alert("You Mapenzi probability is " + propMapenzi + "%. You love each other like crazy");
    } else {
        alert("You Mapenzi probability is " + propMapenzi + "%.");
    }

59. Comparators and Equality:
    Symbols, >, <, ===, etc are known as comparators.
    === Is equal to
    !== Is not equal to
    >   Is greater than
    <   Is less than
    >=  Is greater or equal to
    <=  Is less than or equal to

    These comparators give our conditionals alot of flexibility.

    "==" is different from "===" since the first does not check the datatype to confirm whether a value is equal. Just checks the value whereas the later checks equivalence on both equality and data types.
    Consider:

        var a = 1;
        var b = "1";

        if (a == b) {
            console.log("Yes")
        } else {
            console.log("no")
        }

    The above will return Yes.

        if (a === b) {
            console.log("Yes")
        } else {
            console.log("no")
        }

    This returns no, because typeof(a) is not equal to typeof(b).
    
60. Combining Comparators:
    To compare, we use:
    
    && - AND
    || - OR
    !  - NOT.

    var probMapenzi = Math.floor((Math.random() * 100)) + 1;

    if (probMapenzi > 70) {
        alert("You Mapenzi probability is " + probMapenzi + "%. You love each other like crazy");
    } else if (probMapenzi > 30 && probMapenzi <= 70){
    
    } else {
        alert("You Mapenzi probability is " + probMapenzi + "%. Just give up simp!");
    }

    example 2: BMI Calculator:

    function bmiCalculator (weight, height) {
        var BMI = weight/(height * height);
        var interpretation = "";
        
        if (BMI < 18.5) {
        interpretation = "Your BMI is "+ BMI +", so you are underweight."; 
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            interpretation = "Your BMI is "+ BMI +", so you have a normal weight."
        } else {
            interpretation = "Your BMI is "+ BMI +", so you are overweight."
        }
        return interpretation;
    }

    Example 3: Leap Year calculator:

    function isLeap(year) {
        var leapyear = Boolean;

        if ((year % 4) === 0) {
            leapyear = true;
            
            if (leapyear) {
                if ((year % 100) === 0) {
                    if ((year % 400) === 0) {
                        return "Leap year."
                    } else 
                        return ("Not leap year.");
                } else {
                    return "Leap year."
                }
            }
        } else 
            return ("Not leap year.");

    }

61. Collections: Working with Javascript Arrays 
    With variables you can store different datatypes. You can also store collections of related items in the same variable by use of an array as:

    var myArray = array[];

    Array count usually start counting at position zero.
    We can use the array.length to get the count of items in the collection.

    Example:

    var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]

    can print out the content to console:

    console.log(guestList);

    Retrieve the item:

    guestList[0] returns Angela.


    Can use the function:
    includes() to check whether the item in brackets exists in your array.

62. Adding Elements and Intermediate Array Technique:
    The FizzBuzz quiz.

    Also read through:

    https://blog.codinghorror.com/why-cant-programmers-program/

    If you have numbers between 1 to 100, and while counting, if a number is divisible by 3 then shout fizz instead of the number, if divisible by 5 then buzz and if divisible by both then FizzBuzz.

    You can use the push method to add items to an array and the pop to remove an item in an array.
    array.push(1);
    array.pop(1);

    Instead of pushing an poping, we can create a function to push items into the array.

    var number = 1;

    function fizzBuzz()
    {
        var output = [];
        
        if (output.length =  0) {
            output.push(number);
        } else {
            number = output[output.length] + 1;
            output.push(number)
        }
    }

    Can print it using the approach below:
    //FizzBuzz Challenge:
    var number = 1;
    var output = [];

    function fizzBuzz()
    {   
        var div3 = Boolean;
        var div5 = Boolean;
        
        if (number < 1 || number > 100) {
            alert("number must be between 1 and 100");
        } else {
            div3 = false;
            div5 = false;
            
            if ((number % 3) === 0) {
                div3 = true;
            }
            if ((number % 5) === 0) {
                div5 = true;
            }
        
            if (div3 && div5) {
                output.push("FizzBuzz");
            } else if (div3) {
                output.push("Fizz")
            } else if (div5) {
                output.push("Buzz")
            }  else
                output.push(number);
        }

        number++;
        console.log(output);
    }

    Who is paying for lunch challenge:
    function whosPaying(names) {
        //Get the length of the array
        var numberOfPeople = names.length;

        //using Math.Random, get random numbers with the length of the array;
        var randomPersonPosition = Math.floor(Math.random() * len);

        //With the selected random number call the array
        var randomPerson = names[random];

        return randomPerson + " is going to buy lunch today!";
    }


63. Control Statements: While Loops:
    On the FizzBuzz challenges,earlier one had to call the function multiple times to return the desired output. If for 100 entires, the computer can run it by itself using while loops. While the statement is true, the code in the curly braces will run multiple times.

    Example:
    While (i < 2) {
        console.log(i);
        i++;
    }

    The FizzBuzz challenge can therefore be re-written as:

    var output = [];
    var number = 1;

    function fizBuzz() {
        while(number <= 100) {
            if (number % 3 === 0 && number % 5 === 0)
            {
                output.push("FizzBuzz");
            } else if (number % 3 === 0) {
                output.push("Fizz");
            } else if (number % 5 === 0) {
                output.push("Buzz");
            } else {
                output.push(number);
            }
           number++; 
        }
    }


    The challenge with the while loop is that it is error prone. It will continue running infinitely till the statement returns false. So one should be very careful when working with the while loop to ensure proper scoping and that the code has a definite end.

    var bottles = 99;
    var bottleWord = " "

    function beer()
    {
        while (bottles > 0) {
            if (bottles > 1) { 
                bottleWord = " bottles";
            } else {
                bottleWord = " bottle"
            }
            
            console.log(bottles + bottleWord+" of beer on the wall, "+ bottles + bottleWord+" of beer.");
            bottles--;

            console.log("Take one down and pass it around, "+ bottles + bottleWord+" of beer on the wall.");
        }

        console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
    }

64. Control Statements: For Loops:
    For (i=0; i<2; i++){
        console.log(i);
    }

    It is a reshuffle of the while loop items to achieve the same end goal.

    The for loop sweetens the syntax and makes it easier for the devs to use.

    It executes the lines from left to right. Creates a variable i checks if less than 2, executes the code within the curly braces then executes the i++.

    The fizzBuzz function can therefore be re-written as:

    var output = [];

    function fizzBuzz() {
        for(var number = 1; number <= 100; number++) {
            if (number % 3 === 0 && number % 5 === 0)
            {
                output.push("FizzBuzz");
            } else if (number % 3 === 0) {
                output.push("Fizz");
            } else if (number % 5 === 0) {
                output.push("Buzz");
            } else {
                output.push(number);
            }
        
        }
        console.log(output);
    }

The for loop is more preferred compared to the while loop in such a use case.

In which case should one use the While loop over the for loop and vice versa?
    While Loop - checks that the condition is true. Run a program while something is in a specific state.

    For Loop - When you want to iterate, or run a piece of code many many times.
    
    Fibonacci Series:


    Trial:

    var prevNo = 0;
    var output = [];
    var NewVal = 0;

    function fibonacciGenerator(n)
    {       
        if (n === 1) {
           output = [0]; 
        } else if (n === 2) {
           output = [0, 1]; 
        } else {
            for(var i = 0; i<= n; i++) {
                if (output.length === 0) {
                    output.push(i);
                    prevNo = i;
                } else if (output.length === 1){
                    NewVal = prevNo + i;
                    output.push(NewVal);
                    prevNo = NewVal;
                } else {
                    NewVal = prevNo + output[output.length-2];
                    output.push(NewVal);
                    prevNo = NewVal;
                }
            }
        }
        console.log (output);
        return output;
    }


    Final:
    var prevNo = 0;
    var output = [];

    function fibonacciGenerator(n)
    {   
        if (n === 1) {
           output = [0]; 
        } else if (n === 2) {
           output = [0, 1]; 
        } else {
            output = [0, 1]; 
            for(var i = 2; i<n; i++) {
                output.push(output[output.length - 2] + output[output.length - 1]);
            }
        }
        return output;
    }

SECTION 16: The Document Object Model (DOM):
65. Adding JavaScript to websites
    Similar to CSS where you can inject the css to your wwebsite, inline, internal and external css, Javascript also works in a similar manner:

    - Inline - By adding an attribute to the html tag e.g:
        <body onload="alert("Hello")">   

    This can be abit confussing because the JS will be in quotations and the string in double quotes, we therefore have to downgrade one to single quotes as:
        <body onload="alert('Hello')">

    Inline has all the downsides of the inline css, difficult to maintain, debug, not modular and not best practice.

    - Internal:
        <body>
        <script type="text/javascript">
            alert("Hello");
        </script>
        </body>

    This behaves similar to the inline js.

    - External File - Instead of adding the js within the body, you can add a link to the file containing the JS code:
        <body>
        <script src="index.js" charset="utf-8"></script>        
        </body>

    The position where we position our html code matters a great deal. Our CSS must be in the head section so it is loaded before the content. If the code is at the bottom, the code will execute from top to bottom and will have the css as a default black h1 then much later will change the color to any other that was assigned the red color. This should not be the case.

    JS however should be the opposite, this is because if at the top and it is trying to manupulate an element that has not been loaded yet, the code will break. This will throw an error on the console.

    The script should be before the closing body tag. The added benefit being if you have alot of JS code, then lots of the content would have been loaded and the rest of the code can be executed later. The Website therefore tends to load faster.


66. Introduction to the Document Object Model (DOM):
    If we want our website to be interactive then we need to be able to change parts of the website onthe fly without the user clicking then having the website reloaded. The DOM solves this problem by catalogies the site to individual sections that we can manipulate.

    The conversion of the websites into a DOM is done by the browser which changes the site into a tree format and the objects can be manipulated. All elements are converted into objects and thir relationships mapped. Some as parents and others as sibblings. All the elements are within the documents. See Snips > The DOM.

    In code, a sample is such as below:

    <!DOCTYPE html>
    <html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>My Website</title>
        <link rel="stylesheet" href="styles.css">

    </head>
    <body>

        <h1 id="title">Hello</h1>

        <input type="checkbox">

        <button class="btn">Click Me</button>

        <ul id="list">
        <li class="item">
            <a href="https://www.google.com">Google</a>
        </li>
        <li class="item">Second</li>
        <li class="item">Third</li>
        </ul>
    </body>

    <footer>
        <script src="index.js" charset="utf-8"></script>
    </footer>
    </html>

    To visualize the tree, install the chrome HTML Tree generator extension. When visualizing, the entire tee is contained in a document.

    At the very top:

    HTML which has two children, HEAD and BODY.

    Inside the body are 5 children: H1, INPUT, BUTTON, UL, SCRIPT.

    The UL has three children of type LI and one of the LIs has one child A.

    See Snips > Sample DOM.

    Now we can tap into the DOM using JS and navigate through the tree. If in the chrome console you write document; and enter, it will pull the entire html.

    One can navigate through the document using the inbuilt methods e.g:

    1. document.firstElementChild; - returns the Entire html code since the first child is html.

    2. document.firstElementChild.firstElementChild; - return the HEAD part and its children;

    3. document.firstElementChild.lastElementChild; - returns the BODY part and all its children.
    
    You can access the H1 element by:
    document.firstElementChild.lastElementChild.firstElementChild; - returns <h1>Hello</h1>


    Once selected, you can manipulate this object say:

    var heading = document.firstElementChild.lastElementChild.firstElementChild;

    - heading.innerHTML = "Good Bye";

    This changes the Hello string to Good Bye.
    

    One can also change the color of the element by:

    - heading.style.color = "red" - This will change the color of the selected object.
    - document.querySelector("input").click() - Selects the input tag and makes it do things in this case, it will check the box automatically. This will simulate a mouse click.

    Our objects inside the DOM can have:
    Properties - describes something about the object, e.g color, number of seats, doors if it was a car
    Methods - Things objects can do, e.g brak, drive, park if the object was a car.

    We can get the properties of the object, for a red car, we can do car.getColor which returns red.

    We can also set the properties of a car e.g., car.numberOfDoors = 0; will remove all doors from the car.

    Car.drive() - Calling the drive method makes the car to drive. A method is something that an object can do. Drive is a method since associated with the car object though a times used interchangeably with function.

    Methods are usually called in a similar way to methods. However, the methods have parenthesis as the end when called.

    The methods for a button can include:   
        click();
        appendChild();
        setAttribute(); - Say change the href.

67. Selecting HTML Elements with JavaScript:
    There are multiple other ways of selecting elements in JS:

    1. document.getElementsByTagName("li") - Looks through the pages ans searches for any element with a specifc tag, in this case the list items within the un ordered list. Returns an array of all the items with this tag. Elements is plural and therefore fetches all that have this tag element. And since an array is returns, the code below will throw an error:
    
    document.getElementsByTagName("li").style.color = "red";

    since you can not assign this property to an array instead select the item you want to select then assign the value:

    document.getElementsByTagName("li")[2].style.color = "red";

    All array properties can be used on the returned array e.g.,

    document.getElementsByTagName("li").length;

    2. document.getElementsByClassName("btn) - Has plural elements meaning we will return an array. It doesn't matter whether only one item has that class. To select ensure to use the square brackets.
    3. document.getElementById("") - is singular and returns only one item since you should have one id for each item in a site. e.g.,
    document.getElementById("title")

    Can use it to manipulate the item as: 
    document.getElementById("title").innerHTML = "Good Bye"

    Another method that can select a single element is the query selector since it only returns a single item at a time. It works differently cause the string within the parenthesis is a selector. The selector is the tag, or class which starts with a dot(.) or an id denoted by using the pound sign (#).

    document.querySelector("");

    It can take a class, and ID or even an element e.g:
    document.querySelector("h1");
    document.querySelector("#title");
    document.querySelector(".btn");

    One can also combine selectors and query for something more specific. Foe example, to pull the list with a link in the code earlier:

    document.querySelector("li a");

    Can also combine items for a class within li as:
    document.querySelector("li.item");

    The same can also be used on IDs as:
    document.querySelector("#list a") - This is a hierarchical selector because of the space in between the id and the element. This therefore returns an anchor tag within something with an id of type list.

    What if the selector matches more than one object?
    document.querySelector("li.item"); - This returns the forst item that matches that selector.

    To get all, then you should use:
    document.querySelectorAll("li.item");

    And to manipulate the list then you must use the index so to manipulate its items.

    QuerySelector and querySelectorAll allows for more complex queries cause we are able to select ID, tags, elements, classes whereas the getElement methods are more broad and it is difficult to target specific elements and hence the querySelector and querySelectorAll are more used.

68. Manipulating and Changing Styles of HTML Elements with Javascript:
    When changing properties in CSS, the properties with two words are usually written as: font-size. However, in JS, the properties are formatted differently. Font size is instead written in camel case as fontSize hence:

    document.querySelector("h1").style.fontSize = "10rem";

    for more see:

    https://www.w3schools.com/jsref/dom_obj_style.asp

    which will show what the properties change to when working with the DOM.

    Opposed to CSS' approach, the values of the properties must be specified as a string. Even if it is a number.

    document.querySelector("h1").style.visibility = "hidden";


69. The Separation of Concerns: Structure vs Style vs Behaviour:
    To keep our code tidy, we must keep in mind the separation of concerns, HTML for content, CSS for styling and JS for behaviour.

    It is not good practice to change the style using JS. We instead need to have style in CSS. However, we need to ensure as much as this is done, we can be able to change the formating on the fly using JS.

    ClassList:
    We can utilize the classList property to highlight a list of classes in a specific element. e.g., 
    
    1. document.querySelector("button").classList.

    You can use the add method to add classes to the current class list on an object:

    2. document.quesrySelector("button").classList.add("invisible");

    if you enter and check the elements, then the invisible class will be part of the button properties.

    With this we can keep all our styling in CSS and activate and deactivate them using JS. To remove the class then

    3. document.quesrySelector("button").remove("invisible");

    So if the class .invisible is added to styles.css and the above code is executed then the button will be invisible. This way all style can be in CSS but turn it on and off with JS.

    4. document.quesrySelector("button").toggle("invisible");
    If the invisible class is on then turn it off and vice versa.

    This approach makes the code easier to debug.

70. Text Manipulation and the Text Content property:
    document.getElementById("title").innerHTL = "Good Bye"
    document.getElementById("title").textContent = "Hello"

    Both propertie can change the text of whichever element that we select. However, they are slighly different:

    innerHTML - Gives you the content that is in between the selected tag. including any other tags that might be there. 

    whereas

    textContent - Gives only the text content in between the tag excluding any other tags:

    Example:
    <h1 id="title"><strong>Hello</strong></h1>

    innerHTML returns: "<strong>Hello</strong>"

    textContent returns: "Hello".

    Therefore, using innerHTML means you can add any other HTML code on the fly. For example if we want to change the code in between to be italizised we can do it as:

    document.querySelector("h1").innerHTML = "<em>Good Bye</em>"

    If the above is done using the textContent, the tags will be considered as part of the text and therefore will be visble to the end users.


71. Manipulating HTML Element Attributes:
    Attributes can include, class, href, src etc depending on the element you are looking at, anything that goes into a tag other than the tag name itself.

    1. document.querySelector("a").attributes will give you a list of all attributes currently attached to the selected html element.

    We can retrieve the current value by:
    2. document.querySelector("a").attributes.getAttribute("href") - The vale of getAttribute must be one of the results from the earlier returned attributes.
    3. We can set the attributes using: document.querySelector("a").attributes.setAttribute("href", "https://www.bing.com");
    
SECTION 18: ADVANCED JAVASCRIPT AND DOM MANIPULATION:
72. What We'll Make: Drum Kit:
    Inorder to register button clicks, you must add event listeners to it. A function that say handles a click can be maintained in the index.js file. e.g.,

    function handleClick()
    {
        alert("I got clicked!");
    }

    We want a button to trigger this function when it receives a click. We therefore have to select a button inside HTML and add an eventlistener that listens to when it is clicked, then call the handleClick() button.

    Select the button using:

    document.querySelector("button");

    Then to it use the addEventListener() method to specify the the type, listener, and any other options that will be passed in as arguments.

    The code is as below:

    document.querySelector("button").addEventListener("click",handleClick)

    function handleClick() {
        alert("I got clicked");
    }

    Remember the type and lister parameters are case sensitive.

    We usually call our functions with a set of parenthesis. However, while using the addEventListener, this is not the case. This is because, adding the parenthesis makes the function a straight up function call. It will be executed immediately the JS file is loaded. This is should not be the case because the function should only be triggered by an event and in this case clicking the button.


    The above code can be written in different other ways e.g., using anonymous functions (function without a name) as:

    document.querySelector("button").addEventListener("click", function() {
        alert("Mehn, I got Clicked!");
    })

    The code above will only be executed for the very first button.

    To execute for multiple button in the 17.0 Drum Kit Starting Files > Index.js we will use a for loop as below:


    For the forloop, we use the query selector method and instead of using "button" which is an element that might be used in several other sections, we instead use .drum class which is specific to this set of buttons.

73. High Order Functions & Passing Functions as Arguments:
    Note that if you inspect elements say on the JavaScript wikipedia, If you select a specific element, a $0 value is assigned to it. This value can be used to access its content on the console window.
    Can use it to make changes such as:

    $0.innerHTML = "Dan Onsombi".

    This will change the headiung from Javascript to Dan Onsombi. However the changes are lost when the page is refreshed.

    If you click on the JavaScript, nothing happens since it is not bound to any listener. We can however make it clickable by:

    $0.addEventListener("click", function() {
        console.log("I got clicked!");
    });

    This will make the h1 clickable and will log the number of clicks as it is being clicked.

    The above ustilizes an anonymous function which can be re-written as earlier described.

    In this case, we pass in to inputs to the function: 
    1. The type of event
    2. The listener (function to be executed when the event is triggered).
    

    Consider a calculator:
    1. Using functions:
    To add, one can create different calculator functions every time they want to add or multiply two numbers:
        //To add:
        function calculator(num1, num2)
        {
            return (num1 + num2)
        }

        //To Multiply:
        function calculator(num1, num2)
        {
            return (num1 * num2)
        }

    However, this will be tedious having to create different calculators depending on the calculator. A better option would be to add a function as the third parametor to the calculator function which will call the respective add or multiplication methods already predefined:

        function add(num1, num2) {
            return num1 + num2;
        }

        function multiply(num1, num2) {
            return num1 * num2;
        }

        function calculator(num1, num2, operator) {
            return operator(num1, num2);
        }


    With the aboive call, to add:
        calculator(4, 5, add);

        On execution the function becomes:

        function calculator(4, 5, add) {
            return add(num1, num2);
        }

    To multiply:
        calculator(4, 5, multiply);

        The function becomes:
        function calculator(4, 5, multiply) {
            return multiply(num1, num2);
        }

    Debugger:
    Chrome developer tool is rich with functionalities. This includes an inbuilt debugger that can be loaded from the developer console. To load the developer tool:
    1. Type the debugger key word.
    2. Below it, call the function you want to rdebug.
    
    e.g.,
    debugger;
    calculator(3,5,multiply); //We'd written the function in the console.

    This will help find what is happening instead of playing computer.

    This type of functions that can take other functions as inputs are called High Order Functions.

    HIGH ORDER FUNCTIONS:
    Are functions that can take other functions as inputs.

    This is available in many programming languages and relied on heavinly on JS.

    An example is using the calculator below:

    function add(num1, num2) {
        return num1 + num2;
    }
    
    function subtract(num1, num2) {
        return num1 - num2;
    }
    
    function multiply(num1, num2) {
        return num1 * num2;
    }
    
    function divide(num1, num2) {
        return num1 / num2;
    }
    
    function calculator(num1, num2, operator) {
        return operator(num1, num2);
    }


74. How to Play Sounds on a website:
    Note that if you have no idea how to go around this, you can easily search it on the browser and get the way around.

    We can try this out using the recommendations on: 
        https://stackoverflow.com/questions/9419263/how-to-play-audio

    var audio = new Audio('audio_file.mp3');
    audio.play();

    One can also read through the MDN Docs on the Audio Element and its properties:
        https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement

    It has different properties:
    Can check whether it has been played or paused.
    Can set when you want it played etc.

    It also has several methods like play() that can be used.

    In our drum kit project, we have multiple buttons and the goal is to have each one of them play a different sound when the button is clicked. Therefore the event listener is to be used by several buttons. To track the specific button, we use the "this" keyword.

    Can console log it to see its value:
    console.log(this)

    The "this" keyword grabs the object that initiated the event and with the obejct we can use the various available properties and methods in different ways. E.g., to get the text, we can use 
    
    this.innerHTML;

    Can also style the content of the clicked button, say the color as:

    this.style.color="white";

    Our code then becomes:

    var numberOfDrumButtons = document.querySelectorAll(".drum").length;
    for (var i = 0; i <= numberOfDrumButtons; i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            this.style.color="white";
        })
    }

75. How to use Switch Statements in JavaScript:
    In some instances, you may want to run conditional checks through several items. It may not be easy to use the if statement. A SWITCH statement will be more reasonable.

    The syntax is as below:

    switch (key) {
        case value:
            
            break;

        default:
            break;
    }

    Where Switch is similar to the IF, the default is similar to the else at the end of an if statement.
    A break marks the end of a case statement.

76. A Deeper Understanding of JavaScript objects:
    We can use objects with different properties. For instance a person, has a name, age, nationality as properties to the person object. A variable can be created to hold this data as:

    var bellBoy1 = {
        name: "Timmy",
        age: 19,
        hasWorkPermit: true,
        languages: ["French", "English"]
    }

    With such an object, we can print out the name of bellBoy1 as:

    bellBoy1.name;

    A house keeper object may be similar to:

    var houseKeeper1 = {
        yearsOfExperience: 12,
        name: "Daniel",
        cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
    }


    If we need more bell boys, we do not have to type in the object over and over again everytime we need a new bell boy. We can instead create a function named bellBoy, usually refered to a CONSTRUCTOR FUNCTION.
    For Constructors, the function name has to be capitalized as:

    function BellBoy (name, age, hasWorkPermit, language) {
        this.name = name;
        this.age = age;
        this.hasWorkPermit = hasWorkPermit;
        this.languages = languages;
    }

    Note the first letter in "BellBoy" is also capitalized indicating this is a constructor function.
        
    Look at a constructor as a factory that pumps out bell boys for this case. The constructor will take in inputs which will then be assigned to the bell boy properties.

    Now to create a new bell boy all you need to do is call the function as:

    var bellBoy1 = new BellBoy("Onsombi", 29, true, ["English", "Kiswahili"]);
    var bellBoy1 = new BellBoy("Daniel", 29, true, ["English", "Ekegusii"]);

77. Objects, their Methods and the Dot Notation:
    Lets assume our bell boy can move Suit cases. We can create the suit case as bellow:

    function moveSuitcase {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }

    As earlier discussed, we can achieve this by:
        var bellBoy1 = {
            name: "Timmy",
            age: 19,
            hasWorkPermit: true,
            languages: ["French", "English"],
            moveSuitcase: function() {
                alert("May I take your suitcase?");
                pickUpSuitcase();
                move();
            }
        }

    That is having a property with value set to the anonymous fuinction. And to access the suitcase we can use the Dot Notation as:

    bellBoy1.moveSuitcase();

    When using properties or calling the method is use of the dot notation(.). The difference is that the method has parenthesis.

    To incorporate this to our constructor function, then we write it as:

    function BellBoy (name, age, hasWorkPermit, language) {
        this.name = name;
        this.age = age;
        this.hasWorkPermit = hasWorkPermit;
        this.languages = languages;
        this.moveSuitcase = function() {
            alert("May I take your suitcase?");
            pickUpSuitcase();
            move();
        }
    }

    The house keepers will look as below:

    function HouseKeeper(name, yearsOfExperience, cleaningRepertoire)
    {
        this.name = name;
        this.yearsOfExperience = yearsOfExperience;
        this.cleaningRepertoire = cleaningRepertoire;
        this.clean = function () {
            alert("Cleaning in Progress");
        }
    }

    And can call the clean method by:

    var houseKeeperD = var houseKeeperD = new HouseKeeper("Sharon", 5, ["Washing", "Specialist", "Laundry"]);

    houseKeeperD.clean(); //Which will print out the alert.


    This is similar to some inbuilt methods we have looked at earlier which are pre-build libraries like the Audio method. It is likely to be something similar to:

    function Audio (FileLocation) {
        this.fileLocation = fileLocation;
        this.play = function () {
            //Tap into the audio hardware
            //check the file at fileLocation exists
            //Check the file at fileLocation is a sound file
            //play the file at fileLocation
        }
    }

    And this is why we called it as:
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();

78. Using Keyboard Event Listeners to check for Key Presses:
    Other than the click event, one can also listen to the press of a specific letter on the keyboard.
    Note: All the events are usually written in lowercase e.g., click, keydown  as opposed to using carmel case.

    For buttons, we could easily filter out the button that was clicked. For keyboard, you can listen even to the entire document as:

        document.addEventListener("keydown", function() {
            alert("Key was pressed");
        })

    NOTE: For any block of JS code to be executed, all the error in the console from prior JS scripts must be addressed. For instance in the code below if the for loop throws an error, the rest of the code fails and the keydown event listener will not be executed. The code must be written right. Since it is an array, the var in the for loop should start from 0 and count to 6 hence the for loop should be:

        for (var i = 0; i < numberOfDrumButtons; i++)

    and not 
        for (var i = 0; i <= numberOfDrumButtons; i++)

    The final code therefore becomes:

        var numberOfDrumButtons = document.querySelectorAll(".drum").length;
        for (var i = 0; i < numberOfDrumButtons; i++)
        {
            document.querySelectorAll(".drum")[i].addEventListener("click", function() {
                var buttonInnerHTML = this.innerHTML;
                drumPlay(buttonInnerHTML);
            });
        }

        document.addEventListener("keydown", function(event) {
            var keypressed = event.key;
            drumPlay(keypressed);
        });

        function drumPlay(key) {    
            switch (key) {
                case "w":
                    var tom1 = new Audio('./sounds/tom-1.mp3');
                    tom1.play();
                    break;

                case "a":
                    var tom2 = new Audio('./sounds/tom-2.mp3');
                    tom2.play();
                    break;

                case "s":
                    var tom3 = new Audio('./sounds/tom-3.mp3');
                    tom3.play();
                    break;

                case "d":
                    var tom4 = new Audio('./sounds/tom-4.mp3');
                    tom4.play();
                    break;
                
                case "j":
                    var snare = new Audio('./sounds/snare.mp3');
                    snare.play();
                    break;

                case "k":
                    var crash = new Audio('./sounds/crash.mp3');
                    crash.play();
                    break;

                case "l":
                    var kick = new Audio('./sounds/kick-bass.mp3');
                    kick.play();
                    break;

                default: 
                    console.log(key);
                    break;
            }
        }

79. Understanding Callbacks and How to Respond to Events:
    As earlier highlighted, High Order Functions are functions that take functions as inputs.
    The function that gets passed in as an input is referred to as a CALLBACK FUNCTION. Cause it makes us wait for something to finish happening, e.g a click function then the call back function gets called and executed. Consider:

        document.addEventListener("keypress", respondToKey(event));

        function respondToKey(event) {
            console.log("Key Pressed.");
        }

    The respondToKey(event) will wait for a key press for it to execute.
    The callback function is never called by us but usually the object that experienced the click/keydown etc. We can have the callback function return information only it knows once that event happens.

    It call also be set to print out the event that triggered it and all the other properties/methods that can be called using the dot notation.

        document.addEventListener("keypress", respondToKey(event));

        function respondToKey(event) {
            console.log(event);
        }

    The event listener works by first detecting the type of event that has happened. The event is then passed into a function which creates an object of the event mapping various properties to the object being created.
    The code then checks if the event that happned is similar to want the developer wanted to track and if so, then the callback function gets executed. If not, it exits.

    If the event is what was being detected and the call back is to print out the event, then it will just log the event and its properties.

80. Adding Animation to websites:
    While working with our drum kit, we might want to animate the code so the user can be sure that they pressed the right key.
    From the code below:

    <h1 id="title">Drum 🥁 Kit</h1>
    <div class="set">
    <button class="w drum">w</button>
    <button class="a drum">a</button>
    <button class="s drum">s</button>
    <button class="d drum">d</button>
    <button class="j drum">j</button>
    <button class="k drum">k</button>
    <button class="l drum">l</button>
    </div> 

    All buttons have class drum but in addition, each one has another unique class. With this class we can pick a specific button and animate it.

    In CSS an animation has already been created that creates a shadow and a transparency to the button:

        .pressed {
            box-shadow: 0 3px 4px 0 #DBEDF3;
            opacity: 0.5;
        }

    We can achieve this by:
        function buttonAnimation(currentKey) {
            var activeButton = document.querySelector("."+currentKey).add("pressed");
            activeButton.classList.add("pressed");
        }

    With the styling, if it is not removed then at somepoint the class will have been assigned to all the buttons. There is therefore need to remove the class after a delay of some few seconds using the timeout functions:

    https://www.w3schools.com/jsref/met_win_settimeout.asp
    
    setTimeout (function() {
        activeButton.classList.remove("pressed");
    }, 100);

SECTION 19: JQUERY
81. What is JQuery
    Earlier in the course we wrote the following:

        for (var i = 0; i < numberOfDrumButtons; i++)
        {
            document.querySelectorAll("button")[i].addEventListener("click", function() {
                document.querySelector("h1").style.color = "red";
            });
        }

    So many lines of code to achieve a simple task of changing the color to red.

    However, JQuery shortens and simplifies the code to:

    $("button").click(function() {
        $("h1").css("color", "red");
    });

    JQUERY is therefore a library you can incorporate in your code to make your work and life easier and quicker. JQuery allows take a piece of code and instead of:

    document.querySelector("h1");

    you can write:

    jQuery("h1");

    or simplify it further as:

    $("h1");

82. How to incorporate jQuery into Websites:
    Similar to bootstrap, the code can be accessed in the jQuery website or can also be incorporated through cdn.

        https://jquery.com/download/

    The most popular option is to use googles cdn:

        https://developers.google.com/speed/libraries#jquery

    The beauty of using a popular CDN is that if a user has already logged into a website using the same cdn, they already have it cached in their browser which means they won't have to fetch a fresh copy of jQuery.

    The positioning of your jQuery code is really important.
    If below our index.js, then it will throw an error since the browser reads code from top to bottom. Since it has not grabbed jQuery then any jQuery in index.js throws an error.

    To avoid errors, on the custom JS, use jQuery to check whether tjQuery has been fully loaded. using:

    $(document).ready(function() {
        $("h1").css("color", "red");
    });
    The above code is common where the user has placed the jQuery and the custom JS code in the header section.

    The best formatting of your boilerplate should be:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>jQuery</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>

        <h1>Hello.</h1>
        <button>Click Me</button>
        <button>Click Me</button>
        <button>Click Me</button>
        <button>Click Me</button>
        <button>Click Me</button>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="./index.js"></script>
    </body>
    </html>

    With this approach, no need to user the $(document).ready(function() {...});

83. How Minification Works ro Reduce File Size:
    If you open the cdn in the link:
        https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js

    You will notice what a mess it is. Minification basically removes spaces, paragraphs and comments. This makes the files smaller and quicker to load since the browser doesn't care about tabs, indents, spaces and comments, the browser ignores it and therefore need for minification.

    If you download the JQuery library, it comes both with the standard library that is human readable to allow editing and later minifyinf the code, and the minified library intended for the broweser.

84. Selecting elements with jQuery:
    Without jQuery, elements can be selected by:
        document.querySelector("h1");

    The same can be achieved in jQuery by:
        $("h1");

    To get a h1 within a div of ID header:
        $('#header h1');

    To select all buttons we'd do:
        document.querySelectorAll("button");

    In jQuery, the same can be achieved by:
        $("button")
    for there is no difference between selecting one and selecting many.

85. Manipulating Styles with jQuery:
    Can be done by:
        $("h1").css("color", "green");

    Can get the current value of css as:
        $("h1").css("color")

    If you console.log($("h1").css("color")) it will show the color property of the highlighted element. other than color you can also log the font-size etc.

    So within the css method, if you have two values then you are setting the value, but if one then you are getting the value.

    However, it is good practice to separate CSS, HTML AND JS. Instead of adding th ecss in JS then can create a class in the style sheet with the various properties we want to assign.

    With jQuery we can add the class by:

        $("h1").addClass("big-title");

    Can also remove class:

        $("h1").removeClass("big-title");

    To remove multiple classes separate them by a space as:
         $("h1").removeClass("big-title  Margin-50");

    We can also check if our element has a specific class:
        $("h1").hasClass("margin-50"); //Returns a true or false.

86. Manipulate Text with jQuery:
    Can manipulate text by:
        $("h1").text("Bye");

        $("button").text("Don't Click Me"); // Will change the text for all buttons in your page. 

    To update both html tags and text, as opposed to using innerHTML in vanilla JS, you use:
        $("button").html("<em></em>")

    Most of the things in jQuery are done using methods and dot notation. jQuery works by creating functions to allow shorten the code we write and reduce repetition.

87. Manipulating attributes with jQuery:
    Can get attributes of a specific element we can use:
        $("img").attr("src");

    To set the value then:

        $("a").attr("href","https://www.google.com");

    Can also get the classes:
        $("h1").attr("class");

88. Adding Event Listeners with jQuery:
    The vanilla code is simplified to:

    1. Click event:
    $(h1).click(function() {
        $("h1").css("color", "purple")
    });

    In vanilla JS, to add an event listener to all buttons, you had to use a for loop.

        for(var i = 0; i < 5; i++) {
            document.querySelectorAll("button")[i].addEventListener("click", function(){
                document.querySelector("h1").style.color = "purple";
            });
        }

    This can be done in jQuery by:

        $("button").click(function() {
            $("h1").css("color", "purple")
        })

    This is because the $("button") selects all buttons and therefore there is no need to loop through.

    2. Key press event:    
    Can also detect key presses:
        $("input").keypress(function(event) {
            console.log(event.key);
        })
    To detect key presses on the entire page, then replace "input" with "body" or document.

    Another more flexible way of adding an event listener is by use of the "on" method as:
    The first parameter can be any of the events e.g., click, mouseover, keypress etc.

    $(document).on("mouseover", function(){
        $("h1").css("color", "purple")
    })

89. Adding and Removing Elements with jQuery:
    While the website is live and running, we can use jQuery to add elements in the fly. If you want to add a button element before the h1 element then can use the before method:

    1. $("h1").before("<button>New</button>");

    The above code will select the h1 element then before it add the New button.

    There are different ways to do this:

    2. After - Adds it after the h1
    3. prepend - adds the html within the h1 element, before the Hello word.
    4. append - adds the element after the Hello word but before the closing tag.
    5. remove - removes a specific element(s) from the web page

90. Website Animations with jQuery:
    jQuery makes it easy to implement common animations e.g., hide:

    $("button").on("click", function(){
        $("h1").hide();
    })

    To hide and show the buttons then we use the toggle method:
    $("button").on("click", function(){
        $("h1").toggle();
    })

    To make the hidding progressive then use the fadeOut method:
    $("button").on("click", function(){
        $("h1").fadeOut();
    })

    Can toggle the fading:

    $("button").on("click", function(){
        $("h1").fadeToggle();
    })

    Can also use the SlideUp and SlideDown, useful with dropdowns:

    $("button").on("click", function(){
        $("h1").slideUp();
    })

    $("button").on("click", function(){
        $("h1").slideDown();
    })

    Also has a toggle feature:

    $("button").on("click", function(){
        $("h1").slideToggle();
    })

    Instead of using the prebuild animations, you can use the animate method to create your own:
    
    $("button").on("click", function(){
        $("h1").animate();
    })

    This allows specify the css that you want to animate to: e.g:

    $("button").on("click", function(){
        $("h1").animate({opacity:0.5});
    })

    With animate, within the curly braces you can only add css with a umeric value.
    
    If you want to combine them then do:
    $("button").on("click", function(){
        $("h1").slideUp().slideDown().animate({opacity: 0.5});
    })

    If you can't remember the names but do remember that the feature exists, you can always search through the web or in the jQuery documentation on jQuery.com.


SECTION 21: THE UNIX COMMAND LINE:
91. Understanding the Command Line.
Kernel - Is the core of the operating system that interfaces with your hardware (CPU, Disks, Memory)
Shell - Is the UI for the human to interact with the kernel and hardware.

There are two types of shells:
    - Graphical User interface e.g., when using finder/file explorer
    - Command Line Interface.

BASH - Bourne Again SHell. Is a CLI for the UNIX system. Alot of servers run on the inix system. Alot of things you do on the command line can be done on the graphical interface, why use the CLI?

    1. Allows for better control
    2. Easier and faster to do alot of things without lots of navigation and effort.
    3. GUI Hides alot of complicated stUff from the common user. With terminal can access all needful files using:
        ls -a

92. Command Line Techniques and Directory Navigation:
    ls - list of directories/folders.
    cd - Allows change directory to a specific directory. When using cd, can partially type the directory name then press tab. If enough letters are captured, the directory will be automatically captured.

    cd ~ - Takes you back to the root.
    Can use the up and down keys to navigate the previously used commands.

    cd .. - Takes you back one level.

    If working with VS code, you can drag the folder to the terminal after the cd command instead of having to type in the entire path.

    To edit the Comman at any point, you can:
    1. Use the left and right arrow keys
    2. Hold the alt key and select where you want to place your cursor.
    3. ctrl + A - Takes you to the begining of your command line
    4. ctrl + E - Takes you to the End of your command line.
    5. ctrl + U - Clears the command line.
    
93. Creating, Opening, and Removing Files through CLI:
    1. mkdir - command to create a new directory.
    2. touch - Used to create a file.
    3. To open the file use: open text.txt (in MAC) or start.txt(Windows)
    4. To Open the file: code text.txt
    5. rm - Used to delete files.
    6. rm * - removed/deletes all files in the current directory.
    7. pwd - Prints Working Directory command shows the directory you are currently working in.
    8. rm -r - Allows remove a directory. Removes the directory and all the child components.
    9. sudo rm -rf --no-preserver-root / - (Super user do -remove r-directory f-force --no-preserver-root - It wipes your hard disk to a point where you cannot recover)

    Always check the directory you are in before executing destructive commands.

SECTION 22: BACKEND WEB DEVELOPMENT:
94. Back End Web Development Explained:
    "If you want to get rich from startups, either as a founder or early employee, be really good at building stuff" (Paul Graham)

    Most jobs in the Y Combinator require full stack developers i.e, someone that can work both front end - client facing and the Backend - invisible to the user but contains all the logic that make the web app work.

    The backend consists of:
    1. Server - Should be on 24 / 7. Usually made for this purpose. Any computer connected to the internet can act as a server. 
    
    2. Application - Logic that runs on the server. Determines how to respond to the request from the server. An application can at times return data or a status code e.g., 404 - the application does not know how to respond to the submitted request.
    
    3. Database - Not a requirement of web apps. But as it gets larger, it may need to store user data. The same way you save a word document and can always come back to the document later. Database is a permanent storage for your web apps.
    
    We've been working with the github servers to save our pages and allow users to interact with it.

    Web Apps however should be able to do extra from what a web page does. E.g a Login web application. An email and password is submitted to the server then the server will check for an application that understands the submitted requested. The application has the login login which then connects to the database, checks whether the email and password in the db match to what was submitted then responds back to the application and server can now respond to the browser request.

    If matched then redirects to the landing page. If not throw an error then redirect to login page.

    This of a restourant with user, menu, waiter, chef, pantry where the the waiter sends an order to the chef (server) after being requested by the user reading through the menu (web app functionalities), the chef has multiple recipes(applications), depending on the request check if the recipe exists then if need to prepare the meal check the pantry for needful ingredients then when ready issues back to the waiter who then delievers to the user.

95. Backend Tools & Technologies - Which one to Learn?
    The languages for Frontend are pretty much fixed:
    - HTML
    - CSS
    - JS
    
    Since they are all that browsers accept. Other languages likel react angular and vue are all JS.

    The Backend languages are quite many:
    - Java
    - Rubby
    - php
    - C#
    - Python
    - JS
  
    The backend language does not matter as long as the end you get the results in the format a user can read.
    Some of the popular backend frameworks include:
    - Rails - for rubby
    - Spring - for Java
    - ASP.NET - for C#
    - Laravel/cake - for php
    - Flask/django - for Python
    - Node - for Javascript
  
  We will be using node.js for our backend development which is the number one most popular framework

SECTION 23: NODE.JS
96. What is Node.js?
    Why note write all your code from scratch, why use a framework?
    A framework provides pre-built components, and structures that can be used to build an application instead of us having to write every single line of the code. The components include:
    - Reading files
    - Networking
    - Debugger,
    - Writing files
    - Data streams
    - Error Codes
    - URL Strings
    - Disagnostics
    - Tests.
  
  Node is not quite a framework but instead "an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications."

  JavaScript Runtime environment - Initially JS was created to run on the browser. However, JS uses a V8 engine written in c & c++ that powers the chrome browser. 
  With Node.js, it liberated JS from the browser land and gave it freedom to write any other sort of application desktoip or server side. So now can be run on any machine. We can therefore maintain a full JavaScriot stack for both front end and backend.

  Asynchronous and event driven - It doesn't have to do everything sequencially. Synchronous means you cannot do anything else until the current requested is fully executed whereas asyncronous allows initiate an order, freeup resources and when executed, it then regains control of the resources to proceed with the execution. 

  With Node, then our frontend and backend could be written in JS. This makes it easy to ttransition from the frontend and backend.

    - Node.js allows for easy scaling of application
    - It is non-blocking - because of the asynchronous nature 
    - Ecosystem - Vibrant community and with lots of contribution from multiple people.

97. Using Node.js
    You can check whether node is installed by using the command:
    node -v or node --version.

    Node REPL:
        REPL stands for Read Eval Print Loop - It is a computer environment where user inputs are read and evaluated, and then the results are returned to the user.

        It is not unique to node but also available in other languages.

        In node it is initiated by typing the command node in the terminal. This returns the below response:

            $ node
            Welcome to Node.js v20.9.0.
            Type ".help" for more information.
            >
        
        indicating you have entered the node REPL. You can then write the REPL commands.

        To exit use:
            - .exit 
            - ctrl + c
  
    While in REPL mode you can write code such as:
    5 + 8

    which on enter returns eveluates the expression and prints out:
    13

    Node being a JS framework, you can write anything JavaScript:

    > let a = 3
    undefined
    > a + 12
    15

    It therefore behaves similar to the browser console.

    How to write a JS file and use node to read it:
    node index.js

    If already created an index file as is the case in 20.0 Backend > 2.1 Using Node > index.js, you can use the node index.js command. Utilize the partial typing to validate that the file exists.

    Running node index.js then logs the content of the index.js.

98. How to use the Native Node Modules:
    Native modules are more of like your starting tool set.
    Code that was written to make writing code easier as earlier illustrated. including files, networking etc. Think of them as games that cine preinstaled.

    Can read through the modules in the node documentation:
    https://nodejs.org/api/fs.html

    An example is the file system;
    - File System - Is a module that allows access the local storage. Can be utilized by importing the module. Can import is as:

        const fs = require("fs");

    The use its methods:
    Consider:
        https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback

     Hence:

        const fs = require("fs");

        fs.writeFile("message.txt","Hello from Node js",(err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        })   

    With this you have used a native file module without having to think how to create a file.

    In a similar manner, you can also read from a file:

    //The code if supposed to return a string, it might returns a buffer. 
    //To return the string then need to specify the encoding and for this case it is utf8:

        fs.readFile("./message.txt","utf8",(err, data) => {
            if (err) throw err;
            console.log(data);
        });

99. The Node Package Manager (NPM) and Installing External Modules:
    NPM is a place that collects the modules that people have built for node. Great place to file utilities or modules that will help you write your node code.
    Here you find all the tools that you might think you don't need but might find useful.
    NPM is open source and can search through it so you can find what other devs have done.

    NPM comes prebundle with node. 

    Node Init - brings up the initialization utility which creates a configuration file package.json. Has several prompts on the name, version, description etc.

    This creates a package.json file which contains all the infor that was submitted from the npm init prompts. It is the configuration file. The magic starts when you start using/installing the packages.

    On a browser you can view the various available packages on the link below:
        https://www.npmjs.com/

    Can then search the package of interest such as: sillyname.

    To install, on the right side, you can pick the command and paste it to the terminal then press enter.
        npm i sillyname

    where i is the short hand for install.

    You can also install multiple packages by separating them by a space:

        npm i sillyname anotherPackage anotherAnotherPackage

    Once installed successfully:
    - A dependencies object is added to our Package.json file as one of properties to the object.
    - A node_modules folder is also added to the project under which all the dependencies or packages are downloaded and stored.
  
    Reading the documentation will show you how to use the package. By first importing it to the file then calling some methods:

    ECMAScript Modules:
    Natively, we used the require method to import node / npm modules into our JS applications. However, since version 12 of Node, Node is enabled to use ECMAScript modules by using the Import keyword.
    Providing a standard way to use js in both frontend and backend;
    
    To update our code to use ECMAScript module, navigate to the configuration file (package.json) and then add a property  "type" and assign it the value "module":

        "type" : "module",

    Now you can convert the code to use the module as:

        import XXX from "sillyname";

    Always by typing the line above then changing/typing in the method makes it easier for JS to auto suggest the method to be imported.

    The file import becomes:

        import generateName from "sillyname";

    instead of the native:

        var generateName = require("sillyname");
    
100. [Project] QR Code Generator
     We will use:
     1. inquirer.js - that allows get input from the user
     2. qr-image - Used to generate qr code in png, svg, eps and pdf formats;
    
    Note that when the type is set to module in the package.json file then the require keyword will throw an error. You should stick to the use of import.

SECTION 24: EXPRESS.JS WITH NODE.JS
101. What is Express?
    Express is a framework built on top of node to help us build our backend with ease. 
    Node is not a framework but a runtime environment since it allows run JS on a computer. Node enables use js on a computer and not limiting it to the browser.
    Combining the two then we can do our backend comfortably.  
    
    Node can be used to do many things but in addition, you can program your IoT devices, desktop application, VsCode is created using Node.js. With the ability to create many things, then it is not specialized for one thing. The one thing we are interested in is creating a website backend. Node is universal and therefore as much as it is a great tool it is better to use a specialized web framework.

    Express makes it quicker and easier.

    In all cases where we are creating a backend using node, we will be using the express framework. It is less cumbersome, better readability, less code, middleware.

102. Creating Our first Server with Express.
     Client-side - frontend
     Server-side - backend/server

     Creating an Express Server:
     - Create directory - Use mkdir command
     - Create index.js file - Using the touch command
     - initialise NPM - Using the "npm init -y" command. The -y defaults the response to the prompts to yes to avoid having to type them in. The main must be set to index.js since npm is set to look for this file by default.
     - Install the Express package - using "npm i express" command
     - Write Server application in index.js
         - Done by importing express from the installed express module
         - Create an app using the express object
         - Use the listen method to allow listen to the port, the location of the server where we will be listening for requests from users
         - Callback function to be triggered when our server is setup 
         - The sample code is as below:

            import express from "express"
            const app = express()

            app.listen(3000, ()=>{
                console.log("Server running on port 3000");
            })

        - Instead of specifying the port as in the above code, it is better to create a variable for it and hence the code below:
  
            import express from "express"
            const app = express()
            const port = 3000

            app.listen(port, ()=>{
                console.log(`Server running on port ${port}`);
            })
     - Start server - using the node command to run the index.js.

    If the server is running, you can access it on the browser using localhost:3000.
    Localhost refers to the computer
    Port is the door to the server on which you grant access to the application. There are thousands of ports that can be utilized so it can listen to several requests. Can therefore run different applications, hardware and devices connected to the server.

    Can check the ports listening to services from outside for windows using "netstat -ano | findstr "LISTENING"" command.

103. HTTP Requests
    HTTP stands for HyperText Transfer Protocol - Is a language that allows computers to talk to each other on the internet. Similar to the (Language) Thought Transfer Protocol in humans.
     
    Request Vocab:
     - GET - When you want to request a resource from the server.
     - POST - Sending a resource to the server.
     - PUT - Update methods, update the record by replacing it completely
     - PATCH - Update records by patching the record.
     - DELETE - remove/delete resources from the server.
    
    By installing express, then using the listen method as specified earlier, when you try accessing the application, it throuws an error: cannot GET/
    This is because the application can not find the root redirection. Can be resolved by adding some code to your index.js as:

        app.get("/", (req, res) => {
            console.log(req.rawHeaders);
        })
    
    If the above code is added and one tries to access the site on web, alot of information will be logged on the terminal running the index file. This includes the request, host, OS, and lots of other information that we can tap and utilize in our response.

    If the req is submitted successfully, we can then send back a response as:

        app.get("/", (req, res) => {
            //console.log(req.rawHeaders);
            res.send("Hello, World!");
        });

    If you stop and restart the node server then try accessing the site, then the "Hello, World!" string is printed out.

    NODEMON:
    So you don't have to restart the server all the time, you can utilize the nodemon tool. Nodemon automatically restarts the node application when a file is changed. To use it then first install the nodemon package:

    npm install -g nodemon - "-g" installs the application globally.
    
    instead of running the server using node:
        node index.js
    
    use:
        nodemon index.js

    ENDPOINTS:
    If writing a letter to someone in Europe, your endpoint will be /Europe.
    So the default endpoint is usually set to root (/)
    Any other endpoints will be set say for about => localhost:3000/about

104. Postman:
     HTTP is for client computers to communicate with the Server-side.
     We can raise a request to the server and get a response from the server.
     As response, we can send text, HTML or response (coded responses).

     HTTP Response Status Codes:
     Response indicate whether a specific HTTP request has been successfully completed. They are grouped into 5 categories as per MDN docs:
     1. Infromational responses (100 - 199)
     2. Successful responses (200 - 299)
     3. Redirection messages (300 - 399)
     4. Client error responses (400 - 499)
     5. Server error responses (500 - 599)
     
     Can read more on:
        https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

    In the above URL, it highlights that the various codes:
    The most used include:
    - 200 Ok - E.g when working with a get, put, post etc and the server responds with a message. The 200 status code is returned.
    - 201 Created - especially when working with put or post but no message is returned from the server but still the put/pos was successful.
    - 404 - When server cannot find the requested resource because you typed the wrong url.
    - 301 - allows for redirection of the url permanently. E.g if you type googl.com the browser automatically redicts you yo google.com
  
    HTTP return Codes Cheat Sheet:
    - 1** Hold On
    - 2** Here you go
    - 3** Go away
    - 4** You (client) screwed up
    - 5** I(server) screwed up
  
    POST Request:
    Usually made from a form including the signup page etc. It goes to a server via post request. The server will do something with the request then returns a 200 or 201.

    If creating the backend without a frontend, you can use post man to test the created endpoints.
    On postman you can specify the method you want to use, add in the url/endpoints and values to the body e.g the x-www.form-urlencoded option to submit the data via postman.

    Note that in an instance where you have downloaded a project or cloned it from Git, it does not alway come with the node_modules. It only has the package.json that has the npm dependencies. To install the dependencies, you run the command:

        npm install

    This will help only backup that which matters and make your backups/repositories lighter.

    PUT Request:
    With a put request, if you want to change one of the user details, you must load all the fields then resubmit them afresh. If any of the field is left blank when resubmitting, its value will be cleared in the database.

    PATCH Request:
    Similar to PUT in terms of it being used to update records. However, it is better when you don't want to pull all the records. Only want to update one or a few of them while leaving the rest intact.

105. Introduction to Middlewares:
    A middleware is something that sits in between the raw request and before it is process. The middleware works with the requests before they get processed and reach their final decisions.

    Middlewares:
    - Pre-process the request - change aspects of the request before its final routing
    - Logging the requests, what is the status 
    - Authentication
    - Process any errors in the requests before they go to the handlers.
  
    A commonly used middleware is Body Parser:
        - It can check through the body headers before it is submitted to the handlers.

    A commin practice is the use of the public folder wthin the project folder. The public folder is where you find all static files i.e, html, css, images etc.
    In sending your response, you can also use:

        res.sendFile() - Which requires the exact path of the file we want to send back.

    To use sendfile, there is need to import a few packages and do somebit of configure=ation as below:

            import express from "express";
            import { dirname } from "path";
            import { fileURLToPath } from "url";
            const __dirname = dirname(fileURLToPath(import.meta.url));

            const app = express();
            const port = 3000;

            app.get("/", (req, res) => {
            res.sendFile(__dirname + "/public/index.html");
            });

    The imports from path, url, and the dirname(fullURLToPath(import.meta.url)) will help get the path up untill where the current file resides. One does not have to type it in manually.

    From the index.html file, the goal is to submit the form content to the path on the action property of the form element. We therefore need to have a route handler for the post request to that path then use body parser as piece of middleware to pass the infor coming from the form then can login under request.body.

    When working with a middleware:
    - Use the app.use([path,] callback[,callback...]) method.
    - It must be created before any of the route handlers.
    - In the use method add your middleware in this case bodyparser and tell it the kind of data we want to pass and in our case is urlencoded since it is an html file. Inside the urlencoded set the extended to true or false.
    - Now every request has a body and we can use the req.body to access the submitted data.
    - Below is the code:
  
        import express from "express";
        import { dirname } from "path";
        import { fileURLToPath } from "url";
        const __dirname = dirname(fileURLToPath(import.meta.url));
        import bodyParser from "body-parser";

        const app = express();
        const port = 3000;

        app.use(bodyParser.urlencoded({extended:true}));

        app.get("/", (req, res) => {  
        res.sendFile(__dirname + "/public/index.html");
        });

        app.post("/submit", (req, res) => {
        console.log(req.body);
        })

        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });

    Therefore the middleware is key in ensuring  we have access to some functionalities which we couldn't if we used the normal express or node features.
    
106. Custom Middleware:
    With Middleware we have:
    - Pre-processing middleware
    - Authentication
    - Error handling request
    - Logging middleware

    Body parser is a preprocessing middleware.

    An example of the Logging middleware is:
       
        morgan - from dexter show.

    Need to install it import and use as middleware.
    Normally, we submit a get request and it hits get url and we expect the response.
    With the morgan middleware, we can be able to do logging earlier even before we get to the get handler. Can log the date time, the method, the success, where it came from etc.
    
    Note:
    - with the middleware, some logging will be done even if the url the user tried to access does not exisit. It will log the request and the time it took and return error 404.

    Custom MiddlewareÑ
    In all middlewares we use the app.use() method to specify a middleware we'd like to use when the request comes in. In the use method we have a request, response and next. The next function defines when we can exit from the middleware and execute other blocks of code:

        app.use((req,res,next) => {
            console.log("Request method: ", req.method);
            next();
        });

    The middleware can be created in scratch.

    If we have several middleware, then the next redirects to the next app.use(). Therefore the order of the middleware matters.  

    The next() method is very key that sometimes it can be forgotten. The effect of not adding it is the code keeps on executing even when the code is done executing.

    WIFI-KEY COMMAND: netsh wlan show profile Daniel key = clear

    When implementing you can write code directly in the methods or use the custom middlewares which make your code easy to read. The 5.5 Secrets Project Challenge can be implemented in either of the below options:

            import express from "express";
            import bodyParser from "body-parser";
            import { dirname } from "path";
            import {fileURLToPath} from "url";

            const app = express();
            const port = 3000;

            const __dirname = dirname(fileURLToPath(import.meta.url));
            app.use(bodyParser.urlencoded({extended:true}));

            app.get("/", (req, res) => {
                res.sendFile(__dirname + "/public/index.html");
            })

            app.post("/check", (req,res) => {
                console.log(req.body["password"]);
                if (req.body["password"] === "ILoveProgramming") {
                    res.sendFile(__dirname + "/public/secret.html");
                } else {
                    res.redirect('/');
                }
            });

        Better approach:

            import express from "express";
            import bodyParser from "body-parser";
            import { dirname } from "path";
            import { fileURLToPath } from "url";
            const __dirname = dirname(fileURLToPath(import.meta.url));

            const app = express();
            const port = 3000;

            var userIsAuthorised = false;

            app.use(bodyParser.urlencoded({ extended: true }));

            function passwordCheck(req, res, next) {
            const password = req.body["password"];
            if (password === "ILoveProgramming") {
                userIsAuthorised = true;
            }
            next();
            }
            app.use(passwordCheck);

            app.get("/", (req, res) => {
            res.sendFile(__dirname + "/public/index.html");
            });

            app.post("/check", (req, res) => {
            if (userIsAuthorised) {
                res.sendFile(__dirname + "/public/secret.html");
            } else {
                res.sendFile(__dirname + "/public/index.html");
                //Alternatively res.redirect("/");
            }
            });

            app.listen(port, () => {
            console.log(`Listening on port ${port}`);
            });

    Body parser is now a commonly used functionality and has since been added into the express framework. You don't have to install it as a package. You can instead use express to access it as:

        app.use(express.urlencoded({extended: true}));

    But the earlier is much better since you can figure out which middle it is that you are working with. Prefer using bodyparser.


SECTION 25: EMBEDDED JS (EJS)
107. What is EJS:
    If you want to pass information to a webpage in express, we can use bodyparser middleware to access the information submitted from the form and using the req.body["name"] we can pass that informatiion back to the user. If the form is bulky then it might be abit difficult to pass or send an entire html through the res.send() method, this approach will clutter our index.js and therefore there is a need to separate our backend from the front end.

    Separate index.js (server side) from the HTML and CSS hence the need for templating.
    We use templating languages e.g., Twigga, Jinja, handlebars, pug, ejs. This templates are particular to different languages.

    For JS EJS is the most used templating language. It works by having a little javascript module that can run Javascript code inside a HTML file. It ends with .ejs file extension which is html with some bit of JS enclosed within specific special syntax e.g,

        <body>
            <ul>
                <% for(let i = 0; i < items.length; i++) { %>
                    <li>
                        <%= items[i] %>
                    </li>
                <% } %>
            </ul>
        </body>
    
    With templating, instead of using res.send() we use the res.render() method to which we specify the file we want to render then add a js object to pass the properties. It is a key - value pair:
        Handler:
            app.get("/", (req, res) => {
                res.render("index.ejs",
                {name: req.body["name"]});
            });


        On the index.js:
            <body>
                <h1>Hello <%= name %></h1>
            </body>

        In VSCode install EJS Language Support by DigitalBrainstem.

108. EJS Tags:
    There are quite a few EJS tags the common ones being:
    1. <%= %> - Whatever is on between will be interpretted as JS output
    2. <% %>  - Executable JS Code. Can now write JS inside html e.g., a console.log(). This does not give an output or won't show on the browser. (JS Execute)
    3. <%- %> - Whatever is in between will be interpretted as HTML. Allow pass HTML code. <h1>Hello</h1> will print out Hello and not <h1>Hello</h1> (Render HTML)
    4. <%% %%> - Escape. To show the angle bracket and percentage tags then add the percentage tag to avoid having it interpretted as ejs. (Show <% or %>)
    5. <%# %>  - This allows print out a comment. (Stop execution)
    6. <%- include("<FILE NAME>") %> - Indert another EJS file within another EJS file. e.g., <%- include("header.ejs") %>
    
    The structure of the EJS tag is always the same. It starts with <% and ends with %>.

    Consider:
    index.js:
        let bowl = ["Apples", "Oranges", "Pears"];

        app.get("/", (req, res) => {
            res.render("index.ejs", {fruits:bowl});
        });

    index.ejs:
        <body>
        <ul>
            <% for(let i = 0; i < fruits.length; i++) { %> <%# This line shows executable code and wont be printed out as an output%>
                <li><%= fruits[i] %></li> <%# Shows JS output and will be visible on the browser%>
            <% } %>
        </ul>
        </body>

    as an alternative to the above for loop, we can also use the foreach loop as:
        <% items.forEach((fruit) => { %>
            <li><%= fruits[i] %></li>
        <% }) %>

109. Passing Data to EJS template:
     Data can be passed from the server to EJS and back.

     Server to EJS:

     To pass data from the server to EJS we use the res.render() method, with the ejs file to be rendered and the kind of data that we want to render. The data has a property value that can then be picked up inside the EJS file.

     What if there is no Data?
        This can be because the data is corrupted or we forgot to pass in the data while calling the res.render() method:

        server:
        app.get("/", (req, res) => {
            res.render("index.ejs");
        })

        EJS:
        <ul>
            <% fruits.forEach((fruit) => { %>
                <li> <%= fruit %> </li>
            <% }) %>
        </ul>

        Such can be handled in JavaScript by using an if statement i.e., adding an if statement to check whether the expected variable has data or not:

        <% if (fruits) { %>
            <ul>
                <% fruits.forEach((fruit) => { %>
                    <li> <%= fruit %> </li>
                <% }) %>
            </ul>
        <% } %>


    However, this does not work in EJS because it is looking for the variable fruits which does not exist in its environment and this crushes the code. Therefore in EJS we use the locals variable to check all the variables that are being sent bu the res.render. The locals variable always exisits and we can use it to check the variable passed to EJS:

        <% if (locals.fruits) { %>
            <ul>
                <% fruits.forEach((fruit) => { %>
                    <li> <%= fruit %> </li>
                <% }) %>
            </ul>
        <% } %>

    
    EJS to Server:
    We can pass data backwards using the POST request. We ensure the form fields have a name that can use the name in the forms:

    EJS:
    <form action="/submit" method="POST">
        <input type="text" name="fName" placeholder="First name">
        <input type="text" name="LName" placeholder="Last name">
        <input type="submit" value="OK">
    </form>


    Server:
    app.post("/submit", (req, res) => {
        res.render("index.ejs", 
        {name: req.body["fName"]}
        );
    });

110. EJS Partials and Layouts:
     In most cases, you need to add stylesheets, javascript bootstrap etc, we might need to use static headers and footers across various pages in our website. This implies, there might be need to capture lots of repeated code across the pages.

     The files like images, css etc are static and do not need to be passed in every now and then. Instead:

     Create a public folder in which you add all static files e.g., images and styles.
     Use the express.static("public") middleware to access the static files as: app.use(express.static("public"))
     Express will treat everything inside the public folder as static files. The files are then accessed relative to the public folder.

     Say you have a styles folder within the public folder, and in the folder is the layout.css then add the link:

     <link rel="stylesheet" href="/styles/layout.css">

     The above is added to the ejs header file.

     Inorder not to have a tone of repeated code across all our EJS files, we can use the features of EJS e.g., templating that can allow insert bits of dynamic code to the body of our website.

     We can also use EJS to reduce the bunch of repeated code by use of partials: 

        index.ejs:

        <%- include("header.ejs") %>

            ---body---

        <%- include("footer.ejs") %>

    For this to work the files must be in the same folder as the index.ejs file.

SECTION 26: CAPSTONE PROJECT:
111. Create a Blog web Application:
    See project in 20.0 > 4.5. Capstone Project 3 - Blog Web Application.
    To achieve this without storing the content in a database, I used the following libraries:
    1. Express
    2. ejs
    3. body-parser
    4. express-session - To store the conntent instead of submitting to a server
    5. Multer - To allow upload images, and get path to be added to the blog view
    6. uuid - To allow generate a unique identifier for each blog item submitted.
     

Section 27: GIT, GITHUB AND VERSION CONTROL:
112. Introduction tyo Version Control and Git:
     The focus will be on:
     - How to clone a project,
     - Version Control
     - How to Fork
     - Pull Requests
     - Merge repositoties

    Version control allows create safe points, where if the code file is messed up at some point and opt to fully burn it and roll back to the last safe point, we can achieve this by using the compare feature or roll back your code to the specific version that you want.

113. Version Control Using Git and the Command line:
     To initgialize Git, we use the command:

        git init

    This creates a new hidden directory named .git;

    Inorder to start tracking the changes in the file, you need to add the files to the staging area. Allows choose the files that you want to track. To check the files currently being tracked in your staging area use the command:

        git status 

    Any files that are currently not being tracked in your working directory will be marked in red.

    To track a specific file then use the command:

        git add <filename> e.g., git add chapter1.txt

    We then can commit the changes that have been made to that file using the command:

        git commit -m "Initial commit"

    The -m allows you specify or describe what is being committed. By convention, always use present tense e.g,
        git commit -m "Complete Chapter 1"
    
    and not:
        git commit -m "Completed Chapter 1"

    You can see the commits you have made using the command:

        git log

    This returns the time the commit was done and by who
    It also has a hash that uniquely identifies the commit.

    If you have multiple files, you can not add each one of them separately. Instead use the command:

        git add .
    
    The log gives you the history of everything that has been committed over time.

    Git add - pushes the code to a staging area then the commit pushes the code to the repository. As oppossed to committing directly to the repository is that we might want not to track everything and by pushing the code to the staging area helps to establish what it is that we want to track.

    Our file is then in our repository and it is given a name and we can always use the checkout command to revert to the last position in our local repository:
        
        git checkout

    An example is if you have made changes on your files or by mistakes deleted your file, you can easily get back to a former stable version by using the checkout command. To confirm the files that have been changed/modified use the command:

        git status

    We can chack the differences between our current file and the already committed file by using the command:

        git diff chapter3.txt
    
    With this you can see what was changed. If minor, then one can choose to either copy and paste or revert everything:

        git checkout chapter3.txt

114. Github and Remote Repositories:
    By default most repositories are set to public and they can be accessed by anyone. Some of them being:
        flappybird game.
    This has helped contribute to open source technologies.
    One can review the code, see how other developers structure their code and even contribute to some of them to better the codebases and introduce new features.
    If developing new technologies, then you can easily create private repositories by marking them as private.

    Once the repository is created on github, it gives you hints of how to go about committing you code to it by either: 
    - Doing a desk setup
    - Create a new repository on command line
    - Push an exisiting repository from the command line
    - import code from another repository.
    
    To push to the remote repository:
    - git remote add <name> <url> - tells your local repository that you have created a remote repository in the internet and would like to transfer all your commits their. The name can be anything but preferrably it should use <origin>. This makes it easier for other developers to access your code:

        git remote add origin https://github.com/danielonsombi/Story.git;

    Then we can now push the code:

        git push -u origin master

    The above pushes the local to the remote repository using the -u flag which pushes it to the master branch.

    Once committed to the remote repository:
    1. Insights > Network - under this section one can view the various commits that have been made to various branches and from branches to the master repository.
    2. Code > Commits - shows all commits that have been made. If you click on it, one can see the details of the commits. By clicking on each of the commits, you can view the changes resulting from that particular commit.
     
    So we then have:

        Working Directory > Staging Area > Local Repository > Remote Repository.
    
    The main branch tracks the safe points. It is sequencial and saves your main progress.
    You can have a local repository completely imparallel with the remote repository and can always siync them using the push command.
     
115. Gitignore
    Allows set rules to prevent commiting certain files to you local and remote repositories.
    Say you have secret API keys and passwords that you do not want committed or hosted on an open platform like github.

    Other files that do with local settings and user preferences do not really have to be pushed to git so people can access them while forking files.

    This can be achieved by creating a hidden file using the command:

        touch .gitignore
    
    If the git ignore is added after the code has been pushed to a staging area, then you need to undo the commit then add them later on after the gitignore is fully setup:

        git rm --cached -r .  - Ther command removes everything from the staging area using the -r (recursive flag). The "." allows remove all.

    The following rules apply to gitignore:
    - # - used to comment
    - * - e.g., *.txt ignores all files with a .txt extension.

    While working with node, various dependencies should be ignored. Most of them have already been documented by the gthub team on:

        https://github.com/github/gitignore

    You can find the node specific gitignore on the link:

        https://github.com/github/gitignore/blob/main/Node.gitignore
    
    The file is premade and you can copy and paste it into the gitinore file.

116. Cloning:
    This clones the repository from the remote repository to your local repository.
    We use the command:

        git clone <url>
    
    Pulls down all the versions and commits of a particular remote repository to your working directory.
    It creates a copy of the project locally.

    The cloning is for you to have own copy and want to extend the functionality or found a bug and want to extend it.

    To clone the quakes game:

        git clone https://github.com/inolen/quakejs.git

    The game uses port 8080, ensure no other application is running on this port. If there is, e.g., business central, the server won't run

117. Branching and Merging:
    If we had version 1 and 2 from 2 commits, and we want to build something different/new feature, instead of continuing with the same code, we can create a new branch using the command:

        git branch <name-of-branch>
    
    On it we can add new features while updating the main project while we work on the experimental branch.
    With this we have two branches parallel to each other and if the branch was useful and would like to merge it to the main branch, we can merge the changes to the main branhc using the command:

        git merge <name-of-branch>

    There are usually multiple branches being built concurrently in huge projects.

    To view the branches in your project use the command:

        git branch

    An asterisc is used to mark the main/master branch.

    We can switch between branches using the command:

        git branch checkout <branch-to-switch-to>

    With git, there is a way of adding the git add and commit together but if new to git it is better to use them as separate commands.

    If you make changes to the master/main branch, and commit the changes locally, running the git log command before pushing them to the remote repository will show the last commit on your local repository and the last commit to your remote repository.

    Switching from one branch to the other reflects a change in the file content.

    If comfortable with the files that were created on the branch, then you need to merge them to the main branch. Always ensure you run sufficients tests.
    To do the merging, first switch to the main branch then use the merge command to merge the changes.

        git merge 

    This does not delete the branchz.

    Pushing the changes to github will show the network with the various branches and the various versions that were created. It aso shows the merge to the main at the end.

118. Forking and Pull Requests:
    If you have a remote repository and someone wants to make some changes to it, Then this cannot be done directly, the contributor can create a clone of your repository on their remote github server as one of their github account repositories. This is referred to as FORKING.

    This makes the file accessible to the contributors, and they will have full control of the product. This allows avoid making conflicted changes. 

    If the contributor FORKs the code base, they can then pull the project to their local repository and make the changes/contributions to the original code. If done with the changes, they can push the code to their FORKED remote repository.

    If the contributor wants the owner to merge the changes to the owners code, the contributor should raise a PULL REQUEST. It is called a pull request and not push request because it is only the owner who has the rights to change the initial source code. The owner is then to review the changes and if approved, they pull the changes  and hence the name.

    The approved changes will then be merged to the initial code and will now be reflected as a new commit.

    Once a FORK is made to you repository, github tracks this and you can view the list of contributors under: 
        
        Insights > Network

    The changes from the contributors/commits to the forked repository do not automatically reflect on the initial source/repository.

    The contributor can create a pull request under Pull Requests. This shows the base repository and head repository. On clicking create pull request, the changes to be included in the base repository will be highlighted. The request allows write a description as to why you'd like this to be included in the base repository. 

    Once the pull request is submitted by the contributor, it will be shown in the pull request section of the owners repository.

    This then allows the owner to review the code, and if approved, initiate a merge then confirm merge.
    This then updates the network diagram showing the fork, pull request and merge to the base repository.

    Spaced Repetition - Keep a list of the things you have done and at regular intervals review the concepts and things that you have learnt. Can make a small quiz for yourself. This are the moments that you get to learn as oppossed to listening to the recordings.

SECTION 28: APPLICATION PROGRAMMING INTERFACES (APIs):
119. Introduction to APIs:
    Software is eating the world - Everything is now software oriented and we ought to think of communication between those pieces of software.
    If we have two software that needs to speak to each other there is need for an interface in between the applications so they can know how to communicate.

    An API bridges the communication between different pieces of software.

    Say you want to create a diary and would like to capture the weather for that specific date. You can create a link so the user can click on it and browse the weather details. However if there is a website that already has the weather details and is updated regularly, then you can use its APIs to pull such information to your website.

    You then make a request to the website from your website to the API and then the site will respond with a response with some data. This is a GET request.

    The API tells you how to get the data and the kind of response to expect.

    Or say you want to forward mail notifications to users through mailchimp. This can be achieved through a POST request to mailchimp's APIs.

    Say there is a plant you want to trigger its watering system through an arduino board. You can define an API to listen to requests from your application so the watering process can be executed. The Arduino board can respond with the amount of water, moisture etc.

    The commonality in APIs is that they are interfaces between software and by a set of rules or protocols, the pieces of s/w know how to interact with each other and what to expect from each other.

    There are various architectural styles that can be used. They include:
    - SOAP
    - REST:API
    - gRPC
    - GraphQL
    - etc
  
    Which one do we choose then?
    The best is to go with the JUST IN TIME learning - Learn what you need at the moment.
    REST API is the most common and most used architecture.

    REST API:
     RESTful api is an API that follows a particular set of rules with the most important of all being the use of HTTP protocols (GET, POST, PUT, PATCH, DELETE) to interact with the API.

     One of the common APIs is the wheretheiss:

        https://wheretheiss.at/w/developer

    With an example resource:
        
        https://api.wheretheiss.at/v1/satellites

    Example Response:
        [
            {
            "name": "iss",
            "id": 25544
            }
        ]
    
    Parameters:
        None

    AN API documentation can be compared to a MENU where you look through the menu of options then decide what you want.


120. Structuring API Requests:
    Note that currently we have a backend and frontend to which we can make requests from a frontend and get a response in return. This is a private API since it is your application communicating to its backend.

    However, if you need your server to interact with someone else's server then there is need to create a public API to aid the communication by exposing specific parts of your application for external communication.

    For test purposes, you can use:

        https://bored-api.appbrewery.com/

    1. API Endpoints - BaseURL/Endpoint e.g, random endpoint on the above API:
     
        https://bored-api.appbrewery.com/random
    
    2. Query Parameters - BaseURL/Endpoint<query parameters>:
     
        https://bored-api.appbrewery.com/endpoint?query=value&query2=value

        An example is where you want to filter activities:

            https://bored-api.appbrewery.com/filter?type=social&participants=2

        If using postman, as you type in the parameters, postman formats the url for you.
    
    3. Path Parameters - BaseURL/endpoint/{path-parameters}: 
        Here we add a parameter that is likely to change. Can be an ID, USERNAME, something specific that can identify a resource.

        This is different from the parameters because parameters are for filtering whereas the path parameters are for identification:

            https://bored-api.appbrewery.com/activity/3943506

121. What is JSON:
     Stands for JavaScript Object Notation. It is a way to format data that can be sent over the internet in a readable and efficient way. It is structured after a javascript object.

     The only difference between a JS object and JSON is that the property name is in between double quotes i.e., formatted as a string:

     example.json:

        {
            "name": "Jack Bauer",
            "age": 48,
            "city": "Santa Monica",
            "education": [
                {
                    "degree": "B.A English Literature",
                    "University": "UCLA",
                },
                {
                    "degree": "M.S. Criminology & Law",
                    "university": "UC Berkeley",
                },
            ]
        }

    index.js:

    const jack = {
        name: "Jack Bauer",
        age: 48,
        city: "Santa Monica",
        education: [
            {
                degree: "B.A English Literature",
                University: "UCLA",
            },
            {
                degree: "M.S. Criminology & Law",
                university: "UC Berkeley",
            },
        ]
    }

    The difference is JSON is serialized into a string because data is mostly being transfered over the internet whereas JS is more relaxed cause the code can be interpretted by the editor or code interpretter.

    IOnstead of having the large JS transfered, we have a more compact code without the many spaces in the JSON format which is then transferred across the internet. It is a string from the start to the end and it is serialized. 

    When it gets to the end it can then be re-expanded to a reusable format. When you receive the JSON, it is not easy to read because it is in a format difficult to read as human in its FLAT PACK NOTATION. To make it readable use a JSON visualizer e.g.,

       https://jsonviewer.stack.hu/

    When you write code and would like to send code across, you need to perform serialization i.e turning the JS Object to JSON - flat pack notation. This is done by:

        const jsonData = JSON.stringify(data);

    This will transform the javascript object to a string that keeps all the commas, nesting, relationships etc.

    When unpacking the JSON file, we use another JSON method called parse:

        const data = JSON.parse(jsonData);

    For random background images/styling, you can use the website:

        https://pattern.monster/


122. Server-side API Requests:
    The goal is to have our server raise a request to another server through a public API and in return receive a response from the other server.

    The code would be quite long if using the native node module such as https:

        import https from "https";

        app.get("/", (req, res) => {
            const options = {
                hostname: "bored-api.appbrewery.com",
                path: "/random",
                method: "GET",
            };

            const request = https.request(options, (response) => {
                let data = "";
                response.on("data", (chuck) => {
                    data += chuck;
                });

                response.on("end", ()=>{
                    try {
                        const result = JSON.parse(data);
                        res.render("index.ejs", {activity: data})
                    } catch (error) {
                        console.error("Failed to parse response:", error.message);
                        res.status(500). send("Failed to fetch activity. Please try again");
                    }
                });
            });

            request.on("error", (error) => {
                console.log("Failed to make request:", error.message);
                res.status(500).send("Failed to fetch activity.Please try again.")
            });

            request.end();
        });

    The native node module is a bit length. It is much simpler to use the axios package which knows what purpose we are trying to achieve. It makes the responses quite simple:

        import axios from "axios";

        app.get("/", async (req, res) => {
            try {
                const response = await axios.get("https://bored-api.appbrewery.com/random");
                res.render("index.ejs, {activity: response.data }");
            } catch (error) {
                console.error("Failed to make request:", error.message);
                res.status(500).send("Failed to fetch activity. Please try again");
            }
        });

    axios is promised based and we can use: then or async to process the request.
    await means that the rest of the code will be executed after the response has been received from the called endpoint.

    With axios we can access the data without needing the JSON.parse method. We can tap into the data by simply using the response.data.

    Can view the axious package on the npm site.

    Can use axious with the following methods (Request method aliases):
    axios.request(config) 
    axios.get(url[,config]) 
    axios.delete(url[,config]) 
    axios.head(url[,config]) 
    axios.options(url[,config]) 
    axios.post(url[,data[,config]]) 
    axios.put(url[,data[,config]]) 
    axios.patch(url[,data[,config]]) 
    axios.postForm(url[,data[,config]]) 
    axios.putForm(url[,data[,config]]) 
    axios.patchForm(url[,data[,config]]) 
    

123. API Authentication
    Think of them as 4 tiers:
     - No Authentication
     - Basic Authentication
     - API Key Authorization
     - Token Based Authentication 

    a. No Authentication (https://bored-api.appbrewery.com/)
        e.g., the bored-API does not require authentication. They can controlled using a rate limit e.g., 100 requests in 15 minutes, so one does not hit it so much and end it end up making the API go down for everyone. Check each IP Address and count its requests per minute then decide on the limit.
    b. Basic Authentication
        Provide a username and password when making an API request. You are assigned the user name and password as assigned by the provider. This submits a base64 encoded string in the header of the request. 
        Base64 takes text (ASCII) which then gets converted to 0s and 1s then convert it to another character. E.G ASCII <Man> is converted to <TWFu> see Snips > Base 64 for Man.png.
        Each character is represented in binary. consider Snips > Binary.png 
        The username and password are converted to <username:password> then converted to a Base64 string which is then submitted through the Authorization header and pass it a long when making the request.

        To practically test it, we will use the Secrets API(https://secrets-api.appbrewery.com) and Postman. The API has different endpoints and different levels of authentication.
        First we use a no authentication to register ourselves by submitting the username and password, then the credentials will be used for other levels.

        For Basic Authentication: 
        1. Use the https://secrets-api.appbrewery.com/register URL to register your username and password by adding the desired name and password das key and value in the x-www-form-urlencoded section of the body tab in postman. If this returns status code 200, use it in step 2.
        2. Use the https://secrets-api.appbrewery.com/all?page=2 URL or use https://secrets-api.appbrewery.com/all url and under the Params section of postman, add the page key and 2 as the value. Under the authorization section, select Basic Auth, then input the earlier created username and password.
        3. On pressing the send button, postman automatically generates the base64 string which is added to postman's headers section as a value to the authorization key. If the value is copied to a base 64 decoder e.g., base64decode.org, then the values <username:password> will be returned.

    c. API Key Authorization
        Authentication - if you have a user they can authenticate themselves to your service i.e you are loging in or registering. (Allows you to be identified as a user to the API provider)
        Authorization - Is simply a client who is allowed to use your service with an API key that might be associated with a user in which case they are authenticating themselves then getting an API Key to authorize themselves to use your API. (Allows you use the API)
        Alot of the APIs use the API Key.

        E.g., if you have registered on google maps then you will use an API key to call different apis such as the places API, Geocoding API etc. This also helps track the request per key on which basis some organizations do their billing.

        For API Key Authorization:
        1. Use the URL https://secrets-api.appbrewery.com/generate-api-key to generate the API Key
        2. The use the filter endpoint https://secrets-api.appbrewery.com/filter to make your request.
        3. Under the params, specify the value of the score parameter. You can add the api either as a parameter or capture it under the Authorization section by changing the type to API Key, then setting the key to apiKey, and value to the key generated in 1 above. Depending on the docs, it may require the key to be added either as a query parameter or header, under the add to select the value that applies to your specific request in this case is query params.

    d. Token Based Authentication
        It is the highest in terms of security. 
        Basic authentication is username and password and one can easily decode it to get the username and password and this can be intercepted. Most users will use HTTPs to secure the data being passed back and forth. If the password is less secure there is a risk.

        API Key authorization is a little bit secure since we ain't passing a username and password, instead we use a key that can be deleted and regenerated, can have caps on it to set say 1000 requests a month, if one gets hold of it, they can not access the password and key.

        Token Based Authentication is more secure cause we are getting the user to use a username and password then generate a token to be used with the API.It is the token that is used to interact with the API. Oauth 2.0 is currently the industries standard.
        Behind the scenes you have a user who signs onto the API providers website, the provider then generates a token and the token is passed back to you as a third party then can use it to interact with the API.
        Say developing a weather APP and want to pull some events from the users calendar, check the weather for the date then send an alert to the user and ask them to bring an umbrella to the event.
        Might need to submit the username and password so to get this information, however, we can also use token based authentication to get the user to signin with google, this will then generate a token that will allow us to interact with the google calendar API to get their events and meeting we can interact and get all this information without ever needing their user name and password. It is a way more secure approach.

        For Token Based Authentication:
        1. The secrets API has an endpoint protected by the bearer token authentication which uses the username and password to authenticate themselves on the server then the server generates a token that will be used as a proxy for anyone else to interact with that API as a user.
        2. Use the url https://secrets-api.appbrewery.com/get-auth-token to generate the token to be used for API authentication. 
        3. Once the token is successfully generated call https://secrets-api.appbrewery.com/secrets/1 url. Under the Authorization tab change the value to Oauth 2.0 then paste token value. click on send to submit your request.
        4. This should return the requested secret. 
        5. Mostly used to post, change or delete something on behalf of a user.

124. REST APIs
    We can make get requests by using the try catch block and within the try block use axios.get("URL", {}); This information can be obtained from the axios documentation in npm. You can chain the .then, .catch and .finally to the get method. 
    Different approaches can be used:
    - Chaining - .get().then().catch().finally
    - Async - async await axios.get()

    The two are different in that both come from the Javascript promises API but work slightly differently. The then() method gets triggered when the get() method is done executing. Inside then then block you can add multiple .thens followed by the catch and finally methods.

    The more modern approach introduced in 2017 is the use of the async and await method. The use the two keywords. To the function, the async keyword is added before it followed by the name of the function as:

    async function fxn () {
        await axios.get
    }
    What this means is wait till the line is done executing before the next line is executed.

    As oppossed to the chaining approach, this one is easier to debug. The chaining method, especially where so many then() methods have been used, it might get messy to debug.

    The recommendation is to use the more modern approach which is the async await.

        async function getUser() {
            try {
                const response = await axios.get('/user?ID=12345');
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }

    For an API to be fully RESTful, it should be able to handle all routes as specified in the below list:
      - GET
      - POST
      - PUT
      - PATCH
      - DELETE

    1. POST requests using Axios:     
        With axios.get, we only have two optional parameters i.e., the URL and Config as 
            axios.get("URL", config). 
        However, with the POST method, there is a third parameter which is data which can also be referred to as body and so the axios post method can be defined as:
            axios.post("URL", body, config):

            
            app.put("/", async(req, rs) => {
                try{
                    await axios.put("URL", body, config);

                    res.sendStatus(200);
                } catch(error) {
                    res.status(404).send(error.response.data)
                }
            })


        The data/body parameter is the body which could include the form data e.g., the username and password that is being submitted to the endpoint.

        The config parameter helps pass other parameters such as the headers for authentication etc. Several other settings such as parameters among others can also be passed in as configs.

    2.   PUT requests:
        Provides all of the data we want to update in the backend. It replaces everything in your data with whatever you have in your PUT request. It is pretty identical to the POST request except for the use of the PUT keyword:

            app.put("/", async(req, rs) => {
                try{
                    await axios.put("URL", body, config);

                    res.sendStatus(200);
                } catch(error) {
                    res.status(404).send(error.response.data)
                }
            })

    3. PATCH request
        With the patch request you can provide specific data that you want to update without necessarily replacing the entire data set. Other than the key word, the rest is similar to the PUT method.
    
    4. DELETE method
        The delete method is similar to the get method in that it takes two parameter, "URL" and config:

            app.delete("/", async(req, res) => {
                try{
                    await axios.delete("URL", config);
                    res.sendStatus(200);
                } catch (error) {
                    res.status(404).send(error.response.data)
                }
            });

    While working with forms, the target url can be defined in two different section:
    1. Form tag as action - 
        <form id="myForm" action="/secret-api" method="post">
        </form>
    
    2. On the button:
        <form id="myForm" method="post">
            <input id="get" type="submit" value="GET" formaction="/get-secret">
            <input id="post" type="submit" value="POST" formaction="/post-secret">       
        </form>

        This option is often used when you have multiple buttons in the same form that should be calling different URLs.

SECTION 29: CAPSTONE PROJECT
125. Use Public API



SECTION 30: BUILD YOUR OWN API
126. Building yout own APIs
    We have a number of open/public APIs cutting across almost are industries.
    APIs make development much faster, instead of developing everything from scratch, collecting data cleaning, building services, algorithms etc, you can develop on top of other peoples APIs to achieve the same goal.

    A good resource to check is Rapid API, which is a company allows collects and allows pple to host APIs that customers can consume from being able to cut development type and that is why you pay for it. It mostly has paid APIs (the Amazon of APIs). They have a few free APIs but mostly uses paid APIs.

    https://rapidapi.com/hub

    What makes an API monitisable, valuable enough to have it on rapid api:
    - Data Collection - Large collections of data. E.g a list of recipe, or weather
    - Algorithm/Service - A unique algorithm that might be needed by a number of people. E.g looks at any two coordinates and get the distance or how long it can take a car to get there or chat GPT which took alot of years to achieve and paid for  because of how valuable their algorithm is.
    - Simplified Interface - E.g., order a pizza

    Another open source API using node is node-dominos-pizza-api:

    https://github.com/RIAEvangelist/node-dominos-pizza-api

    Can checkout the code on github.

    Internal APIs.
    As opposed to the public APIs, say you work at a company and need to work on a bunch of inventory and would like to keep track of them or sell encyclopidea, you need to check how many have been sold and which haven't or might want to know the addressed that have been visited already so you don't have to double up agents. Private/Internal APIs are basically not documented and we haven't promised to support it. It is something not supported for external use unless you put in place security features in place. It doesn't mean it can't be accessed. It is a huge category where people want to know what are the methods in various companies private APIs.

    REST: API:
    REST - REspresentational State Transfer API. This are a bunch of rules that describe how an API should be (What makes an API RESTful):
    - HTTP Methods
        Uses standard HTTP methods:
            - GET
            - POST
            - PUT
            - PATCH
            - DELETE

    - JSON Output
        Should have a standard data format it responds with. This is a response that is given back to the client.

    - Client - Server
        Client and server are not on the same system, completely separate and are able to message each other on the network to send a request and receive a response.
        
        This makes it possible to scale, evolve, be developed by completely different people and can be scaled easily

    - Stateless
        Each request from client to the server should contain all the information needed to process the request. The server should not in anyway be storing the client side state or data between requests. Each single request can be complete (with all the server needs) and each single response complete without need to know what happened previously. This allows better scalability of the API and simplifies server side implementation. This allows serve many clients and many requests.
    - Resource-Based
        Centered around resources using a unique resource identifier or locater in order to locate resources (URI/URL). URL is just an address for a particular resource and is a type of URI. Identifies that resource in an API.

    The internet is considered one of the most successful implementation of the RESTful architecture because we have resources in the URLs, we work with the server using http protocal, adn get back standard data formats such as JSON, XML, JS, HTML etc.
    We also have the client and server separated, the client is the person using the browser and server, computer holding the data that should be served when one requests a particular webpage.
    The internet is pretty much stateless and each request has everything required in order to determine what the response should be.

    And since studying web development it is important to understand how to build REST APIs.

    We'll be building the JokeAPI:

127. Creating GET Routes:
     To see what our API should look like, you can open the docs which get automatically generated when you creatre a new postman collection:

     https://documenter.getpostman.com/view/6048123/2s9XxsTv8Y

     Not that such a documentation can be created for any collection in postman. All you need to do is create the requests with their headers and some data then right click and click view documentation.
     To be viewed on the web, click on the publish button on the top right side of Postman. This will generate a unique URL that can be accessed publicly.

     The published URL will show the data request format and in most cases it is set to use cURL.
     It also shows the kind of response you should expect on request which in this case is JSON.

     The project 6.0 DIY API includes an array of Jokes which are to be used in creating the API.
     To send a response back to the requester, we use the res.json() method which takes a JavaScript object and converts it to JSON and sends it back as a response.

     Get specific joke:
        We use the format: http://localhost:3000/jokes/:id
        The :id, allows us to tap into a specific URL or path parameter. Can do this by going to the Params part of postman and under path variable add a key and value.

        Postman reformats the request as:
        http://localhost:3000/jokes/<value> => http://localhost:3000/jokes/2

        Note that when working with get, we can use either query parameters ( accessed using req.query) which are in the format:
            http://localhost:3000/jokes?id=2

        or use the the request params (accessed using req.params) which are in the format:
            http://localhost:3000/jokes/:id

        When calling such endpoints, at times its is necessary to ensure that the passed in id has the right data type. And since the id is passed in as a string, two approaches can be used:
        
        Approach one: Using the "==" Operator.
        This is a loose comparison, in this case the type does not matter. JS will perform a type comparison if necessary.
            app.get("/jokes/:id", (req, res) => {
                const joke = jokes.find(j => j.id == req.params.id);
                res.json(joke);
            })

        Approach two: Using the "===" operator:
        This operator says that the left hand side must be strictly equal to the righ side including the data type. If the left is a string and the right is an integer even though they are both equal, this check doesd not pass.
        For this to work, there is need to convert the string to an integer as below:

            app.get("/jokes/:id", (req, res) => {
                const id = parseInt(req.params.id);
                const joke = jokes.find(j => j.id === id);
                res.json(joke);
            })

        for clarity sake, and so you don't assume anything, it is good practice to use the later that the former.

        To find a joke, we use the JS fin() method. It takes an array and uses the .find() method that expects a callback that return true.

            array.find(callback);
        

        When using query parameters, the approach is a bit different from that of a specific id. This is meant to filter by a specific parameter or multiple parameters e.g., 

            http://localhost:3000/filter?type=Wordplay

        The parameters should not be part of your URL, they should rather be pulled using the req.query method. This is where the documentation come in handy. It tells the world what parameters are expected by our endpoint and how they are speclled and how many are required and which ones are optional. Can use either of this approaches:

            app.get("/filter", (req, res) => {
            const { type } = req.query;
            let filteredArray = jokes;

            if (type) {
                filteredArray = filteredArray.filter(j => j.jokeType.toLowerCase().includes(type.toLowerCase()));
            }

            res.json(filteredArray);
            })

        or:
            app.get("/filter", (req, res) => {
            const type = req.query.type;
            const filteredActivities = jokes.filter((joke) => joke.jokeType === type);
            res.json(filteredActivities);
            });
128. Creating POST, PUT, and PATCH Routes:
     POST Request:
        To Post or add to the array, we use the POST method. With the post method, different approaches can be used within the call back, If the form being submitted is the same to the array parameters then with bodyparser, you can accessed the form data as: 
            
            const { jokeText,  jokeType } = req.body;

        If not, then there is need to reassign them as below:
            app.post("/jokes", (req, res) => {
            const newJoke = {
                id: jokes.length + 1,
                jokeText: req.body.text,
                jokeType: req.body.type,
            };
            jokes.push(newJoke);
            console.log(jokes.slice(-1));
            res.json(newJoke);
            });

        Use the push method to add the new object to your array.
        You can also use the slice method as shown to access the very last item added to the array.

    PUT Request:
        This is a complete update. Provide all the fields. We'll need the id to identify the item in the array. The id is kept constant can therefore use either:

            app.put("/jokes/:id", (req, res) => {
            const id = parseInt(req.params.id);
            const replacementJoke = {
                id: id,
                jokeText: req.body.text,
                jokeType: req.body.type,
            };

            const searchIndex = jokes.findIndex((joke) => joke.id === id);

            jokes[searchIndex] = replacementJoke;
            // console.log(jokes);
            res.json(replacementJoke);
            });

        or still this achieves the same goal:

            app.put("/jokes/:id", (req, res) => {
            const id = parseInt(req.params.id);

            //Can also use the findIndex method. See the solution.js.
            const joke = jokes.find(j => j.id === id);
            joke.jokeText = req.body.text;
            joke.jokeType = req.body.type;

            res.json(joke);
            })

    PATCH Request:
        It a little update to a complete resource. Most often what we will be using when making updates. You don't want to update the entire resource. It will hit the path parameter, search to find the particular id and see what they want to replace

        With patch, the id must be submitted. When doing the patch, we need to reconstruct our replacement joke. The only thing we can patch the text or body and check if it has a value, if it does, then use the new value else grab the text from the existing joke:

            (jokeText: req.body.text || existingJoke.jokeText)

        One can also opt to use the if else statement to achieve the same:

            if (req.body.text) {
                jokeText = req.body.text
            } else {
                jokeText = existingJoke.jokeText
            }

        But the earlier is abit simple to use though less readable.

129. Creating the DELETE Route:
     You can use different methods when deleting items from an array.
     - Splice - it takes an index and amount of items to delete starting from that index, if amount is one, then it will only remove the item in that returned index.
     - Shift - used to remove items from the beginning.
     - Pop - used to remove the last item.
     - delete - Should be avoided by all means. This results to sparse arrays i.e., arrays with holes in them. Delete removes items from the array but it does not update the length properly. This leave a funny array and should be avoided.

    Hence the code:
        app.delete("/jokes/:id", (req, res) => {
        const id = parseInt(req.params.id);

        console.log(id);

        const itemIndex = jokes.findIndex((joke) => joke.id === id);

        if (itemIndex >= 0) {
            jokes.splice(itemIndex, 1);
            res.sendStatus(200);
        } else {
            res
            .status(404)
            .json({error: `Joke with id: ${id} not found. No jokes were deleted.`});
        }
        })

    Since this was a single joke, it doesn't need a key to delete.

    When doing mass deletions, there could be a need for authentication before deletion. This can be done using an API key or bearer token or whichever approach might be preffered by the provider.

    If API Key then that would mean there is a need to pass in a parameter of of type key and its value for the deletion to be effected. The key needs to be validated against a master key in the system.

    When working with API keys, always remember to use the req.query and not the req.params if the authorization was set to add the key to Query Params. The code should then be:

        app.delete("/all", (req, res) => {
        const userKey = req.query.key;
        
        if(userKey === masterKey) {
            jokes = []
            res.sendStatus(200);
        } else {
            res
            .status(404)
            .json({error: `Joke with id: ${id} not found. No jokes were deleted.`});
        }
        })

130. Build your own API for a Blog:
     Here we will cover all the http requests apart from PUT since we can choose to use either of the update methods.
     For this project we need two servers running concurrently:
     1. Server.js - which will act as our backend that makes the API requests. (Running on port 3000).
     2. index.js - which will be our backend for the actual API responsing to the API requests from external servers. (Running on port 4000).

    We can not run two different codes on the same port. It is key that the two servers are assigned different ports.

SECTION 31. DATABASES
131. Databases Explained: SQL vs. NoSQL (Data Persistance)
    In the previous modules, whenever you create say a new blog post, then restart the server, the newly added blogs are lost and the server is returned to the original state since the data is held in a temporary memory state.

    To persist the data we need some form of data storage, in a permanent state of memory using electromagnate. With this you can store data in bits and bytes by changing the magnatic pollarity.

    We need a form of data storage that prevents variables held in temporary memory frombeing wiped out.
    There are many types of databases:
    - SQL DB - Structured Query Language
    - NoSQL DB - Not only SQL

    SQL DBS:
        - Has been around for years and years.
        - Structurally data is stored in tables e.g., a users tab;le
        - Before hand need to anticipate what to store in the table. The fields to be stored determine the structure and size of the table. The columns can be then populated line by line.
        - Another feature is they allow for creation of relations hence the name relational databases. E.g., with the user table, and a blog table, you can link the two using the username. With this you can query the blogs written by a specific user using the relation.
        - Other types of SQL dbs are Oracle DBs (quite expensive), Postgress, MySQL, SQL lite
        - Some are open source e.g., postgress and SQL Lite.

    NoSQL DBs
        - Characterized by their flexibility. 
        - The data doesn't necessarily have to be in table format. Can store it in JSON and other formats.
        - For example if you create a new user:
            user: {
                name: "Daniel",
                email: d@gmail.com, 
                password: 1234
            }
        with NoSQL you can change the structure of your data afterwards without having to change the entire db. E.g., if you want to give only user Daniel an extra field, then this is possible in NoSQL:

            user: {
                name: "Daniel",
                email: d@gmail.com, 
                password: 1234
            }
        
        the data can be modified on the fly. does not affect the user table but can target a single record in that DB.

        - Used to address most of the challenges that devs faced with SQL
        - SQL DBs needed learning.
        - Flexibility - No need to anticipate the fields before hand
        - Scalability - easy to add a field without affecting structure
        - Examples include: Mongo DB, Redis, Dynamo DB. Some like Redis are open source while others like Dynamo and Mongo DB are run by companies.

    SQL is a bit more traditional than the NoSQL DBs. There are discussion on using NoSQL challenges with NoSQL even from addressing the scalability issue and integrity which has seen SQL still remain relevant in large projects.

    Being able to plan, a consistency and relationship has also been considered a great plus in SQL.

    In databases statistics, the clear winner is PostgresSQL:

    https://www.walturn.com/insights/stack-overflow-survey-2023-revealed#:~:text=Most%20Popular%20Databases&text=Among%20professional%20developers%2C%2050%25%20prefer,latter%20group%2C%20just%20behind%20MySQL.

    Detailed:
    https://survey.stackoverflow.co/2023/#most-popular-technologies-databse-learn

    See stats in snips > Most popular <> graphs.
    Postgress SQL:
        - Open source,
        - Free to use
        - Used by professionals
        - Scalable
        - And good to use as web developers.












