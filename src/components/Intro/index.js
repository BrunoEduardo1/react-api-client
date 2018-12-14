import React from 'react';

//componentes funcionais Arrow function
//Props objeto com todas as probiedades combinadas
const Intro = props => (
    <div>
    {/*Props.nomeDaPropiedade do elemento*/}
      <p>Primeiro componente {props.mensagem}</p>
    </div>
);

export default Intro;
