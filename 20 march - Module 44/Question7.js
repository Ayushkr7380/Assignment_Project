class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return '*'.repeat(this._password.length);
    }
  
    set password(newPassword) {
      const hasNumber = /\d/;
      const hasUpperCase = /[A-Z]/;
  
      if (newPassword.length >= 8 && hasNumber.test(newPassword) && hasUpperCase.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error('Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      }
    }
}
  
const user = new User('ayush kumar', 'Password123');
  
console.log(user.password);
  
user.password = 'short';
console.log(user.password);
  
user.password = 'NewPass1';
console.log(user.password);
  