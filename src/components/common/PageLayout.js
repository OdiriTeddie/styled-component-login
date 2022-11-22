import styled from 'styled-components'
import Header from './Header'


const Content = styled.main`
    max-width: 50rem;
    margin: 5rem auto 0  auto;
    padding: 0 1rem;
    font-family: 'Open Sans', sans-serif;

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Kaushan Script', cursive;
    }
`


const PageLayout = (props) => {
    return(
        <>
            <Header />
            <Content>
                {props.children}
            </Content>
        </>
    )
}

export default PageLayout