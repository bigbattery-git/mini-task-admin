export default function Home() {
  return (
    <> 
      <h1>업무 등록 페이지</h1>

      <form>
        <div>
          <label id="title" className="block">제목</label>
          <input name="title" className="border px-2 py-1" /> 
        </div>

        <div>
          <label id="content" className="block">내용</label>
          <input name="content" className="border px-2 py-1" /> 
        </div>
      </form>
    </>
  );
}
