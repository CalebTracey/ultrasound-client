import { api } from './api'
import { IClassification, ISubMenuObj } from '../schemas'

const getDate = async (): Promise<any> => api.get(`date`)

const getClassifications = async (): Promise<IClassification[]> => {
    const response = await api.get('classifications')
    return response.data
}

const getAdminContent = () => api.get(`admin`)

const getUrl = async (link: string): Promise<string> => {
    const response = await api.get(`S3/link/${link}`)
    return response.data
}

const getSubMenuObj = async (id: string): Promise<ISubMenuObj> => {
    const response = await api.get(`submenu/${id}`)
    return response.data
}

const UserService = {
    getClassifications,
    getDate,
    getAdminContent,
    getSubMenuObj,
    getUrl,
}
export default UserService
