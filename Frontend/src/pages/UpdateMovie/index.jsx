import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

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
import { adjustTagsForMovieInfo } from "../../utils/functions"

export const UpdateMovie = () => {
  const navigate = useNavigate()

  const [movie, setMovie] = useState(null)
  const { movie_note_id } = useParams()

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

  const handleUpdate = (e) => {
    e.preventDefault()

    api
      .put(`${ROUTES.MOVIE_NOTES}/${movie_note_id}`, {
        rating,
        description,
        tags: selectedTags,
      })
      .then(() => {
        alert(`${movie.movie_title} atualizado com sucesso!!`)
        navigate("/")
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert("Não foi possível atualizar o filme!!")
        }
      })
  }

  useEffect(() => {
    api.get(ROUTES.TAGS).then((res) => {
      const tags = res.data
      setTagList(tags.map((tag) => tag.tag))
    })
  }, [])

  useEffect(() => {
    api
      .get(`${ROUTES.MOVIE_NOTES_INFO}/${movie_note_id}`)
      .then((res) => {
        const movie = res.data

        const { tags } = adjustTagsForMovieInfo(movie)
        const pickedTags = tags ? tags : []

        setMovie(movie)
        setSelectedTags(pickedTags)
        setTitle(movie.movie_title)
        setRating(movie.rating)
        setDescription(movie.movie_description)
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert("Não foi possível carregar dados do filme!!")
        }
      })
  }, [movie_note_id])

  return (
    <Container>
      <Header searchMovie={false} />

      <MainContent>
        <HeaderContent>
          <GoBack />

          <h1>Atualizar filme</h1>
        </HeaderContent>

        <FormContent>
          <div>
            <Input
              type="text"
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              disabled
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
          <Button text="Atualizar Filme" onClick={handleUpdate} />
        </ButtonContent>
      </MainContent>
    </Container>
  )
}
