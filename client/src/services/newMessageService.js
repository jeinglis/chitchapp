import Api from '@/services/API'

export default {
    newMessage (message) {
        return Api().post('newMessage', message)
    }
}