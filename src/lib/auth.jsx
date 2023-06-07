import { useSelector } from "react-redux"

const emailexample = 'danirizky@gmail.com'
const passwordexample = 'bodoamat'


const useAuth = () => {
    const handleLogin = (email, password) => {
        return (emailexample === email && passwordexample === password)
    }

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

    return {
        handleLogin,
        isAuthenticated
    }
}

export default useAuth;