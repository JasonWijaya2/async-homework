const userDB = { username: "joko", password: "rahasia", role: "non-admin" };

function loginUser(inputUsername, inputPassword, callback) {
  setTimeout(() => {
    if (
      inputUsername === userDB.username &&
      inputPassword === userDB.password
    ) {
      callback(userDB);
    } else {
      console.log("Username or Password is wrong!");
    }
  }, 500);
}

function getRole(user, callback) {
  setTimeout(() => {
    callback(user.role);
  }, 500);
}

function getMenu(role, callback) {
  setTimeout(() => {
    callback(role);
  }, 500);
}

loginUser("joko", "rahasia", function (user) {
  getRole(user, function (role) {
    getMenu(role, function () {
      if (role === "admin") {
        dashBoardAdmin(role);
      } else {
        dashboard(role);
      }
    });
  });
});

function dashBoardAdmin(role) {
  console.log(`Dashboard Admin - Role Anda: ${role}`);
}

function dashboard(role) {
  console.log(`Role Anda: ${role}`);
}
