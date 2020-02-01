import React from 'react'
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
    center:[55.72284706901126,37.475871999999946],
    zoom: 14,
    
}
const sizes = {
    width:"100%",
    height:300
}
const coordinates = [
    [55.72284706901126,37.475871999999946],
  ];
const YandexMap = ()=>(
    <div className="mt-5 mb-5">
        <YMaps>
            <Map defaultState={mapData} height={sizes.height} width={sizes.width}>
                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
            </Map>
        </YMaps>
    </div>
    
)

export default YandexMap