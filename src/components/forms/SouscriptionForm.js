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
                        <label htmlFor='img_urls'>Img_urls</label>
                        <input className='form-control' type='text' id='img_urls' name='img_urls' 
                        placeholder='Img_urls' value={props.useSouscription.img_urls ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscription.setImg_urls(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='periode'>Periode</label>
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
                        <label htmlFor='attributs'>Attributs</label>
                        <input className='form-control' type='text' id='attributs' name='attributs' 
                        placeholder='Attributs' value={props.useSouscription.attributs ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscription.setAttributs(e.target.value) ?? null} required/>
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