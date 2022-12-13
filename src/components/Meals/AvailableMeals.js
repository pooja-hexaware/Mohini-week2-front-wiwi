import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'menu1',
    name: 'Loaded veggies',
    description: 'sweet potatos,brown rice,pinato',
    price: 22.3,
    //imgSrc:'./images/mutton.png',
  },
  {
    id: 'menu2',
    name: 'Hummas Falafel',
    description: 'Falafel cucumber salsa spicy chimichurri roasted red pepper hummas,red onion ,feta',
    price: 16.5,
    
  },
  {
    id: 'menu3',
    name: 'Feta Falafel',
    description: 'Falafel,green goddess , lemon garlic vinagrrette ',
    price: 12.99,
   
  },
  
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
   //   imgSrc={meal.imgSrc}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes.mealCard}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
