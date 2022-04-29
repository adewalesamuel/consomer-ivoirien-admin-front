import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { Services } from "../services";

export function SouscriptionUtilisateurListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const useSouscriptionUtilisateur = Hooks.useSouscriptionUtilisateur();

    const [souscription_utilisateurs, setSouscriptionUtilisateurs] = useState([]);
    
    const tableHead = ['id', 'souscription', 'utilisateur', 'quantite', 'prix', 'mode_paiement', 'status'];
    const tableActions = ['edit', 'delete'];

    const findSouscriptionUtilisateurIndex = data => {
        return souscription_utilisateurs.findIndex(souscription_utilisateur => parseInt(souscription_utilisateur.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/souscription_utilisateurs/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const souscription_utilisateurCopy = [...souscription_utilisateurs];
        const index = findSouscriptionUtilisateurIndex(data);

        souscription_utilisateurCopy.splice(index, 1);
        setSouscriptionUtilisateurs(souscription_utilisateurCopy);
        useSouscriptionUtilisateur.deleteSouscriptionUtilisateur(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.SouscriptionUtilisateurService.getAll(abortController.signal)
        .then(response => {
            const souscription_utilisateurs_copy = response.souscription_utilisateurs
            .map(souscription_utilisateur => {
                return {
                    id: souscription_utilisateur.id,
                    souscription: souscription_utilisateur.souscription.titre,
                    utilisateur: souscription_utilisateur.utilisateur.nom_prenoms,
                    quantite: souscription_utilisateur.quantite,
                    prix: souscription_utilisateur.prix,
                    mode_paiement: souscription_utilisateur.mode_paiement,
                    status: souscription_utilisateur.status,
                }
            })
            setSouscriptionUtilisateurs(souscription_utilisateurs_copy);
        });
      return () => {
        // abortController.abort();
      }
    }, []);

    return (
        <>
            <h2>Liste des paiement</h2>
                <div className="card">
                    <div className="col-12 mt-3 text-right">
                        <Link to="/souscription_utilisateurs/creer" className="btn btn-info">Creer un Paiement</Link>
                    </div>
                    <div className="card-body">
                        <Components.Table {...props} tableHead={tableHead} tableData={souscription_utilisateurs} 
                            tableActions={tableActions} tableName="paiement"
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}/>
                    </div>
            </div>
        </>
    )
}