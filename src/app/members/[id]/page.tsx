// Dynamic Route for Member ID

export default async function MemberId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const memberId = (await params).id;
  return (
    <div className="text-center">
      <h1>Name: {memberId}</h1>
    </div>
  );
}
