import { Api } from './Api';

const  ENPOINTS = {
    Categorie: 'categories',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Categorie, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Categorie}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.postFormData(ENPOINTS.Categorie, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.postFormData(`${ENPOINTS.Categorie}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Categorie}/${id}`, signal)
}

export const CategorieService = {
    getAll,
    getById,
    create,
    update,
    destroy
}