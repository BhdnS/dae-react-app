import { useState } from 'react'
import styles from './HeaderInfo.module.scss'

const HeaderInfo = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.info}>
      <h3 className={styles.infoText}>Account</h3>
      <div className={styles.infoBoxIcon}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='22'
          viewBox='0 0 20 22'
          fill='none'
        >
          <g>
            <path
              d='M19.7297 19.14L18 4.4H14.8108C14.4324 2.145 12.4324 0.440002 9.99997 0.440002C7.56754 0.440002 5.56754 2.145 5.18916 4.4H1.99997L0.270239 19.14C0.162131 19.965 0.486455 20.46 0.756725 20.79C1.027 21.065 1.51348 21.45 2.4324 21.45H17.5675C18.2702 21.45 18.8648 21.23 19.2432 20.735C19.6216 20.35 19.7838 19.745 19.7297 19.14ZM9.99997 2.64C11.1892 2.64 12.2162 3.41 12.5405 4.4H7.40537C7.78375 3.355 8.81078 2.64 9.99997 2.64ZM2.4324 19.25L3.94591 6.6H5.1351V8.25C5.1351 8.855 5.62159 9.35 6.21619 9.35C6.81078 9.35 7.29727 8.855 7.29727 8.25V6.6H12.7027V8.25C12.7027 8.855 13.1892 9.35 13.7838 9.35C14.3783 9.35 14.8648 8.855 14.8648 8.25V6.6H16.054L17.5675 19.25H2.4324Z'
              fill='black'
            />
          </g>
          <defs>
            <clipPath id='clip0_2_17'>
              <rect width='20' height='22' fill='white' />
            </clipPath>
          </defs>
        </svg>
        <p className={styles.infoText}>{count}</p>
      </div>
    </div>
  )
}

export default HeaderInfo
