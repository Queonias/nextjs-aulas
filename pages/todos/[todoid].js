import Link from "next/link";
import { useRouter } from 'next/router';

export default function Todo() {
    const router = useRouter();


    const todoId = router.query.todoid;
    console.log(todoId,"app");

    return (
        <>
            <Link href="/">Voltar</Link>
            <h1>Exibindo o Todo: {todoId} </h1>
            <p>Comentário: la la la<Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link></p>
            <p>Comentário: la la la<Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link></p>
            <p>Comentário: la la la<Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link></p>
        </>
    )
}