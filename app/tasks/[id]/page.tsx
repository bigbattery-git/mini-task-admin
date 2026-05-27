interface Props {
  params : Promise<{
    id : string
  }>
}

export default async function Home({params} : Props) {

  const {id} = await params;

  return (
    <>
      <h1>업무 상세 페이지</h1>
      <p>업무 번호 : {id}</p>
    </>
  );
}
