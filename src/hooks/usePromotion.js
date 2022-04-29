import { useState } from 'react';
import { Services } from '../services';

export const usePromotion = () => {
    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [description, setDescription] = useState('');
	const [periode, setPeriode] = useState('');
	const [prix, setPrix] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getPromotion = (promotionId, signal) => {        
        return Services.PromotionService.getById(promotionId, signal)
        .then(response => {
            fillPromotion(response.promotion);
            setIsDisabled(false);
        });
    }

    const createPromotion = signal => {
        const payload = {
            titre,
		description,
		periode,
		prix,
		
        };

        return Services.PromotionService.create(JSON.stringify(payload), signal);
    }
    const updatePromotion = (promotionId, signal) => {
        const payload = {
            titre,
		description,
		periode,
		prix,
		
        };

        return Services.PromotionService.update(promotionId, JSON.stringify(payload), signal);
    }
    const deletePromotion = (promotionId, signal) => {
        return Services.PromotionService.destroy(promotionId, signal);
    }
    const fillPromotion = (promotion) => {
        setId(promotion.id);
        setTitre(promotion.titre ?? '');
		setDescription(promotion.description ?? '');
		setPeriode(promotion.periode ?? '');
		setPrix(promotion.prix ?? '');
		
    }
    const emptyPromotion = () => {
        setId('');
        setTitre('');
		setDescription('');
		setPeriode('');
		setPrix('');
		
    }

    return {
        id,
        titre,
		description,
		periode,
		prix,
		
        errors,
        isDisabled,
        setTitre,
		setDescription,
		setPeriode,
		setPrix,
		
        setId,
        setErrors,
        setIsDisabled,
        getPromotion,
        createPromotion,
        updatePromotion,
        deletePromotion,
        fillPromotion,
        emptyPromotion
    };
}