import React, {useState} from 'react';

const newCatForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [sex, setSex] = useState('');
  const [health, setHealth] = useState('');
  const [picture, setPicture] = useState('');
  const [about, setAbout] = useState('');
  const [adopt, setAdopt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCat = {
      name: name,
      type: type,
      picture: picture,
      sex: sex,
      size: size,
      health: health,
      about: about,
      adopt: adopt
    }
    cleanInputs();
  }

  const cleanInputs = () => {
    setName('');
    setType('');
    setPicture('');
    setSex('');
    setSize('');
    setHealth('');
    setAbout('');
    setAdopt('');
  }

  return (
    <section className='new-cat-form'>
      <h2>Need to rehome a cat?</h2>
      <p>Let us help you! Fill out this form to add your furry friend to our list of cats to be adopted.</p>
      <form onSubmit={handleSubmit}>
        <input
        name='name'
        type='text' required
        className='form-name'
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        />
        <input
        name='type'
        type='text' required
        className='form-type'
        value={type}
        onChange={(e) => {setName(e.target.value)}}
        />
        <input
        name='size'
        type='text' required
        className='form-size'
        value={size}
        onChange={(e) => {setName(e.target.value)}}
        />
        <input
        name='sex'
        type='text' required
        className='form-sex'
        value={sex}
        onChange={(e) => {setName(e.target.value)}}
        />
        <input
        name='health'
        type='text' required
        className='form-health'
        value={health}
        onChange={(e) => {setName(e.target.value)}}
        />
        <input
        name='picture'
        type='text' required
        className='form-picture'
        value={picture}
        onChange={(e) => {setName(e.target.value)}}
        />
        <input
        name='about'
        type='text' required
        className='form-about'
        value={about}
        onChange={(e) => {setName(e.target.value)}}
        />
        <input
        name='adopt'
        type='text' required
        className='form-adopt'
        value={adopt}
        onChange={(e) => {setName(e.target.value)}}
        />
        <input
        type='submit'
        value='add cat'
        className='form-submit'
        />
      </form>
    </section>
  )
}

export default newCatForm;