import autoComplete from 'js-autocomplete';

const searchElement = document.getElementById("search-data");
const searchInput = document.getElementById("q");

const initAutoComplete = () => {
    if (searchElement) {
        const skills = JSON.parse(searchElement.dataset.skills);
        console.log(skills);
        new autoComplete({
            selector: searchInput,
            minChars: 1,
            source: function(term, suggest){
                term = term.toLowerCase();
                let choices = skills;
                let matches = [];
                for (let i = 0; i < choices.length; i++)
                    if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
                suggest(matches);
            }
        });
    }
}

export { initAutoComplete };