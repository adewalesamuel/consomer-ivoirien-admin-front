export function CategorieForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='parent_category_id'>Categorie parente</label>
                        <select className="form-control" name="parent_category_id" id="parent_category_id"
                        value={props.useCategorie.parent_category_id ?? ''} disabled={props.isDisabled}
                        onChange={e => props.useCategorie.setParent_category_id(e.target.value)}>
                            <option>Selectionner une categorie parente</option>
                            {
                                props.useCategorie.categories.map((categorie, index) => {
                                    return (
                                        <option value={categorie.id} key={index}>{categorie.nom}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom'>Nom</label>
                        <input className='form-control' type='text' id='nom' name='nom' 
                        placeholder='Nom' value={props.useCategorie.nom ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => {
                            const value = e.target.value;
                            let slug = value.toLowerCase().replace(/[\s'"]/gi, '-') 

                            props.useCategorie.setNom(value);
                            props.useCategorie.setSlug(slug);
                        }} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='slug'>Slug</label>
                        <input className='form-control' type='text' id='slug' name='slug' 
                        placeholder='Slug' value={props.useCategorie.slug ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCategorie.setSlug(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useCategorie.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCategorie.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img_url'>Imgag</label>
                        <input className='form-control' type='file' id='img' name='img' 
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCategorie.setImg(e.target.files[0]) ?? null} required/>
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