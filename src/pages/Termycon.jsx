import { Link } from 'react-router-dom';

function Terminos() {
    return (
        <div className="font-system">
            <div className="max-w-5xl mx-auto p-6 text-justify text-base text-gray-800">
                <Link to='/contact'><i className="fa-solid fa-arrow-rotate-left text-primary text-2xl" style={{ color: "primary", }}></i></Link>
                <h1 className="text-3xl font-bold mb-6 text-center">Términos y Condiciones</h1>
                <p className="text-sm text-gray-600 mb-8 text-center">Última actualización: Abril 2025</p>
                <p>Bienvenido al sitio web de Fox Pizza Gourmet y Más. Al acceder, navegar o utilizar este sitio web, aceptas cumplir con los presentes Términos y Condiciones, los cuales regulan el acceso, uso, servicios de comercio electrónico y demás funcionalidades disponibles en nuestro portal.</p>
                <section className="my-6">
                    <h2 className="text-xl font-semibold mb-2">1. IDENTIFICACIÓN DEL TITULAR DEL SITIO</h2>
                    <p><strong>Nombre comercial:</strong> Fox Pizza Gourmet y Más</p>
                    <p><strong>Razón social:</strong> Olga Verdugo Silva</p>
                    <p><strong>NIT:</strong> 52250936-1 </p>
                    <p><strong>Dirección:</strong> Calle 57B Sur # 69A - 24 Villa del río</p>
                    <p><strong>Teléfono:</strong> (+57) 3227576963 </p>
                    <p><strong>Email:</strong> foxpizzagourmetm@gmail.com                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">2. ACEPTACIÓN DE LOS TÉRMINOS</h2>
                    <p>
                        Al ingresar al sitio web y/o realizar un pedido, el usuario reconoce haber leído, entendido y aceptado estos Términos y Condiciones...
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">3. CAPACIDAD LEGAL</h2>
                    <p>
                        El sitio solo puede ser utilizado por personas mayores de edad (18 años) o por menores con autorización expresa de sus padres o tutores legales, quienes serán responsables de todas las actividades realizadas.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">4. DESCRIPCIÓN DEL SERVICIO</h2>
                    <p>Fox Pizza Gourmet y Más ofrece al usuario la posibilidad de:</p>
                        <ul className='list-disc ml-4'>
                            <li>Consultar el menú de productos</li>
                            <li>Realizar pedidos en línea</li>
                            <li>Programar entregas a domicilio o recogidas</li>
                            <li>Contactarse con atención al cliente</li>
                            <li>Participar en promociones o sorteos</li>
                        </ul>
                    <p>La disponibilidad de productos está sujeta a cambios sin previo aviso. Nos reservamos el derecho de limitar cantidades y rechazar pedidos cuando lo consideremos necesario.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">5. PEDIDOS Y PAGOS</h2>
                    <ul className='list-disc ml-4'>
                        <li>El usuario podrá realizar pedidos a través del sitio web completando la información solicitada.</li>
                        <li>Se aceptan pagos mediante tarjeta de crédito, débito, PSE, pago contra entrega o plataformas habilitadas.</li>
                        <li>Todos los precios incluyen IVA conforme a la legislación colombiana.</li>
                        <li>En caso de errores en precios o descripciones, nos reservamos el derecho de cancelar el pedido e informar al cliente.</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">6. ENTREGA DE PRODUCTOS</h2>
                    <ul className='list-disc ml-4'>
                        <li>Las entregas se realizan únicamente dentro del área de cobertura establecida, la cual se puede consultar en la página web.</li>
                        <li>El tiempo estimado de entrega será informado al usuario, sin embargo, pueden presentarse retrasos por causas externas (clima, tráfico, alta demanda).</li>
                        <li>El usuario debe verificar el estado del producto al momento de recibirlo. Si encuentra inconsistencias, debe informarlas de inmediato.</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">7. POLÍTICA DE CANCELACIÓN Y REEMBOLSO</h2>
                    <ul className='list-disc ml-4'>
                        <li>Los pedidos pueden ser cancelados antes de que el producto haya sido preparado. Después de este punto, no se admitirán cancelaciones.</li>
                        <li>Reembolsos solo se realizarán en caso de errores atribuibles al restaurante, como entregas incorrectas o productos en mal estado.</li>
                        <li>Toda solicitud debe realizarse dentro de las primeras 24 horas de haber recibido el pedido, adjuntando evidencia (foto, descripción).</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">8. PROTECCIÓN DE DATOS PERSONALES</h2>
                    <ul className='list-disc ml-4'>
                        <li>En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, informamos que los datos personales suministrados serán tratados con fines de atención al cliente, procesamiento de pedidos, publicidad y mejora de nuestros servicios.</li>
                        <li>Los usuarios tienen derecho a conocer, actualizar, rectificar y suprimir sus datos personales escribiendo a nuestro correo electrónico.</li>
                        <li>El tratamiento de datos se realizará conforme a nuestra Política de Privacidad, disponible en esta página.</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">9. USO DEL SITIO WEB</h2>
                    <ul className='list-disc ml-4'>
                        <li>El usuario se compromete a utilizar el sitio únicamente con fines lícitos.</li>
                        <li>Se prohíbe modificar, copiar, distribuir, transmitir, reproducir o explotar de cualquier forma el contenido del sitio sin autorización expresa de Fox Pizza Gourmet y Más.</li>
                        <li>Cualquier intento de violar la seguridad del sitio será motivo de cancelación de acceso y, si corresponde, de acciones legales.</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">10. PROPIEDAD INTELECTUAL</h2>
                    <p>Todos los contenidos, incluyendo imágenes, logos, recetas, descripciones, nombres comerciales, textos y diseño gráfico, son propiedad de Fox Pizza Gourmet y Más o cuentan con licencia de uso. Queda estrictamente prohibido su uso no autorizado.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">11. RESPONSABILIDAD</h2>
                    <p>Fox Pizza Gourmet y Más no será responsable por:</p>
                    <ul className='list-disc ml-4'>
                        <li>Interrupciones del sitio por causas ajenas (mantenimiento, caídas de servidor, fuerza mayor)</li>
                        <li>Daños indirectos causados por el uso de la plataforma</li>
                        <li>Contenidos publicados por terceros en espacios interactivos (si los hubiera)</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">12. PROMOCIONES Y CÓDIGOS</h2>
                    <ul className='list-disc ml-4'>
                        <li>Las promociones están sujetas a disponibilidad, vigencia y condiciones publicadas en el sitio o redes oficiales.</li>
                        <li>Los códigos de descuento no son acumulables y pueden estar limitados a ciertas zonas o productos.</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">13. MODIFICACIONES A LOS TÉRMINOS</h2>
                    <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las nuevas versiones serán publicadas en el sitio con fecha de actualización. El uso continuo del sitio implica aceptación de los cambios.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">14. LEY APLICABLE Y JURISDICCIÓN</h2>
                    <p>Estos Términos se rigen por las leyes de la República de Colombia. Cualquier controversia será resuelta por los jueces de la jurisdicción civil de la ciudad donde Fox Pizza tenga su sede principal.</p>
                </section>
            </div>
        </div>
    );
}

export default Terminos;
