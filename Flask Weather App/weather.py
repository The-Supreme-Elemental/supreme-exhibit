from flask import Flask, request, jsonify, json
from flask import render_template
import requests

app = Flask(__name__)

API_KEY = "4cbbff0a538e1d58b8874be5b876ae76"  
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

@app.route('/')
def home():
    return render_template('weather.html')

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if not city:
        return jsonify({"error": "Please provide a city name"}), 400

    params = {"q": city,
              "appid": API_KEY, 
              "units": "imperial"}
    response = requests.get(BASE_URL, params=params)

    print("API Response Code", response.status_code)  # Debugging line to check the response code
    print("API Response", response.text)  # Debugging line to check the response content

    if response.status_code == 200:
        try: 
            data = response.json()
            weather_info = {
                "city": data["name"],
                "temperature": data["main"]["temp"],
                "description": data["weather"][0]["description"]
        }
            print(json.dumps(data, indent=4))

            print("Weather Info", weather_info)
            print("Weather info passed to template:", weather_info)  #
            # Return JSON response (for API use case)
            # Instead of returning JSON, you can pass the data to the template
            return render_template('weather_result.html', weather_info=weather_info)  # Render the HTML template with weather data
        except KeyError as e:
            print(f"KeyError: Missing key {e}")
    else:
        return jsonify({"error": "City not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
