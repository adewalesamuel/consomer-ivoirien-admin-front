import { useState } from 'react';
import { Services } from '../services';

export const useSouscriptionUtilisateur = () => {
    const [id, setId] = useState('');
	const [paiement_id, setPaiement_id] = useState('');
	const [souscription_id, setSouscription_id] = useState('');
	const [utilisateur_id, setUtilisateur_id] = useState('');
	const [prix, setPrix] = useState('');
	const [quantite, setQuantite] = useState('');
	const [status, setStatus] = useState('');
	const [mode_paiement, setMode_paiement] = useState('');

    const statuses = ['en-attente', 'annule', 'paye'];
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getSouscriptionUtilisateur = (souscription_utilisateurId, signal) => {        
        return Services.SouscriptionUtilisateurService.getById(souscription_utilisateurId, signal)
        .then(response => {
            fillSouscriptionUtilisateur(response.souscription_utilisateur);
            setIsDisabled(false);
        });
    }

    const createSouscriptionUtilisateur = signal => {
        const payload = {
            paiement_id,
		souscription_id,
		utilisateur_id,
		prix,
		quantite,
		status,
		mode_paiement,
		
        };

        return Services.SouscriptionUtilisateurService.create(JSON.stringify(payload), signal);
    }
    const updateSouscriptionUtilisateur = (souscription_utilisateurId, signal) => {
        const payload = {
            paiement_id,
		souscription_id,
		utilisateur_id,
		prix,
		quantite,
		status,
		mode_paiement,
		
        };

        return Services.SouscriptionUtilisateurService.update(souscription_utilisateurId, JSON.stringify(payload), signal);
    }
    const deleteSouscriptionUtilisateur = (souscription_utilisateurId, signal) => {
        return Services.SouscriptionUtilisateurService.destroy(souscription_utilisateurId, signal);
    }
    const fillSouscriptionUtilisateur = (souscription_utilisateur) => {
        setId(souscription_utilisateur.id);
        setPaiement_id(souscription_utilisateur.paiement_id ?? '');
		setSouscription_id(souscription_utilisateur.souscription_id ?? '');
		setUtilisateur_id(souscription_utilisateur.utilisateur_id ?? '');
		setPrix(souscription_utilisateur.prix ?? '');
		setQuantite(souscription_utilisateur.quantite ?? '');
		setStatus(souscription_utilisateur.status ?? '');
		setMode_paiement(souscription_utilisateur.mode_paiement ?? '');
		
    }
    const emptySouscriptionUtilisateur = () => {
        setId('');
        setPaiement_id('');
		setSouscription_id('');
		setUtilisateur_id('');
		setPrix('');
		setQuantite('');
		setStatus('');
		setMode_paiement('');
		
    }

    return {
        id,
        paiement_id,
		souscription_id,
		utilisateur_id,
		prix,
		quantite,
		status,
		mode_paiement,
        statuses,
		
        errors,
        isDisabled,
        setPaiement_id,
		setSouscription_id,
		setUtilisateur_id,
		setPrix,
		setQuantite,
		setStatus,
		setMode_paiement,
		
        setId,
        setErrors,
        setIsDisabled,
        getSouscriptionUtilisateur,
        createSouscriptionUtilisateur,
        updateSouscriptionUtilisateur,
        deleteSouscriptionUtilisateur,
        fillSouscriptionUtilisateur,
        emptySouscriptionUtilisateur
    };
}