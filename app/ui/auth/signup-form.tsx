// Signup Form

export default function SignupForm() {
  return (
    <section>
    <form>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="Enter username here."
        required
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Enter password here."
        required
        minLength={6}
      />
      <button type="submit">
        <div>Signup</div>
      </button>
    </form>
    {/* ADD LINK TO LOGIN */}
    </section>
  )
}