import React, { useState } from "react";
import { connect } from "react-redux";
import DataTable from "./DataTable";
import { searchVehicle } from '../../Redux/rentAction'

function Home({ auth, data, searchVehicle, user_data, user_datas }) {

    const [pageNo, setPageNo] = useState(1);
    const [noOfData, setNoOfData] = useState(6);
    const [search, setSearch] = useState("");
    const indexPrevData = Math.floor((pageNo - 1) * noOfData);
    const indexCurrData = pageNo * noOfData;
    const dataToShow = data.slice(indexPrevData, indexCurrData);

    const changePageData = num => {
        setNoOfData(num);
        return setPageNo(1);
    };

    const changeHandler = e => {
        setSearch(e.target.value);
        searchVehicle(e.target.value);
    };

    const changePage = num => {
        return setPageNo(num);
    };
    return (
        <div>
            <div>
                <div className="col-md-5 m-auto p-4">
                    <input
                        className="form-control text-center"
                        placeholder="search Vehicles "
                        value={search}
                        onChange={changeHandler}
                    />
                </div>
                <div className="col-md-10 m-auto p-4">
                    <h2 className="text-center pb-3">All Vehicles</h2>
                    <DataTable
                        data={dataToShow}
                        totalData={data}
                        changePage={changePage}
                        num={noOfData}
                        changePageData={changePageData}
                    />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.user.isauth,
    data: state.rent.data,
    user_data: state.user.user_data,
    user_datas: state.user.user_datas
});
const mapDispatchToProps = dispatch => ({
    searchVehicle: item => dispatch(searchVehicle(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
