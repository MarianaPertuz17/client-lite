import styles from './styles.module.css';

export function Login () {

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder ='E-mail'/>
        <input placeholder ='Password'/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}