class SessionManager {
    static setSiteId (id) {
        localStorage.setItem("siteId", id)
    }


    static getSiteId () {
        return localStorage.getItem("siteId")
    }


    static clearSiteId () {
        localStorage.removeItem("siteId")
    }
}


export {
    SessionManager
}