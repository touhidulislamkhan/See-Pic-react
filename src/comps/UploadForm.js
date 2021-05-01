import React, { useState } from 'react'

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
        const selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');

        }
    }

    return (
        <div>
            <form>
                <label>
                    <input type="file" onChange={handleChange} />
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className="error"> {error} </div>}
                    {file && <div> {file.name} </div>}
                </div>
            </form>
        </div>
    )
}

export default UploadForm
