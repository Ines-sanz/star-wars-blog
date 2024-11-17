import React from "react";

export const PeopleDetails = (props) => {
  return (
    <div className="col-12 col-lg-10 justify-content-center">
      <div className="p-3 glass">
        <div className="row g-0 justify-content-center">
          <figure className="col-10 col-lg-4">
            <img
              className="img-fluid detailImg"
              src={props.img}
              alt={props.name}
            />
          </figure>
          <div className="col-12 col-lg-8">
            <div className="detailTitle col-12 col-lg-11 d-flex justify-content-between px-4 mt-2">
              <h3>{props.name}</h3>
              <span className="fa-solid fa-star cardIcon"></span>
            </div>

            <div className="glassDetail col-12 col-lg-11 ps-4 p-3">
              <div className="d-flex align-items-center">
                <div className="  col-11 d-flex align-items-end">
                <p className="detailSubtitle ">Born in</p>
                <div className="divider  col-2 col-lg-6"></div>
                <p className="birthYear">{props.birth_year}</p>
                </div>
                <div className="gender col-1 ms-2">
                  {props.gender === "n/a" && <span className="fa-solid fa-genderless"></span>}
                  {props.gender === "male" && <span className="fa-solid fa-mars"></span>}
                  {props.gender === "female" && <span className="fa-solid fa-venus"></span>}
                </div>
              </div>
              <div className=" row detailsInfo">
                <div className="col-12 col-lg-5">
                  <p>
                    <span className="detailSubtitle"><span className="fa-solid fa-caret-right arrow"></span> Height: </span>
                    {props.height}
                  </p>
                  <p>
                    <span className="detailSubtitle"><span className="fa-solid fa-caret-right arrow"></span> Mass: </span> {props.mass}
                  </p>
                </div>
                <div className="col-12 col-lg-7">
                  <p>
                    <span className="detailSubtitle"><span className="fa-solid fa-caret-right arrow"></span> Skin color: </span>
                    {props.skin_color}
                  </p>
                  <p>
                    <span className="detailSubtitle"><span className="fa-solid fa-caret-right arrow"></span> Eye color: </span>
                    {props.eye_color}
                  </p>
                  <p>
                    <span className="detailSubtitle"><span className="fa-solid fa-caret-right arrow"></span> Hair color: </span>
                    {props.hair_color}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
