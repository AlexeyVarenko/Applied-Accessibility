/*Use tabindex to Specify the Order of Keyboard Focus for Several Elements
The tabindex attribute also specifies the exact tab order of elements. This is achieved when the attribute's value is set to a positive number of 1 or higher.

Setting a tabindex="1" will bring keyboard focus to that element first. Then it cycles through the sequence of specified tabindex values (2, 3, etc.), before moving to default and tabindex="0" items.

It's important to note that when the tab order is set this way, it overrides the default order (which uses the HTML source). This may confuse users who are expecting to start navigation from the top of the page. This technique may be necessary in some circumstances, but in terms of accessibility, take care before applying it.

Here's an example:

<div tabindex="1">I get keyboard focus, and I get it first!</div>
<div tabindex="2">I get keyboard focus, and I get it second!</div>
Camper Cat has a search field on his Inspirational Quotes page that he plans to position in the upper right corner with CSS. He wants the search input and submit input form controls to be the first two items in the tab order. Add a tabindex attribute set to 1 to the search input, and a tabindex attribute set to 2 to the submit input.

Another thing to note is that some browsers may place you in the middle of your tab order when an element is clicked. An element has been added to the page that ensures you will always start at the beginning of your tab order.*/

<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input tabindex="1" type="search" name="search" id="search" >
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>