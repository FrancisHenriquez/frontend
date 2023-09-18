import { UsersList } from "@/components";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "FRAN",
      image: "https://i.ytimg.com/vi/avFkyPLBiZA/maxresdefault.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}
