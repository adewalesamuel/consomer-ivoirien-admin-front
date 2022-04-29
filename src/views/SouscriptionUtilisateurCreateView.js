import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate } from "react-router-dom";
import { Services } from "../services";


export function SouscriptionUtilisateurCreateView(props) {
  const abortController = new AbortController();
  const useSouscriptionUtilisateur = Hooks.useSouscriptionUtilisateur();
  const navigate = useNavigate();
  
  const [isDisabled, setIsDisabled] = useState(false);
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [souscriptions, setSouscriptions] = useState([]);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useSouscriptionUtilisateur.createSouscriptionUtilisateur(abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/souscription_utilisateurs')
      })
      .catch(err => setIsDisabled(false));
    }

    useEffect(() => {
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
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Creer un paiement</h2>
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