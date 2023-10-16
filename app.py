from flask import Flask, render_template

app = Flask(__name__)

@app.route("/fizzbuzz")
def fizzbuzz():
    return render_template('index.html')