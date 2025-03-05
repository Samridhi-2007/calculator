let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let lastClicked = ""; 

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                if (string === "") return;
                string = eval(string).toString();
            } catch (error) {
                string = "Error"; 
            }
        } 
        else if (buttonText === 'AC') {
            string = "";
        } 
        else if (buttonText === 'DEL') {
            if (string !== "Error") {
                string = string.slice(0, -1); 
            } else {
                string = "";
            }
        } 
        else {
            if (string === "Error") string = ""; 
            if (string === "" && ['+', '*', '/'].includes(buttonText)) return;
            if (['+', '-', '*', '/'].includes(lastClicked) && ['+', '*', '/'].includes(buttonText)) return;

            string += buttonText;
        }

        input.value = string;
        lastClicked = buttonText; 
    });
});
