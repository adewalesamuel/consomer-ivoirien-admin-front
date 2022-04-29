import { Api } from './Api';

const  ENPOINTS = {
    Publicite: 'publicites',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Publicite, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Publicite}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Publicite, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Publicite}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Publicite}/${id}`, signal)
}

export const PubliciteService = {
    getAll,
    getById,
    create,
    update,
    destroy
}