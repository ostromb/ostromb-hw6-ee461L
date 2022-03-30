

from flask import Flask, jsonify
from flask.helpers import send_from_directory


#from flask_cors import CORS


app = Flask(__name__, static_folder="my-app/build", static_url_path="")

#CORS(app)



@app.route("/name/<name_state>", methods=["GET"])
def name(name_state: str):
    print(name_state)
    if name_state.lower() == "oskar":
        output = "Stromberg"
    else:
        output = "User not found"
    return jsonify(name=output)

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")
    
if __name__ == "__main__":
    app.run(host="0.0.0.0")