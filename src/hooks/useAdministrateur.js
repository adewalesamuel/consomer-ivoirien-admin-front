import { useState } from 'react';
import { Services } from '../services';

export const useAdministrateur = () => {
    const [id, setId] = useState('');
	const [nom_prenoms, setNom_prenoms] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('');
	const [img_url, setImg_url] = useState('');
	const [img, setImg] = useState('');

    const roles = ['super-admin', 'editeur'];
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getAdministrateur = (administrateurId, signal) => {        
        return Services.AdministrateurService.getById(administrateurId, signal)
        .then(response => {
            fillAdministrateur(response.administrateur);
            setIsDisabled(false);
        });
    }

    const createAdministrateur = signal => {
        const payload = {
            nom_prenoms,
		email,
		password,
		role,
		img_url,
		
        };

        return Services.AdministrateurService.create(JSON.stringify(payload), signal);
    }
    const updateAdministrateur = (administrateurId, signal) => {
        const payload = {
            nom_prenoms,
		email,
		password,
		role,
		img_url,
		
        };

        return Services.AdministrateurService.update(administrateurId, JSON.stringify(payload), signal);
    }
    const deleteAdministrateur = (administrateurId, signal) => {
        return Services.AdministrateurService.destroy(administrateurId, signal);
    }
    const fillAdministrateur = (administrateur) => {
        setId(administrateur.id);
        setNom_prenoms(administrateur.nom_prenoms ?? '');
		setEmail(administrateur.email ?? '');
		setPassword(administrateur.password ?? '');
		setRole(administrateur.role ?? '');
		setImg_url(administrateur.img_url ?? '');
		
    }
    const emptyAdministrateur = () => {
        setId('');
        setNom_prenoms('');
		setEmail('');
		setPassword('');
		setRole('');
		setImg_url('');
		
    }

    return {
        id,
        nom_prenoms,
		email,
		password,
		role,
        img,
		img_url,
        roles,
		
        errors,
        isDisabled,
        setNom_prenoms,
		setEmail,
		setPassword,
		setRole,
		setImg_url,
        setImg,
		
        setId,
        setErrors,
        setIsDisabled,
        getAdministrateur,
        createAdministrateur,
        updateAdministrateur,
        deleteAdministrateur,
        fillAdministrateur,
        emptyAdministrateur
    };
}