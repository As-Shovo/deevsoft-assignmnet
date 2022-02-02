import React, { useState } from 'react';
import useAuth from '../../Hook/useAuth';
import Header from '../Header/Header';
import './Goal.css';

function Goal() {

    const {handleStorage} = useAuth();

    const [selected, setSelected] = useState('');

   const handleSubmitData = () =>{
    //    console.log(selected);
       handleStorage(selected);
       alert(" Your Message send to server Look At The Console ")
    //    console.log('done');
   }


  return (
        <div>
        <Header />
          <div className="goal">
              <div className="goal-body">
                  <div className="goal-text">
                      <h2>Goal</h2>
                      <p>Select Your Primary Goal. What do you want to accimplish in the next few months?</p>
                  </div>
                  <div className="option-body">
                      <div className="goal-items">
                          <div className="goal-item">
                              <input type="radio" name="goal" value="Get leaner" onChange={(e)=> setSelected(e.target.value)} />
                              <label> Get leaner </label>
                          </div>
                          <div className="goal-item">
                              <input type="radio" name="goal" value="Get active again" onChange={(e)=> setSelected(e.target.value)} />
                              <label> Get active again </label>
                          </div>
                          <div className="goal-item">
                              <input type="radio" name="goal" value="Reduce pain or injury" onChange={(e)=> setSelected(e.target.value)} />
                              <label> Reduce pain or injury </label>
                          </div>
                          <div className="goal-item">
                              <input type="radio" name="goal" value="Improve cardio or speed" onChange={(e)=> setSelected(e.target.value)} />
                              <label> Improve cardio or speed </label>
                          </div>
                          <div className="goal-item">
                              <input type="radio" name="goal" value="Improve sports performance" onChange={(e)=> setSelected(e.target.value)} />
                              <label> Improve sports performance </label>
                          </div>

                          <br />
                          <button className="button" onClick={handleSubmitData}> SUBMIT</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default Goal;
