# React Workshop - Student Guide

## 📦 Project Setup

### Create a new React app with TypeScript:

```bash
npm create vite@latest react-app -- --template react-ts
cd react-app
npm install
```

### Install dependencies:

```bash
# React Router for navigation
npm install --save react-router-dom

# Font Awesome icons
npm install --save @fortawesome/react-fontawesome@latest
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
npm install --save @fortawesome/free-brands-svg-icons
```

### Run the development server:

```bash
npm run dev
```

---

## 🎯 Core React Concepts

### 1. **Components = Building Blocks**

Think of React like LEGO blocks. Each piece (component) does one job:

```tsx
// A component is just a function that returns JSX
export default function MyComponent() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a component!</p>
    </div>
  );
}
```

**Key principle:** Break your UI into smaller, reusable pieces.

---

### 2. **State = Component Memory**

React components need to "remember" data. We use `useState` for this:

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //     ↑         ↑              ↑
  //  current   function to   initial value
  //   value    change it

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Important principles:**

- State is like a variable that **triggers re-renders** when it changes
- **Never modify state directly** - always use the setter function
- When state changes, React automatically re-renders the component

```tsx
// ❌ WRONG - Direct mutation
count = count + 1;

// ✅ RIGHT - Use setter function
setCount(count + 1);

// ✅ EVEN BETTER - Use updater function for reliability
setCount((prevCount) => prevCount + 1);
```

---

### 3. **Props = Passing Data Down**

Data flows **down** from parent to child components:

```tsx
// Parent passes data via props
function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <ChildComponent count={count} onIncrement={() => setCount(count + 1)} />
  );
}

// Child receives data via props
interface ChildProps {
  count: number;
  onIncrement: () => void;
}

function ChildComponent(props: ChildProps) {
  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrement}>Increment</button>
    </div>
  );
}

// Alternative: Destructure props
function ChildComponent({ count, onIncrement }: ChildProps) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}
```

**Key principles:**

- **Props flow down** (parent → child)
- **Events flow up** (child calls parent's function)
- Props are **read-only** - never modify them

---

### 4. **Conditional Rendering**

Show different UI based on conditions:

```tsx
function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  // Using if/else
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}

// Using ternary operator
function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
}

// Using && for conditional display
function Notification({ hasNewMessages }: { hasNewMessages: boolean }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {hasNewMessages && <p>You have new messages!</p>}
    </div>
  );
}

// Conditional className
function Button({ isPrimary }: { isPrimary: boolean }) {
  return (
    <button className={`btn ${isPrimary ? "btn-primary" : "btn-secondary"}`}>
      Click me
    </button>
  );
}
```

---

### 5. **useEffect = Do Something After Render**

`useEffect` runs code after the component renders:

```tsx
import { useEffect, useState } from "react";

export default function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This runs AFTER the component first appears on screen
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // ← Empty array = run only once when component mounts

  return <div>{/* Use data here */}</div>;
}
```

**The dependency array is crucial:**

- `[]` = run **once** when component mounts
- `[cars]` = run **whenever `cars` changes**
- No array = run after **EVERY render** (usually a bug!)

**Common use cases:**

- Fetching data from APIs
- Setting up subscriptions
- Manually changing the DOM
- Setting up timers

---

### 6. **Immutability = Never Mutate, Always Copy**

This is the **most important React concept**!

```tsx
// ❌ BAD - Mutating the object
const car = cars[0];
car.price = 100000; // Changes the original!
setCars(cars); // React doesn't detect this change!

// ✅ GOOD - Creating new objects
setCars((prevCars) =>
  prevCars.map(
    (c) =>
      c.id === car.id
        ? { ...c, price: 100000 } // New object with spread operator
        : c // Keep original reference
  )
);
```

**Why?** React compares references to detect changes:

```tsx
// React's comparison (simplified)
if (oldState !== newState) {
  // Re-render! The reference changed
}
```

**The spread operator `...` creates copies:**

```tsx
// Objects
const original = { name: "Porsche", price: 89900 };
const copy = { ...original }; // Creates a new object
copy.price = 100000; // Only changes the copy

// Arrays
const originalArray = [1, 2, 3];
const copyArray = [...originalArray, 4]; // [1, 2, 3, 4]

// Nested objects
const car = {
  title: "Porsche",
  pricing: { basePrice: 89900 },
};

const updatedCar = {
  ...car,
  pricing: {
    ...car.pricing,
    basePrice: 95000,
  },
};
```

---

### 7. **Lists and Keys**

When rendering lists, always provide a unique `key`:

```tsx
function CarList({ cars }: { cars: CarDto[] }) {
  return (
    <div>
      {cars.map((car) => (
        <CarCard
          key={car.id} // ← Unique key is required!
          car={car}
        />
      ))}
    </div>
  );
}
```

**Why keys matter:**

- Help React identify which items changed
- Improve performance
- Prevent bugs with component state

```tsx
// ❌ BAD - Using index as key (problematic if list changes)
{
  cars.map((car, index) => <CarCard key={index} car={car} />);
}

// ✅ GOOD - Using unique identifier
{
  cars.map((car) => <CarCard key={car.id} car={car} />);
}
```

---

### 8. **Updating Nested State**

When updating nested objects/arrays, create new copies at every level:

```tsx
const [cars, setCars] = useState<CarDto[]>([]);

// Update a nested property
const handleOptionChange = (
  carId: string,
  optionId: string,
  isSelected: boolean
) => {
  setCars((prevCars) =>
    prevCars.map((car) => {
      if (car.id === carId) {
        return {
          ...car, // Copy car
          options: car.options.map((option) => {
            if (option.id === optionId) {
              return { ...option, selected: isSelected }; // Copy option
            }
            return option; // Keep other options unchanged
          }),
        };
      }
      return car; // Keep other cars unchanged
    })
  );
};
```

**The pattern:**

1. Use `map()` to transform arrays
2. Use spread operator `{...obj}` to copy objects
3. Return new objects/arrays at every level you change

---

### 9. **Event Handling**

Handle user interactions:

```tsx
function EventExamples() {
  const [text, setText] = useState("");

  // Click events
  const handleClick = () => {
    console.log("Button clicked!");
  };

  // Input events
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted with:", text);
  };

  // Checkbox events
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Checked:", e.target.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <input type="checkbox" onChange={handleCheckbox} />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}
```

---

## 🔄 Complete Data Flow Example

Let's trace what happens when you click a checkbox to select a car option:

```
1. User clicks checkbox in CarOptionItem component
   ↓
2. onChange event fires → handleChange function runs
   ↓
3. handleChange calls props.onOptionChange(option, e.target.checked)
   ↓
4. This calls handleOptionChange in parent (Cars.tsx)
   ↓
5. handleOptionChange calls setCars with NEW array
   ↓
6. React detects state change (new array reference)
   ↓
7. React re-renders Cars component
   ↓
8. Cars renders CarCard with updated car data
   ↓
9. CarCard shows new total price
   ↓
10. User sees updated UI
```

---

## ❌ Common Beginner Mistakes

### 1. Direct State Mutation

```tsx
// ❌ WRONG
const [items, setItems] = useState([1, 2, 3]);
items.push(4); // Mutates state directly!
setItems(items); // React won't detect change

// ✅ CORRECT
setItems([...items, 4]); // Creates new array
```

### 2. Missing Return in map()

```tsx
// ❌ WRONG
setCars(cars.map(c => {
  { ...c, price: 100 }  // Missing return!
}));

// ✅ CORRECT
setCars(cars.map(c => {
  return { ...c, price: 100 };
}));

// ✅ ALSO CORRECT (implicit return)
setCars(cars.map(c => ({ ...c, price: 100 })));
```

### 3. Using Stale State

```tsx
// ❌ WRONG - Can have stale values
const [count, setCount] = useState(0);
setCount(count + 1);
setCount(count + 1); // Both use same count value!

// ✅ CORRECT - Always uses latest value
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
```

### 4. Infinite useEffect Loop

```tsx
// ❌ WRONG - Infinite loop!
const [cars, setCars] = useState([]);
useEffect(() => {
  setCars([...cars, newCar]); // Changes cars
}, [cars]); // Depends on cars → triggers again → infinite loop

// ✅ CORRECT
useEffect(() => {
  fetch("/api/cars")
    .then((res) => res.json())
    .then((data) => setCars(data));
}, []); // Empty array = runs once
```

### 5. Forgetting Keys in Lists

```tsx
// ❌ WRONG - No keys
{
  cars.map((car) => <CarCard car={car} />);
}

// ⚠️ PROBLEMATIC - Index as key
{
  cars.map((car, index) => <CarCard key={index} car={car} />);
}

// ✅ CORRECT - Unique identifier as key
{
  cars.map((car) => <CarCard key={car.id} car={car} />);
}
```

### 6. Modifying Props

```tsx
// ❌ WRONG
function ChildComponent(props: { count: number }) {
  props.count = 5; // Never modify props!
  return <div>{props.count}</div>;
}

// ✅ CORRECT - Use local state if you need to change values
function ChildComponent({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);
  return <div>{count}</div>;
}
```

---

## 🎨 Working with Arrays (Common Patterns)

```tsx
const [items, setItems] = useState([1, 2, 3, 4, 5]);

// Add item to end
setItems([...items, 6]);

// Add item to beginning
setItems([0, ...items]);

// Remove item by index
setItems(items.filter((_, index) => index !== 2));

// Remove item by value
setItems(items.filter((item) => item !== 3));

// Update item by index
setItems(items.map((item, index) => (index === 2 ? 999 : item)));

// Update item by condition
setItems(items.map((item) => (item === 3 ? 999 : item)));

// Replace entire array
setItems([10, 20, 30]);
```

---

## 🎨 Working with Objects (Common Patterns)

```tsx
const [user, setUser] = useState({
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
});

// Update top-level property
setUser({ ...user, age: 31 });

// Update nested property
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Los Angeles",
  },
});

// Update multiple properties
setUser({
  ...user,
  age: 31,
  name: "Jane",
});

// Add new property
setUser({
  ...user,
  email: "john@example.com",
});
```

---

## 🧩 Project Structure Tips

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── NavBar.tsx
│   └── cars/           # Feature-specific components
│       ├── CarCard.tsx
│       └── CarOptionItem.tsx
├── pages/              # Page-level components
│   ├── Home.tsx
│   ├── Cars.tsx
│   └── News.tsx
├── dtos/               # TypeScript interfaces/types
│   ├── CarDto.ts
│   └── NewsDto.ts
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

---

## 📚 Useful Array Methods for React

```tsx
// map() - Transform array items
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2); // [2, 4, 6]

// filter() - Keep only items that match condition
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((n) => n % 2 === 0); // [2, 4]

// reduce() - Combine array items into single value
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, n) => total + n, 0); // 10

// find() - Get first item that matches
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
const user = users.find((u) => u.id === 2); // { id: 2, name: 'Jane' }

// some() - Check if any item matches
const numbers = [1, 2, 3, 4];
const hasEven = numbers.some((n) => n % 2 === 0); // true

// every() - Check if all items match
const numbers = [2, 4, 6];
const allEven = numbers.every((n) => n % 2 === 0); // true
```

---

## 🚀 Quick Reference

### Mental Model

```
Data changes → State updates → React re-renders → UI updates
```

### The Core Concepts

1. ✅ **State** = Component memory (use `useState`)
2. ✅ **Props** = Data flows down, events flow up
3. ✅ **Conditional Rendering** = Show different UI based on conditions
4. ✅ **useEffect** = Side effects after render
5. ✅ **Immutability** = Never mutate, always create new objects/arrays
6. ✅ **Lists & Keys** = Use unique keys when rendering arrays
7. ✅ **Event Handling** = Respond to user interactions

### Component Checklist

- [ ] Is my state in the right component?
- [ ] Am I mutating state directly? (Don't!)
- [ ] Do I need `useEffect` for this?
- [ ] Are my dependencies in `useEffect` correct?
- [ ] Did I add keys to my list items?
- [ ] Are my prop types defined with TypeScript?

---

## 📖 Additional Resources

- **React Docs:** https://react.dev
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **React TypeScript Cheatsheet:** https://react-typescript-cheatsheet.netlify.app/
- **Vite Docs:** https://vitejs.dev

---

## 💡 Remember

- **Start small** - Build one component at a time
- **Think in React** - Break UI into components, identify state, determine where state should live
- **Immutability is key** - Never mutate state directly
- **TypeScript helps** - It catches errors before you run your code
- **Practice makes perfect** - The patterns will become natural with time

Happy coding! 🎉
