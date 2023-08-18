import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { Multiselect } from "../../components/Multiselect"

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
import { Button } from "../../components/Button"
import { api } from "../../services/api"

import { ROUTES } from "../../utils/constants"

export const CreateMovie = () => {
  const navigate = useNavigate()

  const [tagList, setTagList] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")

  const handleRating = (e) => {
    e.preventDefault()

    const regex = /^[0-5]$/
    if (e.target.value === "" || regex.test(e.target.value)) {
      setRating(e.target.value)
    }
  }

  const handleAddMovie = (e) => {
    e.preventDefault()

    if (title === "" || rating === "") {
      alert("Título e rating são campos obrigatórios!!")
      return
    }

    api
      .post(ROUTES.MOVIE_NOTES, {
        title,
        rating,
        description,
        tags: selectedTags,
      })
      .then(() => {
        setSelectedTags([])
        setTitle("")
        setRating("")
        setDescription("")
        alert("Filme adicionado com sucesso!!")
        navigate("/")
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert("Não foi possível adicionar o filme!!")
        }
      })
  }

  useEffect(() => {
    api.get(ROUTES.TAGS).then((res) => {
      const tags = res.data
      setTagList(tags.map((tag) => tag.tag))
    })
  }, [])

  return (
    <Container>
      <Header searchMovie={false} />

      <MainContent>
        <HeaderContent>
          <GoBack />

          <h1>Novo filme</h1>
        </HeaderContent>

        <FormContent>
          <div>
            <Input
              type="text"
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <Input
              type="number"
              placeholder="Sua nota (de 0 a 5)"
              onChange={handleRating}
              value={rating}
            />
          </div>
          <textarea
            name="Description"
            id="obs"
            cols="30"
            rows="10"
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </FormContent>

        <MarkerContent>
          <p>Marcadores</p>
          <Multiselect
            options={tagList}
            selectedOptions={selectedTags}
            setOptions={setSelectedTags}
          />
        </MarkerContent>

        <ButtonContent>
          <Button text="Adicionar Filme" onClick={handleAddMovie} />
        </ButtonContent>
      </MainContent>
    </Container>
  )
}
