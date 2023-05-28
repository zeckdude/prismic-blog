import Head from 'next/head';
import { Post } from '../components/Post';

const pageInfo = {
  title: 'About',
  content: `### Passion for Understanding the Natural World
  As an animal researcher with over 20 years of experience, I am driven by an unwavering passion for understanding the natural world and its magnificent inhabitants. From an early age, my curiosity and fascination with wildlife propelled me towards a career dedicated to unraveling the mysteries of the animal kingdom. With each passing year, my enthusiasm has only grown, fueled by the countless discoveries and insights gained through extensive fieldwork, meticulous observation, and scientific exploration.
### Commitment to Advancing Knowledge and Conservation
Throughout my career, I have been privileged to work with a diverse range of animal species, studying their behaviors, ecology, and the intricate web of interactions that shape their lives. From tracking elusive predators in remote wilderness areas to conducting population surveys in fragile ecosystems, my research has provided valuable contributions to the field of animal science. I firmly believe that the knowledge we acquire through rigorous research is not only essential for expanding our understanding of the natural world but also plays a vital role in conservation efforts. With every study conducted, I strive to uncover insights that will inform conservation strategies, protect vulnerable species, and preserve the delicate balance of our planet's biodiversity.`,
};

export default function About() {
  return (
    <>
      <Head>
        <title>Archives</title>
      </Head>
      <Post key={pageInfo.title} title={pageInfo.title}>
        {pageInfo.content}
      </Post>
    </>
  );
}
