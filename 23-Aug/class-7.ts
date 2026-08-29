class User {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  login(password: string) {
    return this.password === password;
  }

  changePassword(oldPassword: string, newPassword: string) {
    if (this.password !== oldPassword) {
      console.log("You can not change the password!");
      return;
    }

    this.password = newPassword;
    console.log("New password updated!");
    return true;
  }

  getUsername() {
    return this.username;
  }

  setUsername(newUserName: string) {
    if (typeof newUserName !== "string") return;
    if (newUserName.length === 0) return;

    this.username = newUserName;
  }
}

const user1 = new User("sumit", "sumit@123");

// let accountAccess = user1.login("sumit@123");
// console.log(accountAccess);

// console.log(user1.username);
