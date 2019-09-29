import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from '@material-ui/core/Container';

const layout = (props) => (
    <React.Fragment>
        <Container maxWidth="xl">
            <Header sInput={props.sInput} />
                <main>
                    {props.children}
                </main>
            <Footer />
        </Container>
    </React.Fragment>
);

export default layout;