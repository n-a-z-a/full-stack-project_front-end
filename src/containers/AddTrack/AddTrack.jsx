import React from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

const AddTrack = () => {
  return (
    <div>
        <h1>Add a track</h1>

        <section className='form'>
        <Input labelText="Title"/>
        <Input labelText="Artist"/>
        <Input labelText="Genre"/>
        </section>

        <Button buttonText="submit"/>
    
    </div>
  )
}

export default AddTrack