import { NavLink } from "react-router-dom";

export function MainMenu(props) {
    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">Menu</li>

                        <li>
                            <NavLink exact="true" to="" className="waves-effect">
                                <i className="mdi mdi-view-dashboard"></i><span className="badge badge-pill badge-success float-right">3</span>
                                <span>Tableau de bord</span>
                            </NavLink>
                            <NavLink exact="true" to="administrateurs" className="waves-effect">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Administrateurs</span>
                            </NavLink>
                            <NavLink exact="true" to="utilisateurs" className="waves-effect">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Utilisateurs</span>
                            </NavLink>
                            <NavLink exact="true" to="posts" className="waves-effect">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Publications</span>
                            </NavLink>
                            <NavLink exact="true" to="souscription_utilisateurs" className="waves-effect">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Paiements</span>
                            </NavLink>
                            <NavLink exact="true" to="categories" className="waves-effect">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Categories</span>
                            </NavLink>
                            <NavLink exact="true" to="souscriptions" className="waves-effect">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span>Packs de Souscription</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}