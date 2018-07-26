import React from 'react'

export default () =>
    <div className='modal fade' id='signupModal' tabIndex='-1' role='dialog' aria-labelledby='signupModalLabel' aria-hidden='true'>
        <div className='modal-dialog' role='document'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h5 className='modal-title' id='signupModalLabel'>Sign Up</h5>
                </div>
                <div className='modal-body'>
                    <div className='text-left mb-3'><strong>Step 1:</strong> Let us know who you are and what email works best for contact.</div>
                    <form>
                        <div className='form-row mb-3'>
                            <div className='col'>
                                <input type='text' className='form-control' placeholder='First name' />
                            </div>
                            <div className='col'>
                                <input type='text' className='form-control' placeholder='Last name' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control' placeholder='Work Email' />
                        </div>
                        <div className='text-left my-4'><strong>Step 2:</strong> Tell us about your expertise and the types of questions you’d like to
		  appear in your thread.</div>
                        <div className='form-group'>
                            <input placeholder='Start typing freeform tags separated by space' className='form-control' />
                        </div>
                    </form>
                </div>
                <div className='text-center'>
                    <button type='button' className='btn btn-travq'>Submit</button><br />
                    <button type='button' className='btn py-2 my-1 btn-link' data-dismiss='modal'>Cancel</button>
                </div>
            </div>
        </div>
    </div>