interface MealPageProps {
  params: {
    slug: string;
  };
}
export default function MealPage({ params }: MealPageProps) {
  const { slug } = params;
  return (
    <div>
      <h1>Meal Page</h1>
      <p>{slug}</p>
    </div>
  );
}
