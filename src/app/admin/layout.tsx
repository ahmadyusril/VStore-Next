import AdminNav from "@/components/Admin/adminNav";

export const metadata = {
  title: "VStore Admin",
  description: "VStore Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
