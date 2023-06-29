# Calculator-Website-
Simple Calculator
This is a simple calculator web application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

Usage
To use the calculator, follow these steps:

Open the HTML file (calculator.html) in a web browser.
The calculator interface will be displayed.
Use the numeric buttons (0-9) to input numbers.
Press the operator buttons (+, -, *, /) to select the desired arithmetic operation.
The input and calculated result will be displayed in the text box.
To clear the display, click the "C" button.
To calculate the result, click the "=" button.
Code Explanation
The HTML code defines the structure of the calculator interface. It consists of a text input field for the display and a set of buttons for numeric input, operators, and control.

The CSS code (calculator.css) provides the styling for the calculator, defining the layout, colors, and button styles.

The JavaScript code (calculator.js) handles the calculator's functionality. It listens for button clicks, performs calculations, and updates the display accordingly.

Here is a breakdown of the JavaScript code:

The keys variable stores an array of all the calculator buttons.
The display variable refers to the input text field used for displaying numbers and results.
The variables operator, firstValue, secondValue, and shouldReset are used to track the calculator's state.
The code attaches event listeners to each button, executing different functions based on the button clicked.
The handleOperator function handles the selection of an arithmetic operator and triggers calculations if necessary.
The resetDisplay function resets the calculator's display and clears the stored values and operator.
The calculate function performs the arithmetic calculation based on the selected operator and updates the display.
The inputNumber function handles the input of numbers, appending them to the display and updating the respective values.
Styling
The calculator is styled using CSS. The .calculator class defines the overall container's appearance, including the background color and alignment.

The .screen class styles the display input field, setting its width, alignment, and font properties.

The .keys class arranges the buttons using CSS grid, specifying the number of columns and the gap between them.

The .btn class styles the buttons, defining their padding and font size.

The .operator class styles the operator buttons, setting a specific background color and text color.

The .zero class styles the zero button, spanning two columns in the grid layout.

Feel free to modify the CSS code (calculator.css) to customize the calculator's appearance according to your preferences.

That's it! You now have a simple calculator web application. Feel free to enhance it with additional features or functionality as desired.
