export interface User {
    username: string
    password: string
}

export interface Auth {
    token: string | null
    isAuth: boolean
    login: (user: User) => Promise<void>
    logout: () => void
}