import styles from '../styles/Footer.module.css'
const Footer = ({text}) => {
	return <footer className={styles.footer}>&copy; {`${new Date().getFullYear()} ${text}`}</footer>
}

export default Footer
