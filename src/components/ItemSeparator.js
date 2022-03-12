/*
  Created by Haim Aharon Zilberman
  12/03/2022
  Simple item separator to distinguish between users
*/


import React from "react";
import { View } from "react-native";

const ItemSeparator = () => {
    return <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginLeft: 10,
        marginRight: 10,
    }}
    />
}

export default ItemSeparator