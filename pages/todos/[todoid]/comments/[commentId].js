import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Comments() {
    const router = useRouter();
    const todoId = router.query.todoid;
    const commentId = router.query.commentId;

    return (
        <>
        <Link href={`/todos/${todoId}`}>Voltar</Link>
        <h1>Exibindo o commentário número: {commentId}</h1>
        </>
    );
}