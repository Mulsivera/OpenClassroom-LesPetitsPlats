import { filterSorter } from "../sorter/filterSorter.js";
import { recipeSorter } from "../sorter/recipeSorter.js";

export function updateGlobalList(element, action, list) {

    const list_name = "selected_" + list + "_list";
    const selected_list = window.globalData[list_name];

    if (action === "add") {

        let exists = false;

        for (let i = 0; i < selected_list.length; i++) {
            if (selected_list[i] === element) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            selected_list.push(element);
        }
    }

    if (action === "remove") {

        let index = -1;

        for (let i = 0; i < selected_list.length; i++) {
            if (selected_list[i] === element) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            selected_list.splice(index, 1);
        }
    }

    window.globalData = {
        ...window.globalData,
        [list_name]: selected_list
    };

    recipeSorter();
    filterSorter();
}