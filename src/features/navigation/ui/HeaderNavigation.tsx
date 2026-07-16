import styles from './HeaderNavigation.module.scss'

const HeaderNavigation = () => {
    return (
        <nav className={styles.navigation}>
            <a href="">Продукты</a>
            <a href="">Корзина</a>
            <a href="">О нас</a>
        </nav>
    )
}

export default HeaderNavigation