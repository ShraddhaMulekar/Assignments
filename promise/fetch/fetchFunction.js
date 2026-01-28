(async function () {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    displayUsers(data);
  } catch (error) {
    console.log(error);
  }
})();

function displayUsers(users) {
  let tableData = document.querySelector("tbody");
  users.forEach((user) => {
    let row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.company.name}</td>
                        <td>${user.address.city}</td>
                   </tr>`;
    tableData.innerHTML += row;
  });
}
