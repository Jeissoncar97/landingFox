import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xqkrvagb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire({
        title: '¡Formulario enviado!',
        text: 'Su formulario ha sido enviado exitosamente.',
        timer: 1500,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar el formulario.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  return (
    <div className=" py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white flex justify-between py-15 font-system flex-col md:flex-row" >
        <div className='text-2xl font-semibold text-center mx-auto'>
          <h3><i className="fa-solid fa-location-dot text-primary"></i> Encuentra aquí Fox Pizza Gourmet y Más</h3>
          <h3 className='pb-4'>Deliciosa pizza y mucho más.</h3>
          <div className='relative max-w-135 h-0 pb-[75%] overflow-hidden'>
            <iframe className='absolute top-0 left-0 w-full h-full ' src="https://www.google.com/maps/d/u/0/embed?mid=1By7TjLdw6tQlmfdRRxFWpqaZTF_VDJ4&ehbc=2E312F"></iframe>
          </div>
        </div>
        <div className='mx-auto'>
          <section className="my-6 text-xl mx-auto">
            <h2 className="text-5xl font-semibold mb-2">Datos de contácto</h2><br />
            <p><strong>Dirección:</strong> Calle 57B Sur # 69A - 24 Villa del río</p><br />
            <p><strong>Teléfono1:</strong> (+57) 3227576963 </p><br />
            <p><strong>Teléfono2:</strong> 601 7286033 </p><br />
            <p><strong>Email:</strong> foxpizzagourmetm@gmail.com</p>
          </section>
          
        </div>
      </div>
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 font-system">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {[
            { id: 'nombre', label: 'Nombre', type: 'text' },
            { id: 'email', label: 'Email', type: 'email' },
            { id: 'asunto', label: 'Asunto', type: 'text' },
          ].map((field) => (
            <div key={field.id} className="relative">
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                value={formData[field.id]}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full border-b border-gray-400 text-gray-900 placeholder-transparent px-2 pt-5 pb-2 bg-transparent focus:outline-none focus:border-primary"
              />
              <label
                htmlFor={field.id}
                className="-mt-2 absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
              >
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder=" "
              rows="5"
              required
              className="peer w-full border-b border-gray-400 text-gray-900 placeholder-transparent px-2 pt-5 pb-2 bg-transparent resize-none focus:outline-none focus:border-primary"
            />
            <label
              htmlFor="mensaje"
              className="-mt-2 absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
            >
              Mensaje
            </label>
            <div className='flex font-system text-sm pt-5'>
              <input className='mr-2' type="checkbox" name="" required /> <p>Al continuar, aceptas los <Link className='text-anchor' to="/contac/terminosycondiciones">términos y condicones</Link> y la <Link className='text-anchor' to="/contac/politicas">Políticas de privacidad</Link></p>
            </div>

          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Enviar
            </button>
          </div>

          <input type="hidden" name="_next" value="https://jeissoncar97.github.io/portafolio5/" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>

    </div>
  );
}

export default ContactForm;
