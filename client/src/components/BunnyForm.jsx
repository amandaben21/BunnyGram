import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BunnyForm = () => {
    const [bunny, setBunny] = useState({
        name: '', //must match the same in your models in server
        img: '', //must match the same in your models in server
        desc: '' //must match the same in your models in server
      });
      const navigate = useNavigate();
      const [errors, setErrors] = useState({});
      

      
      const onChangeHandler = (e) => { //updates my Bunny
        setBunny({
          ...bunny,
          [e.target.name]: e.target.value,
        });
      };
    
      const formValidator = () => { //validators must be the same as models validators
        let isValid = true;
        if (bunny.name.length < 3) {
          return false;
        }
        if (bunny.img) {
          return false;
        }
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidator()) {
          axios.post('http://localhost:8000/api/bunnies', bunny)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          navigate('/api/bunnies');
        }
    
        if (errors) {
          setErrors({
            name: "Your name is required",
            img: "Picture is required"
          });
        }
      };
    
  return (
    <div>
        <h1>Post Your Bunny</h1>
      <form action="" className="col-md-6 mx-auto" onSubmit={handleSubmit}>
        {errors.name ? <p className="text-danger">{errors.name}</p> : ''}
        {errors.img ? <p className="text-danger">{errors.img}</p> : ''}
        
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" className="form-control" name="name" id="name" onChange={onChangeHandler} />
        </div>
        
        <div className="form-group">
          <label htmlFor="img">Upload Pic of Bunny:</label>
          <input type="file" className="form-control" name="img" id="img" onChange={onChangeHandler} />
        </div>

        <div className="form-group">
            <label htmlFor="desc">Description of your Bunny or Fun Facts!</label>
          <input type="text" className="form-control" name="desc" id="desc" onChange={onChangeHandler} />
        </div>

        <button className="btn btn-info mt-3">Submit</button>
      </form>
    </div>
  )
}

export default BunnyForm