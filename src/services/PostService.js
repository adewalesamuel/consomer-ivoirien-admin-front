import { Api } from './Api';

const  ENPOINTS = {
    Post: 'posts',
};

const getAll = signal => {
    return Api.get(ENPOINTS.Post, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.Post}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.Post, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.Post}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.Post}/${id}`, signal)
}

export const PostService = {
    getAll,
    getById,
    create,
    update,
    destroy
}