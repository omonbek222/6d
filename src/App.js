import React from 'react'

function App() {
  return (
    <div>
      {/* /*
const isLoggedIn = true;

function Greeting() {
  return (
    <div>
      {isLoggedIn ? "Xush kelibsiz!" : "Iltimos, tizimga kiring!"}
    </div>
  );
}
2. Mahsulot Narxini Ko‘rsatish
jsx
Копировать
const product = { name: "Telefon", price: 500 };

function ProductDetails() {
  return (
    <div>
      <p>Mahsulot: {product.name}</p>
      <p>Narx: ${product.price}</p>
    </div>
  );
}
3. Ro‘yxatni Map Orqali Chizish
jsx
Копировать
const cities = ["Tashkent", "Samarkand", "Bukhara"];

function CityList() {
  return (
    <ul>
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
}
4. Matematika Amallari
jsx
Копировать
const a = 5;
const b = 3;

function MathOperations() {
  return (
    <div>
      <p>Yig‘indi: {a + b}</p>
      <p>Ayirma: {a - b}</p>
      <p>Ko‘paytma: {a * b}</p>
      <p>Bo‘linma: {a / b}</p>
    </div>
  );
}
5. Inline Style Bilan Rang O‘zgartirish
jsx
Копировать
function StyledText() {
  const style = {
    color: "blue",
    fontSize: "20px"
  };

  return <p style={style}>Bu matn rangli va kattaroq.</p>;
}
6. Boolean Qiymat Bilan Shartli Rendering
jsx
Копировать
const isAvailable = true;

function ProductAvailability() {
  return <div>{isAvailable ? "Sotuvda mavjud" : null}</div>;
}
7. Dinamik Tugma Matnini Ko‘rsatish
jsx
Копировать
const isSubscribed = true;

function SubscriptionButton() {
  return (
    <button>
      {isSubscribed ? "Obunani bekor qilish" : "Obuna bo‘lish"}
    </button>
  );
}
8. Foydalanuvchi Tili Bo‘yicha Salomlashish
jsx
Копировать
const lang = "en";

function GreetingByLanguage() {
  const greeting = {
    uz: "Salom!",
    en: "Hello!",
    ru: "Привет!"
  };

  return <div>{greeting[lang]}</div>;
}
9. Ro‘yxatni Filtrlash va Chizish
jsx
Копировать
const names = ["Ali", "Otabek", "Javohir", "Bobur", "Salim"];

function FilteredNames() {
  const filteredNames = names.filter(name => name.length > 5);

  return (
    <ul>
      {filteredNames.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
10. Rasm Ko‘rsatish yoki Xabar Chiqish
jsx
Копировать
const imgUrl = "";

function ImageDisplay() {
  return (
    <div>
      {imgUrl ? <img src={imgUrl} alt="Product" /> : "Rasm topilmadi"}
    </div>
  );
}
11. Boolean Qiymatga Asosan Tugma Rangini O‘zgartirish
jsx
Копировать
const isActive = true;

function ActiveButton() {
  const buttonStyle = {
    backgroundColor: isActive ? "green" : "red",
    color: "white"
  };

  return <button style={buttonStyle}>Tugma</button>;
}
12. Obyekt Ma‘lumotlarini Interpolation Orqali Ko‘rsatish
jsx
Копировать
const user = { firstName: "John", lastName: "Doe", age: 30 };

function UserProfile() {
  return (
    <div>
      <p>Ism: {user.firstName}</p>
      <p>Familiya: {user.lastName}</p>
      <p>Yosh: {user.age}</p>
    </div>
  );
}
13. Shartli Raqam Ko‘rsatish
jsx
Копировать
const number = -5;

function NumberStatus() {
  return (
    <div>
      {number > 0
        ? "Musbat raqam"
        : number < 0
        ? "Manfiy raqam"
        : "Bu nol"}
    </div>
  );
}
*/ */}

    </div>
  )
}

export default App
