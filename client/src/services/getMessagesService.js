import Api from '@/services/API'

export default {
    getMessages () {
        return Api().get('getMessages')
    }
}