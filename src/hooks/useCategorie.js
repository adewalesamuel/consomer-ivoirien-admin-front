import { useState } from 'react';
import { Services } from '../services';

export const useCategorie = () => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [img_url, setImg_url] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getCategorie = (categorieId, signal) => {        
        return Services.CategorieService.getById(categorieId, signal)
        .then(response => {
            fillCategorie(response.categorie);
            setIsDisabled(false);
        });
    }

    const createCategorie = signal => {
        const payload = {
            nom,
		slug,
		description,
		img_url,
		
        };

        return Services.CategorieService.create(JSON.stringify(payload), signal);
    }
    const updateCategorie = (categorieId, signal) => {
        const payload = {
            nom,
		slug,
		description,
		img_url,
		
        };

        return Services.CategorieService.update(categorieId, JSON.stringify(payload), signal);
    }
    const deleteCategorie = (categorieId, signal) => {
        return Services.CategorieService.destroy(categorieId, signal);
    }
    const fillCategorie = (categorie) => {
        setId(categorie.id);
        setNom(categorie.nom ?? '');
		setSlug(categorie.slug ?? '');
		setDescription(categorie.description ?? '');
		setImg_url(categorie.img_url ?? '');
		
    }
    const emptyCategorie = () => {
        setId('');
        setNom('');
		setSlug('');
		setDescription('');
		setImg_url('');
		
    }

    return {
        id,
        nom,
		slug,
		description,
		img_url,
		
        errors,
        isDisabled,
        setNom,
		setSlug,
		setDescription,
		setImg_url,
		
        setId,
        setErrors,
        setIsDisabled,
        getCategorie,
        createCategorie,
        updateCategorie,
        deleteCategorie,
        fillCategorie,
        emptyCategorie
    };
}