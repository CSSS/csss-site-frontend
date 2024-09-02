function toggleHidden(elementID, collapsibleID) {
    let element = document.getElementById(elementID);
    let collapsible = document.getElementById(collapsibleID);

    if (element.getAttribute("hidden") !== null) {
        element.removeAttribute("hidden");
        collapsible.src = "/static/icons/minus.svg";
    } else {
        element.setAttribute("hidden", "");
        collapsible.src = "/static/icons/chevron-down.svg";
    }
}