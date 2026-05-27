interface Props {
  params : Promise<{
    id : string
  }>
}

export default async function Home({params} : Props) {
  
  const {id} = await params
  
  return (
    <>
      <h1>업무 수정 페이지</h1>
      <p>수정 업무 ID : {id} </p>
    </>
  );
}
