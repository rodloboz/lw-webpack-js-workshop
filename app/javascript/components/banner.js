import Typed from 'typed.js';

const typedText = function() {
    const element = document.getElementById("js-typed-text");
    console.log(element)
    if (element) {
        console.log("inside if condition")
            new Typed('#js-typed-text', {
            strings: ["ruby", "react", "elixir", "python", "swift"],
            typeSpeed: 70,
            loop: true
        });
    }
}


export { typedText };