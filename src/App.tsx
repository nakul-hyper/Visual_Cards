import { Card1, Card2, Card3, Card4 } from "./cards";

export default function App() {
  return (
    <div className="flex flex-col p-3 m-2 gap-4">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}
