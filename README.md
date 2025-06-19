# 🧠 React Query Project (TanStack Query)

This project is a complete implementation of **React Query (TanStack Query)** using Vite and React. It includes all major concepts from setup to advanced features like mutations, pagination, infinite scroll, and hosting.

---

## 🧪 Tech Stack
- ⚛️ React + Vite
- 🧵 TanStack React Query
- 📦 Axios / Fetch
- 🛠 React Query DevTools
- 🌐 Hosted on Hostinger

---

## 📚 Topics Covered with Short Explanations

- **What is TanStack Query and its advantages**  
  A data-fetching library for React that simplifies async state, caching, background sync, etc.

- **Installing TanStack Query**  
  Install via npm: `npm install @tanstack/react-query`.

- **Adding `queryClient` and `QueryClientProvider`**  
  Enables React Query in the app by wrapping it with a provider.

- **Fetching API data using `useQuery`**  
  Use `useQuery` to fetch, cache, and update server data easily.

- **Managing loading and error states**  
  Use `isLoading`, `error`, and `data` for simple state handling.

- **React Query DevTools**  
  Debug your queries visually like a Chrome devtool panel.

- **Garbage collection**  
  Automatically removes old cache data to free up memory.

- **Managing stale time**  
  Defines how long data stays fresh before it’s considered stale.

- **Polling for real-time behavior**  
  Auto-refetch data at intervals to mimic real-time updates.

- **Using `queryKeys` effectively**  
  Unique keys that identify and manage each query.

- **Implementing pagination**  
  Load data in pages using `pageParam` and `getNextPageParam`.

- **Deleting data with `useMutation`**  
  Perform delete requests and refetch queries on success.

- **Updating data with `useMutation`**  
  Update server data and sync cache automatically.

- **Infinite scrolling**  
  Load more items on scroll with `useInfiniteQuery`.

- **Intersection Observer with infinite scroll**  
  ```
  ┌────────────────────┐
  │ useInfiniteQuery() │
  └─────────┬──────────┘
            │
            ▼
 🔁 Calls queryFn({ pageParam })  
            │
            ▼
    Server se data fetch hota hai
            │
            ▼
 🔢 Response mein getNextPageParam milta hai
            │
            ▼
    Calculate the Page no
    
            │
            ▼
useInfiniteQuery store karta hai:
  ┌──────────────────────────────┐
  │ [page1Data, page2Data, ...]  │ ← allPages
  └──────────────────────────────┘
            │
            ▼
   UI renders all combined data
            │
(User scrolls or presses 'Load More')
            │
            ▼
 ⏩ fetchNextPage() trigger hota hai
            │
            ▼
 queryFn runs again with next pageParam
            │
            ▼
   Server se agla page aata hai
            │
            ▼
 Data is appended to previous pages
            │
            ▼
   UI updates with more items
```


- **Hosting on Hostinger**  
  Build (`npm run build`) and deploy the `dist/` folder to Hostinger.

---

<!-- ## 🖥️ Live Demo
🌐 [View Live Site](https://your-live-link.com) -->

---

## 👨‍💻 Author

**Rahul Gole**  
📧 rahulgole1296@gmail.com 
🌐 [GitHub](https://github.com/RAHULGOLE123)

---

> 📝 Feel free to fork this project and explore or enhance it further. Contributions are welcome!
