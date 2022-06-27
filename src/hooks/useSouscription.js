import { useState } from 'react';
import { Services } from '../services';

export const useSouscription = () => {
    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [description, setDescription] = useState('');
	const [img, setImg] = useState('');
	const [img_url, setImg_Url] = useState('');
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
        const formData = new FormData();

        formData.append("titre", titre);
        formData.append("description", description);
        formData.append("img", img);
        formData.append("periode", periode);
        formData.append("prix", prix);
        formData.append("attributs", attributs);

        return Services.SouscriptionService.create(formData, signal);
    }
    const updateSouscription = (souscriptionId, signal) => {
        const formData = new FormData();

        formData.append("titre", titre);
        formData.append("description", description);
        formData.append("img", img);
        formData.append("periode", periode);
        formData.append("prix", prix);
        formData.append("attributs", attributs);

        return Services.SouscriptionService.update(souscriptionId, formData, signal);
    }
    const deleteSouscription = (souscriptionId, signal) => {
        return Services.SouscriptionService.destroy(souscriptionId, signal);
    }
    const fillSouscription = (souscription) => {
        setId(souscription.id);
        setTitre(souscription.titre ?? '');
		setDescription(souscription.description ?? '');
		setImg(souscription.img ?? '');
		setPeriode(souscription.periode ?? '');
		setPrix(souscription.prix ?? '');
		setAttributs(souscription.attributs ?? '');
		
    }
    const emptySouscription = () => {
        setId('');
        setTitre('');
		setDescription('');
		setImg('');
		setPeriode('');
		setPrix('');
		setAttributs('');
		
    }

    return {
        id,
        titre,
		description,
		img,
		periode,
		prix,
		attributs,
        img_url,
		
        errors,
        isDisabled,
        setTitre,
		setDescription,
		setImg,
		setPeriode,
		setPrix,
		setAttributs,
        setImg_Url,
		
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