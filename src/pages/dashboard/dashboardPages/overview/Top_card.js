import React from 'react'

import defaultProfileImage from 'assets/images/default_profile_image.jpg'

const Top_card = () => {
    return (
        <div id='top__card'>
            <div className='user__details'>
                <img className='profile__image' src={defaultProfileImage} />

                <div className='user___name'>
                    <div>Aniket Gholap</div>
                    <p>Edit profile</p>
                </div>
            </div>

            <div className='portfolio__value'>
                <div>
                    <div>
                        Portfolio Value
                    </div>
                    <p>
                        1006.56 $
                    </p>
                </div>

                <div className='wallet__buttons'>
                    <button>Deposit</button>
                    <button>Withdraw</button>
                </div>
            </div>

        </div>

    )
}

export default Top_card