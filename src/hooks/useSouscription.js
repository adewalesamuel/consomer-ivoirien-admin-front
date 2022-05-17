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
    const [post_par_mois, setPost_par_mois] = useState('');
    const [img_par_post, setImg_par_post] = useState('');
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const setPost_par_moisAttributs = post_par_mois => {
		setPost_par_mois(post_par_mois);
		
		let attributsObj = attributs ? JSON.parse(attributs) : {};	
		attributsObj['post_par_mois'] = post_par_mois;
		
		setAttributs(JSON.stringify(attributsObj));
	}
    const setImg_par_postAttributs = img_par_post => {
		setImg_par_post(img_par_post);
		
		let attributsObj = attributs ? JSON.parse(attributs) : {};	
		attributsObj['img_par_post'] = img_par_post;
		
		setAttributs(JSON.stringify(attributsObj));
	}

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

        setPost_par_mois(JSON.parse(souscription.attributs) ? JSON.parse(souscription.attributs)['post_par_mois'] : '');
        setImg_par_post(JSON.parse(souscription.attributs) ? JSON.parse(souscription.attributs)['img_par_post'] : '');
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
        post_par_mois,
        img_par_post,
		
        errors,
        isDisabled,
        setTitre,
		setDescription,
		setImg_urls,
		setPeriode,
		setPrix,
		setAttributs,
        setImg_par_postAttributs,
        setPost_par_moisAttributs,
		
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