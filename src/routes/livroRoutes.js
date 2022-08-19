import express from 'express'
import livrosController from '../controllers/livrosController.js'

const router = express.Router()

router
  .get('/livros', livrosController.listarLivros)
  .get('/livros/busca', livrosController.listarLivroPorEditora)
  .get('/livros/:id', livrosController.listarLivroPorID)
  .post('/livros', livrosController.cadastrarLivro)
  .put('/livros/:id', livrosController.atualizarLivro)
  .delete('/livros/:id', livrosController.excluirLivro)

export default router
