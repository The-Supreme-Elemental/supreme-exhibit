function displayTime() {
    const current_year = new Date();
    document.getElementById("currentYear").innerHTML = current_year.getFullYear();
    let lastModifiedDate = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = "Last Modified:  " + lastModifiedDate;

}
displayTime();