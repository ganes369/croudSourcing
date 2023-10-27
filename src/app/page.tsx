import ActionCard from "./components/ActionCard";

export default function Home() {
  const actions: IAction[] = [
    {
      img: "https://jpeg.org/images/jpegtrust-home.jpg",
      title: "Action",
      description: "Solution for a problem",
      author: "Sara A. Sousa",
      address: {
        uf: "CE",
        city: "Barro",
        neighborhood: "Trajano Nogueira",
      },
      amountCollected: 150,
      totalGoal: 1000,
      finalDate: new Date().toLocaleDateString(),
    },
    {
      img: "https://jpeg.org/images/jpegtrust-home.jpg",
      title: "Action 2",
      description: "Solution for a problem 2",
      author: "Sara A. Sousa",
      address: {
        uf: "CE",
        city: "Barro",
        neighborhood: "Trajano Nogueira",
      },
      amountCollected: 150,
      totalGoal: 1000,
      finalDate: new Date().toLocaleDateString(),
    },
    {
      img: "https://jpeg.org/images/jpegtrust-home.jpg",
      title: "Action 2",
      description: "Solution for a problem 2",
      author: "Sara A. Sousa",
      address: {
        uf: "CE",
        city: "Barro",
        neighborhood: "Trajano Nogueira",
      },
      amountCollected: 150,
      totalGoal: 1000,
      finalDate: new Date().toLocaleDateString(),
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <div className="mt-[56px]">
        <h1 className="text-[56px] text-black font-extrabold text-center">
          Escolha uma ação para apoiar
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 w-full max-w-[1360] justify-center py-4">
        {actions.map((action, index) => (
          <ActionCard key={index} action={action} />
        ))}
      </div>
    </main>
  );
}
