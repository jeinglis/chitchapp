import Api from '@/services/API'

export default {
    login () {
        return Api().get('login')
    }
}