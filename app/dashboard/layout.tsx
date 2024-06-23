export const metadata = {
  title: 'Dashboard',
  openGraph: { images: ['/og?title=Dashboard'] },
}

const DashboardLayout: React.FC<{ children: React.ReactNode; modal: React.ReactNode }> = ({
  children,
  modal,
}) => {
  return (
    <>
      {children}
      {modal}
    </>
  )
}

export default DashboardLayout
