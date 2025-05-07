import { Link } from 'react-router-dom';

function Politicas() {
    return (
        <div className="font-system">
            <div className="max-w-5xl mx-auto p-6 text-justify text-base text-gray-800">
                <Link to='/contact'><i className="fa-solid fa-arrow-rotate-left text-primary text-2xl" style={{ color: "primary", }}></i></Link>
                <h1 className="text-3xl font-bold mb-6 text-center">Política de Privacidad de Fox Pizza Gourmet y Más</h1>
                <p className="text-sm text-gray-600 mb-8 text-center">Última actualización: Abril 2025</p>
                <section className="my-6">
                    <h2 className="text-xl font-semibold mb-2">1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO</h2>
                    <p><strong>Nombre comercial:</strong> Fox Pizza Gourmet y Más</p>
                    <p><strong>NIT:</strong> 52250936-1 </p>
                    <p><strong>Dirección:</strong> Calle 57B Sur # 69A - 24 Villa del río</p>
                    <p><strong>Teléfono:</strong> (+57) 3227576963 </p>
                    <p><strong>Email:</strong> foxpizzagourmetm@gmail.com</p><br />
                    <p>Fox Pizza Gourmet y Más actúa como responsable del tratamiento de los datos personales recopilados a través de su sitio web, redes sociales y canales asociados.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">2. LEGISLACIÓN APLICABLE</h2>
                    <p>Esta Política se rige por la <strong>Ley 1581 de 2012</strong> de Colombia, el <strong>Decreto 1377 de 2013</strong>, y demás normas que la complementen, modifiquen o deroguen.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">3. DATOS PERSONALES QUE RECOPILAMOS</h2>
                    <p>Recopilamos los siguientes datos personales cuando un usuario interactúa con nuestro sitio web o servicios:</p>
                    <ul className='list-disc ml-4'>
                        <li>Nombre completo</li>
                        <li>Número de teléfono</li>
                        <li>Correo electrónico</li>
                        <li>Dirección de entrega</li>
                        <li>Información de pago (NO almacenamos datos de tarjetas de crédito directamente)</li>
                        <li>Dirección IP y datos de navegación (cookies, ubicación geográfica aproximada)</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">4. FINALIDAD DEL TRATAMIENTO</h2>
                    <p>Los datos personales se recolectan para las siguientes finalidades:</p>
                    <ul className='list-disc ml-4'>
                        <li>Procesar y entregar pedidos realizados en el sitio web</li>
                        <li>Contactar al usuario por motivos relacionados con su compra o atención al cliente</li>
                        <li>Enviar promociones, noticias y contenido de interés (solo si el usuario acepta recibirlos)</li>
                        <li>Cumplir obligaciones legales y contractuales</li>
                        <li>Analizar estadísticas de uso del sitio web (Google Analytics u otros)</li>
                    </ul>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">5. DERECHOS DEL TITULAR</h2>
                    <p>De acuerdo con la ley colombiana, los usuarios tienen derecho a:</p>
                    <ul className='list-disc ml-4'>
                        <li>Conocer, actualizar y rectificar sus datos personales</li>
                        <li>Solicitar prueba de la autorización otorgada</li>
                        <li>Ser informado sobre el uso de sus datos</li>
                        <li>Revocar la autorización y/o solicitar la supresión de los datos</li>
                        <li>Acceder gratuitamente a sus datos</li>
                    </ul>
                    <p>Para ejercer estos derechos, puedes escribirnos a foxpizzagourmetm@gmail.com con el asunto: <strong>Protección de Datos Personales.</strong></p>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">6. AUTORIZACIÓN DEL TITULAR</h2>
                    <p>Mediante el uso del sitio web y la aceptación de estas políticas, el titular autoriza expresamente a Fox Pizza Gourmet y Más a tratar sus datos personales conforme a las finalidades mencionadas.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">7. CONFIDENCIALIDAD Y SEGURIDAD</h2>
                    <p>Implementamos medidas técnicas, humanas y administrativas razonables para garantizar la seguridad de los datos personales y evitar su pérdida, mal uso o acceso no autorizado.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">8. COOKIES</h2>
                    <p>Utilizamos cookies propias y de terceros para analizar el tráfico y mejorar la experiencia del usuario. Puedes configurar tu navegador para rechazar el uso de cookies, aunque esto puede afectar algunas funciones del sitio.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">9. TRANSFERENCIA Y TRANSMISIÓN DE DATOS</h2>
                    <p>No compartimos, vendemos ni alquilamos datos personales a terceros, salvo cuando sea necesario para:</p>
                    <ul className='list-disc ml-4'>
                        <li>Procesamiento de pagos</li>
                        <li>Servicios de logística y entrega</li>
                        <li>Cumplimiento de obligaciones legales</li>
                    </ul>
                    <p>En tales casos, se firmarán acuerdos de confidencialidad con los terceros encargados.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">10. VIGENCIA</h2>
                    <p>Esta política entra en vigencia desde su publicación y permanecerá vigente hasta que sea modificada por una versión actualizada.</p>
                </section>
            </div>
        </div>
    );
}

export default Politicas;
