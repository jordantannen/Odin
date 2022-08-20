import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <img src={props.imageUrl} />
            <div className="info">
                <div className="location">
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3>{props.title}</h3>
                <p className="dates">{props.startDate} - {props.endDate}</p>
                <p className="desc">{props.description}</p>
            </div>
        </div>
    )
}