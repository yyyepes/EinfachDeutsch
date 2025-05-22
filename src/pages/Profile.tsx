// src/pages/Profile.tsx
import Navbar from './Navbar';
import { useUser } from '../Context/UserContext';
import './Profile.css';
import { useRef } from 'react';

export default function Profile() {
  const { user, setUser } = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Manejador de cambio de foto
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Convierte la imagen seleccionada a base64
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result && user) {
        setUser({
          ...user,
          photoUrl: reader.result as string, // Guarda base64 en el usuario (frontend)
        });
      }
    };
    reader.readAsDataURL(file);
  };

  // Usa la imagen subida o el avatar por defecto
  const avatarSrc =
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
            {/* Botón de editar */}
            <button
              className="profile-edit-btn"
              onClick={() => fileInputRef.current?.click()}
              title="Change profile picture"
            >
              +
            </button>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handlePhotoChange}
            />
          </div>
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
        </div>
      </div>
    </>
  );
}
