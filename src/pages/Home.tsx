
const photos = [
    "https://images.unsplash.com/photo-1696468330971-e6bf75eb96c3?q=80&w=3993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1691818407006-1f137e069e9c?q=80&w=3962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1691818425377-521f1e3bf174?q=80&w=3905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1666583151790-4688ea5ad92f?q=80&w=4118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1642976333768-50b8e8a879c2?q=80&w=4130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

export default function Home() {
    const photo = photos[Math.max(Math.floor(Math.random() * photos.length - 1), 0)]
    return (
        <img style={{width: "100vw",height: "100vh", objectFit: "cover"}} alt="Background" src={photo} />
    );
  }