import { Api } from './Api';

const  ENPOINTS = {
    Notification: 'notifications',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Notification, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Notification}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Notification, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Notification}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Notification}/${id}`, signal)
}

export const NotificationService = {
    getAll,
    getById,
    create,
    update,
    destroy
}