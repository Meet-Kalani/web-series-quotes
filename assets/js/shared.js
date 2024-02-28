function createHTMLElement(parentElement, elementName, className = undefined) {
  let element = document.createElement(elementName);
  if (className) {
    element.classList.add(className);
  }
  parentElement.appendChild(element);
  return element;
}

function showError(err) {
  errorMessageContainer.classList.remove("d-none");
  errorMessageContainer.children[0].textContent = err;
}
