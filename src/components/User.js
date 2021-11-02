import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useSelector } from 'react-redux'





const User = ({onUserClose}) => {
    const auth = useSelector(a => a.auth)

    return (
        <>
            <div className="user">
                <div className="user_top">
                    <div className="user_close" onClick={onUserClose}><h3><AiOutlineLeft /></h3> </div>
                    <div className="user_top_img">
                        <svg width="100" height="100" viewBox="0 0 81,81" className="" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.096 62.7221L16.1604 69.2326C15.46 69.6145 14.8306 70.0839 14.2449 70.5956C21.2037 76.463 30.1867 80.0028 40.0014 80.0028C49.7436 80.0028 58.6693 76.5159 65.6084 70.7285C64.9684 70.1881 64.274 69.702 63.5042 69.3186L50.7233 62.9289C49.0719 62.1032 48.0288 60.4156 48.0288 58.5695V53.555C48.3881 53.1459 48.7987 52.6206 49.2379 52.0002C50.9799 49.5397 52.2977 46.8332 53.2109 43.9939C54.8502 43.4882 56.0578 41.9741 56.0578 40.1748V34.8222C56.0578 33.6448 55.534 32.5927 54.7204 31.856V24.1184C54.7204 24.1184 56.3099 12.0771 40.0029 12.0771C23.6958 12.0771 25.2853 24.1184 25.2853 24.1184V31.856C24.4702 32.5927 23.9479 33.6448 23.9479 34.8222V40.1748C23.9479 41.5847 24.6891 42.8255 25.7986 43.5425C27.136 49.3646 30.638 53.555 30.638 53.555V58.4457C30.6365 60.2269 29.6613 61.8677 28.096 62.7221Z" fill="#E7ECED"></path><path d="M40.6853 0.0059567C18.5969 -0.371416 0.383379 17.2293 0.00600642 39.3177C-0.208341 51.8419 5.37376 63.0982 14.2616 70.5838C14.8428 70.0766 15.4662 69.6117 16.1591 69.2343L28.0946 62.7238C29.66 61.8695 30.6351 60.2286 30.6351 58.4444V53.5537C30.6351 53.5537 27.1316 49.3633 25.7957 43.5412C24.6877 42.8242 23.945 41.5849 23.945 40.1735V34.8209C23.945 33.6435 24.4688 32.5914 25.2825 31.8547V24.1171C25.2825 24.1171 23.693 12.0759 40 12.0759C56.307 12.0759 54.7175 24.1171 54.7175 24.1171V31.8547C55.5327 32.5914 56.055 33.6435 56.055 34.8209V40.1735C56.055 41.9729 54.8474 43.4869 53.2081 43.9926C52.2948 46.8319 50.977 49.5384 49.2351 51.9989C48.7958 52.6193 48.3852 53.1446 48.026 53.5537V58.5682C48.026 60.4143 49.069 62.1034 50.7204 62.9276L63.5013 69.3173C64.2681 69.7007 64.961 70.1853 65.5995 70.7242C74.2187 63.5359 79.7872 52.7884 79.994 40.6853C80.3744 18.5969 62.7752 0.38333 40.6853 0.0059567Z" fill="#C0C0C0"></path></svg>
                    </div>
                </div>
                <div className="user_info">
                    <div className="user_name"><p>{auth.currentUser}</p> </div>
                    <div className="user_number"><p>09877823647</p> </div>
                </div>
            </div>
        </>
    )
}

export default User
