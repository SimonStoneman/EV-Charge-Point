
function Sidebar() {
    return (
        <>
           
            <div class="row">
                <div id="sidebar">
                    <form class="form__hidden">
                        <div class="form__row">
                            <label class="form__label">Type</label>
                            <select >
                                <option value="food">Food</option>
                                <option value="shopping">Shopping</option>
                                <option value="tourist">Tourist Attractions</option>
                                <option value="entertainment">Entertainment</option>
                            </select>
                        </div>
                    </form>
                    <form class="form__hidden">
                        <div class="form-row">
                            <label class="form_label">Charge Point Cable Type</label>
                            <select>
                                <option class="domestic">Domestic Charge</option>
                                <option class="rapid">Rapid charge</option>
                            </select>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Sidebar;