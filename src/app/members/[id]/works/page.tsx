export default async function WorksPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="text-center">
      <h1>Member {id} Works Page</h1>
      <h2>All Works</h2>
    </div>
  );
}
