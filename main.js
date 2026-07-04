/* add code but 
there will be examples*/
const button 
 {
    selector: "#nav-button",
    label: "Industries",
    link: "#industries-section",
    theme: "dark"
};

// find the button in your HTML
const btnElement = document.querySelector(button.selector);

// add click event to scroll to section
btnElement.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(button.link).scrollIntoView({ behavior: "smooth" });
    console.log("Clicked:", button.label);
});

// add theme class
if(button.theme === "dark") {
    btnElement.classList.add("btn-dark");
}

console.log("Example text");

/* use or edit this or make your own code*/



