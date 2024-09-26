"use client";

export default function Login() {
  return (
    <div className="form-control">
      <label htmlFor="loginName" className="label">
        <span className="label-text">Имя пользователя или email</span>
      </label>
      <input
        type="text"
        pattern="[A-Za-z0-9]+"
        title="Только символы латинского алфавита"
        id="loginName"
        name="loginName"
        placeholder="имя пользователя"
        className="input input-bordered"
        maxLength={16}
        minLength={2}
        required
      />
      <label htmlFor="loginPassword" className="label">
        <span className="label-text">Пароль</span>
      </label>
      <input
        type="password"
        id="loginPassword"
        name="loginPassword"
        placeholder="пароль"
        className="input input-bordered"
        minLength={3}
        required
      />
    </div>
  );
}
