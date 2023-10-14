import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const FormAddLocation = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [location_url, setLocation_Url ] = useState(""); 
    const [file, setFile] = useState("");

    const formData = new FormData();
    formData.append('name', name);
    formData.append('city', city);
    formData.append('address', address);
    formData.append('description', description);
    formData.append('location_url', location_url);
    formData.append('file', file);
  
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

  const saveLocations = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/locations",formData, {
        headers: {
            'Content-Type': 'multipart/form-data', 
          },
      });
      navigate("/locations")
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg)
      }
    }

  }
return (
    <div>
        <h1 className='title'>Locations</h1>
        <h2 className='subtitle'>Add New Locations </h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={saveLocations}>
                  <p className='has-text-centered'>{msg}</p>
                <div className='field'>
                    <label className='label'>Name</label>
                    <div className='control'>
                      <input type="text" className='input' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>City</label>
                    <div className='control'>
                      <input type="text" className='input' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                  </div>
                  <div className='field '>
                    <label className='label'>Address</label>
                    <div className='control'>
                      <input type="text" className='input' placseholder='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                  </div>

                  <div className='field '>
                    <label className='label'>Description</label>
                    <div className='control'>
                      <input type="text" className='input' placseholder='address' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                  </div>

                  <div className='field '>
                    <label className='label'>Location URL</label>
                    <div className='control'>
                      <input type="text" className='input' placseholder='address' value={location_url} onChange={(e) => setLocation_Url(e.target.value)} />
                    </div>
                  </div>
                  
                  <div className='field '>
                    <label className='label'>File</label>
                    <div className='control'>
                        <input type="file" className='input' onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                  </div>

                  <div className='field'>
                    <div className="control">
                      <button type='submit' className='button is-success'>Save</button>
                    </div> 
                  </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddLocation;