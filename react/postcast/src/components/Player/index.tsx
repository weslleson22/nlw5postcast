 import styles from './styles.module.scss';
 export function Player(){ 
    return(
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora"/>
                <strong>Tocando agora</strong>
            </header>
            <div className={styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer></footer>
           Vamos continuar 58,19
        </div>
 
    );
}