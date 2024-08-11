import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import Counter from "./counter"
import Iounter from "./shoppinglist"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
    <Counter/>
    <Iounter/>
    </>
)