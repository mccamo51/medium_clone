// import type { NextPage } from 'next'
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import { imgUrl, sanityClient } from "../sanity";
import { Post } from "../typings";
import Img from "next/image";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log("post", posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium</title>
        <meta name="description" content="Medium" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <TopHeader />

      <div className="flex">
        {posts.map((value) => {
          return (
            <div>
              <div>
                <Img {...imgUrl(value.mainImage)} width={200} height={260} />
              </div>
              {value.title + ' by ' + value.author}
              <p>{
                value.body[0].constructor.length}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  // console.log()
  const query = `*[_type == 'post']`;
  const posts = await sanityClient.fetch(query);
  // debugger;
  return {
    props: { posts },
  };
};
