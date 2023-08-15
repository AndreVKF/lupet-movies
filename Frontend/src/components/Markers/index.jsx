import { Container, MarkersContainer } from "./styles"

import { Marker } from "../../components/Marker"

export const Markers = ({ markers }) => {
  return (
    <Container>
      {markers &&
        markers.map((marker) => {
          return <Marker key={marker.id} name={marker.name} newMarker={false} />
        })}

      <Marker name="Novo marcador" newMarker={true} />
    </Container>
  )
}
