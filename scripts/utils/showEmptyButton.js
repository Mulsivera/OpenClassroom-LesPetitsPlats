// Show the emptyButton when the search bar has one or more characters

export function showEmptyButton() {
    var searchbar = document.getElementById("searchbar");
    var emptyButton = document.getElementById("empty_button");
    searchbar.addEventListener("input", () => {
        if(searchbar.value.length >= 1)
        {
            emptyButton.style.display = "block";
        } else {
            emptyButton.style.display = "none";
        }
    })
}