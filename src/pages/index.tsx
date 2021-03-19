// import { Hero } from '@/components/organisms/hero'

interface Props {
  time: number;
}
const Index: React.FC<Props> = (props) => {
  return (
    <>
      {props.time}
      {/* <Hero /> */}
    </>
  )
}

export default Index

export async function getStaticProps() {
  return {
    props: {
      time: Date.now()
    },
    revalidate: 5
  };
}
