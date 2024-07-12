// @flow
import * as React from 'react';
import {adidasArr, AdidasItem} from "./Adidas";
import {useParams} from "react-router-dom";
import adidasModel1 from "../../assets/adidas/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp";
import adidasModel2 from "../../assets/adidas/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp";
import adidasModel3
    from "../../assets/adidas/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp";
import pumaModel1 from "../../assets/puma/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg";
import pumaModel2 from "../../assets/puma/krossovki-puma-trinity-open-road-393361-02-3-1000x800.jpg";
import pumaModel3 from "../../assets/puma/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg";
import {pumaArr, PumaItem} from "./Puma";

type ModelItem = {
    id: number
    model: string;
    collection: string;
    price: string;
    picture: string;
}

type ModelType = {
    [key: string]: ModelItem[]
}

const modelData: ModelType = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    const {id, brand} = useParams()
    const currentModel = brand
        ? modelData[brand].find(el => el.id === Number(id))
        : null

    return (
        <div>
            {currentModel
                ? <>
                    <div>Model: {currentModel.model}</div>
                    <div>Collection: {currentModel.collection}</div>
                    <div>Price: {currentModel.price}</div>
                    <img src={currentModel.picture} alt={'picture'}/>
                </>
                : <div>Model not found</div>
            }
        </div>
    )
};