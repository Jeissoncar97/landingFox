// src/components/PlatosPorCategoria.js
import { useEffect, useState } from 'react'
import { supabase } from '../supabaseclient'

function PlatosPorCategoria({ nombreTabla, title }) {
  const [platos, setPlatos] = useState([])

  useEffect(() => {
    const fetchPlatos = async () => {
      const { data, error } = await supabase.from(nombreTabla).select('*')
      if (error) console.error(error)
      else setPlatos(data)
    }

    fetchPlatos()
  }, [nombreTabla])

  return (
    <div className='max-w-5xl mx-auto py-10 px-4 font-permanentMarker text-center bg-primary-claro rounded-lg my-20'>
      <h3 className=" my-6 text-4xl text-permanentMarker color-white">{title}</h3>

      <div className='flex justify-between mt-4 max-w-3xl mx-auto px-4 text-centerfont-bold'>
        <h3 className='flex justify-between min-w-30 sm:w-53'></h3>
        <div className='flex grid grid-cols-2'>
          <h4 className="w-20 text-sm sm:text-lg mx-2">PEQUEÑA</h4>
          <h4 className="w-20 text-sm sm:text-lg mx-2">GRANDE</h4>
        </div>

      </div>
      <div className="gap-4 max-w-3xl mx-auto font-system">
        {platos.map((plato) => (
          <div key={plato.id} className=" p-4 rounded flex justify-between">
            <div className='text-left'>
              <h4 className="font-bold mt-2">{plato.nombre}</h4>
              <p className="text-sm text-white-600 w-30 sm:w-53">{plato.descripcion}</p>
            </div>
            <div className="mt-2 flex font-bold grid grid-cols-2 text-center">
              {plato.precio_peq && (
                <p className="text-sm w-20 mx-2">${(plato.precio_peq)}</p>
              )}
              {plato.precio_gran && (
                <p className="text-sm w-20 mx-2">${(plato.precio_gran)}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlatosPorCategoria
