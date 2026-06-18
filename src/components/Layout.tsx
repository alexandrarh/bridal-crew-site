import Nav from './Nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-14">
        {children}
      </main>
    </div>
  )
}