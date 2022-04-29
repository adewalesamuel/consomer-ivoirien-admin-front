import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate } from "react-router-dom";


export function SouscriptionCreateView(props) {
  const abortController = new AbortController();
  const useSouscription = Hooks.useSouscription();
  const navigate = useNavigate();
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useSouscription.createSouscription(abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/souscriptions')
      })
      .catch(err => setIsDisabled(false));
    }

    useEffect(() => {
    
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