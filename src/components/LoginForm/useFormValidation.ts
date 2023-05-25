import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function useFormValidation() {
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (user === 'admin'
      && password === 'admin') {
      alert('Login successful!')
      navigate('/products')
    } else {
      alert('Invalid credentials!')
    }
  }

  const handleUserChange = (event: any) => {
    setUser(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  return {
    user,
    password,
    handleUserChange,
    handlePasswordChange,
    handleSubmit,
  }
}

export default useFormValidation
