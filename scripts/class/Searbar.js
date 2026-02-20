import { recipeSorter } from "../sorter/recipeSorter.js";

export default class Searchbar {

    constructor(searchbarId, clearButtonId) {

        this.input = document.getElementById(searchbarId);
        this.clearButton = document.getElementById(clearButtonId);

        if (!this.input)
            throw new Error("script/class/Searchbar.js : Input with " + searchbarId + " id does not exist.");
        if (!this.clearButton)
            throw new Error("script/class/Searchbar.js : Button with " + clearButtonId + " id does not exist.");

        this.hideClearButton();

        this.input.addEventListener("input", () => { this.toggleClearButton(); })
        this.input.addEventListener("input", () => { this.toggleResearch(); })
        this.clearButton.addEventListener("click", () => { this.clear(); })

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

    toggleResearch() {
        var actual_search = this.input.value
        if (this.getLength() >= 3) {
            window.globalData = {
                ...window.globalData,
                actual_search,
            }
        }
        else {
            actual_search = "";
            window.globalData = {
                ...window.globalData,
                actual_search,
            }
        }
        recipeSorter();
    }

}

