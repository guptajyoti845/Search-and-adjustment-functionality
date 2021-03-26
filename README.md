**Problem Statement : **

Build a Page that contains table (populate contents from the File attached along with this email), a text input box under the label ‘Search’ and a number input box under label - ‘Adjustments’ with apply and reset buttons on it’s right side.


**Search Functionality -**


Any change in Search input should filter the table and show only the rows with column A containing the character entered in the input box. (Eg: If input is ‘Avengers’, row with Column A value ‘Avengers: Infinity War’ should be in table whereas row with Column A value ‘DC Batman’ shouldn’t be shown)


**Adjustments Functionality -
**

Let’s call the input number as multiplier.

User should be able to change the number in the Adjustments input box and Apply/ Reset the adjustments. 

On click of Apply, the values of column D should change to the product of column C and the multiplier for each row.

On click of Reset, the values of column D should go back to original values from the file.

Keep the default value of multiplier as  0; and if the multiplier is 0, user should not be allowed to do adjustments, but should be able to reset it.


**Commands to execute the web application
**

1. yarn install
2. ng serve --port 4200
