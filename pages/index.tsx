import { RootLayout } from '../components/layout/layout'
import Main from '../components/main/main'
import MainHome from '../components/main/mainHome'
import Skill from '../components/skill/skill'
import Project from '../components/project/project'
import { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <>
        <MainHome/>
        <RootLayout>
            <Project/>
            <Skill/>
            <Main />
        </RootLayout>
        </>
    )
}

export default Home
