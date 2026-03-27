import { createDomElement } from "../utils/createDomElement.js";
import { updateGlobalList } from "../utils/updateGlobalList.js";

export default class Filter {

    constructor(name,category,id) {

        this.name = name;
        this.category = category;
        this.id = id;

        this.addToFilters();

        this.buttonFilter = document.getElementById(this.category + "_" + this.id + "_filter");
        this.buttonSelectedFilter = document.getElementById(this.category + "_" + this.id + "_selected_filter");
        this.buttonGlobalSelectedFilter = document.getElementById(this.category + "_" + this.id + "_global_selected_filter");

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
        const filter = createDomElement("li","",this.category + "_" + this.id + "_filter",this.name)
        filter_list.append(filter)
        /* Add the selected filter button for the list */
        const selected_filter_list = document.getElementById(this.category + "_selected_filters");
        const selected_filter = createDomElement("p","",this.category + "_" + this.id + "_selected_filter",this.name);
        const selected_remove_button = createDomElement("i","fa-solid fa-circle-xmark fa-s","","");
        selected_filter.append(selected_remove_button);
        selected_filter_list.append(selected_filter);
        /* Add the selected filter button to the global list */
        const global_selected_filter_list = document.getElementById("global_selected_filters");
        const global_selected_filter = createDomElement("p","filter",this.category + "_" + this.id + "_global_selected_filter",this.name)
        const global_remove_button = createDomElement("i","fa-solid fa-x fa-s","","");
        global_selected_filter.append(global_remove_button);
        global_selected_filter_list.append(global_selected_filter);
    }

    getSelected(buttonFilter,buttonSelectedFilter,buttonGlobalSelectedFilter) {
        console.log(buttonFilter);
        buttonFilter.style.display = "none";
        buttonSelectedFilter.style.display = "flex";
        buttonGlobalSelectedFilter.style.display = "flex";
        updateGlobalList(this.name,"add",this.category);
    }

    getUnselected(buttonFilter,buttonSelectedFilter,buttonGlobalSelectedFilter) {
        console.log(buttonFilter);
        buttonFilter.style.display = "block";
        buttonSelectedFilter.style.display = "none";
        buttonGlobalSelectedFilter.style.display = "none";
        updateGlobalList(this.name,"remove",this.category);
    }

}