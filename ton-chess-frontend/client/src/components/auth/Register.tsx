"use client";

export default function Register() {
  return (
    <div className="form-control">
      <label htmlFor="registerName" className="label">
        <span className="label-text">Имя пользователя</span>
      </label>
      <input
        type="text"
        pattern="[A-Za-z0-9]+"
        title="Alphanumeric characters only"
        id="registerName"
        name="registerName"
        placeholder="имя пользователя"
        className="input input-bordered"
        maxLength={16}
        minLength={2}
        required
      />
      <label htmlFor="registerEmail" className="label">
        <span className="label-text">Email (опционально)</span>
      </label>
      <input
        type="email"
        id="registerEmail"
        name="registerEmail"
        placeholder="email"
        className="input input-bordered"
        minLength={4}
      />
      <label htmlFor="registerPassword" className="label">
        <span className="label-text">Пароль</span>
      </label>
      <input
        type="password"
        id="registerPassword"
        name="registerPassword"
        placeholder="пароль"
        className="input input-bordered"
        minLength={3}
        required
      />
    </div>
  );
}
