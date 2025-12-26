export default class Searchbar {

    constructor(searchbarId, clearButtonId) {

        this.input = document.getElementById(searchbarId);
        this.clearButton = document.getElementById(clearButtonId);

        if(!this.input)
            throw new Error("script/class/Searchbar.js : Input with " + searchbarId + " id does not exist.");
        if(!this.clearButton)
            throw new Error("script/class/Searchbar.js : Button with " + clearButtonId + " id does not exist.");

        this.input.addEventListener("input",() => {this.toggleClearButton();})
        this.clearButton.addEventListener("click",() => {this.clear();})

    }

    clear() {
        this.input.value = "";
        this.hideClearButton();
    }

    getLength() {
        return this.input.value.length;
    }

    showClearButton() {
        this.clearButton.style.display = "block";
    }

    hideClearButton() {
        this.clearButton.style.display = "none";
    }

    toggleClearButton() {
        this.getLength() >= 1 ? this.showClearButton() : this.hideClearButton();
    }

}

