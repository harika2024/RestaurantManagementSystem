import React, { useState } from 'react'
import axios from 'axios'

export default function AddFoodItem(props) {

    const [foodName, getFoodName] = useState("")
    const [foodDes, getFoodDes] = useState("")
    const [foodCal, getFoodCal] = useState("")

    const [foodPrice, getFoodPrice] = useState("")
    const [urlParamName, getUrlParamName] = useState("");
    const [foodImgSrc, getFoodImgSrc] = useState([])


    const onSubmit = async (e) => {
        e.preventDefault()
        const post = { foodName, foodDes, foodPrice, foodCal, urlParamName, foodImgSrc }
        try {
            await axios.post('http://localhost:5001/addFoodItem', post)
            alert("added")

        }
        catch (e) {
            alert("Check details! \n May be Food Item already exists")
        }
    }
    return (
        <div className=" mt-2">
            <div className=' font-semibold text-2xl text-center my-10'>
                NEW FOOD ITEM
            </div>
            <div
                className="mx-10  mt-0 "
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <div className='section justify-center items-center text-center'>
                    <form onSubmit={onSubmit}>
                        <div className="mb-2 mt-3">

                            <input
                                type="text"
                                placeholder="FoodName"
                                className="form-control rounded bg-gray-200 border-gray-400"
                                onChange={(event) => {
                                    getFoodName(event.target.value)
                                }}
                                required
                                style={{ padding: "5px", width: "300px", textTransform: "capitalize" }}
                                value={foodName}
                            />
                        </div>

                        <div className="mb-2 mt-3">
                            <input
                                type="text"
                                placeholder="Desc"
                                className="form-control rounded bg-gray-200 border-gray-400"
                                onChange={(event) => {
                                    getFoodDes(event.target.value)
                                }}
                                required
                                style={{ padding: "5px", width: "300px" }}
                                value={foodDes}
                            />
                        </div>

                        <div className="mb-2 mt-3">
                            <input
                                type='text'
                                placeholder='Price'
                                className='form-control rounded bg-gray-200 border-gray-400'
                                onChange={(event) => {
                                    getFoodPrice(event.target.value)
                                }}
                                required
                                style={{ padding: "5px", width: "300px" }}
                                value={foodPrice}
                            />
                        </div>

                        <div className="mb-2 mt-3">
                            <input
                                type='text'
                                placeholder='FoodCalorires'
                                className='form-control rounded bg-gray-200 border-gray-400'
                                onChange={(event) => {
                                    getFoodCal(event.target.value)
                                }}
                                required
                                style={{ padding: "5px", width: "300px" }}
                                value={foodCal}
                            />
                        </div>

                        <div className="mb-2 mt-3">
                            <select onChange={(event) => {
                                getUrlParamName(event.target.value)
                            }} id="TypeOfFood"
                                required
                                className=' rounded bg-gray-200 border-gray-400'
                                style={{ padding: "5px", width: "300px" }}
                            >
                                <option selected="true" disabled="disabled">Select an Option..</option>
                                <option value="starter">Starter</option>
                                <option value="veg">Veg-Item</option>
                                <option value="nonveg">Non-Veg</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                                <option value="wine">Wine</option>
                            </select>
                        </div>

                        <div className="mb-2 mt-3">
                            <input
                                type='text'
                                placeholder='ImgURL'
                                className='form-control rounded bg-gray-200 border-gray-400'
                                onChange={(event) => {
                                    getFoodImgSrc(event.target.value)
                                }}
                                required
                                style={{ padding: "5px", width: "300px" }}
                                value={foodImgSrc}
                            />
                        </div>
                        <button type="submit" className="my-5 bg-gray-400 w-20 h-10 text-lg font-semibold rounded hover:bg-gray-500">
                            Submit
                        </button>
                    </form>
                </div >
            </div >

        </div >
    )
}