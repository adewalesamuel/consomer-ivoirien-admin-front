import { Components } from '..'

export function SouscriptionUtilisateurForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='paiement_id'>Identifiant de paiement</label>
                        <input className='form-control' type='text' id='paiement_id' name='paiement_id' 
                        placeholder='Paiement_id' value={props.useSouscriptionUtilisateur.paiement_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionUtilisateur.setPaiement_id(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='souscription_id'>Souscription</label>
                        <select className='select2 form-control' id='souscription_id' name='souscription_id' value={props.useSouscriptionUtilisateur.souscription_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionUtilisateur.setSouscription_id(e.target.value) ?? null} required>
                            {
                                props.souscriptions.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.titre}</option>
                                })
                            } 
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='utilisateur_id'>Utilisateur</label>
                        <select className='select2 form-control' id='utilisateur_id' name='utilisateur_id' value={props.useSouscriptionUtilisateur.utilisateur_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionUtilisateur.setUtilisateur_id(e.target.value) ?? null} required>
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
                        <label htmlFor='prix'>Prix</label>
                        <input className='form-control' type='number' id='prix' name='prix' 
                        placeholder='Prix' value={props.useSouscriptionUtilisateur.prix ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionUtilisateur.setPrix(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='quantite'>Quantite</label>
                        <input className='form-control' type='number' id='quantite' name='quantite' 
                        placeholder='Quantite' value={props.useSouscriptionUtilisateur.quantite ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionUtilisateur.setQuantite(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='status'>Status</label>
                        <select className='form-control' id='status' name='status' 
                        value={props.useSouscriptionUtilisateur.status ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionUtilisateur.setStatus(e.target.value) ?? null} required>
                            <option hidden>Selectionnez le status</option>
                            {props.useSouscriptionUtilisateur.statuses.map((status, index) => {
                                return (
                                    <option value={status} key={index}>{status}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='mode_paiement'>Mode de paiement</label>
                        <input className='form-control' type='text' id='mode_paiement' name='mode_paiement' 
                        placeholder='Mode de paiement' value={props.useSouscriptionUtilisateur.mode_paiement ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionUtilisateur.setMode_paiement(e.target.value) ?? null} required/>
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