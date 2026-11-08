import styles from './Button.module.css'

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

export function Button ({ children, onClick, variant="primary" }: Props) {
    return (
        <>
            <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
                {children}
            </button>
        </>
    )
}
