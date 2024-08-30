from flask import Flask, render_template, jsonify
from elements import elements  # Import the elements dictionary from elements.py

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/elements')
def get_elements():
    return jsonify(elements)

if __name__ == '__main__':
    app.run(debug=True)
