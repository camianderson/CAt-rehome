import React from 'react';

const newCatForm = () => {
  return (
    <section className='new-cat-form'>
      <h2>Need to rehome a cat?</h2>
      <p>Let us help you! Fill out this form to add your furry friend to our list of cats to be adopted.</p>
      <form>
        <input
        name='name'
        />
        <input
        name='type'
        />
        <input
        name='size'
        />
        <input
        name='sex'
        />
        <input
        name='health'
        />
        <input
        name='picture'
        />
        <input
        name='about'
        />
        <input
        name='adopt'
        />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default newCatForm;