import { Api } from './Api';

const  ENPOINTS = {
    Souscription: 'souscriptions',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Souscription, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Souscription}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Souscription, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Souscription}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Souscription}/${id}`, signal)
}

export const SouscriptionService = {
    getAll,
    getById,
    create,
    update,
    destroy
}