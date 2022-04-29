import { useState } from 'react';
import { Services } from '../services';

export const usePublicite = () => {
    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [description, setDescription] = useState('');
	const [type, setType] = useState('');
	const [img_urls, setImg_urls] = useState('');
	const [redirect_url, setRedirect_url] = useState('');
	const [date_debut, setDate_debut] = useState('');
	const [date_fin, setDate_fin] = useState('');
	const [status, setStatus] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getPublicite = (publiciteId, signal) => {        
        return Services.PubliciteService.getById(publiciteId, signal)
        .then(response => {
            fillPublicite(response.publicite);
            setIsDisabled(false);
        });
    }

    const createPublicite = signal => {
        const payload = {
            titre,
		description,
		type,
		img_urls,
		redirect_url,
		date_debut,
		date_fin,
		status,
		
        };

        return Services.PubliciteService.create(JSON.stringify(payload), signal);
    }
    const updatePublicite = (publiciteId, signal) => {
        const payload = {
            titre,
		description,
		type,
		img_urls,
		redirect_url,
		date_debut,
		date_fin,
		status,
		
        };

        return Services.PubliciteService.update(publiciteId, JSON.stringify(payload), signal);
    }
    const deletePublicite = (publiciteId, signal) => {
        return Services.PubliciteService.destroy(publiciteId, signal);
    }
    const fillPublicite = (publicite) => {
        setId(publicite.id);
        setTitre(publicite.titre ?? '');
		setDescription(publicite.description ?? '');
		setType(publicite.type ?? '');
		setImg_urls(publicite.img_urls ?? '');
		setRedirect_url(publicite.redirect_url ?? '');
		setDate_debut(publicite.date_debut ?? '');
		setDate_fin(publicite.date_fin ?? '');
		setStatus(publicite.status ?? '');
		
    }
    const emptyPublicite = () => {
        setId('');
        setTitre('');
		setDescription('');
		setType('');
		setImg_urls('');
		setRedirect_url('');
		setDate_debut('');
		setDate_fin('');
		setStatus('');
		
    }

    return {
        id,
        titre,
		description,
		type,
		img_urls,
		redirect_url,
		date_debut,
		date_fin,
		status,
		
        errors,
        isDisabled,
        setTitre,
		setDescription,
		setType,
		setImg_urls,
		setRedirect_url,
		setDate_debut,
		setDate_fin,
		setStatus,
		
        setId,
        setErrors,
        setIsDisabled,
        getPublicite,
        createPublicite,
        updatePublicite,
        deletePublicite,
        fillPublicite,
        emptyPublicite
    };
}