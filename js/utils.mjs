export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
export async function loadTemplate(path) {
    let response = await fetch(path);
    response = await response.text();
    return response;
  }
  export async function loadHeaderFooter() {
    let header = "https://jdevoldemort.github.io/portfolio/templates/header.html";
    let footer = "https://jdevoldemort.github.io/portfolio/templates/footer.html";
    let hTemplate = await loadTemplate(header);
    let fTemplate = await loadTemplate(footer);
    let headerEl = document.querySelector("#main-header");
    let footerEl = document.querySelector("#main-footer");
    renderWithTemplate(hTemplate, headerEl);
    renderWithTemplate(fTemplate, footerEl);
  }
  export function renderWithTemplate(
    template,
    parentElement,
    data,
    position = "afterbegin",
    callback
  ) {

  
      parentElement.insertAdjacentHTML(position, template);
      if (callback) {
        callback(data);
    }
  }