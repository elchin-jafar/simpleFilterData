const left = document.querySelector(".completed-data");
const right = document.querySelector(".not-completed-data");

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  const completed = data.filter((el) => el.completed == true);
  const notCompleted = data.filter((el) => el.completed == false);

  left.innerHTML = `
  <ul>
  ${completed
    .map(
      (el) =>
        `
    <li>
        <p class="title">title: ${el.title}</p>
        <p class="status-true">status: ${el.completed}</p>
    </li>
    `
    )
    .join("")}
  </ul>
  `;

  right.innerHTML = `
  <ul>
  ${notCompleted
    .map(
      (el) =>
        `
    <li>
        <p class="title">title: ${el.title}</p>
        <p class="status-false">status: ${el.completed}</p>
    </li>
    `
    )
    .join("")}
  </ul>
  `;
}

getData();
