from flask import Flask, render_template, send_from_directory


app = Flask(__name__)

@app.route("/")
def index():
    return send_from_directory("site", "templates/index.html")

@app.route("/<path:path>")
def other(path):
    return send_from_directory("site", path)


if __name__ == "__main__":
    app.run(debug=True)