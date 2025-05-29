import { useState } from 'react'
import { Button, Container, Typography } from '@mui/material'
import { NoticePopup } from './components/NoticePopup'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = (notice: { title: string; content: string }) => {
    console.log('Submitted notice:', notice)
    // 여기에 실제 API 호출이나 데이터 처리 로직을 추가할 수 있습니다.
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        공지사항 관리
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        공지사항 작성
      </Button>
      <NoticePopup
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </Container>
  )
}

export default App
