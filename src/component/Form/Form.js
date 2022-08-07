import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Form.css';

const NewCatForm = ({addCat}) => {
  const initialValue = {
    name: undefined,
    type: undefined,
    picture: undefined,
    sex: undefined,
    size: undefined,
    health: undefined,
    about: undefined,
    adopt: undefined
  }
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateInformation(formValues));
    const newCat = {
      id: Date.now(),
      ...formValues
    }
    if(Object.keys(formErrors).length === 0){
      addCat(newCat);
      setIsSubmit(true);
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const validateInformation = (values) => {
    const errors = {};
    if (values.name | values.type | values.picture | values.sex | values.size | values.health | values.about | values.adopt === undefined | ''){
      errors.empty = 'Please fill out all fields!';
    }
    return errors;
  }

  return (
    <section className='new-cat-form'>
      <h2>Need to rehome a cat?</h2>
      <p>Let us help you! Fill out this form to add your furry friend to our list of cats to be adopted.</p>
      {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='message-sucess'> Cat is in our adoption list! </div>) : (<div className='message-start'> Fill out the form with as much as details as possible! </div>)}
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>
          <p> click in the button below to check the new member of our list</p>
          <Link to='/list'>
            <button onClick={() => setIsSubmit(false)}>list</button>
          </Link>
        </div>) : (
                    <form onSubmit={handleSubmit}>
                      <div className='name'>
                        <label>Name</label>
                        <input
                        name='name'
                        type='text' 
                        className='form-name'
                        value={initialValue.name}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='type'>
                        <label>Type</label>
                        <input
                        name='type'
                        type='text' 
                        className='form-type'
                        value={initialValue.type}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='fsize'>
                        <label>Size</label>
                        <input
                        name='size'
                        type='text' 
                        className='form-size'
                        value={initialValue.size}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='sex'>
                        <label>Sex</label>
                        <input
                        name='sex'
                        type='text' 
                        className='form-sex'
                        value={initialValue.sex}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='health'>
                        <label>Health</label>
                        <input
                        name='health'
                        type='text' 
                        className='form-health'
                        value={initialValue.health}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='picture'>
                        <label>Picture</label>
                        <input
                        name='picture'
                        type='text' 
                        className='form-picture'
                        value={initialValue.picture}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='about'>
                        <label>About</label>
                        <input
                        name='about'
                        type='text' 
                        className='form-about'
                        value={initialValue.about}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <div className='adopt'>
                        <label>Adopt</label>
                        <input
                        name='adopt'
                        type='text' 
                        className='form-adopt'
                        value={initialValue.adopt}
                        onChange={(e) => {handleChange(e)}}
                        />
                      </div>
                      <p>{formErrors.empty}</p>
                      <input
                      type='submit'
                      value='add cat'
                      className='form-submit'
                      />
                    </form>
                 )}
    </section>
  )
}

export default NewCatForm;