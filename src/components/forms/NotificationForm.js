import { Components } from '..'

export function NotificationForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='titre'>Titre</label>
                        <input className='form-control' type='text' id='titre' name='titre' 
                        placeholder='Titre' value={props.useNotification.titre ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useNotification.setTitre(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='contenu'>Contenu</label>
                        <input className='form-control' type='text' id='contenu' name='contenu' 
                        placeholder='Contenu' value={props.useNotification.contenu ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useNotification.setContenu(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='utilisateur_id'>Utilisateur_id</label>
                        <select className='select2 form-control' id='utilisateur_id' name='utilisateur_id' value={props.useNotification.utilisateur_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useNotification.setUtilisateur_id(e.target.value) ?? null} required>
                            {/* {
                                props.items.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.name}</option>
                                })
                            }  */}
                        </select>
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