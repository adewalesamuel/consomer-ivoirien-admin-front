import { useState, useEffect } from 'react';
import { Services } from '../services';

export const useCategorie = () => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [slug, setSlug] = useState('');
	const [description, setDescription] = useState('');
    const [parent_category_id, setParent_category_id] = useState('');
	const [img_url, setImg_url] = useState('');
    const [img, setImg] = useState('');

    const [categories, setCategories] = useState([]);
	
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
        formData.append("parent_category_id", parent_category_id);
        formData.append("img", img);

        return Services.CategorieService.create(formData, signal);
    }
    const updateCategorie = (categorieId, signal) => {
        const formData = new FormData();

        formData.append("nom", nom);
        formData.append("slug", slug);
        formData.append("description", description);
        formData.append("parent_category_id", parent_category_id);
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
        setParent_category_id(categorie.parent_category_id ?? '');
		
    }
    const emptyCategorie = () => {
        setId('');
        setNom('');
		setSlug('');
		setDescription('');
		setImg_url('');
		setImg(null);
        setParent_category_id('');
		
    }

    useEffect(() => {
        const abortController = new AbortController();

        Services.CategorieService.getAll(abortController.signal)
        .then(response => {
            setCategories(response.categories);
        })
        .catch(err => console.log(err));
    
      return () => {
        
      }
    }, [])


    return {
        id,
        nom,
		slug,
		description,
		img_url,
        categories,
        parent_category_id,
		
        errors,
        isDisabled,
        setNom,
		setSlug,
		setDescription,
		setImg_url,
        setImg,
        setParent_category_id,
		
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