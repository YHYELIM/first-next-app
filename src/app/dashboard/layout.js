export default function DashboardLayout({children}){
    return (
        <section>
            <nav>📊 Dashboard Menu</nav>
            <div>{children}</div>
        </section>
    );
}