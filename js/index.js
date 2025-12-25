const DOM = {
  addPersonBtn: document.getElementById("add-person-btn"),
  listEl: document.getElementById("list"),
  userName: document.getElementById("user-name"),
};

const dataModel = [];
let newPersonID = 0;

DOM.userName.addEventListener("input", () => {
  localStorage.setItem(FIRST_NAME_LOCAL_STORAGE_KEY, DOM.userName.value.trim());
});

DOM.listEl.append(newPerson("evil man", "you are evil", "naughty"));
DOM.listEl.append(newPerson("nice lady", "you are nice", "nice"));

DOM.addPersonBtn.addEventListener("click", () => {
  DOM.listEl.append(newPerson());
});

function renderList() {
  dataModel.forEach((el) =>
    DOM.listEl.append(newPerson(el.name, el.message, el.status))
  );
}

function newPerson(name = "", message = "", status = "nice") {
  const container = document.createElement("DIV");
  const listHTML = `
      <div class="list-item-container">
        <div id="person-${newPersonID}">
          <label for="name-${newPersonID}">Name</label>
          <input 
            id="name-${newPersonID}" 
            name="name-${newPersonID}" 
            type="text" 
            autocomplete="off"
            value="${name ? name : ""}"
        />
        </div>
        <div>
          <label for="message-${newPersonID}">Message</label>
          <input 
            id="message-${newPersonID}"
            name="message-${newPersonID}"
            type="text"
            autocomplete="off"
            value="${message ? message : ""}"
            />
        </div>
        <div>
          <fieldset>
            <legend>Status</legend>

            <input 
              id="status-${newPersonID}" 
              type="radio" 
              name="status-${newPersonID}" 
              value="naughty" 
              ${status === "naughty" ? "checked" : ""}
            />
            <label for="status-${newPersonID}" >
              Naughty
            </label>
            
            <input 
              id="status-${newPersonID}" 
              type="radio" 
              name="status-${newPersonID}" 
              value="nice" 
              ${status === "nice" ? "checked" : ""}
            />
            <label for="status-${newPersonID}" >
              Nice
            </label>
          </fieldset>
        </div>
        <div>
          <button aria-label="share" id="share-person-${newPersonID}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-link-45deg"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"
              />
              <path
                d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"
              />
            </svg>
          </button>
        </div>
        <div>
          <button aria-label="delete" id="delete-person-${newPersonID}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash3"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
            />
          </svg>
        </button>
        </div>
      </div>
  `;
  container.innerHTML = listHTML;
  const deleteBtn = container.querySelector(`#delete-person-${newPersonID}`);
  deleteBtn.addEventListener("click", () => {
    container.remove();
  });
  const shareBtn = container.querySelector(`#share-person-${newPersonID}`);
  deleteBtn.addEventListener("click", () => {
    const name = document.getElementById(`name-${newPersonID}`).value;
    const message = document.getElementById(`message-${newPersonID}`).value;
    const status = document.getElementById(`status-${newPersonID}`).value;
    window.location =
      window.location.protocol +
      window.location.host +
      new URLSearchParams({
        name,
        message,
        status,
      }).toString();
  });
  newPersonID++;
  dataModel.push({
    name,
    message,
    status,
  });
  return container;
}
