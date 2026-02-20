import { nameTransform } from "../utils/nameTransform.js";

export default class Filter {

    constructor(name,category) {

        this.name = name;
        this.nameTransform = nameTransform(name);
        this.category = category

        this.addToFilters();

        this.buttonFilter = document.getElementById(this.nameTransform + "_filter");
        this.buttonSelectedFilter = document.getElementById(this.nameTransform + "_selected_filter");
        this.buttonGlobalSelectedFilter = document.getElementById(this.nameTransform + "global_selected_filter");

        this.buttonFilter.addEventListener("click",() => {
            this.getSelected(this.buttonFilter,this.buttonSelectedFilter,this.buttonGlobalSelectedFilter);
        })

        this.buttonSelectedFilter.addEventListener("click",() => {
            this.getUnselected(this.buttonFilter,this.buttonSelectedFilter,this.buttonGlobalSelectedFilter);
        })

        this.buttonGlobalSelectedFilter.addEventListener("click",() => {
            this.getUnselected(this.buttonFilter,this.buttonSelectedFilter,this.buttonGlobalSelectedFilter);
        })
    }

    addToFilters() {
        /* Add the base filter button */
        const filter_list = document.getElementById(this.category + "_filters");
        const filter = document.createElement("li");
        filter.textContent = this.name;
        filter.id = this.nameTransform + "_filter";
        filter_list.append(filter)
        /* Add the selected filter button for the list */
        const selected_filter_list = document.getElementById(this.category + "_selected_filters");
        const selected_filter = document.createElement("p");
        selected_filter.textContent = this.name;
        selected_filter.id = this.nameTransform + "_selected_filter";
        const selected_remove_button = document.createElement("i");
        selected_remove_button.classList = ("fa-solid fa-circle-xmark fa-s");
        selected_filter.append(selected_remove_button);
        selected_filter_list.append(selected_filter);
        /* Add the selected filter button to the global list */
        const global_selected_filter_list = document.getElementById("global_selected_filters");
        const global_selected_filter = document.createElement("p");
        global_selected_filter.textContent = this.name;
        global_selected_filter.id = this.nameTransform + "global_selected_filter";
        global_selected_filter.classList = ("filter");
        const global_remove_button = document.createElement("i");
        global_remove_button.classList = ("fa-solid fa-x fa-s");
        global_selected_filter.append(global_remove_button);
        global_selected_filter_list.append(global_selected_filter);
    }

    getSelected(buttonFilter,buttonSelectedFilter,buttonGlobalSelectedFilter) {
        buttonFilter.style.display = "none";
        buttonSelectedFilter.style.display = "flex";
        buttonGlobalSelectedFilter.style.display = "flex";
    }

    getUnselected(buttonFilter,buttonSelectedFilter,buttonGlobalSelectedFilter) {
        buttonFilter.style.display = "block";
        buttonSelectedFilter.style.display = "none";
        buttonGlobalSelectedFilter.style.display = "none";
    }

}