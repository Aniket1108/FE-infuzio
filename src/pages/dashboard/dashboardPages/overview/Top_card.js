import defaultProfileImage from 'assets/images/default_profile_image.jpg'
import { Link } from 'react-router-dom'

const Top_card = ({ totalBalance }) => {

    return (
        <div id='top__card'>
            <div className='user__details'>
                <img className='profile__image' src={defaultProfileImage} />

                <div className='user___name'>
                    <div>Aniket Gholap</div>
                    <p><Link className='custom__link withdraw' to='/dashboard/profile' >Edit profile</Link></p>
                </div>
            </div>

            <div className='portfolio__value'>
                <div>
                    <div>
                        Portfolio Value
                    </div>
                    <p>
                        {totalBalance} $
                    </p>
                </div>

                <div className='wallet__buttons'>
                    {/* <button>Deposit</button> */}
                    {/* <button className='withdraw'>Withdraw</button> */}
                    <button><Link className='custom__link withdraw' to='/dashboard/faucet/overview' >Withdraw</Link></button>
                </div>
            </div>

        </div>

    )
}

export default Top_card