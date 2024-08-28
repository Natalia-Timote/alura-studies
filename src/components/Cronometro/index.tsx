import Button from '../Button';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';

export default function Cronometro() {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha o seu momento de estudo e inicie o cronômetro.</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Button
                texto="Começar"
            />
        </div>
    )
}