import SearchBar from '@/components/search_bar'
import {
    HomeWrapper,
    DescriptionTitle,
    DescriptionWrapper,
    DescriptionText,
} from '@/styles/home.style'

const Home = () => {
    return (
        <HomeWrapper>
            <SearchBar />
            <DescriptionWrapper>
                <DescriptionTitle>Welcome to The Movie DB!</DescriptionTitle>
                <DescriptionText>
                    A collection of movies, where you can find out more about any movie you want.
                </DescriptionText>
            </DescriptionWrapper>
        </HomeWrapper>
    )
}

export default Home
