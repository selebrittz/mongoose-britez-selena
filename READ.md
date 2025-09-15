1:1 user/profile
perfil embebido dentro del usuario
 decidi embeber el perfil dentro del documento del usuario porque cada usuario tiene exactamente un perfil y no necesitaba acceder al perfil de manera independiente.

1:n una playlist tiene muchas canciones

populate sin ref:

se usa cuando un campo almacena un objectId de otra coleccion

si una colecciom no tiene referencia, populate no tiene efecto, porque se supone que no hay id externo para completar

Eliminaciones lógicas y en cascada
Eliminación lógica:
En vez de borrar un documento de la base de datos, se marca como “eliminado” con un campo booleano.

await userModel.findByIdAndUpdate(userId, { deleted: true });


Eliminación en cascada:
Al borrar un documento, automáticamente se eliminan o actualizan documentos relacionados.

Ejemplo con mi trabajo: si borramos una playlist, queremos que también se borren sus referencias a canciones (o al menos quitar la playlist de los registros de las canciones).

