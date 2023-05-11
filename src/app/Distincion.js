export default function Distincion(props) {
  if (!props.op) {
    return (
      <span
        className={`
        border text-sm rounded-full py-1 px-2 m-1
        ${props.tipo == 1 ? 'text-emerald-400 border-emerald-400' : ''}
        ${props.tipo == 2 ? 'text-red-400 border-red-400' : ''}
        ${props.tipo == 3 ? 'text-lime-400 border-lime-400' : ''}
        ${props.tipo == 4 ? 'text-sky-300 border-sky-300' : ''}
        ${props.tipo == 5 ? 'text-amber-400 border-amber-400' : ''}
        ${props.tipo == 6 ? 'text-orange-400 border-orange-400' : ''}
        ${props.tipo == 7 ? 'text-pink-400 border-pink-400' : ''}
        ${props.tipo == 8 ? 'text-rose-300 border-rose-300' : ''}
        ${props.tipo == 9 ? 'text-violet-400 border-violet-400' : ''}
        ${props.tipo == 10 ? 'text-orange-200 border-orange-200' : ''}
        
        ${props.tipo == 'T2' ? 'text-green-400 border-green-400' : ''}
        `}
      >
        {props.tipo == 1 ? 'Administrador' : null}
        {props.tipo == 2 ? 'Mano derecha' : null}
        {props.tipo == 3 ? 'Jefe moderador' : null}
        {props.tipo == 4 ? 'Moderador' : null}
        {props.tipo == 5 ? 'Programador' : null}
        {props.tipo == 6 ? 'Publicista' : null}
        {props.tipo == 7 ? 'Anfitrión' : null}
        {props.tipo == 8 ? 'Diseñador' : null}
        {props.tipo == 9 ? 'Soporte' : null}
        {props.tipo == 10 ? 'Pride guardián' : null}

        {props.tipo == 'T2' ? 'Estelar Tecla 2' : null}
      </span>
    )
  } else {
    return (
      <span className='border text-sm rounded-full py-1 px-2 m-1 text-white border-white'>
        {props.tipo == 1 ? 'Administrador' : null}
        {props.tipo == 2 ? 'Mano derecha' : null}
        {props.tipo == 3 ? 'Jefe moderador' : null}
        {props.tipo == 4 ? 'Moderador' : null}
        {props.tipo == 5 ? 'Programador' : null}
        {props.tipo == 6 ? 'Publicista' : null}
        {props.tipo == 7 ? 'Anfitrión' : null}
        {props.tipo == 8 ? 'Diseñador' : null}
        {props.tipo == 9 ? 'Soporte' : null}
        {props.tipo == 10 ? 'Pride guardián' : null}

        {props.tipo == 'c' ? 'Común' : null}
        {props.tipo == 'r' ? 'Raro' : null}
        {props.tipo == 'u' ? 'Único' : null}
        {props.tipo == 'e' ? 'Épico' : null}
        {props.tipo == 'l' ? 'Legendario' : null}

        {props.tipo == 'T2' ? 'Estelar Tecla 2' : null}
      </span>
    )
  }
}