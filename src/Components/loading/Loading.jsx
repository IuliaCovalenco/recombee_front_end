    import { useLoading, Rings } from '@agney/react-loading';
    import styled from 'styled-components';



    const Container = styled.section`
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(20px + 2vmin);
            min-height: 100vh;
            background-color: #6872E2;
            color: white;
    `


    function Loading() {
        const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Rings width="100" />,
        });
    
        return (
            <>
            <Container>
        <section {...containerProps}>
            {indicatorEl} {/* renders only while loading */}
        </section>
        </Container>
        </>
        );
    }


    export default Loading;