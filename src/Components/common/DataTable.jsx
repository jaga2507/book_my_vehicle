import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterVehicle } from "../../Redux/rentAction";

function Table({ data, totalData, changePage, changePageData, filter, num }) {
    let paginate = [];
    let j = 1;

    if (data.length > paginate.length) {
        for (let i = 0; i < totalData.length; i += Number(num)) {
            paginate.push(j);
            j++;
        }
    }

    const changeHandler = e => {
        filter(e.target.value);
    };
    return (
        <div>
            <div className=" row m-auto ">
                <div className="col-md-12">
                    <select className="form-control" onChange={changeHandler}>
                        <option disabled selected>
                            Filter Data
                        </option>
                        <option>Show All</option>
                        <option>Show Available</option>
                        <option>Show Only Bike</option>
                        <option>Show Only Car</option>
                        <option>Price Lower to Higher</option>
                        <option>Price Higher to Lower</option>
                    </select>
                </div>
            </div>
            <div className="row col-md-12 mt-4">
                {data.map(ele => {
                    return (
                        <div className="col-md-4 my-2 my_card" key={ele.id}>
                            <div className="card">
                                <img
                                    height="200px"
                                    src={ele.img_url}
                                    className="card-img"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p className="card-title text-center">Company : {ele.company}</p>
                                    <p className="card-text text-center">Modal : {ele.modal_name}</p>
                                    <p className="card-text text-center">Location : {ele.location}</p>
                                    <p className="card-text text-center">Rs : {ele.cost.per_day}</p>
                                    <hr />
                                    {ele.available ? (
                                        <Link to={`/booking/${ele.modal_name}`} style={{ textDecoration: "none" }}>
                                            <button className="text-success btn btn-outline-light mx-auto d-block">
                                                Book Now
                                            </button>
                                        </Link>
                                    ) : (
                                            <button
                                                className="text-muted btn btn-outline-dark mx-auto d-block"
                                                onClick={() =>
                                                    alert("Sorry Vehicle not available !")
                                                }
                                            >
                                                Not Available
                                            </button>
                                        )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <hr />
            <ul className="pagination pagination-lg justify-content-center">
                {paginate.map(ele => {
                    return (
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={() => {
                                    return changePage(ele);
                                }}
                                key={ele}
                            >
                                {ele}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="col-md-3 offset-1 mx-auto d-block">
                <select
                    className="form-control"
                    onChange={e => {
                        changePageData(e.target.value);
                    }}
                >
                    <option disabled selected>
                        select per page
                    </option>
                    <option>6</option>
                    <option>30</option>
                    <option>45</option>
                    <option>60</option>
                    <option>100</option>
                </select>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    filter: item => dispatch(filterVehicle(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
