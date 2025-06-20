# 🧠 React Query Project (TanStack Query)

This project is a complete implementation of **React Query (TanStack Query)** using Vite and React. It includes all major concepts from setup to advanced features like mutations, pagination, infinite scroll, and hosting.

---

## 🧪 Tech Stack

* ⚛️ React + Vite
* 🧵 TanStack React Query
* 📦 Axios / Fetch
* 🛠 React Query DevTools
* 🌐 Hosted on Hostinger

---

## 📚 Topics Covered with Detailed Explanations

* **What is TanStack Query and its advantages**
  TanStack Query (formerly React Query) is a powerful data-fetching library for React. It helps manage server state — data fetched from APIs — by providing caching, deduplication, automatic refetching, background updates, and more. This removes the need to manually manage `useState`/`useEffect` for API calls.

* **Installing TanStack Query**
  You can install it using:

  ```bash
  npm install @tanstack/react-query
  ```

  This will add the core React Query package to your project.

* **Adding `queryClient` and `QueryClientProvider`**
  Create a `queryClient` instance using `new QueryClient()` and wrap your app with `QueryClientProvider`. This enables React Query features across your app.

  ```tsx
  import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

  const queryClient = new QueryClient();

  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  ```

* **Fetching API data using `useQuery`**
  `useQuery` is used to fetch data from an API and automatically handles loading, success, and error states.

  ```tsx
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });
  ```

* **Managing loading and error states**
  React Query provides built-in states like `isLoading`, `isError`, and `isSuccess` that you can use directly to render UI conditionally while fetching data.

* **React Query DevTools**
  A visual debugging panel that lets you inspect query cache, status, keys, etc. Helpful during development to see how queries behave in real-time.

* **Garbage collection**
  React Query automatically removes unused or stale data from memory after a set time (default is 5 minutes) to prevent memory leaks.

* **Managing stale time**
  The `staleTime` option defines how long the fetched data is considered "fresh". If a query is fresh, it won’t refetch when re-mounted.

  ```tsx
  useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });
  ```

* **Polling for real-time behavior**
  Use the `refetchInterval` option to automatically re-fetch data at given intervals.

  ```tsx
  useQuery({
    queryKey: ['liveData'],
    queryFn: fetchLiveData,
    refetchInterval: 3000 // every 3 seconds
  });
  ```

* **Using `queryKeys` effectively**
  A `queryKey` is a unique identifier for each query. It helps React Query manage caching and deduplication. Use arrays with meaningful names and parameters.

* **Implementing pagination**
  Use `useQuery` or `useInfiniteQuery` with `pageParam` to implement pagination. Fetches a specific page of data and allows the user to load next/previous pages.

* **Deleting data with `useMutation`**
  Perform DELETE requests using `useMutation`. After a successful delete, you can invalidate or update the cache manually.

  ```tsx
  const mutation = useMutation(deletePost, {
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  });
  ```

* **Updating data with `useMutation`**
  Use `useMutation` for PUT/PATCH requests. You can also optimistically update the UI by modifying cached data using `queryClient.setQueryData`.

* **Infinite scrolling**
  Implement infinite scrolling using `useInfiniteQuery` and `fetchNextPage`. This keeps loading more data as user scrolls down.
  

* **Intersection Observer with infinite scroll**
  Detect when user reaches bottom of the list using `IntersectionObserver` API, and trigger `fetchNextPage` to load next set of data automatically.

* **Hosting on Hostinger**
  After building your React app using `npm run build`, upload the contents of the `dist/` folder to your Hostinger file manager or via FTP.

---

## 🖥️ Live Demo
🌐 [View Live Site](https://reactqueryproject.netlify.app/)

---

## 👨‍💻 Author

**Rahul Gole**
📧 [rahulgole1296@gmail.com](mailto:rahulgole1296@gmail.com)
🌐 [GitHub](https://github.com/RAHULGOLE123)

---

> 📝 Feel free to fork this project and explore or enhance it further. Contributions are welcome!
