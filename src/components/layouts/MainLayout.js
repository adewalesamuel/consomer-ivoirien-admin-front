import {Route, Routes} from 'react-router-dom';

import { Components } from "..";
import { Views } from '../../views';

export function MainLayout(props) {
    window.document.body.className = "";
    // const isLoggedIn = Utils.Auth.isLoggedIn();

    // useEffect(() => {
    //     if (!isLoggedIn) navigate('/auth');
    // }, []);

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
                                <Route exact path='administrateurs/:id/modifier' element={<Views.AdministrateurEditView />} />
                                <Route exact path='administrateurs/creer' element={<Views.AdministrateurCreateView />} />
                                <Route exact path='administrateurs' element={<Views.AdministrateurListView />} />
                                <Route exact path='categories/creer' element={<Views.CategorieCreateView />} />
                                <Route exact path='categories' element={<Views.CategorieListView />} />
                                <Route exact path='utilisateurs/:id/modifier' element={<Views.UtilisateurEditView />} />
                                <Route exact path='utilisateurs/creer' element={<Views.UtilisateurCreateView />} />
                                <Route exact path='utilisateurs' element={<Views.UtilisateurListView />} />
                                <Route exact path='posts/:id/modifier' element={<Views.PostEditView />} />
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