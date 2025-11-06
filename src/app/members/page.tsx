import prisma from "../../../lib/prisma";

export default async function Members() {
  const users = await prisma.user.findMany();

  return (
    <div className="text-center">
      <h1>The CLUB</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
