import {Route, Routes, useNavigate} from 'react-router-dom';
import { useEffect } from "react";

import { Components } from "..";
import { Utils } from "../../utils";
import { Views } from '../../views';

export function MainLayout(props) {
    window.document.body.className = "";
    // const navigate = useNavigate();
    const isLoggedIn = Utils.Auth.isLoggedIn();

    // useEffect(() => {
    //     if (!isLoggedIn) navigate('/auth');
    // });

    // if (!isLoggedIn) return null;

    return (
        <>
            <Components.Header />
            <Components.MainMenu />
            <div id="layout-wrapper">
                <div className="main-content">
                    <div className="page-content">
                        <div className="container-fluid">
                            <Routes>
                                <Route exact path='administrateurs/creer' element={<Views.AdministrateurCreateView />} />
                                <Route exact path='administrateurs' element={<Views.AdministrateurListView />} />
                                <Route exact path='categories/creer' element={<Views.CategorieCreateView />} />
                                <Route exact path='categories' element={<Views.CategorieListView />} />
                                <Route exact path='utilisateurs/:id/modifier' element={<Views.UtilisateurEditView />} />
                                <Route exact path='utilisateurs/creer' element={<Views.UtilisateurCreateView />} />
                                <Route exact path='utilisateurs' element={<Views.UtilisateurListView />} />
                                <Route exact path='posts/creer' element={<Views.PostCreateView />} />
                                <Route exact path='posts' element={<Views.PostListView />} />
                                <Route exact path='souscriptions/creer' element={<Views.SouscriptionCreateView />} />
                                <Route exact path='souscriptions' element={<Views.SouscriptionListView />} />
                                <Route exact path='souscription_utilisateurs/:id/modifier' element={<Views.SouscriptionUtilisateurEditView />} />
                                <Route exact path='souscription_utilisateurs/creer' element={<Views.SouscriptionUtilisateurCreateView />} />
                                <Route exact path='souscription_utilisateurs' element={<Views.SouscriptionUtilisateurListView />} />
                            </Routes>
                        </div>
                    </div>
                    <Components.Footer />
                </div>
            </div>
        </>
    )
}