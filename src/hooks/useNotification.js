import { useState } from 'react';
import { Services } from '../services';

export const useNotification = () => {
    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [contenu, setContenu] = useState('');
	const [utilisateur_id, setUtilisateur_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getNotification = (notificationId, signal) => {        
        return Services.NotificationService.getById(notificationId, signal)
        .then(response => {
            fillNotification(response.notification);
            setIsDisabled(false);
        });
    }

    const createNotification = signal => {
        const payload = {
            titre,
		contenu,
		utilisateur_id,
		
        };

        return Services.NotificationService.create(JSON.stringify(payload), signal);
    }
    const updateNotification = (notificationId, signal) => {
        const payload = {
            titre,
		contenu,
		utilisateur_id,
		
        };

        return Services.NotificationService.update(notificationId, JSON.stringify(payload), signal);
    }
    const deleteNotification = (notificationId, signal) => {
        return Services.NotificationService.destroy(notificationId, signal);
    }
    const fillNotification = (notification) => {
        setId(notification.id);
        setTitre(notification.titre ?? '');
		setContenu(notification.contenu ?? '');
		setUtilisateur_id(notification.utilisateur_id ?? '');
		
    }
    const emptyNotification = () => {
        setId('');
        setTitre('');
		setContenu('');
		setUtilisateur_id('');
		
    }

    return {
        id,
        titre,
		contenu,
		utilisateur_id,
		
        errors,
        isDisabled,
        setTitre,
		setContenu,
		setUtilisateur_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getNotification,
        createNotification,
        updateNotification,
        deleteNotification,
        fillNotification,
        emptyNotification
    };
}