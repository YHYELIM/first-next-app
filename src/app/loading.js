export default function Loading() {
    console.log("Loading component triggered");
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Loading...</h1>
        </div>
    );
}