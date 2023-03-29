import './DisplayWeather.css';
interface Props{
    city:string,
    state:string,
    country:string,
    feelsLike:string,
    humidity:string,
    temp:string,
    tempMin:string,
    tempMax:string,
    windSpeed:string

}
const DisplayWeather:React.FC<Props>=({ city,
    state,
    country,
    feelsLike,
    humidity,
    temp,
    tempMin,
    tempMax,
    windSpeed
 })=> {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>CITY</th>
                        <td>{city}</td>
                    </tr>
                    <tr>
                        <th>STATE</th>
                        <td>{state}</td>
                    </tr>
                    <tr>
                        <th>COUNTRY</th>
                        <td>{country}</td>
                    </tr>
                    <tr>
                        <th>FEELS LIKE</th>
                        <td>{feelsLike}°</td>
                    </tr>
                    <tr>
                        <th>HUMIDITY</th>
                        <td>{humidity}%</td>
                    </tr>
                    <tr>
                        <th>TEMPERATURE</th>
                        <td>{temp}°</td>
                    </tr>
                    <tr>
                        <th>MINIMUM TEMPERATURE</th>
                        <td>{tempMin}°</td>
                    </tr>
                    <tr>
                        <th>MAXIMUM TEMPERATURE</th>
                        <td>{tempMax}°</td>
                    </tr>
                    <tr>
                        <th>WIND SPEED</th>
                        <td>{windSpeed} km/hr</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}
export default DisplayWeather;