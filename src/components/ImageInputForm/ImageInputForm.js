import React from 'react';

const ImageInputForm =()=>{
    return(
        <div>
            <p className=" white f3">
                {'This Magic Brain will detetct faces in your pictures'}
            </p>
            <div className='center'>
                <div className="center w-60 pa4 br3 shadow-5">
                    <input type="text" className='f4 pa2 w-80 center' />
                    <button className='w-20 grow f4 link ph3 pv2 dib white bg-light-purple pointer'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageInputForm;