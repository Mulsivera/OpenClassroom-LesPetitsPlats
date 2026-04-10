import { recipeSorter } from "../sorter/recipeSorter.js";

export default class Searchbar {

    constructor(searchbarId, clearButtonId, isMain) {

        this.input = document.getElementById(searchbarId);
        this.clearButton = document.getElementById(clearButtonId);
        this.category = searchbarId.replace("Searchbar", "").toLowerCase();
        this.isMain = isMain;

        this.hideClearButton();

        this.input.addEventListener("input", () => {
            this.toggleClearButton();
        });

        this.input.addEventListener("input", () => {
            if (this.isMain === true) {
                this.toggleResearch();
            } else {
                this.toggleFilterResearch();
            }
        });

        this.clearButton.addEventListener("click", () => {
            this.clear();
        });
    }

    clear() {

        this.input.value = "";
        this.hideClearButton();

        if (this.isMain === true) {
            this.toggleResearch();
        } else {
            this.toggleFilterResearch();
        }
    }

    getLength() {
        return this.input.value.trim().length;
    }

    showClearButton() {
        this.clearButton.style.display = "block";
    }

    hideClearButton() {
        this.clearButton.style.display = "none";
    }

    toggleClearButton() {

        const length = this.getLength();

        if (length >= 1) {
            this.showClearButton();
        } else {
            this.hideClearButton();
        }
    }

    toggleResearch() {

        let actual_search = this.input.value;

        if (this.getLength() >= 3) {
            window.globalData = {
                ...window.globalData,
                actual_search: actual_search
            };
        } else {
            actual_search = "";

            window.globalData = {
                ...window.globalData,
                actual_search: actual_search
            };
        }

        recipeSorter();
    }

    toggleFilterResearch() {

        const key = this.category + "_filter_search";

        window.globalData = {
            ...window.globalData,
            [key]: this.input.value.toLowerCase()
        };

        recipeSorter();
    }
}