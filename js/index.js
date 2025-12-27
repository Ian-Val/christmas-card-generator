const DOM = {
  addPersonBtn: document.getElementById("add-person-btn"),
  listEl: document.getElementById("list"),
  userName: document.getElementById("user-name"),
};

const DATA_STORAGE_KEY = "data-storage-key-123";

const USER_NAME_STORAGE_KEY = "user-name-key-123";

const parsedData = localStorage.getItem(DATA_STORAGE_KEY);

let dataModel = JSON.parse(parsedData) || [
  {
    name: "evil man",
    message: "you are evil",
    status: "naughty",
  },
  {
    name: "nice lady",
    message: "you are nice",
    status: "nice",
  },
];

let newPersonID = 0;
renderList();

DOM.userName.value = localStorage.getItem(USER_NAME_STORAGE_KEY) || "";

document.addEventListener("input", (e) => {
  if (e.target.id === DOM.userName.id) {
    localStorage.setItem(USER_NAME_STORAGE_KEY, DOM.userName.value.trim());
  } else {
    const id = Number(e.target.id.split("-").pop());
    const key = e.target.id.split("-");
    const personEl = document.querySelectorAll(".list-item-container")[id];
    const nameEl = personEl.querySelector(`#name-${id}`);
    const messageEl = personEl.querySelector(`#message-${id}`);
    const statusEl = personEl.querySelector(
      `input[name="status-${id}"]:checked`
    );
    dataModel[id] = {
      name: nameEl.value,
      message: messageEl.value,
      status: statusEl.value,
    };
  }
});

document.addEventListener("change", () => {
  localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(dataModel));
});

// CLICK EVENTS
document.addEventListener("click", (e) => {
  if (e.target.id.startsWith("delete-person-")) {
    const id = Number(e.target.id.split("-").pop());
    document.querySelectorAll(".list-item-container")[id].remove();
    dataModel = dataModel.splice(id, 1);
    console.log(dataModel);
    localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(dataModel));
  } else if (e.target.id.startsWith("share-person-")) {
    const id = Number(e.target.id.split("-").pop());
    const personEl = document.querySelectorAll(".list-item-container")[id];
    const nameEl = personEl.querySelector(`#name-${id}`);
    const messageEl = personEl.querySelector(`#message-${id}`);
    const statusEl = personEl.querySelector(
      `input[name="status-${id}"]:checked`
    );
    const senderEl = document.querySelector(`#user-name`);
    const payload = {
      name: nameEl.value,
      message: messageEl.value,
      status: statusEl.value,
      sender: senderEl.value,
    };
    console.log(
      `./card.html?` + new URLSearchParams(payload).toString(),
      "_blank"
    );
    window.open(
      `./card.html?` + new URLSearchParams(payload).toString(),
      "_self"
    );
  } else if (e.target.id === DOM.addPersonBtn.id) {
    DOM.listEl.append(getNewPersonElement());
  }
});

function renderList() {
  dataModel.forEach((el) => {
    DOM.listEl.append(getNewPersonElement(el.name, el.message, el.status));
    newPersonID++;
  });
}

function getNewPersonElement(name = "", message = "", status = "nice") {
  const personContainer = document.createElement("DIV");
  const listHTML = `
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
          <div>
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
          </div>
          <div>
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
          </div>
        </fieldset>
      </div>
      <div>
        <button aria-label="share" id="share-person-${newPersonID}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-link-45deg"
            viewBox="0 0 16 16"
            style="pointer-events: none;"
          >
            <path
            style="pointer-events: none;"
              d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"
            />
            <path
            style="pointer-events: none;"
              d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"
            />
          </svg>
        </button>
      </div>
      <div>
        <button aria-label="delete" id="delete-person-${newPersonID}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-trash3"
          viewBox="0 0 16 16"
          style="pointer-events: none;"
        >
          <path
          style="pointer-events: none;"
            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
          />
        </svg>
      </button>
    </div>
  `;
  personContainer.innerHTML = listHTML;
  personContainer.classList.add("list-item-container");
  return personContainer;
}
