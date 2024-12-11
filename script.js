//Create a string containing the message to be presented to the user
//Create three separate variables, each containing equations using unqiue arithmetic operators whose results equal the three numbers of the vault combination: 10 - 40 - 39
//Create a dialog box (alert) containing the string and three variables to display the vault message to the user

//Message to be displayed to user
const message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//Calculation of the first number of the vault combination
const num1 = 500/50;

//Calculation of the second number of the vault combination
const num2 = 39 + 1;

//Calculation of the third number of the vault combination
const num3 = 40-1;

//Pop-up message to be displayed to the user containing the inital message and the three numbers of the comination
alert(`${message} ${num1} - ${num2} - ${num3}`);