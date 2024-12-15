import useFormulario from '../datos/useFormulario';

function Consultas() {
  const {
    nombre,
    setNombre,
    apellido,
    setApellido,
    email,
    setEmail,
    mensaje,
    setMensaje,
    error,
    handleRegister,
    handleKeyPress,
  } = useFormulario();

  return (
    <div 
      className="bg-cover bg-center min-h-screen flex items-center justify-center px-6 py-12 sm:py-16 lg:px-8"
      style={{ backgroundImage: 'url("/src/img/background.png")' }}
    >
      <div className="mx-auto max-w-2xl text-center w-full">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Envíanos tu consulta
        </h2>
        <p className="mt-2 text-lg leading-8 text-white">
          ¡Si tienes alguna duda sobre nuestra ciudad, no dudes en hacérnosla llegar!
        </p>
        <form 
          onSubmit={handleRegister} 
          onKeyDown={handleKeyPress} 
          className="mx-auto mt-12 max-w-xl sm:mt-16 w-full"
        >
          {error && <p className="text-red-600">{error}</p>}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                Nombre
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  required
                  placeholder="Tu nombre"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                Apellido
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  required
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="correo-electronico" className="block text-sm font-semibold leading-6 text-white">
                Correo Electrónico
              </label>
              <div className="mt-2.5">
                <input
                  id="correo-electronico"
                  name="correo-electronico"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  required
                  placeholder="Tu correo electrónico"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                Déjanos un mensaje
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  placeholder="Escribe tu consulta aquí"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Consultas;
