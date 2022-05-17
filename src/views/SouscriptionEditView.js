import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";


export function SouscriptionEditView(props) {
  const abortController = new AbortController();
  const useSouscription = Hooks.useSouscription();
  const navigate = useNavigate();
  const souscriptionId = useParams().id;
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useSouscription.updateSouscription(souscriptionId, abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/souscriptions')
      })
      .catch(err => setIsDisabled(false));
    }

    useEffect(() => {
      setIsDisabled(true);

      useSouscription.getSouscription(souscriptionId, abortController.signal)
      .then(() => setIsDisabled(false))
      .catch(err => setIsDisabled(false));
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Creer une souscription</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.SouscriptionForm useSouscription={useSouscription}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 