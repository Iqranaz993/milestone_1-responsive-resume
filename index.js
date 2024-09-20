var toggleButton = document.getElementById('toggleButton');
var skills = document.getElementById('skills');
if (toggleButton && skills) {
    toggleButton.addEventListener('click', function () {
        if (skills.style.display === 'none') {
            skills.style.display = 'block';
            toggleButton.value = "Hide skills";
        }
        else {
            skills.style.display = 'none';
            toggleButton.value = "Show skills";
        }
    });
}
else {
    console.log("Required element is not found in the document");
}
