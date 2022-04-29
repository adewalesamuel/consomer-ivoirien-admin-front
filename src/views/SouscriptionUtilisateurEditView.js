import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";
import { Services } from "../services";


export function SouscriptionUtilisateurEditView(props) {
  const abortController = new AbortController();
  const useSouscriptionUtilisateur = Hooks.useSouscriptionUtilisateur();
  const navigate = useNavigate();
  const souscription_utilisateurId = useParams().id;
  
  const [isDisabled, setIsDisabled] = useState(false);
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [souscriptions, setSouscriptions] = useState([]);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useSouscriptionUtilisateur.updateSouscriptionUtilisateur(
        souscription_utilisateurId, 
        abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/souscription_utilisateurs')
      })
      .catch(err => setIsDisabled(false));
    }

    useEffect(() => {
      setIsDisabled(true);

      Services.UtilisateurService.getAll(abortController.signal)
      .then(response => {
        setUtilisateurs(response.utilisateurs);
        useSouscriptionUtilisateur.setUtilisateur_id(response.utilisateurs[0].id)
      });
      Services.SouscriptionService.getAll(abortController.signal)
      .then(response => {
        setSouscriptions(response.souscriptions);
        useSouscriptionUtilisateur.setSouscription_id(response.souscriptions[0].id)
      });

      useSouscriptionUtilisateur.getSouscriptionUtilisateur(
        souscription_utilisateurId, 
        abortController.signal)
      .then(() => {
        setIsDisabled(false)
      })
      .catch(err => setIsDisabled(false));
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Modifier un paiement</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                      <Components.SouscriptionUtilisateurForm useSouscriptionUtilisateur={useSouscriptionUtilisateur}
                          utilisateurs={utilisateurs} souscriptions={souscriptions} isDisabled={isDisabled} 
                          handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 