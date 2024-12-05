import style10 from "./RegisterView.module.css";

function RegisterView() {
  return (
    <div className={style10.registercontainer}>
      <div className={style10.formcontainer}>
        <h2>Create an Account</h2>
        <form action="#" method="POST">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />

          <button type="submit" className="register-button">Register</button>
        </form>
        <p className={style10.loginlink}>Already have an account? <a href="#">Login</a></p>
      </div>
    </div>
  )
}

export default RegisterView;