import { useState } from 'react';
import { Services } from '../services';

export const usePost = () => {
    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [description, setDescription] = useState('');
	const [attributs, setAttributs] = useState('');
	const [prix, setPrix] = useState('');
	const [img_urls, setImg_urls] = useState('');
	const [categorie_id, setCategorie_id] = useState('');
	const [utilisateur_id, setUtilisateur_id] = useState('');
	const [promotion_end_date, setPromotion_end_date] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getPost = (postId, signal) => {        
        return Services.PostService.getById(postId, signal)
        .then(response => {
            fillPost(response.post);
            setIsDisabled(false);
        });
    }

    const createPost = signal => {
        const payload = {
            titre,
		description,
		attributs,
		prix,
		img_urls,
		categorie_id,
		utilisateur_id,
		promotion_end_date,
		
        };

        return Services.PostService.create(JSON.stringify(payload), signal);
    }
    const updatePost = (postId, signal) => {
        const payload = {
            titre,
		description,
		attributs,
		prix,
		img_urls,
		categorie_id,
		utilisateur_id,
		promotion_end_date,
		
        };

        return Services.PostService.update(postId, JSON.stringify(payload), signal);
    }
    const deletePost = (postId, signal) => {
        return Services.PostService.destroy(postId, signal);
    }
    const fillPost = (post) => {
        setId(post.id);
        setTitre(post.titre ?? '');
		setDescription(post.description ?? '');
		setAttributs(post.attributs ?? '');
		setPrix(post.prix ?? '');
		setImg_urls(post.img_urls ?? '');
		setCategorie_id(post.categorie_id ?? '');
		setUtilisateur_id(post.utilisateur_id ?? '');
		setPromotion_end_date(post.promotion_end_date ?? '');
		
    }
    const emptyPost = () => {
        setId('');
        setTitre('');
		setDescription('');
		setAttributs('');
		setPrix('');
		setImg_urls('');
		setCategorie_id('');
		setUtilisateur_id('');
		setPromotion_end_date('');
		
    }

    return {
        id,
        titre,
		description,
		attributs,
		prix,
		img_urls,
		categorie_id,
		utilisateur_id,
		promotion_end_date,
		
        errors,
        isDisabled,
        setTitre,
		setDescription,
		setAttributs,
		setPrix,
		setImg_urls,
		setCategorie_id,
		setUtilisateur_id,
		setPromotion_end_date,
		
        setId,
        setErrors,
        setIsDisabled,
        getPost,
        createPost,
        updatePost,
        deletePost,
        fillPost,
        emptyPost
    };
}