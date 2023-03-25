import VueCookies from 'vue-cookies'

const JWTManager = () => {
    VueCookies.config('15min')

    let tokenJWT = VueCookies.get('$2y$12$YB7lcXsdHGkMft6OhxCDU.aGXW0ZqzMi2.efdMkxEMBgi0wcDNj66') || null
    let tokenPaus = VueCookies.get('$2y$12$fKHjcalQl6ZDD3cyHQCxSeRbV7s90tt29me0NIGBG7ebqYXtswPPK') || null

    const getTokenJWT = () => tokenJWT
    const getTokenPaus = () => tokenPaus

    const setTokenJWT = (token) => {
        VueCookies.set('$2y$12$YB7lcXsdHGkMft6OhxCDU.aGXW0ZqzMi2.efdMkxEMBgi0wcDNj66', token)
        tokenJWT = token
        return true
    }
    const setTokenPaus = (token) => {
        VueCookies.set('$2y$12$fKHjcalQl6ZDD3cyHQCxSeRbV7s90tt29me0NIGBG7ebqYXtswPPK', token)
        tokenPaus = token
        return true
    }

    const eraseTokenJWT = () => {
        VueCookies.remove('$2y$12$YB7lcXsdHGkMft6OhxCDU.aGXW0ZqzMi2.efdMkxEMBgi0wcDNj66')
        tokenJWT = null
        return true
    }
    const eraseTokenPaus = () => {
        VueCookies.remove('$2y$12$fKHjcalQl6ZDD3cyHQCxSeRbV7s90tt29me0NIGBG7ebqYXtswPPK')
        tokenPaus = null
        return true
    }
    const eraseToken = () => {
        tokenJWT = null
        tokenPaus = null
        VueCookies.keys().forEach(cookie => VueCookies.remove(cookie))
        return true
    }

    return {
        getTokenJWT,
        getTokenPaus,
        setTokenJWT,
        setTokenPaus,
        eraseTokenJWT,
        eraseTokenPaus,
        eraseToken
    }
}

export default JWTManager()