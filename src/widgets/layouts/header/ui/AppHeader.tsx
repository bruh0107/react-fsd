import {HeaderNavigation} from "@/features/navigation";
import {AppIcon} from "@/shared/ui/icon";
import styles from './AppHeader.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "@/entities/auth/model/useAuth.ts";

const AppHeader = () => {
    const { isAuth, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('auth/login')
    }

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

                    <div className={styles.buttonsWrapper}>
                        {
                            !isAuth
                                ? <Link to="/auth/login">
                                    <button type="button" className={styles.button}>Вход</button>
                                </Link>
                                : <button onClick={handleLogout} type="button" className={styles.button}>Выход</button>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader