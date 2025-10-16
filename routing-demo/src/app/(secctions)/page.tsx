import Link from "next/link"

export default function Home(){
    return (
        <>
         <h1>Aprendiendo Next</h1>
         <Link href="/blog">Blog</Link>
         <Link href="/products">Products</Link>
         {/* 
         Parámetro de ruta dinámico:breaking-news-123
         Parámetro de consulta: lang

         */}
         <Link href="/articles/breaking-news-123?lang=en">Read in english</Link>
         <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
        </>
   
    );
}