import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { Services } from "../services";

export function UtilisateurListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const useUtilisateur = Hooks.useUtilisateur();

    const [utilisateurs, setUtilisateurs] = useState([]);
    
    const tableHead = ['id', 'nom_prenoms', 'email', 'telephone', 'status'];
    const tableActions = ['edit', 'delete'];

    const findUtilisateurIndex = data => {
        return utilisateurs.findIndex(utilisateur => parseInt(utilisateur.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/utilisateurs/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const utilisateurCopy = [...utilisateurs];
        const index = findUtilisateurIndex(data);

        utilisateurCopy.splice(index, 1);
        setUtilisateurs(utilisateurCopy);
        useUtilisateur.deleteUtilisateur(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.UtilisateurService.getAll(abortController.signal)
        .then(response => {
            setUtilisateurs(response.utilisateurs);
        });
      return () => {
        // abortController.abort();
      }
    }, []);

    return (
        <>
            <h2>Liste des utilisateurs</h2>
                <div className="card">
                    <div className="col-12 mt-3 text-right">
                        <Link to="/utilisateurs/creer" className="btn btn-info">Creer un utilisateur</Link>
                    </div>
                    <div className="card-body">
                        <Components.Table {...props} tableHead={tableHead} tableData={utilisateurs} 
                            tableActions={tableActions} tableName="utilisateurs"
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}/>
                    </div>
            </div>
        </>
    )
}