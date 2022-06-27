import { Api } from '../../services/Api'

export function PostForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='titre'>Titre</label>
                        <input className='form-control' type='text' id='titre' name='titre' 
                        placeholder='Titre' value={props.usePost.titre ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePost.setTitre(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.usePost.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePost.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='attributs'>Ville</label>
                        <select className='form-control' id='ville' name='ville' 
                        value={props.usePost.ville ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.usePost.setVilleAttributs(e.target.value) ?? null} required>
                            <option hidden>Selectionnez une ville</option>
                            {props.usePost.villes.map((ville, index) => {
                                return <option value={ville} key={index}>{ville}</option>
                            })}
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='prix'>Prix</label>
                        <input className='form-control' type='number' id='prix' name='prix' 
                        placeholder='Prix' value={props.usePost.prix ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePost.setPrix(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img'>Img</label>
                        <ul className='row'>
                            {props.usePost.img_urls ? 
                                JSON.parse(props.usePost.img_urls).map(img_url => {
                                    return (
                                        <li key={Math.random()} className="col-3">
                                            <span className='delete-icon mdi mdi-delete text-danger' title='Supprimer'
                                            onClick={event => props.handleImageDeleteClick(event, img_url) ?? null}></span>
                                            <img className='thumbnail' src={`${Api.URL}/${img_url}`} width='100%' height={100} alt=''/>
                                        </li>
                                    )
                                })
                            : null}
                        </ul>
                        <input className='form-control' type='file' id='img' name='img' placeholder='Img' 
                        disabled={props.isDisabled} onChange={props.handleFileChange} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='categorie_id'>Categorie</label>
                        <select className='select2 form-control' id='categorie_id' name='categorie_id' 
                        value={props.usePost.categorie_id ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.usePost.setCategorie_id(e.target.value) ?? null} required>
                            <option hidden>Selectionnez une categorie</option>  
                            {
                                props.categories.map(categorie => {
                                    return (<optgroup key={Math.random()} label={categorie.nom ?? ''}>
                                        {categorie.sub_categories ?
                                            categorie.sub_categories.map((sub_categorie, index) => {
                                                return <option key={index} value={sub_categorie.id}>{sub_categorie.nom}</option>
                                            })
                                            : null
                                        }
                                    </optgroup>)
                                })
                            } 
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='utilisateur_id'>Utilisateur</label>
                        <select className='select2 form-control' id='utilisateur_id' name='utilisateur_id' 
                        value={props.usePost.utilisateur_id ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.usePost.setUtilisateur_id(e.target.value) ?? null} required>
                            <option hidden>Selectionnez un utilisateur</option>
                            {
                                props.utilisateurs.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.nom_prenoms}</option>
                                })
                            } 
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='promotion_end_date'>Promotion_end_date</label>
                        <input className='form-control' type='date' id='promotion_end_date' name='promotion_end_date' 
                        placeholder='Promotion_end_date' value={props.usePost.promotion_end_date ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePost.setPromotion_end_date(e.target.value) ?? null} required/>
                    </div>
                </div>
				
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                    onClick={props.handleFormSubmit}>
                        <span>Enregistrer</span>
                    </button>
                </div>
            </div>
        </form>
    )
}