const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement| null;
const skills = document.getElementById('skills') as HTMLElement | null;

if (toggleButton && skills){
    toggleButton.addEventListener('click', ()=>{
       if (skills.style.display === 'none') {
        skills.style.display = 'block'
        toggleButton.value = "Hide skills"
    }
      else{
        skills.style.display = 'none';
        toggleButton.value = "Show skills";
    }
    });
    }
     else {
    console.log("Required element is not found in the document")
}