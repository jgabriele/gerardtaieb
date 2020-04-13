import React from "react"
import BodyWrap from "./src/components/BodyWrap"

export const wrapRootElement = ({ element }) => {
  return <BodyWrap>{element}</BodyWrap>
}
