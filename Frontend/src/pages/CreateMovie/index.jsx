import { Link } from "react-router-dom"

import {
  Container,
  MainContent,
  HeaderContent,
  FormContent,
  MarkerContent,
  ButtonContent,
} from "./styles"

import { Header } from "../../components/Header"
import { GoBack } from "../../components/GoBack"
import { Input } from "../../components/Input"
import { Markers } from "../../components/Markers"
import { Button } from "../../components/Button"

const MARKERS = [
  {
    id: 1,
    name: "Suspense",
  },
  {
    id: 2,
    name: "Ficção Científica",
  },
]

export const CreateMovie = () => {
  return (
    <Container>
      <Header />

      <MainContent>
        <HeaderContent>
          <Link to="/">
            <GoBack />
          </Link>

          <h1>Novo filme</h1>
        </HeaderContent>

        <FormContent>
          <div>
            <Input type="text" placeholder="Título" />
            <Input type="text" placeholder="Sua nota (de 0 a 5)" />
          </div>
          <textarea
            name="Observation"
            id="obs"
            cols="30"
            rows="10"
            placeholder="Observações"
          />
        </FormContent>

        <MarkerContent>
          <p>Marcadores</p>
          <Markers markers={MARKERS} />
        </MarkerContent>

        <ButtonContent>
          <Button text="Excluir filme" dark={"true"} />
          <Button text="Salvar alterações" />
        </ButtonContent>
      </MainContent>
    </Container>
  )
}
