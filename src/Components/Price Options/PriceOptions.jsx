import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {

  const Price = [
    {
      "id": 1,
      "name": "Basic Plan",
      "price": '19.99',
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Free parking",
        "Water station access",
        "One free fitness assessment"
      ]
    },
    {
      "id": 2,
      "name": "Standard Plan",
      "price": '39.99',
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Free parking",
        "Group fitness classes",
        "One guest pass per month",
        "Water station access",
        "One free personal training session per month",
        "Access to indoor cycling classes"
      ]
    },
    {
      "id": 3,
      "name": "Premium Plan",
      "price": '59.99',
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Free parking",
        "Unlimited group fitness classes",
        "Two guest passes per month",
        "Access to spa and sauna",
        "Personal trainer consultation (once per month)",
        "Nutrition tracking and advice",
        "Advanced body composition analysis",
        "Access to HIIT and yoga classes",
        "Discount on gym merchandise"
      ]
    },
    {
      "id": 4,
      "name": "VIP Plan",
      "price": '99.99',
      "features": [
        "24/7 gym access",
        "Locker room access with priority lockers",
        "Free parking",
        "Unlimited group fitness classes",
        "Unlimited guest passes",
        "Access to spa and sauna",
        "Dedicated personal trainer (weekly sessions)",
        "Nutritional consultation",
        "Access to exclusive VIP lounge",
        "Complimentary gym apparel (once per year)",
        "Exclusive workshops and seminars",
        "Monthly massage therapy session",
        "Access to VIP-only events",
        "Priority equipment reservations"
      ]
    }
  ]
  
  return (

    <div className="m-10 ">
       <h2 className="text-5xl p-5 font-bold">Best prices in town</h2>

       <div className="grid md:grid-cols-4 gap-5">
       {
          Price.map(option => <PriceOption key={option.id} option = {option} ></PriceOption>)
        }
       </div>
    </div>
);
  
};

export default PriceOptions;