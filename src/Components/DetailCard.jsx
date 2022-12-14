import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import  styles from "./Components/DetailCard.module.css"


const DetailCard = () => {
    const {id} = useParams();
    const [dentist, setDentist] = useState(undefined);


    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data)=>{
            setDentist((data))
        })
    },[id])

    return(
            <>
            <h1>Detail about Dentis {dentist?.name}</h1>
            {
                dentist ?
                <section className="card col-sm-12 col-lg-6 container">
                  <div >
                    <div className="col-sm-12 col-lg-6">
                      <img className="card-img-top" src="/images/doctor.jpg" alt="doctor placeholder" />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                      <ul className="list-group">
                        <li className="list-group-item">Name: {dentist.name}</li>
                        <li className="list-group-item">Email: {dentist.email}</li>
                        <li className="list-group-item">Phone: {dentist.phone}</li>
                        <li className="list-group-item">Website: {dentist.website}</li>
                      </ul>
                      <div className="text-center">
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className={`btn btn-${isDarkMode ? 'dark' : 'light'} ${styles.button}`}>Schedule a Consult</button>
                      </div>
                    </div>
                  </div>
                </section>
                : null
            }
            </>
    )
}


export default DetailCard