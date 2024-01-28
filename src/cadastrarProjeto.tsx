import { useForm } from "react-hook-form"
import { FormProject, schemaRegisterProject } from "./ZodSchemas/schema-register-project"
import gitHub from './assets/GithubLogo.svg'
import monitor from './assets/Monitor.svg'
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
        <h1>CADASTRE SEU PROJETO</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles['register_form']}>
          <div className={styles['title-container']}>
            <input type="text" id="title" placeholder="Titulo" {...register('title')}/>
            <div className={styles['icon-container']}>
              <img src={monitor} alt="" />
              <img src={gitHub} alt="" />
            </div>
          </div>
          <textarea  id="description" placeholder="Mensagem" {...register('description')}></textarea>

          <div className={styles['container_file']}>
            <button className={styles.archive}></button>
            <p>Adicione uma imagem</p>
          </div>
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </main>
  )
}