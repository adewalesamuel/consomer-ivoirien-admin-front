import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { Services } from "../services";

export function SouscriptionListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const useSouscription = Hooks.useSouscription();

    const [souscriptions, setSouscriptions] = useState([]);
    
    const tableHead = ['id', 'titre', 'periode', 'prix'];
    const tableActions = ['edit', 'delete'];

    const findSouscriptionIndex = data => {
        return souscriptions.findIndex(souscription => parseInt(souscription.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/souscriptions/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const souscriptionCopy = [...souscriptions];
        const index = findSouscriptionIndex(data);

        souscriptionCopy.splice(index, 1);
        setSouscriptions(souscriptionCopy);
        useSouscription.deleteSouscription(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.SouscriptionService.getAll(abortController.signal)
        .then(response => {
            setSouscriptions(response.souscriptions);
        });
      return () => {
        // abortController.abort();
      }
    }, []);

    return (
        <>
            <h2>Liste des souscriptions</h2>
                <div className="card">
                    <div className="col-12 mt-3 text-right">
                        <Link to="/souscriptions/creer" className="btn btn-info">Creer une souscription</Link>
                    </div>
                    <div className="card-body">
                        <Components.Table {...props} tableHead={tableHead} tableData={souscriptions} 
                            tableActions={tableActions} tableName="souscriptions"
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}/>
                    </div>
            </div>
        </>
    )
}