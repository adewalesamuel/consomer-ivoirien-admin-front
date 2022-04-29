import { Api } from './Api';

const  ENPOINTS = {
    SouscriptionUtilisateur: 'souscription_utilisateurs',
};

const getAll = signal => {
    return Api.get(ENPOINTS.SouscriptionUtilisateur, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.SouscriptionUtilisateur}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.SouscriptionUtilisateur, payload, signal)
}

const update = (id, payload, signal) => {
    return Api.put(`${ENPOINTS.SouscriptionUtilisateur}/${id}`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.SouscriptionUtilisateur}/${id}`, signal)
}

export const SouscriptionUtilisateurService = {
    getAll,
    getById,
    create,
    update,
    destroy
}