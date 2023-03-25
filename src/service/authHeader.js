import store from '../store'

export default function authHeader() {
    const token = store.getters.getToken
    if (token) {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    } else {
        return {}
    }
}