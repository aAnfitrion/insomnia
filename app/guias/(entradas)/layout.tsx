import Relevant from "@/components/treecols/Relevant"

export default function Layout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-12 gap-2 px-4">
      <div className="lg:col-span-3 lg:block hidden gap-4">
        <Relevant />
      </div>
      {children}
    </div>
  )
}
