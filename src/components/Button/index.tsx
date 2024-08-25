import React from 'react';
import style from './Botao.module.scss';

class Button extends React.Component {
    render() {
        return (
            <button className={style.botao}>
                Botão
            </button>
        )
    }
}

export default Button;
