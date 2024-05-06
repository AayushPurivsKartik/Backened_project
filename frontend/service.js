const fetchData = async () => {
  const url = "http://localhost:3000";
    let res1=await fetch(url);
    let data=await res1.json();
    renderList(data);
};

const renderList = (users) => {
  const userList = document.getElementById("user-list");

  let html = "";

  // for (let i = 0; i < users.length; i++) {
  //   const unitData = users[i];
  users.forEach((el)=>{
    let unitData=el;
    html += `<div
        style="
          border: 1px solid black;
          padding: 20px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 200px;
          background: aliceblue;
        "
      >
        <h2>Uesr Id: ${unitData.id}</h2>
        <h1 style="font-size: 20px">Username: ${unitData.name}</h1>
        <h3>Age: ${unitData.age}</h3>
      </div>`;
  });
  userList.innerHTML = html;
};

fetchData();

// code for submitting form

document.addEventListener("DOMContentLoaded", () => {
  //--------------------------------------------
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add user");
        }
        alert("User added");
        location.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  //-----------------------------
});
