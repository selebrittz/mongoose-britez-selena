/*
===================================================
OPCIONES COMUNES DE SchemaType EN MONGOOSE
===================================================
Estas opciones se aplican a cada campo del Schema.
*/

// Definición del modelo User con distintas opciones
const UserSchema = new Schema({
  // type → Tipo de dato
  username: { 
    type: String,             // tipo String
    required: true,           // campo obligatorio
    unique: true,             // valor único en la colección
    trim: true,               // elimina espacios al inicio y final
    lowercase: true,          // convierte automáticamente a minúsculas
    minlength: 3,             // longitud mínima
    maxlength: 20,            // longitud máxima
    match: /^[a-zA-Z0-9]+$/   // debe cumplir con el regex (sólo letras y números)
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,          // siempre en minúsculas
    match: /.+\@.+\..+/       // formato simple de email
  },
  password: { 
    type: String, 
    required: true,
    minlength: 6,             // al menos 6 caracteres
    select: false // no se devuelve por defecto en consultas (.select('+password') para incluirlo desde la consulta)
  },
  age: {
    type: Number,
    default: 18,              // valor por defecto
    min: 0,                   // valor mínimo
    max: 120                  // valor máximo
  },
  fecha_nacimiento: {
    type: Date,
    default: Date.now         // fecha actual como default
  },
  category: {
    type: String,
    enum: ["A", "B", "C"],    // si se quiere limitar a ciertos valores
    default: "A"
  },
  description: {
    type: String,                
    required: true,              // Obligatorio (puede ser bool / función / mensaje)
    uppercase: true,             // convierte a mayúsculas
    immutable: true,             // no se puede modificar después de creado
    validate: {                  // validacion personalizada
      validator: (valor) => (valor == null ? true : v.length > 3),
      message: "El título debe tener más de 3 caracteres"
    },
    get: (valor) => ( valor.toUpperCase() ), // transformación al obtener
    // ⚠️ Importante: para que el get funcione en un res.json() se debe habilitar getters en el schema:
    // const schema = new Schema({...}, { toJSON: { getters: true }});
    set: (valor) => ( valor.trim() ),        // transformación al guardar
  },
});

const UserModel = model("User", UserSchema);

/*
===================================================
EJEMPLOS DE CONSULTAS USANDO ALGUNA DE ESTAS OPCIONES
===================================================
*/


// Crear un usuario (trim y lowercase se aplican automáticamente)
const user = await UserModel.create({
  username: "   JuanPerez   ", // se guarda "juanperez"
  email: "TEST@EXAMPLE.COM",   // se guarda "test@example.com"
});

// Buscar usuarios menores de 30 años (usando "min" y "max" definidos en age)
const youngUsers = await User.find({ age: { $lte: 30 } });
console.log("Usuarios menores de 30:", youngUsers);

// Buscar usuarios con email único
const userByEmail = await User.findOne({ email: "test@example.com" });
console.log("Usuario encontrado por email:", userByEmail);

// Incluir password en la consulta explícitamente
const withPassword = await User.findOne({ username: "juanperez" }).select("+password");
console.log("Con password (explicit):", withPassword.password);

// Intentar modificar campo immutable (title)
found.title = "Nuevo título"; // immutable: true evita el cambio
await found.save(); // no deberíamos ver el cambio en la DB


/*
===================================================
RESUMEN DE OPCIONES MÁS USADAS
===================================================
- type       → Define el tipo de dato (String, Number, Boolean, Date, etc.)
- required   → Campo obligatorio
- unique     → Valor único en la colección
- default    → Valor por defecto
- trim       → Quita espacios en String
- lowercase  → Convierte a minúsculas automáticamente
- uppercase  → Convierte a mayúsculas automáticamente
- minlength  → Longitud mínima de un String
- maxlength  → Longitud máxima de un String
- match      → Valida con una expresión regular
- min        → Valor numérico mínimo
- max        → Valor numérico máximo
*/