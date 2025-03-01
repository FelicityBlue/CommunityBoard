import React from "react";

const Series = (props) => {
    return (
        <div className="SeriesInfo">
            <div>
                <img className={"CoverArt" + " " + "center-item"} src={props.coverimg} alt="Cover Image not found." />
            </div>
            <div>
                <h3>{props.title}</h3>
                <p><b>Writers(s):</b> {props.writers}</p>
                <p><b>Artist(s):</b> {props.artists}</p>
            </div>
            <div className="infoButton">
                <a href={props.descriptionlink}>
                    <button className="center-item" >MORE INFO!</button>
                </a>
            </div>
        </div>
    )
}
export default Series;