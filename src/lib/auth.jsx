import { useSelector } from "react-redux";

const fakeEmail = "admin@gmail.com"
const fakePassword = "admin123"

const useAuth = () => {
    const handleLogin = (email, password) => {
        return (fakeEmail === email && fakePassword === password)
    }

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

    return {
        handleLogin,
        isAuthenticated
    }
}

export default useAuth;