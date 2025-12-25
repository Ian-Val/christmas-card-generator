const DOM = {
  addPersonBtn: document.getElementById("add-person-btn"),
  listEl: document.getElementById("list"),
};

DOM.addPersonBtn.addEventListener("click", () => {
  DOM.listEl.append(newPerson());
  console.log("we just added a person");
});

function newPerson() {
  const container = document.createElement("DIV");
  const listHTML = `
      <div class="list-item-container">
        <div>
          <label for="name">Name</label>
          <input id="name" name="name" type="text" autocomplete="off"/>
        </div>
        <div>
          <label for="message">Message</label>
          <input id="message" name="message" type="text" autocomplete="off"/>
        </div>
        <div>
          <fieldset>
            <legend>Status</legend>

            <label>
              <input type="radio" name="behavior" value="naughty" />
              Naughty
            </label>

            <label>
              <input type="radio" name="behavior" value="nice" checked/>
              Nice
            </label>
          </fieldset>
        </div>
        <div>
          <button aria-label="share">
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
          <button aria-label="delete">
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

  return container;
}
