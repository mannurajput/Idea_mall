import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import './Cowriting.css'; // Import the CSS file

const CowrittingData = () => {
    const itemsPerPage = 10; // Number of items per page
    const [currentPage, setCurrentPage] = useState(0);
    const [value, setValue] = useState('');
    // Your data should go here. For this example, we'll create some sample data.
    const sampleData = [...Array(30).keys()].map((index) => ({
        id: index + 1,
        name: `Data ${index + 1}`,
    }));

    const offset = currentPage * itemsPerPage;
    const currentData = sampleData.slice(offset, offset + 10);

    const pageCount = Math.ceil(sampleData.length / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    // Internal CSS for the red theme
    const tableStyle = {
        backgroundColor: 'white', // Set the background color of the table data to a light color
        color: 'black', // Set the text color to black or another contrasting color
    };

    const thStyle = {
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: ' #ff0000', // Set the header background color to red
        color: 'white', // Set the header text color to white or another contrasting color
    };

    const tdStyle = {
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',// Set the background color of the table data to a light color
        color: 'black', // Set the text color to black or another contrasting color
    };

    const contactButtonStyle = {
        backgroundColor: 'red', // Set the button background color to red
        color: 'white', // Set the button text color to white or another contrasting color
        borderRadius: '20%', // Make the button oval-shaped
        padding: '5px 15px', // Add padding to the button for better appearance
    };
    return (
        <div>
            <div className="container mb-3" style={{ width: "200px", float: "left" }}>
                <div className="form-group">
                    <label htmlFor="entries12">Select entries:</label>
                    <select
                        className="form-control form-control-sm"
                        id="entries12"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    >
                        <option value="" disabled hidden>Select entries</option>
                        <option value="10">10 per page</option>
                        <option value="20">20 per page</option>
                        <option value="30">30 per page</option>
                        <option value="40">40 per page</option>
                        <option value="50">50 per page</option>
                    </select>
                </div>
            </div>

            {/* Pagination */}
            <div className="pagination-container mt-5 mx-4" style={{ float: "right" }}>
                <ReactPaginate
                    pageCount={pageCount}
                    pageRangeDisplayed={"..."} // Adjust this number as needed
                    marginPagesDisplayed={1} // Adjust this number as needed
                    onPageChange={handlePageChange}
                    previousLabel={<BiSkipPrevious />}
                    nextLabel={<BiSkipNext />}
                    breakLabel="..."
                    containerClassName="pagination"
                    activeClassName="active"
                />

               
            </div>



            {/* Table content */}
            <table className="table table-striped table-bordered" style={tableStyle}>
                {/* Table header */}
                <thead>
                    <tr>
                        <th scope="col" style={thStyle}>S.No</th>
                        <th scope="col" style={{ backgroundColor: "red", width: "300px", ...thStyle }}>Logline</th>
                        <th scope="col" style={thStyle}>Project Title</th>
                        <th scope="col" style={thStyle}>Project Type</th>
                        <th scope="col" style={thStyle}>Language (Actionlines)</th>
                        <th scope="col" style={thStyle}>Language (Dialogues)</th>
                        <th scope="col" style={thStyle}>Genre</th>
                        <th scope="col" style={thStyle}>Subgenre</th>
                        <th scope="col" style={thStyle}>Duration</th>
                        <th scope="col" style={thStyle}>Copyright</th>
                        <th scope="col" style={thStyle}>Co-author</th>
                        <th scope="col" style={thStyle}>Budget</th>
                        <th scope="col" style={thStyle}>Project Status</th>
                        <th scope="col" style={thStyle}>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((data) => (
                        <tr key={data.id}>
                            <td style={tdStyle}>1</td>
                            <td style={tdStyle}></td>
                            <td style={tdStyle}></td>
                            <td style={tdStyle}></td>
                            <td style={tdStyle}></td>
                            <td style={tdStyle}></td>
                            <td style={tdStyle}></td>
                            <td style={tdStyle}></td>
                            <td style={tdStyle}></td>
                            <td style={tdStyle}></td>
                            <td style={tdStyle}>Not registered</td>
                            <td style={tdStyle}></td>
                            <td style={tdStyle}>No</td>
                            <td>  <button
                                type="button"
                                className="btn btn-primary contact-btn rounded-pill"
                                style={{
                                    transition: 'box-shadow 0.3s, color 0.3s', // Add a smooth transition for shadow and color changes
                                    ...contactButtonStyle, // Apply other button styles
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'; // Add a black shadow on hover
                                    e.currentTarget.style.color = 'black'; // Change the text color to black on hover
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.boxShadow = 'none'; // Remove the shadow when not hovering
                                    e.currentTarget.style.color = 'white'; // Restore the text color when not hovering
                                }}
                            >
                                Contact
                            </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

           
        </div>
    );
};

export default CowrittingData;
