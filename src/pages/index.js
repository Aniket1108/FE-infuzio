import { useEffect } from 'react'
import { useRouter } from 'next/router'

import BlankLayout from 'src/@core/layouts/BlankLayout'

const HomePage = () => {

    const router = useRouter()

    useEffect(() => {
        router.push('/auth/login')
    }, [])

    return (
        <></>
    )
}

HomePage.getLayout = page => <BlankLayout>{page}</BlankLayout>
export default HomePage