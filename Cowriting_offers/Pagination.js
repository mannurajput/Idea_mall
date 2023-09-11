import React from "react";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import "./Premise.css";

const SortPagination = ({
    data,
    setCurrentPage,
    setItemsToShow,
    setSortedData,
    setSortOrder,
    setRefetching,
}) => {
    const { totalPages, currentPage, next, pre } = data;
    // console.log(data);
    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1);
        setRefetching(true);
    };

    const handleOrder = (e) => {
        setSortOrder(e.target.value);
        setRefetching(true);
    };

    const handleShow = (e) => {
        setItemsToShow(parseInt(e.target.value));
        setCurrentPage(1);
        setRefetching(true);
    };

    return (
        <div className="md:flex justify-between items-center mt-10">
            <div className="mb-5">
                <p className="text-left mb-2 font-bold">Pages</p>
                <div className="flex items-center gap-5">
                    <div className="flex items-center">
                        <ReactPaginate
                            previousLabel={
                                <BiSkipPrevious
                                    className={
                                        pre === null && "cursor-disabled-PremisePool text-[#9a9797]"
                                    }
                                />
                            }
                            nextLabel={
                                <BiSkipNext
                                    className={
                                        next === null &&
                                        "cursor-disabled-PremisePool text-[#9a9797]"
                                    }
                                />
                            }
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={totalPages}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination-premise"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                            forcePage={currentPage - 1}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-5 mb-5">
                <div>
                    <p className="text-left mb-2 font-bold">Sort by</p>
                    <select
                        onChange={(e) => {
                            setSortedData(e.target.value);
                            setRefetching(true);
                        }}
                        className="bg-[#FFE2E5] px-1 py-1 rounded-sm border-none text-[#EE3C4D]"
                    >
                        <option className="bg-white" value="date">
                            Date published
                        </option>
                        <option className="bg-white" value="popularity">
                            Popularity
                        </option>
                    </select>
                </div>
                <div>
                    <p className="text-left mb-2 font-bold">Order</p>
                    <select
                        onChange={handleOrder}
                        className="bg-[#FFE2E5] px-1 py-1 rounded-sm border-none text-[#EE3C4D]"
                    >
                        <option className="bg-white" value="descending">
                            Descending
                        </option>
                        <option className="bg-white" value="ascending">
                            Ascending
                        </option>
                    </select>
                </div>
                <div>
                    <p className="text-left mb-2 font-bold">Show</p>
                    <select
                        onChange={handleShow}
                        className="bg-[#FFE2E5] px-1 py-1 rounded-sm border-none text-[#EE3C4D]"
                    >
                        <option className="bg-white" value="12">
                            12 items
                        </option>
                        <option className="bg-white" value="24">
                            24 items
                        </option>
                        <option className="bg-white" value="48">
                            48 items
                        </option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SortPagination;
