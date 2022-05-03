import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";


export function AdministrateurEditView(props) {
  const abortController = new AbortController();

  const useAdministrateur = Hooks.useAdministrateur();
  const navigate = useNavigate();
  const adminitrateurId = useParams().id;
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useAdministrateur.updateAdministrateur(adminitrateurId, abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/administrateurs')
      })
      .catch(err => setIsDisabled(false));
    }

    useEffect(() => {
      setIsDisabled(true);

      useAdministrateur.getAdministrateur(adminitrateurId, abortController.signal)
      .then(() => setIsDisabled(false))
      .catch(err => setIsDisabled(false));
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Modifier un adminitrateur</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.AdministrateurForm useAdministrateur={useAdministrateur}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 