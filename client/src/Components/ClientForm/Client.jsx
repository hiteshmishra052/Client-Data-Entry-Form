import React, { useEffect, useMemo, useState } from "react";
import "./Client.css";
import axios from "axios";
import Select from 'react-select';
import countryList from "react-select-country-list";
import { LineAxisOutlined } from "@mui/icons-material";

const Client = () => {

  // const [value, setValue] = useState('')
  // const options = useMemo(() => countryList().getData(), [])

  // const changeHandler = value => {
  //   setValue(value)
  // }

  // const customStyles = {
  //   control: base => ({
  //     ...base,
  //     height: 35,
  //     minHeight: 30
  //   })
  // };

  const[data,setData]= useState([]);
  const[getCountry,setCountry]= useState();
  const[getState, setState]=useState([]);
  const[selectedState,setSelectedSate]=useState();
  const[cities,setCities]= useState([]);

  useEffect(()=>{
    axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
    .then(res=>setData(res.data))
    .catch(err=> console.log(err))
  },[])

  const country = [...new Set(data.map(item=>item.country))]
//  console.log(country);
  country.sort();



  const handleCountry=(e)=>{
    let states = data.filter(state=> state.country === e.target.value);
    states = [...new Set(states.map(item=> item.subcountry))];
    states.sort();
    // console.log(states);
    setState(states);
  }

  const handleState =(e)=>{
      let cities = data.filter(city => city.subcountry === e.target.value);
      console.log(cities);
      setCities(cities);
  }
  return (

    // const [value, setValue] = useState('')
    // const options = useMemo(() => countryList().getData(), [])

    <>
    <div className="fin">
      <div className="Forms">
        {/* EntryForm1 */}
        <div className="EntryForm1">
          <div className="frm">
            <label htmlFor="pos">Name of Company </label>
            <select name="company" id="pos">
              <option value="Student">NEWGEN</option>
              <option value="Recuiter">CELONIS</option>
              <option value="Admin">HIIPI</option>
            </select>
          </div>

          <div className="frm">
            <label htmlFor="pos">SPOC </label>
            <select name="company" id="pos">
              <option value="Student">Vijay Tripathy</option>
              <option value="Recuiter">Gourav Pant</option>
              <option value="Admin">Abhishek Tyagi</option>
              <option value="Admin">Alvin</option>
            </select>
          </div>

          <div className="frm">
            <label htmlFor="name">Business Term </label>
            <input type="text" name="name"></input>
          </div>

          <div className="frm">
            <label htmlFor="name">Industry </label>
            <input type="text" name="name"></input>
          </div>

          <div className="frm">
            <label htmlFor="pos">Functional Area </label>
            <select name="company" id="pos">
              <option value="Student">NodeJs</option>
              <option value="Recuiter">Feedback Pending</option>
              <option value="Admin">Moderate</option>
              <option value="Admin">Hold</option>
            </select>
          </div>

          <div className="frm">
            <label htmlFor="name">Sub Functional Area </label>
            <input type="text" name="name"></input>
          </div>

          <div className="frm" >
          <label htmlFor="name">Skills </label>
            <input type="text" name="name"></input>
          </div>
          <div className="frm" >
          <label htmlFor="name">Key Skills </label>
            <input type="text" name="name"></input>
          </div>

        <div className="frm" id="exp">
            <label htmlFor="name"> Experience </label>
            <input type="text" name="name" placeholder="Low Range" className="exp" id="exp1"></input>
            <input type="text" name="name" placeholder="High Range" className="exp"></input>
        </div>

        <div className="frm">
            <label htmlFor="pos">India/Abroad </label>
            <select name="company" id="pos">
              <option value="Student">India</option>
              <option value="Recuiter">Abroad</option>
            </select>
        </div>

        {/* <div className="frm" id="exp">
            <label htmlFor="pos">State/Country  </label>
            <Select name="company" id="pos" className="country" options={options} value={value} onChange={changeHandler} styles={customStyles}/>
        </div> */}
       <div>
        <div className="frm" id="exp">
          <label htmlFor="pos">Country </label>
          <select onChange={(e)=>handleCountry(e)} id="cntry">
          <option value="">Select Country</option>
            {country.map(items=> <option key={items} value={getCountry}>{items}</option> )}
          </select>
        </div>

      

        <div className="frm" id="exp">
          <label htmlFor="pos">State </label>
          <select onChange={(e)=>handleState(e)} id="cntry2">
            <option value="">Select State</option>
            {getState.map(items=> <option key={items} value={selectedState}>{items}</option> )}
          </select>
        </div>

        

        <div className="frm" id="exp">
          <label htmlFor="pos">City  </label>
          <select id="cntry3">
            <option value="">Select City</option>
            {cities.map(items=> <option key={items.name}>{items.name}</option> )}
          </select>
        </div>
      </div>

        <div className="frm" id="exp">
            <label htmlFor="name"> Salary </label>
            <input type="text" name="name" placeholder="Low Range" className="exp" id="sal1"></input>
            <input type="text" name="name" placeholder="High Range" className="exp"></input>
        </div>

        <div className="sn">
        
        </div>

        </div>



        {/* //Entry Form 2 */}

        <div className="EntryForm2">
          <div className="frm">
            <label htmlFor="name">Joining Time </label>
            <input type="text" name="name"></input>
          </div>

          <div className="frm">
            <label htmlFor="pos">Priority </label>
            <select name="company" id="pos">
              <option value="Student">High Priority</option>
              <option value="Recuiter">Feedback Pending</option>
              <option value="Admin">Moderate</option>
              <option value="Admin">Hold</option>
            </select>
          </div>

          <div className="frm">
            <label htmlFor="name">No of Positions </label>
            <input type="text" name="name"></input>
          </div>

          <div className="frm">
            <label htmlFor="name">MS Requirements </label>
            <input type="text" name="name"></input>
          </div>

          <div className="frm">
            <label htmlFor="name">Link of JD </label>
            <input type="text" name="name"></input>
          </div>

          <div className="frm">
            <label htmlFor="name">Target Company </label>
            <input type="text" name="name"></input>
          </div>

          <div className="frm">
            <label htmlFor="pos">Educational Requirements </label>
            <select name="company" id="pos">
              <option value="Student">B-Tech</option>
              <option value="Recuiter">B.Sc</option>
              <option value="Admin">BBA</option>
              <option value="Admin">MBA</option>
            </select>
          </div>

          <div className="frm">
            <label htmlFor="name">Criterion Missing </label>
            <input type="text" name="name"></input>
          </div>

          <div className="frm">
            <label htmlFor="name">Criterion Met </label>
            <input type="text" name="name"></input>
          </div>

          <div className="frm">
            <label htmlFor="name">Extra Notes </label>
            <input type="text" name="name" className="exnotes"></input>
          </div>

         
        </div>
        </div>

        <div className="dp">
        <button className="bttn1" id="sv">Save</button>
        <button className="bttn1" id="nw">New</button>
          <button className="bttn" id="dl">Delete</button>

          <button className="bttn" id="pf">Position Completed</button>
          </div>

      
      </div>

      
    </>
  );
};

export default Client;
