import { Components } from '..'

export function AdministrateurForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom_prenoms'>Nom_prenoms</label>
                        <input className='form-control' type='text' id='nom_prenoms' name='nom_prenoms' 
                        placeholder='Nom_prenoms' value={props.useAdministrateur.nom_prenoms ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdministrateur.setNom_prenoms(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder='Email' value={props.useAdministrateur.email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdministrateur.setEmail(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type='text' id='password' name='password' 
                        placeholder='Password' value={props.useAdministrateur.password ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdministrateur.setPassword(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='role'>Role</label>
                        <input className='form-control' type='text' id='role' name='role' 
                        placeholder='Role' value={props.useAdministrateur.role ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdministrateur.setRole(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img'>img</label>
                        <input className='form-control' type='file' id='img' name='img' 
                        placeholder='img' disabled={props.isDisabled} 
                        onChange={ e => props.useAdministrateur.setImg(e.target.value) ?? null} required/>
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