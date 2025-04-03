import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Josep Pou es un ingeniero backend especializado en desarrollar arquitecturas complejas y sistemas escalables"
      />
      <meta
        name="keywords"
        content="josep pou, josep, pou, ingeniero backend, backend developer, desarrollo backend, arquitectura de sistemas, portfolio, josep pou portfolio"
      />
      <meta property="og:title" content="Josep Pou | Portfolio" />
      <meta
        property="og:description"
        content="Ingeniero backend especializado en desarrollar sistemas que manejan grandes volúmenes de consultas y usuarios."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://portfolio-josep-pou.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Josep Pou',
};
