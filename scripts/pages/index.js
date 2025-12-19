import { emptySearchbar } from "../utils/emptySearchbar.js";
import { showEmptyButton } from "../utils/showEmptyButton.js";

async function init() {
    showEmptyButton();
    emptySearchbar();
}

init()