// document.querySelector("#activate-flight").addEventListener("click",(event)=>{
// //     console.log("Activated")

// })
document.querySelector("#activate-flight").addEventListener("click",activatePower);

document.querySelector("#activate-mindreading").addEventListener("click",activatePower);



const activateAllPower = () => {
   const allSections =  document.querySelectorAll(".power");
   allSections.forEach(function(singleSection){
       singleSection.classList.replace("disabled","enabled")
   })
}
document.querySelector("#activate-all").addEventListener("click",activateAllPower);

function activatePower(event){
    const idOfSection =event.target.id.split("-")[1];

    const sectionToChange = document.querySelector(`#${idOfSection}`);

    sectionToChange.classList.replace("disabled","enabled")

}