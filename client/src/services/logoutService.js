import Api from '@/services/API'

export default {
    logout (user) {
        return Api().post('logout', user);
    }
}