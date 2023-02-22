
import React from "react";


function Sidebar() {
    return (
        <>
           <h2>sidebar</h2>
            <form className="form_hidden">
                <div className="form_row">
                    <label className="form_label">
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
                    <label className="form_label">
                        <select >
                            <option value="domestic">Domestic charge</option>
                            <option value="rapid">Rapid Charge</option>
                        </select>
                    </label>
                </div>
            </form>
            
        </>
    )
}

export default Sidebar;