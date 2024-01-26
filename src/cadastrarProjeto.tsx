import { useForm } from "react-hook-form"
import { FormProject, schemaRegisterProject } from "./ZodSchemas/schema-register-project"
import styles from './cadastrarProjeto.module.css'

export function CadastrarProduto() {


  const { handleSubmit, register } = useForm<FormProject>()

  const handleFormSubmit = (data: FormProject) => {
    const parsedData = schemaRegisterProject.parse(data)
    console.log(parsedData);
  }

  return (
    <main>
      <div className={styles.container}>
        <h1>Cadastre seu projeto</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles['register_form']}>
          <input type="text" id="title" placeholder="Titulo" {...register('title')}/>
          <textarea  id="description" placeholder="Mensagem" {...register('description')}></textarea>

          <div className={styles['container_file']}>
            <button></button>
            <p>Adicione uma imagem</p>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  )
}