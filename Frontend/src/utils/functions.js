export const titleString = (text) => {
  const textArray = text.split(" ")

  const titledText = textArray.reduce((acum, current) => {
    let titledWord = current.toLowerCase()
    let wordArray = titledWord.split("")

    wordArray[0] = wordArray[0].toUpperCase()
    titledWord = wordArray.join("")

    acum += titledWord + " "
    return acum
  }, "")

  return titledText.slice(0, titledText.length - 1)
}

export const adjustTagsForMovieInfo = (movieNote) => {
  if (!movieNote.tags) {
    return movieNote
  }

  const tags = movieNote.tags.split(",")

  return { ...movieNote, ...{ tags } }
}
