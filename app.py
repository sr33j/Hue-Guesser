from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

def generate_random_color():
    return {'r': random.randint(0, 255), 'g': random.randint(0, 255), 'b': random.randint(0, 255)}

@app.route('/')
def index():
    try:
        return render_template('index.html')
    except Exception as e:
        return str(e), 500

@app.route('/random-color')
def random_color():
    try:
        color = generate_random_color()
        return jsonify(color)
    except Exception as e:
        return jsonify(error=str(e)), 500

@app.errorhandler(404)
def page_not_found(e):
    return "Page not found", 404

@app.errorhandler(500)
def internal_server_error(e):
    return "Internal server error", 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)