import Typed from 'typed.js';

const typedText = function() {
    const element = document.getElementById("#js-typed-text");
    if(element) {
            new Typed('#js-typed-text', {
            strings: ["ruby", "react", "elixir", "python", "swift"],
            typeSpeed: 70,
            loop: true
        }
    }
}


export { typedText };