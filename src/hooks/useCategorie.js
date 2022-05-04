import { useState } from 'react';
import { Services } from '../services';

export const useCategorie = () => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
	const [img_url, setImg_url] = useState('');
    const [img, setImg] = useState('');

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
        const formData = new FormData();

        formData.append("nom", nom);
        formData.append("slug", slug);
        formData.append("description", description);
        formData.append("img", img);

        return Services.CategorieService.create(formData, signal);
    }
    const updateCategorie = (categorieId, signal) => {
        const formData = new FormData();

        formData.append("nom", nom);
        formData.append("slug", slug);
        formData.append("description", description);
        formData.append("img", img);

        return Services.CategorieService.update(categorieId, formData, signal);
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
        setImg('');
		
    }

    return {
        id,
        nom,
		slug,
		description,
		img_url,
        img,
		
        errors,
        isDisabled,
        setNom,
		setSlug,
		setDescription,
		setImg_url,
        setImg,
		
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