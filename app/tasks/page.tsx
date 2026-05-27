import Link from "next/link";

interface Props {
  searchParams : Promise<{
    keyword ?: string
  }>
}

export default async function Home({searchParams} : Props) {

  const {keyword} = await searchParams;

  return (
    <>
      업무목록임
      <form action={'/tasks'}>
      <input
          type="text"
          name="keyword"
          placeholder="검색어"
          defaultValue={keyword}
          className="border px-2 py-1"
        />
        <button type="submit" className="border px-3 py-1">
          검색
        </button>
      </form>

      <p>현재 검색어 : {keyword || ''}</p>

      <div>
        <Link href={'/tasks/create'}>업무 등록</Link>
      </div>
    </>
  );
}
