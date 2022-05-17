import { Components } from '..'

export function SouscriptionForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='titre'>Titre</label>
                        <input className='form-control' type='text' id='titre' name='titre' 
                        placeholder='Titre' value={props.useSouscription.titre ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscription.setTitre(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useSouscription.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscription.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img'>Img</label>
                        <input className='form-control' type='text' id='img' name='img' 
                        value={props.useSouscription.img ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useSouscription.setImg_urls(e.target.files[0]) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='periode'>Periode</label> <small>(mois)</small>
                        <input className='form-control' type='number' id='periode' name='periode' 
                        placeholder='Periode' value={props.useSouscription.periode ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscription.setPeriode(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='prix'>Prix</label>
                        <input className='form-control' type='number' id='prix' name='prix' 
                        placeholder='Prix' value={props.useSouscription.prix ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscription.setPrix(e.target.value) ?? null} required/>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='post_par_mois'>Nombre de publications par mois</label>
                        <input className='form-control' type='number' id='post_par_mois' name='post_par_mois' 
                        placeholder='Nombre de publications par mois' value={props.useSouscription.post_par_mois ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscription.setPost_par_moisAttributs(e.target.value) ?? null} required/>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img_par_post'>Nombre d'images par publications</label>
                        <input className='form-control' type='number' id='img_par_post' name='img_par_post' 
                        placeholder="Nombre d'images par publications" value={props.useSouscription.img_par_post ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscription.setImg_par_postAttributs(e.target.value) ?? null} required/>
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