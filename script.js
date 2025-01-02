button = document.querySelector(".btn");


button.addEventListener("pavan", (e) => {
    console.log("trigerring with the event name", e.detail.name);
})

let newEvent = new CustomEvent("pavan", { cancelable: true, bubbles: true, detail: { name: "katna" } });
button.dispatchEvent(newEvent);
