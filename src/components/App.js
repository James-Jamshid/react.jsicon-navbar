import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

const App = () => {
  return (
    <div className='container'>
        <Link to='/'>
            <div className='wrapper'>
                {/* <p> */}
                    Blog
                {/* </p> */}

            </div>
        </Link>
        <Link to='/Docs'>
            <div className='wrapper'>
                <p>
                    Docs
                </p>

            </div>
        </Link>
        <Link to='/Icons'>
            <div className='wrapper'>
                <p>
                    Icons
                </p>

            </div>
        </Link>
        <Link to='/Plans'>
            <div className='wrapper'>
                <p>
                    Plans
                </p>

            </div>
        </Link>
        <Link to='/Stars'>
            <div className='wrapper'>
                <p>
                    Stars
                
                </p>

            </div>
        </Link>
        <Link to='/Support'>
            <div className='wrapper'>
                <p>
                    Support
                </p>

            </div>
        </Link>
        

    </div>
  )
}

export default App