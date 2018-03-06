import Api from '@/services/API'

export default {
    getUserList (user) {
        return Api().post('getUserList', user);
    }
}