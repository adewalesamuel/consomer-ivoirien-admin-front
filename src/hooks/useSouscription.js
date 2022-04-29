import { useState } from 'react';
import { Services } from '../services';

export const useSouscription = () => {
    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [description, setDescription] = useState('');
	const [img_urls, setImg_urls] = useState('');
	const [periode, setPeriode] = useState('');
	const [prix, setPrix] = useState('');
	const [attributs, setAttributs] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getSouscription = (souscriptionId, signal) => {        
        return Services.SouscriptionService.getById(souscriptionId, signal)
        .then(response => {
            fillSouscription(response.souscription);
            setIsDisabled(false);
        });
    }

    const createSouscription = signal => {
        const payload = {
            titre,
		description,
		img_urls,
		periode,
		prix,
		attributs,
		
        };

        return Services.SouscriptionService.create(JSON.stringify(payload), signal);
    }
    const updateSouscription = (souscriptionId, signal) => {
        const payload = {
            titre,
		description,
		img_urls,
		periode,
		prix,
		attributs,
		
        };

        return Services.SouscriptionService.update(souscriptionId, JSON.stringify(payload), signal);
    }
    const deleteSouscription = (souscriptionId, signal) => {
        return Services.SouscriptionService.destroy(souscriptionId, signal);
    }
    const fillSouscription = (souscription) => {
        setId(souscription.id);
        setTitre(souscription.titre ?? '');
		setDescription(souscription.description ?? '');
		setImg_urls(souscription.img_urls ?? '');
		setPeriode(souscription.periode ?? '');
		setPrix(souscription.prix ?? '');
		setAttributs(souscription.attributs ?? '');
		
    }
    const emptySouscription = () => {
        setId('');
        setTitre('');
		setDescription('');
		setImg_urls('');
		setPeriode('');
		setPrix('');
		setAttributs('');
		
    }

    return {
        id,
        titre,
		description,
		img_urls,
		periode,
		prix,
		attributs,
		
        errors,
        isDisabled,
        setTitre,
		setDescription,
		setImg_urls,
		setPeriode,
		setPrix,
		setAttributs,
		
        setId,
        setErrors,
        setIsDisabled,
        getSouscription,
        createSouscription,
        updateSouscription,
        deleteSouscription,
        fillSouscription,
        emptySouscription
    };
}