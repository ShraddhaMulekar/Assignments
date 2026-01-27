fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data=> displayUsers(data))
      .catch(error => console.error('Error fetching data:', error));

function displayUsers(users){
    let tableData = document.querySelector('tbody');
    users.forEach(user => {
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