function editarUsuario(userId, datosActualizados) {
  const result = Store.Auth.updateProfile(userId, datosActualizados);
  if (result.success) {
    console.log("✅ Usuario actualizado:", result.user);
  } else {
    console.error("❌ Error:", result.error);
  }
  return result;
}