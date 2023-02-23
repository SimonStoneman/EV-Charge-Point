import './Sidebar.css';


import React from "react";


function Sidebar() {

    // const [POISelect, setPOISelect] = 



    return (
        <aside className="sidebar pt-5">
            <h2 className="mb-3">Menu</h2>
            <form className="form_hidden">
                <div className="form_row">
                    <label className="form_label">Place of Interest Type:
                        <select>
                            <option value="Food">Food</option>
                            <option value="shopping">Shopping</option>
                            <option value="tourist">Tourist</option>
                            <option value="entertainment">Entertainment</option>
                        </select>
                    </label>
                </div>
            </form>
            <form className="form_hidden">
                <div className="form_row">
                    <label className="form_label">Distance from Selected Charge Point:
                        <select >
                            <option>1 mile</option>
                            <option>3 miles</option>
                            <option>5 miles</option>
                        </select>
                    </label>
                </div>
            </form>

        </aside>
    )
}

export default Sidebar;