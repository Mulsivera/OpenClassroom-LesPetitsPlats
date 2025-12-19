// Clears the searchbar and hides the emptySearchbar button when clicked

export function emptySearchbar() {
    var searchbar = document.getElementById("searchbar");
    var emptyButton = document.getElementById("empty_button");
    emptyButton.addEventListener("click",() => {
        searchbar.value = "";
        emptyButton.style.display = "none";
    })
}