/*Add an Accessible Date Picker
Forms often include the input field, which can be used to create several different form controls. The type attribute on this element indicates what kind of input element will be created.

You may have noticed the text and submit input types in prior challenges, and HTML5 introduced an option to specify a date field. Depending on browser support, a date picker shows up in the input field when it's in focus, which makes filling in a form easier for all users.

For older browsers, the type will default to text, so it helps to show users the expected date format in the label or placeholder text just in case.

Here's an example:

<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
Camper Cat is setting up a Mortal Kombat tournament and wants to ask his competitors to see what date works best. Add an input tag with a type attribute of date, an id attribute of pickdate, and a name attribute of date.*/


<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Only change code below this line -->

        <input type="date" id="pickdate" name="date">

        <!-- Only change code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>