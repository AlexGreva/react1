import React from "react"
export const ReviewItem =({data}) => {
    return (
       <div>{data.user}-{data.text}</div> 
    )
}