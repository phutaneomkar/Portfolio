import React, { useState } from "react";
import "./Work.css";

export const Work = () => {
    // Sample data for different tabs
    const data = {
        Wordpress: [
            {
                Image: "../src/assets/grx10.png",
                title: "GRX10",
                link: "https://grx10.com/",
            },
            {
                Image: "../src/assets/iitb.png",
                title: "IITB Research Park",
                link: "https://iitbresearchpark.com/",
            },
            {
                Image: "../src/assets/helioushub.png",
                title: "Helious Hub",
                link: "https://helioshub.org/",
            },
        ],
        React: [
            {
                Image: "../src/assets/portfolio.png",
                title: "Portfolio",
                link: "#",
            },
          
        ],
    };

    // Generate the "All" category dynamically by merging all other categories
    const allData = [...data.Wordpress, ...data.React];

    const [selectedFilter, setSelectedFilter] = useState("All");

    const filters = ["All", "Wordpress", "React"];

    // Get the data based on the selected filter
    const filteredData =
        selectedFilter === "All" ? allData : data[selectedFilter] || [];

    return (
        <div className="container hero" id="mywork">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-12">
                    <div className="about align-items-center">
                        <div className="about-title text-center">
                            <h2>My Recent Works</h2>
                            <p className="aboutme">
                                Showcasing innovative web solutions with responsive design,
                                modern frameworks, and seamless user experiences across various
                                industries.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex items-center text-center justify-center p-4 bg-[#0F0D18]">
                    <div className="flex rounded-full bg-[#1B1824] p-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-4 py-2 m-1 text-sm font-medium rounded-full transition custom-bg ${selectedFilter === filter
                                        ? "active-filter"
                                        : "default-filter"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filtered Content */}
                <div className="work-list d-flex flex-wrap justify-content-center">
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <div
                                key={index}
                                className="col-12 col-md-6 d-flex justify-content-center mb-2"
                            >
                                <div className="work-item text-center m-3 p-3">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        
                                     <div className="imgbox">
                                     <img
                                            src={item.Image}
                                            alt={item.title}
                                            className="img-fluid "
                                        />
                                     </div>
                                       {/* <div className="titlebox">
                                       <p className="companyname">{item.title}</p>
                                       </div> */}
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 col-12">
                            No work available for this category.
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
};
