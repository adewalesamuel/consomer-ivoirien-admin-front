import { Components } from '..'

export function PubliciteForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='titre'>Titre</label>
                        <input className='form-control' type='text' id='titre' name='titre' 
                        placeholder='Titre' value={props.usePublicite.titre ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePublicite.setTitre(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.usePublicite.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePublicite.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='type'>Type</label>
                        <input className='form-control' type='text' id='type' name='type' 
                        placeholder='Type' value={props.usePublicite.type ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePublicite.setType(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img_urls'>Img_urls</label>
                        <input className='form-control' type='text' id='img_urls' name='img_urls' 
                        placeholder='Img_urls' value={props.usePublicite.img_urls ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePublicite.setImg_urls(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='redirect_url'>Redirect_url</label>
                        <input className='form-control' type='text' id='redirect_url' name='redirect_url' 
                        placeholder='Redirect_url' value={props.usePublicite.redirect_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePublicite.setRedirect_url(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='date_debut'>Date_debut</label>
                        <input className='form-control' type='date' id='date_debut' name='date_debut' 
                        placeholder='Date_debut' value={props.usePublicite.date_debut ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePublicite.setDate_debut(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='date_fin'>Date_fin</label>
                        <input className='form-control' type='date' id='date_fin' name='date_fin' 
                        placeholder='Date_fin' value={props.usePublicite.date_fin ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePublicite.setDate_fin(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='status'>Status</label>
                        <input className='form-control' type='text' id='status' name='status' 
                        placeholder='Status' value={props.usePublicite.status ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePublicite.setStatus(e.target.value) ?? null} required/>
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