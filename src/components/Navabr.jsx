

export default function Navabr({ onWeatherData, onLoading, onError }) {

    async function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        console.log(data);
        const apikey = "c11b2ffa7db8544e351279e588f023e9";

        try {
            onLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.query}&appid=${apikey}&units=metric&&dt=1586468027&date `)

            if (!response.ok) {
                throw new Error("Failed to fetch weather data.");
            }
            const resData = await response.json()
            onWeatherData(resData);
            onLoading(false);
            onError(undefined);
        } catch (error) {
            onError(error.message);
            onLoading(false);
        }
        event.target.reset();
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">weather</a>
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" name="query" placeholder="Search" aria-label="Search" required />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}
