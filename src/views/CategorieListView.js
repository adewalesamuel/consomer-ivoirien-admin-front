import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Components } from "../components";
import { Hooks } from "../hooks";
import { Services } from "../services";
import { Api } from "../services/Api";

export function CategorieListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const useCategorie = Hooks.useCategorie();

    const [categories, setCategories] = useState([]);
    
    const tableHead = ['id', 'image', 'nom', 'description'];
    const tableActions = ['edit', 'delete'];

    const findCategorieIndex = data => {
        return categories.findIndex(administrateur => parseInt(administrateur.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/categories/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const administrateurCopy = [...categories];
        const index = findCategorieIndex(data);

        administrateurCopy.splice(index, 1);
        setCategories(administrateurCopy);
        useCategorie.deleteCategorie(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.CategorieService.getAll(abortController.signal)
        .then(response => {
            const categoriesCopy = response.categories.map((categorie, index) => {
                return {
                    id: categorie.id,
                    image: categorie.img_url ? <img src={`${Api.URL}/${categorie.img_url}`}/> : "",
                    nom: categorie.nom,
                    decription: categorie.decription,
                };
            });

            setCategories(categoriesCopy);
        });
      return () => {
        // abortController.abort();
      }
    }, []);

    return (
        <>
            <h2>Liste des categories</h2>
                <div className="card">
                    <div className="col-12 mt-3 text-right">
                        <Link to="/categories/creer" className="btn btn-info">Creer une categorie</Link>
                    </div>
                    <div className="card-body">
                        <Components.Table {...props} tableHead={tableHead} tableData={categories} 
                            tableActions={tableActions} tableName="categories"
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}/>
                    </div>
            </div>
        </>
    )
}