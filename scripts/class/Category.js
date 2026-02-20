export default class Category {

    constructor(category) {

        this.categoryName = category;

        this.filterListDivId = category + "_filter";
        this.filterListDiv = document.getElementById(this.filterListDivId);

        this.filterTitleId = category + "_title";
        this.filterTitle = document.getElementById(this.filterTitleId);
        
        this.switchFilterVisibility();

        this.filterTitle.addEventListener("click", () => {
            this.switchFilterVisibility();
        })
    }

    switchFilterVisibility() {
        const currentDisplay = getComputedStyle(this.filterListDiv).display;

        if(currentDisplay === "block"){
            this.filterListDiv.style.display = "none";
            this.filterTitle.style.borderRadius = "10px";
        } else {
            this.filterListDiv.style.display = "block";
            this.filterTitle.style.borderTopLeftRadius = "10px";
            this.filterTitle.style.borderTopRightRadius = "10px";
            this.filterTitle.style.borderBottomRightRadius = "0";
            this.filterTitle.style.borderBottomLeftRadius = "0";
        }
    }

}