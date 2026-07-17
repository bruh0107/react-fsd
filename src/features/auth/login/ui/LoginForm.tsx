import styles from './LoginForm.module.scss'
import {useState} from "react";
import {useAuth} from "@/entities/auth/model/useAuth.ts";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await login ({
                username, password
            })
            navigate('/')
        } catch (error) {
            console.log(error, 'Или неверные данные')
        }

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formInputs}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className={styles.button}>Войти</button>
        </form>
    )
}

export default LoginForm