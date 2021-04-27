 import format from 'date-fns/format';
 import ptBR from 'date-fns/locale/pt-BR';
 import styles from './styles.module.scss';
 export function Header(){
    //para pegar a data atual... foi add yarn add date-fns
    const currenteDate = format(new Date(), 'EEEEEE, d MMMM',{locale: ptBR} );
    //termina aqui 
    return(
        <header className={styles.headerContainer}>
        <img src="/logo.svg" alt="Podcastr"/>
        <p>O melhor para você Ouvir</p>
        <span>{currenteDate}</span>
        </header>

    );
}