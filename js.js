var typed = new Typed (".auto-type", {
    strings: ["Street", "Delicious", "Clean", "and Affordable"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

const dropItems = document.getElementById('drop-items') 

new Sortable(dropItems, {
    animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
});

