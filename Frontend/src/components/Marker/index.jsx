import { FiX, FiPlus } from "react-icons/fi"
import { Container, NewMarker, MarkerContainer } from "./styles"

export const Marker = ({ name, newMarker = false }) => {
  return (
    <Container>
      {newMarker ? (
        <NewMarker>
          <p>{name}</p>
          <FiPlus />
        </NewMarker>
      ) : (
        <MarkerContainer>
          <p>{name}</p>
          <FiX />
        </MarkerContainer>
      )}
    </Container>
  )
}
