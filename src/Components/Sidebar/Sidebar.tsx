import React from "react";


function Sidebar() {

    return (
        <aside className="flex flex-col bg-blue-dark rounded-md p-2">
            <h2 className="text-white">Menu</h2>
            <form>
                <div className="flex">
                    <label className="text-white">Place of Interest Type:
                        <select className="ml-2">
                            <option className='text-black' value="Food">Food</option>
                            <option className='text-black' value="shopping">Shopping</option>
                            <option className='text-black' value="tourist">Tourist</option>
                            <option className='text-black' value="entertainment">Entertainment</option>
                        </select>
                    </label>
                </div>
            </form>
            <form className="form_hidden">
                <div className="form_row">
                    <label className="text-white">Distance from Selected Charge Point:
                        <select className="ml-2" >
                            <option className='text-black'>1 mile</option>
                            <option className='text-black'>3 miles</option>
                            <option className='text-black'>5 miles</option>
                        </select>
                    </label>
                </div>
            </form>

        </aside>
    )
}

export default Sidebar;