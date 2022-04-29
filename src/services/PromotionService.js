import { Api } from './Api';

const  ENPOINTS = {
    Promotion: 'promotions',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Promotion, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Promotion}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Promotion, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Promotion}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Promotion}/${id}`, signal)
}

export const PromotionService = {
    getAll,
    getById,
    create,
    update,
    destroy
}