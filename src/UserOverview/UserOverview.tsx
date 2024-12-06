import { useLocation } from "react-router-dom";

function UserOverview() {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return <div>Loading...</div>; // Or redirect to login page if user data is missing
  }

  const targetCalories = user.data.attributes.target_calories;

  return (
    <main>
      <h1> Welcome {user.data.attributes.first_name}!</h1>
      {targetCalories === null ? (
        <p>Enter metrics to get diet plan</p>
      ) : (
        <section>
          <div>
            <h2>Target Calories</h2>
            <p>{targetCalories}</p>
          </div>
          <div>
            <h2>Target Carbs</h2>
            <p>{user.data.attributes.target_carbs}</p>
          </div>
          <div>
            <h2>Target Fats</h2>
            <p>{user.data.attributes.target_fats}</p>
          </div>
          <div>
            <h2>Target Protein</h2>
            <p>{user.data.attributes.target_protein}</p>
          </div>
        </section>
      )}
    </main>
  );
}

export default UserOverview;