import Link from "next/link";

// Função que é executada durante a construção da página
// Ela é usada para obter os dados do todo com base no parâmetro "todoid"
export async function getStaticProps(context) {
    const { params } = context;
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoid}`);
    const todo = await data.json();

    // Retorna os dados do todo como props para a página
    return {
        props: { todo }
    }
}

// Função que é executada durante a construção da página
// Ela é usada para especificar quais caminhos devem ser pré-renderizados
// Aqui, usamos todos os IDs de todos disponíveis na API
export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();

    // Mapeamos cada todo para criar um objeto "params" com o ID
    // que será usado como parte do caminho
    const paths = data.map((todo) => {
        return {
            params: {
                todoid: `${todo.id}`
            }
        }
    });

    // Retorna os caminhos pré-renderizados e desativa o fallback
    return { paths, fallback: false };
}

// Componente da página Todo que recebe o todo como prop
export default function Todo({ todo }) {
    return (
        <>
            <Link href="/">Voltar</Link>
            <h1>Exibindo o Todo: {todo.id}</h1>
            <h1>{todo.title}</h1>
            <p>Comentário: la la la<Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link></p>
            <p>Comentário: la la la<Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link></p>
            <p>Comentário: la la la<Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link></p>
        </>
    )
}
