export default async function WorkId({
  params,
}: {
  params: Promise<{ id: string; workId: string }>;
}) {
  const { id, workId } = await params;
  return (
    <div className="text-center">
      <h1>Member: {id}</h1>
      <h2>{workId}</h2>
    </div>
  );
}
