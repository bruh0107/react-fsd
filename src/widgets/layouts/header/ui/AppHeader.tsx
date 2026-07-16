import {HeaderNavigation} from "@/features/navigation";
import {AppIcon} from "@/shared/ui/icon";
import styles from './AppHeader.module.scss'
import {Link} from "react-router-dom";

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerInner}>
                    <Link to="/" className={styles.logoWrapper}>
                        <div className={styles.logo}>
                            <AppIcon name="cat" />
                        </div>
                        <h2>CatMarket</h2>
                    </Link>

                    <HeaderNavigation />

                    <Link to="/auth/register">
                        <button type="button" className={styles.button}>Регистрация</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default AppHeader