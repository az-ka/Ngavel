import React from 'react';
import App from '@/Layouts/App';
import { Head, useForm } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import Button from '@/Components/Button';
import { Inertia } from '@inertiajs/inertia';
import ArticleForm from '@/Components/ArticleForm';

export default function Create({ statuses, tags }) {
    const { data, setData } = useForm({
        title: '',
        teaser: '',
        category_id: '',
        body: '',
        picture: '',
        tags: [tags[0], tags[1]],
        status: statuses[0]
    });

    const onSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('articles.store'), {
            ...data,
            category_id: data.category_id.id,
            status: data.status.id,
            tags: data.tags.map((t) => t.id),
        });
    };
    return (
        <div>
            <Head title={'Create new article'} />
            <Header>
                <Header.Title>{data.title || 'The title...'}</Header.Title>
                <Header.Subtitle>
                    {data.teaser || 'The teaser...'}
                </Header.Subtitle>
            </Header>
            <Container>
                <form onSubmit={onSubmit}>
                    <ArticleForm {...{ data, setData }} />
                    <Button>Create</Button>
                </form>
            </Container>
        </div>
    );
}

Create.layout = (page) => <App children={page} />;
