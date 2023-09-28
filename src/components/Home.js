import React from 'react'
import AddNote from './AddNote';
import YourNotes from './YourNotes';

const Home = () => {
  return (
    <div>
      <AddNote/>
      <h5 className='my-5'>RECENT ADDED NOTES</h5>
      <YourNotes/>
    </div>
  )
}

export default Home;
