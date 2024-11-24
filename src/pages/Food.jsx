import React from "react";
import Footer from "../components/Footer";

const Food = () => {
  const foods = [
    {
      id: 1,
      name: "Sushi",
      image: "https://images.unsplash.com/photo-1607247098731-5bf6416d2e8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHx8MHx8fDA%3D",
      description: "Sushi is   a traditional Japanese dish consisting of vinegared rice, often accompanied by raw seafood, vegetables, and sometimes tropical fruits.",
    },
    {
      id: 2,
      name: "Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Pizza is a beloved Italian dish featuring a round, flat base of dough topped with tomatoes, cheese, and a variety of other ingredients.",
    },
    {
      id: 3,
      name: "Tacos",
      image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Tacos are a Mexican staple consisting of small hand-sized corn or wheat tortillas topped with a variety of fillings such as beef, pork, chicken, vegetables, and cheese.",
    },
    {
      id: 4,
      name: "Croissant",
      image: "https://plus.unsplash.com/premium_photo-1661743823829-326b78143b30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3JvaXNzYW50fGVufDB8fDB8fHww",
      description: "Croissant is a buttery, flaky, and delicious pastry of Austrian origin that has become a quintessential part of French cuisine.",
    },
    {
      id: 5,
      name: "Paella",
      image: "https://plus.unsplash.com/premium_photo-1719522017304-e56503664ffd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFlbGxhfGVufDB8fDB8fHww",
      description: "Paella is a Spanish rice dish originally from Valencia, cooked with a variety of ingredients like seafood, chicken, and vegetables.",
    },
    {
      id: 6,
      name: "Gelato",
      image: "https://plus.unsplash.com/premium_photo-1671559020847-6793cbee18b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2VsYXRvfGVufDB8fDB8fHww",
      description: "Gelato is an Italian frozen dessert similar to ice cream, but with a lower fat content and a denser, creamier texture.",
    },
    {
      id: 7,
      name: "Pad Thai",
      image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhZCUyMHRoYWl8ZW58MHx8MHx8fDA%3D",
      description: "Pad Thai is a stir-fried rice noodle dish commonly served as street food and at casual local eateries in Thailand.",
    },
    {
      id: 8,
      name: "Peking Duck",
      image: "https://media.istockphoto.com/id/1040706374/photo/kaeng-pled-ped-yang.webp?a=1&b=1&s=612x612&w=0&k=20&c=9-AVk8dcW0fvfDgiigFT6Wg75q2uDAKaOHt8Sc_Xk0A=",
      description: "Peking Duck is a famous Chinese dish known for its crispy skin and tender meat, often served with pancakes, scallions, and hoisin sauce.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-red-600 py-6 shadow-md mb-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-white">World's Best Food</h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {foods.map((food, index) => (
          <section key={food.id} className={`mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}>
            <img
              src={food.image}
              alt={food.name}
              className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0"
            />
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-semibold mb-4">{food.name}</h2>
              <p className="text-lg leading-relaxed">{food.description}</p>
            </div>
          </section>
        ))}
      </main>
      <Footer/>
    </div>
  );
};

export default Food;
