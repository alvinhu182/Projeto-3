import { useSelector } from "react-redux"
import styled from "styled-components"
import { EstimateFinish } from "./EstimateFinish"
import { EstimateMap } from "./EstimateMap"
import { EstimateNumbers } from "./EstimateNumbers"
import { selectHasCurrentEstimate } from "../../store/slice/estimateSlice"

export function EstimateDetails () {
  const hasCurrentEstimate = useSelector(selectHasCurrentEstimate)
  if (!hasCurrentEstimate) {
    return (
      <WithoutEstimateStyled className="d-none d-md-flex">
        <p className="m-0">Preencha os dados ao lado para ver o preço</p>
      </WithoutEstimateStyled>
    )
  }
  return (
    <WithEstimateStyled>
      <EstimateMap />
      <EstimateNumbers />
      <EstimateFinish />
    </WithEstimateStyled>
  )
}

const WithoutEstimateStyled = styled.div`
  background-color: #efefef;
  border: 1px dashed #000;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 130px;
  text-align: center;
`

const WithEstimateStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`