import React from 'react';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/inertia-react';
import Container from '@/Components/Container';
import Header from '@/Components/Header';
import Grid from '@/Components/Grid';
import ArticleBlock from '@/Components/ArticleBlock';

export default function Home({ articles }) {
    return (
        <div>
            <Head title="The Blog Ever" />
            <Header>
                <Header.Title>Consectetur</Header.Title>
                <Header.Subtitle>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </Header.Subtitle>
                <Header.Content>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque nisi eligendi accusantium debitis modi voluptatum
                    eveniet repudiandae, alias ab odit dolores cupiditate
                    aspernatur eius ipsam nemo, voluptate dolore voluptatem
                    excepturi.
                </Header.Content>
            </Header>
            <Container>
                {articles.length ? (
                    <>
                        <Grid className='items-start'>
                            {articles.map((article) => (
                                <ArticleBlock article={article} key={article.slug} />
                            ))}
                        </Grid>
                        <Link className='text-blue-600 block mt-10' href={route('articles.index')}>Show more articles.</Link>
                    </>
                ) : (
                    <p>No articles yet.</p>
                )}
            </Container>
        </div>
    );
}

Home.layout = (page) => <App children={page} />;
