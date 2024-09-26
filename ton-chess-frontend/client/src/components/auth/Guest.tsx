"use client";

export default function Guest({ currentName }: { currentName: string }) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Привет, {currentName}!</span>
      </label>
      <label className="input-group">
        <span>Имя</span>
        <input
          type="text"
          pattern="[A-Za-z0-9]+"
          title="Только символы латинского алфавита"
          id="guestName"
          name="guestName"
          placeholder="Введите ваше имя..."
          className="input input-bordered w-full"
          maxLength={16}
          minLength={2}
          required
        />
      </label>
    </div>
  );
}
