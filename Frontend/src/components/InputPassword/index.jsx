import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"

import { Container } from "./styles"

// eslint-disable-next-line react/prop-types
export const InputPassword = ({ ...rest }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Container>
      {showPassword ? (
        <FiEye size={22} onClick={handleShowPassword} />
      ) : (
        <FiEyeOff size={22} onClick={handleShowPassword} />
      )}

      <input type={showPassword ? "text" : "password"} {...rest} />
    </Container>
  )
}
