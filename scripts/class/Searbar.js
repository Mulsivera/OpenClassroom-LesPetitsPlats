import { recipeSorter } from "../sorter/recipeSorter.js";

export default class Searchbar {

    constructor(searchbarId, clearButtonId, isMain) {

        this.input = document.getElementById(searchbarId);
        this.clearButton = document.getElementById(clearButtonId);
        this.category = searchbarId.replace("Searchbar", "").toLowerCase();
        this.isMain = isMain;

        this.hideClearButton();

        this.input.addEventListener("input", () => {
            this.handleInput();
        });

        this.clearButton.addEventListener("click", () => {
            this.clear();
        });
    }

    handleInput() {
        this.toggleClearButton();
        this.isMain ? this.toggleResearch() : this.toggleFilterResearch();
    }

    clear() {

        this.input.value = "";
        this.hideClearButton();

        this.isMain ? this.toggleResearch() : this.toggleFilterResearch();
    }

    getLength = () =>
        this.input.value.trim().length;

    showClearButton = () =>
        this.clearButton.style.display = "block";

    hideClearButton = () =>
        this.clearButton.style.display = "none";

    toggleClearButton() {

        const shouldShow = this.getLength() >= 1;

        shouldShow ? this.showClearButton() : this.hideClearButton();
    }

    toggleResearch() {

        const value = this.input.value;
        const actual_search = this.getLength() >= 3 ? value : "";

        window.globalData = {
            ...window.globalData,
            actual_search
        };

        recipeSorter();
    }

    toggleFilterResearch() {

        const key = `${this.category}_filter_search`;

        window.globalData = {
            ...window.globalData,
            [key]: this.input.value.toLowerCase()
        };

        recipeSorter();
    }
}