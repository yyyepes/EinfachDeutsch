// src/pages/Profile.tsx
import Navbar from './Navbar';
import { useUser } from '../Context/UserContext';
import './Profile.css';
import { useRef, useState } from 'react';

export default function Profile() {
  const { user, setUser } = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState(false);

  // Estado local para el formulario de edición
  const [form, setForm] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    country: user?.country || "",
    birthDate: user?.birthDate || "",
    photoUrl: user?.photoUrl || "",
  });

  // Si el usuario cambia la foto (en modo edición también funciona)
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setForm(prev => ({ ...prev, photoUrl: reader.result as string }));
        if (!editing && user) {
          setUser({ ...user, photoUrl: reader.result as string });
        }
      }
    };
    reader.readAsDataURL(file);
  };

  // Botón de guardar cambios
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ ...user, ...form }); // Actualiza el usuario en contexto
    setEditing(false);
  };

  // Usa la imagen subida o avatar por defecto
  const avatarSrc =
    form.photoUrl ||
    user?.photoUrl ||
    'https://api.dicebear.com/8.x/personas/svg?seed=profile';

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-avatar" style={{ position: 'relative' }}>
            <img
              src={avatarSrc}
              alt="User avatar"
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #3b82f6",
                background: "#e0e7ff"
              }}
            />
            {/* Botón de editar foto */}
            <button
              className="profile-edit-btn"
              onClick={() => fileInputRef.current?.click()}
              title="Change profile picture"
            >+</button>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handlePhotoChange}
            />
          </div>

          {!editing ? (
            <>
              <h2 className="profile-name">
                {user?.name} {user?.lastName}
              </h2>
              <p className="profile-email">{user?.email}</p>
              <div className="profile-info">
                <div>
                  <span className="profile-label">Birthdate:</span>
                  <span className="profile-value">{user?.birthDate}</span>
                </div>
                <div>
                  <span className="profile-label">Country:</span>
                  <span className="profile-value">{user?.country}</span>
                </div>
              </div>
              <button
                className="profile-edit-profile-btn"
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
            </>
          ) : (
            <form className="profile-form" onSubmit={handleSave}>
              <input
                className="profile-input"
                type="text"
                value={form.name}
                placeholder="Name"
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
              />
              <input
                className="profile-input"
                type="text"
                value={form.lastName}
                placeholder="Last Name"
                onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                required
              />
              <input
                className="profile-input"
                type="email"
                value={form.email}
                placeholder="Email"
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                required
              />
              <input
                className="profile-input"
                type="date"
                value={form.birthDate}
                placeholder="Birthdate"
                onChange={e => setForm(f => ({ ...f, birthDate: e.target.value }))}
                required
              />
              <input
                className="profile-input"
                type="text"
                value={form.country}
                placeholder="Country"
                onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
                required
              />
              <div className="profile-edit-actions">
                <button
                  className="profile-save-btn"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="profile-cancel-btn"
                  type="button"
                  onClick={() => {
                    setEditing(false);
                    setForm({
                      name: user?.name || "",
                      lastName: user?.lastName || "",
                      email: user?.email || "",
                      country: user?.country || "",
                      birthDate: user?.birthDate || "",
                      photoUrl: user?.photoUrl || "",
                    });
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
