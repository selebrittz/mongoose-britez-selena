1:1 user/profile
perfil embebido dentro del usuario
 decidi embeber el perfil dentro del documento del usuario porque cada usuario tiene exactamente un perfil y no necesitaba acceder al perfil de manera independiente

1:n una playlist tiene muchas canciones

n:m una cancion esta en muchas playlist, y una playlist tiene muchas canciones

//aca no se generaria la relacion de uno a muchos porque se interpone la relacion de muchos a muchos



populate sin ref:
se usa cuando un campo almacena un objectId de otra coleccion
si una colecciom no tiene referencia, populate no tiene efecto, porque se supone que no hay id externo para completar

Playlist sin ref
//En lugar de guardar directamente las playlists dentro del usuario, use un virtual en el esquema de usuario. virtual no almacena datos en la base de datos, sino que le indica a Mongoose cómo encontrar todas las playlists relacionadas con ese usuario. 
Al hacer una consulta de usuarios, utilizamos la función populate. Esta función se encarga de reemplazar ese virtual por los documentos reales de las playlists que pertenecen al usuario. De esta forma, cuando pedimos la información de un usuario, además de sus datos personales también recibimos un arreglo con todas sus playlists.

no hice controladores refactorizados.

playlist addsong. relacion muchos a muchos

Creamos un endpoint específico para agregar datos en la relación muchos a muchos entre playlists y canciones.
En este caso, cuando un usuario quiere incluir una canción en una playlist, se envia los ids de la playlist y la canción.
El servidor actualiza el documento de la playlist insertando la referencia de la canción dentro del array songs.
//$push

Eliminaciones lógicas y en cascada
Eliminación lógica:
En vez de borrar un documento de la base de datos, se marca como “eliminado” con un campo booleano.

await userModel.findByIdAndUpdate(userId, { deleted: true });


Eliminación en cascada:
Al borrar un documento, automáticamente se eliminan o actualizan documentos relacionados.

Ejemplo con mi trabajo: si borramos una playlist, queremos que también se borren sus referencias a canciones (o al menos quitar la playlist de los registros de las canciones).

// Hook de eliminación en cascada
playlist.pre("findOneAndDelete", async function (next) {
  try {
    const playlistId = this.getQuery()._id;

    // Quita la playlist eliminada de todas las canciones
    await songModel.updateMany(
      { playlists: playlistId },
      { $pull: { playlists: playlistId } }
    );

    next();
  } catch (error) {
    next(error);
  }
});

